import { LitElement } from 'lit';
type Mapping = {
    srcRef: Element;
    srcLNode: Element;
};
type CommMapData = {
    sourceName: string;
    source: Element;
    sourceIED: string;
    mappings: Mapping[];
};
/** An editor [[`plugin`]] to configure `Report`, `GOOSE`, `SampledValue` control blocks and its `DataSet` */
export default class SclCommMapGenerator extends LitElement {
    /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
    doc: XMLDocument;
    /** SCL change indicator */
    editCount: number;
    createCommMap(commMapData: CommMapData[]): void;
    run(): Promise<void>;
    static styles: import("lit").CSSResult;
}
export {};
