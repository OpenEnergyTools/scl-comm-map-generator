/* eslint-disable import/no-extraneous-dependencies */
import { css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

import { getReference, identity, Insert } from '@openenergytools/scl-lib';
import {
  createElement,
  Edit,
  Update,
} from '@openenergytools/scl-lib/dist/foundation/utils';
import { newEditEvent } from '@openscd/open-scd-core';

const existingControlBlocks: {
  parent: Element;
  ctrlBlock: Element;
  dataSet: Element;
}[] = [];

const inputs: Record<string, Element> = {};

type Mapping = {
  srcRef: Element;
  srcLNode: Element;
};

type CommMapData = {
  sourceName: string;
  // The `ProcessResource` element
  source: Element;
  sourceIED: string;
  // All linked `SourceRef` elements
  mappings: Mapping[];
};

type UpdateExtRefOptions = {
  fcda: Element;
  ctrlParent: Element;
  ctrlBlock: Element;
};

type CreateExtRefOptions = {
  dataSet: Element;
  parent: Element;
  ctrlBlock: Element;
};

function nextChild(
  name: string,
  parent?: Element | XMLDocument
): Element | null {
  if (!parent) return null;

  // eslint-disable-next-line consistent-return
  for (const child of Array.from(parent.children)) {
    if (child.tagName === 'LNode') {
      const lNodeSpec = child.querySelector(':scope LNodeSpecNaming');
      const prefix = lNodeSpec?.getAttribute('sPrefix') ?? '';
      const lnClass = lNodeSpec?.getAttribute('sLnClass');
      const lnInst = lNodeSpec?.getAttribute('sLnInst') ?? '';
      if (name === `${prefix}${lnClass}${lnInst}`) return child;
    }
    if (name === child.getAttribute('name')) return child;
  }

  return null;
}

function getSourceLNode(srcRef: Element): Element | null {
  let child: Element | null = srcRef.ownerDocument.documentElement;
  for (const name of srcRef.getAttribute('source')?.split('/') ?? []) {
    child = nextChild(name, child);
    if (!child) return null;
    if (child.tagName === 'LNode') return child;
  }

  return null;
}

function sourceRefs(procRes: Element): Element[] {
  return Array.from(
    procRes.ownerDocument.querySelectorAll(
      `SourceRef[resourceName="${procRes.getAttribute('name')}"]`
    )
  );
}

function transform(doc: XMLDocument): CommMapData[] {
  const data: CommMapData[] = [];

  Array.from(doc.querySelectorAll(':root Private ProcessResource')).forEach(
    procRes => {
      const srcRefs = sourceRefs(procRes);

      const sourceIEDs: Record<string, Mapping[]> = {};
      srcRefs.forEach(srcRef => {
        const srcLNode = getSourceLNode(srcRef);
        const iedName = srcLNode?.getAttribute('iedName');
        if (!srcLNode || !iedName || iedName === 'None') return;

        if (!sourceIEDs[iedName]) sourceIEDs[iedName] = [{ srcRef, srcLNode }];
        else sourceIEDs[iedName].push({ srcRef, srcLNode });
      });

      Object.entries(sourceIEDs).forEach(([sourceIED, mappings]) => {
        if (
          data.some(
            d =>
              d.sourceIED === sourceIED &&
              d.sourceName === procRes.getAttribute('name')
          )
        )
          return;

        const cleanMappings = mappings.filter(
          map =>
            map.srcRef.closest('LNode')?.getAttribute('iedName') !== sourceIED
        );

        if (cleanMappings.length !== 0)
          data.push({
            sourceName: procRes.getAttribute('name')!,
            source: procRes,
            sourceIED,
            mappings: cleanMappings,
          });
      });
    }
  );

  return data;
}

const controls: Record<string, string> = {
  Report: 'ReportControl',
  GOOSE: 'GSEControl',
  SMV: 'SampledValueControl',
};

function getChild(name: string, parent?: Element): Element | null {
  if (!parent) return null;

  if (parent.tagName === 'LNode') {
    const lNodeType = parent.ownerDocument.querySelector(
      `:root > DataTypeTemplates > LNodeType[id="${parent.getAttribute(
        'lnType'
      )}"]`
    );
    return lNodeType?.querySelector(`:scope > DO[name="${name}"]`) ?? null;
  }

  if (parent.tagName === 'DO' || parent.tagName === 'SDO') {
    const lNodeType = parent.ownerDocument.querySelector(
      `:root > DataTypeTemplates > DOType[id="${parent.getAttribute('type')}"]`
    );
    return (
      lNodeType?.querySelector(
        `:scope > SDO[name="${name}"],:scope > DA[name="${name}"]`
      ) ?? null
    );
  }

  if (parent.tagName === 'DA' || parent.tagName === 'BDA') {
    const lNodeType = parent.ownerDocument.querySelector(
      `:root > DataTypeTemplates > DAType[id="${parent.getAttribute('type')}"]`
    );
    return lNodeType?.querySelector(`:scope > BDA[name="${name}"]`) ?? null;
  }

  return null;
}

function getDataDetail(
  lNode: Element,
  dataPath: string
): { doName?: string; daName?: string; fc?: string } {
  const datas = dataPath.split('.');
  let parent = lNode;
  let fc = '';
  let doName = '';
  let daName = '';
  for (const data of datas) {
    const child = getChild(data, parent);
    if (!child) return {};

    if (child.tagName === 'DO')
      doName = doName.concat(`${child.getAttribute('name')}`);
    else if (child.tagName === 'SDO')
      doName = doName.concat(`.${child.getAttribute('name')}`);
    else if (child.tagName === 'DA') {
      daName = daName.concat(`${child.getAttribute('name')}`);
      fc = child.getAttribute('fc')!;
    } else if (child.tagName === 'BDA')
      daName = daName.concat(`.${child.getAttribute('name')}`);

    parent = child;
  }

  return { doName, daName, fc };
}

function createFCDA(mapping: Mapping): Element | null {
  const dataPath = mapping.srcRef.getAttribute('source')?.split('/').pop();

  if (!dataPath) return null;

  const ldInst = mapping.srcLNode.getAttribute('ldInst');
  const prefix = mapping.srcLNode.getAttribute('prefix');
  const lnClass = mapping.srcLNode.getAttribute('lnClass');
  const lnInst = mapping.srcLNode.getAttribute('lnInst');

  const { doName, daName, fc } = getDataDetail(mapping.srcLNode, dataPath);
  if (!doName || !daName || !fc) return null;

  const fcda = createElement(mapping.srcRef.ownerDocument, 'FCDA', {
    ldInst,
    prefix,
    lnClass,
    lnInst,
    doName,
    daName,
    fc,
  });

  return fcda;
}

function createDataSet(commMapData: CommMapData): Element {
  const dataSet = createElement(commMapData.source.ownerDocument, 'DataSet', {
    name: `${commMapData.source.getAttribute('name')}_DS`,
  });

  commMapData.mappings.forEach(mapping => {
    const fcda = createFCDA(mapping);
    if (fcda) dataSet.appendChild(fcda);
  });

  return dataSet;
}

function createControlBlock(commMapData: CommMapData): Insert[] {
  const service = commMapData.mappings[0].srcRef.getAttribute('service')!;

  const dataSet = createDataSet(commMapData);

  const controlBlock = createElement(
    commMapData.source.ownerDocument,
    controls[service],
    { datSet: dataSet.getAttribute('name'), name: commMapData.sourceName }
  );

  const ln0 = commMapData.source.ownerDocument.querySelector(
    `IED[name="${commMapData.sourceIED}"] LN0`
  );

  if (!ln0) return [];

  return [
    {
      parent: ln0,
      node: controlBlock,
      reference: getReference(ln0, controlBlock.tagName),
    },
    {
      parent: ln0,
      node: dataSet,
      reference: getReference(ln0, 'DataSet'),
    },
  ];
}

function updatedExtRef(extRef: Element, options: UpdateExtRefOptions): Update {
  const [ldInst, prefix, lnClass, lnInst, doName, daName] = [
    'ldInst',
    'prefix',
    'lnClass',
    'lnInst',
    'doName',
    'daName',
  ].map(attr => options.fcda?.getAttribute(attr) ?? '');

  const iedName = options.ctrlParent.closest('IED')!.getAttribute('name');

  const srcLDInst = options.ctrlParent.closest('LDevice')!.getAttribute('inst');

  const srcPrefix = null;
  const srcLNClass = 'LLN0';
  const srcLNInst = null;
  const srcCBName = options.ctrlBlock.getAttribute('name');

  return {
    element: extRef,
    attributes: {
      iedName,
      ldInst,
      prefix,
      lnClass,
      lnInst,
      doName,
      daName,
      srcLDInst,
      srcPrefix,
      srcLNClass,
      srcLNInst,
      srcCBName,
    },
  };
}

function getSinkAnyLn(srcRef: Element): Element | null {
  const [iedName, ldInst, prefix, lnClass, lnInst] = [
    'iedName',
    'ldInst',
    'prefix',
    'lnClass',
    'lnInst',
  ].map(attr => srcRef.closest('LNode')!.getAttribute(attr));

  const lDevice = srcRef.ownerDocument.querySelector(
    `IED[name="${iedName}"] LDevice[inst="${ldInst}"]`
  );

  return (
    Array.from(
      lDevice?.querySelectorAll(':scope > LN0,:scope > LN') ?? []
    ).find(
      anyLn =>
        (anyLn.getAttribute('prefix') ?? '') === prefix &&
        anyLn.getAttribute('lnClass') === lnClass &&
        (anyLn.getAttribute('inst') ?? '') === lnInst
    ) ?? null
  );
}

function createExtRef(srcRef: Element, options: CreateExtRefOptions): Insert[] {
  const parent = getSinkAnyLn(srcRef);
  if (!parent) return [];

  const [iedName, ldInst, prefix, lnClass, lnInst, doName, daName] = [
    'iedName',
    'ldInst',
    'prefix',
    'lnClass',
    'lnInst',
    'doName',
    'daName',
    'fc',
  ].map(attr => options.dataSet.getAttribute(attr));

  const srcLDInst = options.parent.closest('LDevice')!.getAttribute('ldInst');

  const srcPrefix = null;
  const srcLNClass = 'LLN0';
  const srcLNInst = null;
  const srcCBName = options.ctrlBlock.getAttribute('name');

  const extRef = createElement(parent.ownerDocument, 'ExtRef', {
    iedName,
    ldInst,
    prefix,
    lnClass,
    lnInst,
    doName,
    daName,
    srcLDInst,
    srcPrefix,
    srcLNClass,
    srcLNInst,
    srcCBName,
  });
  const inputsElement = parent.querySelector(':scope > Inputs');

  if (inputsElement)
    return [
      {
        parent: inputsElement,
        node: extRef,
        reference: getReference(parent, 'ExtRef'),
      },
    ];

  const existInputs = inputs[identity(parent)];
  if (!existInputs)
    return [
      {
        parent: existInputs,
        node: extRef,
        reference: getReference(parent, 'ExtRef'),
      },
    ];

  const newInputs = createElement(parent.ownerDocument, 'Inputs', {});

  return [
    {
      parent,
      node: newInputs,
      reference: getReference(parent, 'Inputs'),
    },
    {
      parent: existInputs,
      node: extRef,
      reference: getReference(existInputs, 'ExtRef'),
    },
  ];
}

function getExtRef(srcRef: Element): Element {
  const extRefAddr = srcRef.getAttribute('extRefAddr')!;

  if (extRefAddr.startsWith('@')) {
    const intAddr = extRefAddr.slice(1);
    const anyLn = getSinkAnyLn(srcRef)!;

    return anyLn.querySelector(
      `:scope > Inputs > ExtRef[intAddr="${intAddr}"]`
    )!;
  }

  const [iedName, ldInst, anyLnId] = extRefAddr.split('/', 3);
  const intAddr = extRefAddr
    .split(`${[iedName, ldInst, anyLnId].join('/')}/`)
    .pop();

  const lDevice = srcRef.ownerDocument.querySelector(
    `:root > IED[name="${iedName}"] LDevice[inst="${ldInst}"]`
  );

  const anyLn = Array.from(lDevice?.children ?? []).find(ln => {
    const lnId = `${ln.getAttribute('prefix') ?? ''}${ln.getAttribute(
      'lnClass'
    )}${ln.getAttribute('inst') ?? ''}`;
    return lnId === anyLnId;
  })!;
  return anyLn.querySelector(`:scope > Inputs > ExtRef[intAddr="${intAddr}"]`)!;
}

function findFCDA(dataSet: Element, mapping: Mapping): Element | null {
  const dataPath = mapping.srcRef.getAttribute('source')?.split('/').pop();

  if (!dataPath) return null;

  const prefix = mapping.srcLNode.getAttribute('prefix');
  const lnClass = mapping.srcLNode.getAttribute('lnClass');
  const lnInst = mapping.srcLNode.getAttribute('lnInst');

  const { doName, daName, fc } = getDataDetail(mapping.srcLNode, dataPath);
  if (!doName || !daName || !fc) return null;

  const fcda = dataSet.querySelector(
    `:scope > FCDA[prefix="${prefix}"][lnClass="${lnClass}"][lnInst="${lnInst}"][doName="${doName}"][daName="${daName}"][fc="${fc}"]`
  );

  return fcda;
}

function createExtRefs(
  commMapData: CommMapData,
  options: CreateExtRefOptions
): Edit[] {
  const edits: Edit[] = [];

  commMapData.mappings.forEach(mapping => {
    const { srcRef } = mapping;
    const extRefAddr = srcRef.getAttribute('extRefAddr');
    const fcda = findFCDA(options.dataSet, mapping);
    if (!fcda) return;

    if (extRefAddr) {
      edits.push(
        updatedExtRef(getExtRef(srcRef), {
          fcda,
          ctrlParent: options.parent,
          ctrlBlock: options.ctrlBlock,
        })
      );
      return;
    }

    edits.push(
      ...createExtRef(srcRef, {
        dataSet: options.dataSet,
        parent: options.parent,
        ctrlBlock: options.ctrlBlock,
      })
    );
  });

  return edits;
}

function existCtrlBlock(ctrlParent: Element, ctrlBlock: Element): boolean {
  return existingControlBlocks.some(
    source =>
      source.parent === ctrlParent &&
      source.ctrlBlock.getAttribute('name') === ctrlBlock.getAttribute('name')
  );
}

function existDataSet(dataSet: Element): boolean {
  return existingControlBlocks.some(
    source =>
      source.dataSet.getAttribute('name') === dataSet.getAttribute('name')
  );
}

function getSourceElement(
  edits: Insert[],
  commMap: CommMapData
): {
  parent: Element;
  ctrlBlock: Element;
  dataSet: Element;
} {
  const newDataSet = edits[1].node as Element;
  const newParent = edits[0].parent as Element;
  const newCtrlBlock = edits[0].node as Element;

  const dataSet = Array.from(
    newDataSet.ownerDocument.querySelectorAll(
      `IED[name="${commMap.sourceIED}"] LN0 > DataSet`
    )
  ).find(
    sclDataSet =>
      !Array.from(newDataSet.querySelectorAll('FCDA')).some(newFcda => {
        const [prefix, lnClass, lnInst, doName, daName, fc] = [
          'prefix',
          'lnClass',
          'lnInst',
          'doName',
          'daName',
          'fc',
        ].map(attr => newFcda.getAttribute(attr) ?? '');

        return !sclDataSet.querySelector(
          `FCDA[prefix="${prefix}"][lnClass="${lnClass}"][lnInst="${lnInst}"][doName="${doName}"][daName="${daName}"][fc="${fc}"]`
        );
      })
  );

  if (dataSet) {
    const parent = dataSet.parentElement;
    const ctrlBlock = dataSet.parentElement?.querySelector(
      `:scope > *[datSet="${dataSet.getAttribute('name')}"]`
    );

    if (ctrlBlock && parent) {
      return { parent, ctrlBlock, dataSet };
    }
  }

  return { parent: newParent, ctrlBlock: newCtrlBlock, dataSet: newDataSet };
}

function createCommMap(commMapData: CommMapData[]): Edit[] {
  const edits: Edit[] = [];

  commMapData.forEach(commMap => {
    const ctrlEdits = createControlBlock(commMap);

    const { parent, ctrlBlock, dataSet } = getSourceElement(ctrlEdits, commMap);

    if (
      (dataSet.parentElement !== null &&
        dataSet.parentElement === ctrlBlock.parentElement) || // there is a control block that is doing what I want already
      (existCtrlBlock(parent, ctrlBlock) && existDataSet(dataSet))
    )
      edits.push(...createExtRefs(commMap, { dataSet, parent, ctrlBlock }));
    else {
      existingControlBlocks.push({ parent, ctrlBlock, dataSet });
      edits.push(
        ctrlEdits,
        ...createExtRefs(commMap, { dataSet, parent, ctrlBlock })
      );
    }
  });

  return edits;
}

/** An editor [[`plugin`]] to configure `Report`, `GOOSE`, `SampledValue` control blocks and its `DataSet` */
export default class SclCommMapGenerator extends LitElement {
  /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
  @property({ attribute: false })
  doc!: XMLDocument;

  /** SCL change indicator */
  @property({ type: Number })
  editCount = -1;

  async run() {
    const commMapData = transform(this.doc);

    this.dispatchEvent(newEditEvent(createCommMap(commMapData)));
  }

  static styles = css`
    input {
      width: 0;
      height: 0;
      opacity: 0;
    }
  `;
}
