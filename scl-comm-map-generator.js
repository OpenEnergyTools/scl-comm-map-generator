/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=window,e$3=t$1.ShadowRoot&&(void 0===t$1.ShadyCSS||t$1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$3=Symbol(),n$5=new WeakMap;class o$3{constructor(t,e,n){if(this._$cssResult$=!0,n!==s$3)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$3&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n$5.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n$5.set(s,t));}return t}toString(){return this.cssText}}const r$2=t=>new o$3("string"==typeof t?t:t+"",void 0,s$3),i$2=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,s,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1]),t[0]);return new o$3(n,t,s$3)},S$1=(s,n)=>{e$3?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=t$1.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n);}));},c$1=e$3?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$2(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$2;const e$2=window,r$1=e$2.trustedTypes,h$1=r$1?r$1.emptyScript:"",o$2=e$2.reactiveElementPolyfillSupport,n$4={toAttribute(t,i){switch(i){case Boolean:t=t?h$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},a$1=(t,i)=>i!==t&&(i==i||t==t),l$2={attribute:!0,type:String,converter:n$4,reflect:!1,hasChanged:a$1},d$1="finalized";class u$1 extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu();}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e));})),t}static createProperty(t,i=l$2){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$2}static finalize(){if(this.hasOwnProperty(d$1))return !1;this[d$1]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(c$1(i));}else void 0!==i&&s.push(c$1(i));return s}static _$Ep(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1);}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S$1(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$EO(t,i,s=l$2){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:n$4).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null;}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:n$4;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a$1)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej());}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek();}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek();}updated(t){}firstUpdated(t){}}u$1[d$1]=!0,u$1.elementProperties=new Map,u$1.elementStyles=[],u$1.shadowRootOptions={mode:"open"},null==o$2||o$2({ReactiveElement:u$1}),(null!==(s$2=e$2.reactiveElementVersions)&&void 0!==s$2?s$2:e$2.reactiveElementVersions=[]).push("1.6.3");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t;const i$1=window,s$1=i$1.trustedTypes,e$1=s$1?s$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,o$1="$lit$",n$3=`lit$${(Math.random()+"").slice(9)}$`,l$1="?"+n$3,h=`<${l$1}>`,r=document,u=()=>r.createComment(""),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,c=Array.isArray,v=t=>c(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),a="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${a}(?:([^\\s"'>=/]+)(${a}*=${a}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,T=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),E=new WeakMap,C=r.createTreeWalker(r,129,null,!1);function P(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e$1?e$1.createHTML(i):i}const V=(t,i)=>{const s=t.length-1,e=[];let l,r=2===i?"<svg>":"",u=f;for(let i=0;i<s;i++){const s=t[i];let d,c,v=-1,a=0;for(;a<s.length&&(u.lastIndex=a,c=u.exec(s),null!==c);)a=u.lastIndex,u===f?"!--"===c[1]?u=_:void 0!==c[1]?u=m:void 0!==c[2]?(y.test(c[2])&&(l=RegExp("</"+c[2],"g")),u=p):void 0!==c[3]&&(u=p):u===p?">"===c[0]?(u=null!=l?l:f,v=-1):void 0===c[1]?v=-2:(v=u.lastIndex-c[2].length,d=c[1],u=void 0===c[3]?p:'"'===c[3]?$:g):u===$||u===g?u=p:u===_||u===m?u=f:(u=p,l=void 0);const w=u===p&&t[i+1].startsWith("/>")?" ":"";r+=u===f?s+h:v>=0?(e.push(d),s.slice(0,v)+o$1+s.slice(v)+n$3+w):s+n$3+(-2===v?(e.push(void 0),i):w);}return [P(t,r+(t[s]||"<?>")+(2===i?"</svg>":"")),e]};class N{constructor({strings:t,_$litType$:i},e){let h;this.parts=[];let r=0,d=0;const c=t.length-1,v=this.parts,[a,f]=V(t,i);if(this.el=N.createElement(a,e),C.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(h=C.nextNode())&&v.length<c;){if(1===h.nodeType){if(h.hasAttributes()){const t=[];for(const i of h.getAttributeNames())if(i.endsWith(o$1)||i.startsWith(n$3)){const s=f[d++];if(t.push(i),void 0!==s){const t=h.getAttribute(s.toLowerCase()+o$1).split(n$3),i=/([.?@])?(.*)/.exec(s);v.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?H:"?"===i[1]?L:"@"===i[1]?z:k});}else v.push({type:6,index:r});}for(const i of t)h.removeAttribute(i);}if(y.test(h.tagName)){const t=h.textContent.split(n$3),i=t.length-1;if(i>0){h.textContent=s$1?s$1.emptyScript:"";for(let s=0;s<i;s++)h.append(t[s],u()),C.nextNode(),v.push({type:2,index:++r});h.append(t[i],u());}}}else if(8===h.nodeType)if(h.data===l$1)v.push({type:2,index:r});else {let t=-1;for(;-1!==(t=h.data.indexOf(n$3,t+1));)v.push({type:7,index:r}),t+=n$3.length-1;}r++;}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function S(t,i,s=t,e){var o,n,l,h;if(i===T)return i;let r=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const u=d(i)?void 0:i._$litDirective$;return (null==r?void 0:r.constructor)!==u&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===u?r=void 0:(r=new u(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Co)&&void 0!==l?l:h._$Co=[])[e]=r:s._$Cl=r),void 0!==r&&(i=S(t,r._$AS(t,i.values),r,e)),i}class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:r).importNode(s,!0);C.currentNode=o;let n=C.nextNode(),l=0,h=0,u=e[0];for(;void 0!==u;){if(l===u.index){let i;2===u.type?i=new R(n,n.nextSibling,this,t):1===u.type?i=new u.ctor(n,u.name,u.strings,this,t):6===u.type&&(i=new Z(n,this,t)),this._$AV.push(i),u=e[++h];}l!==(null==u?void 0:u.index)&&(n=C.nextNode(),l++);}return C.currentNode=r,o}v(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class R{constructor(t,i,s,e){var o;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cp=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null==t?void 0:t.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=S(this,t,i),d(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):v(t)?this.T(t):this._(t);}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t));}_(t){this._$AH!==A&&d(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t;}g(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=N.createElement(P(e.h,e.h[0]),this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.v(s);else {const t=new M(o,this),i=t.u(this.options);t.v(s),this.$(i),this._$AH=t;}}_$AC(t){let i=E.get(t.strings);return void 0===i&&E.set(t.strings,i=new N(t)),i}T(t){c(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new R(this.k(u()),this.k(u()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cp=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class k{constructor(t,i,s,e,o){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=S(this,t,i,0),n=!d(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=S(this,e[s+l],i,l),h===T&&(h=this._$AH[l]),n||(n=!d(h)||h!==this._$AH[l]),h===A?t=A:t!==A&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class H extends k{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}const I=s$1?s$1.emptyScript:"";class L extends k{constructor(){super(...arguments),this.type=4;}j(t){t&&t!==A?this.element.setAttribute(this.name,I):this.element.removeAttribute(this.name);}}class z extends k{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=S(this,t,i,0))&&void 0!==s?s:A)===T)return;const e=this._$AH,o=t===A&&e!==A||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==A&&(e===A||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t);}}const B=i$1.litHtmlPolyfillSupport;null==B||B(N,R),(null!==(t=i$1.litHtmlVersions)&&void 0!==t?t:i$1.litHtmlVersions=[]).push("2.8.0");const D=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new R(i.insertBefore(u(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l,o;class s extends u$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return T}}s.finalized=!0,s._$litElement$=!0,null===(l=globalThis.litElementHydrateSupport)||void 0===l||l.call(globalThis,{LitElement:s});const n$2=globalThis.litElementPolyfillSupport;null==n$2||n$2({LitElement:s});(null!==(o=globalThis.litElementVersions)&&void 0!==o?o:globalThis.litElementVersions=[]).push("3.3.3");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}},e=(i,e,n)=>{e.constructor.createProperty(n,i);};function n$1(n){return (t,o)=>void 0!==o?e(n,t,o):i(n,t)}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n;null!=(null===(n=window.HTMLSlotElement)||void 0===n?void 0:n.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));

/** Utility function to create element with `tagName` and its`attributes` */
function createElement(doc, tag, attrs) {
    const element = doc.createElementNS(doc.documentElement.namespaceURI, tag);
    Object.entries(attrs)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .filter(([_, value]) => value !== null)
        .forEach(([name, value]) => element.setAttribute(name, value));
    return element;
}

const tAbstractConductingEquipment = [
    "TransformerWinding",
    "ConductingEquipment",
];
const tEquipment = [
    "GeneralEquipment",
    "PowerTransformer",
    ...tAbstractConductingEquipment,
];
const tEquipmentContainer = ["Substation", "VoltageLevel", "Bay"];
const tGeneralEquipmentContainer = ["Process", "Line"];
const tAbstractEqFuncSubFunc = ["EqSubFunction", "EqFunction"];
const tPowerSystemResource = [
    "SubFunction",
    "Function",
    "TapChanger",
    "SubEquipment",
    ...tEquipment,
    ...tEquipmentContainer,
    ...tGeneralEquipmentContainer,
    ...tAbstractEqFuncSubFunc,
];
const tLNodeContainer = ["ConnectivityNode", ...tPowerSystemResource];
const tCertificate = ["GOOSESecurity", "SMVSecurity"];
const tNaming = ["SubNetwork", ...tCertificate, ...tLNodeContainer];
const tAbstractDataAttribute = ["BDA", "DA"];
const tControlWithIEDName = ["SampledValueControl", "GSEControl"];
const tControlWithTriggerOpt = ["LogControl", "ReportControl"];
const tControl = [...tControlWithIEDName, ...tControlWithTriggerOpt];
const tControlBlock = ["GSE", "SMV"];
const tUnNaming = [
    "ConnectedAP",
    "PhysConn",
    "SDO",
    "DO",
    "DAI",
    "SDI",
    "DOI",
    "Inputs",
    "RptEnabled",
    "Server",
    "ServerAt",
    "SettingControl",
    "Communication",
    "Log",
    "LDevice",
    "DataSet",
    "AccessPoint",
    "IED",
    "NeutralPoint",
    ...tControl,
    ...tControlBlock,
    ...tAbstractDataAttribute,
];
const tAnyLN = ["LN0", "LN"];
const tAnyContentFromOtherNamespace = [
    "Text",
    "Private",
    "Hitem",
    "AccessControl",
];
const tCert = ["Subject", "IssuerName"];
const tDurationInMilliSec = ["MinTime", "MaxTime"];
const tIDNaming = ["LNodeType", "DOType", "DAType", "EnumType"];
const tServiceYesNo = [
    "FileHandling",
    "TimeSyncProt",
    "CommProt",
    "SGEdit",
    "ConfSG",
    "GetDirectory",
    "GetDataObjectDefinition",
    "DataObjectDirectory",
    "GetDataSetValue",
    "SetDataSetValue",
    "DataSetDirectory",
    "ReadWrite",
    "TimerActivatedControl",
    "GetCBValues",
    "GSEDir",
    "ConfLdName",
];
const tServiceWithMaxAndMaxAttributes = ["DynDataSet", "ConfDataSet"];
const tServiceWithMax = [
    "GSSE",
    "GOOSE",
    "ConfReportControl",
    "SMVsc",
    ...tServiceWithMaxAndMaxAttributes,
];
const tServiceWithMaxNonZero = ["ConfLogControl", "ConfSigRef"];
const tServiceSettings = [
    "ReportSettings",
    "LogSettings",
    "GSESettings",
    "SMVSettings",
];
const tBaseElement = ["SCL", ...tNaming, ...tUnNaming, ...tIDNaming];
const sCLTags = [
    ...tBaseElement,
    ...tAnyContentFromOtherNamespace,
    "Header",
    "LNode",
    "Val",
    "Voltage",
    "Services",
    ...tCert,
    ...tDurationInMilliSec,
    "Association",
    "FCDA",
    "ClientLN",
    "IEDName",
    "ExtRef",
    "Protocol",
    ...tAnyLN,
    ...tServiceYesNo,
    "DynAssociation",
    "SettingGroups",
    ...tServiceWithMax,
    ...tServiceWithMaxNonZero,
    ...tServiceSettings,
    "ConfLNs",
    "ClientServices",
    "SupSubscription",
    "ValueHandling",
    "RedProt",
    "McSecurity",
    "KDC",
    "Address",
    "P",
    "ProtNs",
    "EnumVal",
    "Terminal",
    "BitRate",
    "Authentication",
    "DataTypeTemplates",
    "History",
    "OptFields",
    "SmvOpts",
    "TrgOps",
    "SamplesPerSec",
    "SmpRate",
    "SecPerSamples",
];
const tBaseNameSequence = ["Text", "Private"];
const tNamingSequence = [...tBaseNameSequence];
const tUnNamingSequence = [...tBaseNameSequence];
const tIDNamingSequence = [...tBaseNameSequence];
const tAbstractDataAttributeSequence = [...tUnNamingSequence, "Val"];
const tLNodeContainerSequence = [...tNamingSequence, "LNode"];
const tPowerSystemResourceSequence = [...tLNodeContainerSequence];
const tEquipmentSequence = [...tPowerSystemResourceSequence];
const tEquipmentContainerSequence = [
    ...tPowerSystemResourceSequence,
    "PowerTransformer",
    "GeneralEquipment",
];
const tAbstractConductingEquipmentSequence = [
    ...tEquipmentSequence,
    "Terminal",
];
const tControlBlockSequence = [...tUnNamingSequence, "Address"];
const tControlSequence = [...tNamingSequence];
const tControlWithIEDNameSequence = [...tControlSequence, "IEDName"];
const tAnyLNSequence = [
    ...tUnNamingSequence,
    "DataSet",
    "ReportControl",
    "LogControl",
    "DOI",
    "Inputs",
    "Log",
];
const tGeneralEquipmentContainerSequence = [
    ...tPowerSystemResourceSequence,
    "GeneralEquipment",
    "Function",
];
const tControlWithTriggerOptSequence = [...tControlSequence, "TrgOps"];
const tAbstractEqFuncSubFuncSequence = [
    ...tPowerSystemResourceSequence,
    "GeneralEquipment",
    "EqSubFunction",
];
const tags$1 = {
    AccessControl: {
        parents: ["LDevice"],
        children: [],
    },
    AccessPoint: {
        parents: ["IED"],
        children: [
            ...tNamingSequence,
            "Server",
            "LN",
            "ServerAt",
            "Services",
            "GOOSESecurity",
            "SMVSecurity",
        ],
    },
    Address: {
        parents: ["ConnectedAP", "GSE", "SMV"],
        children: ["P"],
    },
    Association: {
        parents: ["Server"],
        children: [],
    },
    Authentication: {
        parents: ["Server"],
        children: [],
    },
    BDA: {
        parents: ["DAType"],
        children: [...tAbstractDataAttributeSequence],
    },
    BitRate: {
        parents: ["SubNetwork"],
        children: [],
    },
    Bay: {
        parents: ["VoltageLevel"],
        children: [
            ...tEquipmentContainerSequence,
            "ConductingEquipment",
            "ConnectivityNode",
            "Function",
        ],
    },
    ClientLN: {
        parents: ["RptEnabled"],
        children: [],
    },
    ClientServices: {
        parents: ["Services"],
        children: ["TimeSyncProt", "McSecurity"],
    },
    CommProt: {
        parents: ["Services"],
        children: [],
    },
    Communication: {
        parents: ["SCL"],
        children: [...tUnNamingSequence, "SubNetwork"],
    },
    ConductingEquipment: {
        parents: ["Process", "Line", "SubFunction", "Function", "Bay"],
        children: [
            ...tAbstractConductingEquipmentSequence,
            "EqFunction",
            "SubEquipment",
        ],
    },
    ConfDataSet: {
        parents: ["Services"],
        children: [],
    },
    ConfLdName: {
        parents: ["Services"],
        children: [],
    },
    ConfLNs: {
        parents: ["Services"],
        children: [],
    },
    ConfLogControl: {
        parents: ["Services"],
        children: [],
    },
    ConfReportControl: {
        parents: ["Services"],
        children: [],
    },
    ConfSG: {
        parents: ["SettingGroups"],
        children: [],
    },
    ConfSigRef: {
        parents: ["Services"],
        children: [],
    },
    ConnectedAP: {
        parents: ["SubNetwork"],
        children: [...tUnNamingSequence, "Address", "GSE", "SMV", "PhysConn"],
    },
    ConnectivityNode: {
        parents: ["Bay", "Line"],
        children: [...tLNodeContainerSequence],
    },
    DA: {
        parents: ["DOType"],
        children: [...tAbstractDataAttributeSequence],
    },
    DAI: {
        parents: ["DOI", "SDI"],
        children: [...tUnNamingSequence, "Val"],
    },
    DAType: {
        parents: ["DataTypeTemplates"],
        children: [...tIDNamingSequence, "BDA", "ProtNs"],
    },
    DO: {
        parents: ["LNodeType"],
        children: [...tUnNamingSequence],
    },
    DOI: {
        parents: [...tAnyLN],
        children: [...tUnNamingSequence, "SDI", "DAI"],
    },
    DOType: {
        parents: ["DataTypeTemplates"],
        children: [...tIDNamingSequence, "SDO", "DA"],
    },
    DataObjectDirectory: {
        parents: ["Services"],
        children: [],
    },
    DataSet: {
        parents: [...tAnyLN],
        children: [...tNamingSequence, "FCDA"],
    },
    DataSetDirectory: {
        parents: ["Services"],
        children: [],
    },
    DataTypeTemplates: {
        parents: ["SCL"],
        children: ["LNodeType", "DOType", "DAType", "EnumType"],
    },
    DynAssociation: {
        parents: ["Services"],
        children: [],
    },
    DynDataSet: {
        parents: ["Services"],
        children: [],
    },
    EnumType: {
        parents: ["DataTypeTemplates"],
        children: [...tIDNamingSequence, "EnumVal"],
    },
    EnumVal: {
        parents: ["EnumType"],
        children: [],
    },
    EqFunction: {
        parents: [
            "GeneralEquipment",
            "TapChanger",
            "TransformerWinding",
            "PowerTransformer",
            "SubEquipment",
            "ConductingEquipment",
        ],
        children: [...tAbstractEqFuncSubFuncSequence],
    },
    EqSubFunction: {
        parents: ["EqSubFunction", "EqFunction"],
        children: [...tAbstractEqFuncSubFuncSequence],
    },
    ExtRef: {
        parents: ["Inputs"],
        children: [],
    },
    FCDA: {
        parents: ["DataSet"],
        children: [],
    },
    FileHandling: {
        parents: ["Services"],
        children: [],
    },
    Function: {
        parents: ["Bay", "VoltageLevel", "Substation", "Process", "Line"],
        children: [
            ...tPowerSystemResourceSequence,
            "SubFunction",
            "GeneralEquipment",
            "ConductingEquipment",
        ],
    },
    GeneralEquipment: {
        parents: [
            "SubFunction",
            "Function",
            ...tGeneralEquipmentContainer,
            ...tAbstractEqFuncSubFunc,
            ...tEquipmentContainer,
        ],
        children: [...tEquipmentSequence, "EqFunction"],
    },
    GetCBValues: {
        parents: ["Services"],
        children: [],
    },
    GetDataObjectDefinition: {
        parents: ["Services"],
        children: [],
    },
    GetDataSetValue: {
        parents: ["Services"],
        children: [],
    },
    GetDirectory: {
        parents: ["Services"],
        children: [],
    },
    GOOSE: {
        parents: ["Services"],
        children: [],
    },
    GOOSESecurity: {
        parents: ["AccessPoint"],
        children: [...tNamingSequence, "Subject", "IssuerName"],
    },
    GSE: {
        parents: ["ConnectedAP"],
        children: [...tControlBlockSequence, "MinTime", "MaxTime"],
    },
    GSEDir: {
        parents: ["Services"],
        children: [],
    },
    GSEControl: {
        parents: ["LN0"],
        children: [...tControlWithIEDNameSequence, "Protocol"],
    },
    GSESettings: {
        parents: ["Services"],
        children: [],
    },
    GSSE: {
        parents: ["Services"],
        children: [],
    },
    Header: {
        parents: ["SCL"],
        children: ["Text", "History"],
    },
    History: {
        parents: ["Header"],
        children: ["Hitem"],
    },
    Hitem: {
        parents: ["History"],
        children: [],
    },
    IED: {
        parents: ["SCL"],
        children: [...tUnNamingSequence, "Services", "AccessPoint", "KDC"],
    },
    IEDName: {
        parents: ["GSEControl", "SampledValueControl"],
        children: [],
    },
    Inputs: {
        parents: [...tAnyLN],
        children: [...tUnNamingSequence, "ExtRef"],
    },
    IssuerName: {
        parents: ["GOOSESecurity", "SMVSecurity"],
        children: [],
    },
    KDC: {
        parents: ["IED"],
        children: [],
    },
    LDevice: {
        parents: ["Server"],
        children: [...tUnNamingSequence, "LN0", "LN", "AccessControl"],
    },
    LN: {
        parents: ["AccessPoint", "LDevice"],
        children: [...tAnyLNSequence],
    },
    LN0: {
        parents: ["LDevice"],
        children: [
            ...tAnyLNSequence,
            "GSEControl",
            "SampledValueControl",
            "SettingControl",
        ],
    },
    LNode: {
        parents: [...tLNodeContainer],
        children: [...tUnNamingSequence],
    },
    LNodeType: {
        parents: ["DataTypeTemplates"],
        children: [...tIDNamingSequence, "DO"],
    },
    Line: {
        parents: ["Process", "SCL"],
        children: [
            ...tGeneralEquipmentContainerSequence,
            "Voltage",
            "ConductingEquipment",
        ],
    },
    Log: {
        parents: [...tAnyLN],
        children: [...tUnNamingSequence],
    },
    LogControl: {
        parents: [...tAnyLN],
        children: [...tControlWithTriggerOptSequence],
    },
    LogSettings: {
        parents: ["Services"],
        children: [],
    },
    MaxTime: {
        parents: ["GSE"],
        children: [],
    },
    McSecurity: {
        parents: ["GSESettings", "SMVSettings", "ClientServices"],
        children: [],
    },
    MinTime: {
        parents: ["GSE"],
        children: [],
    },
    NeutralPoint: {
        parents: ["TransformerWinding"],
        children: [...tUnNamingSequence],
    },
    OptFields: {
        parents: ["ReportControl"],
        children: [],
    },
    P: {
        parents: ["Address", "PhysConn"],
        children: [],
    },
    PhysConn: {
        parents: ["ConnectedAP"],
        children: [...tUnNamingSequence, "P"],
    },
    PowerTransformer: {
        parents: [...tEquipmentContainer],
        children: [
            ...tEquipmentSequence,
            "TransformerWinding",
            "SubEquipment",
            "EqFunction",
        ],
    },
    Private: {
        parents: [],
        children: [],
    },
    Process: {
        parents: ["Process", "SCL"],
        children: [
            ...tGeneralEquipmentContainerSequence,
            "ConductingEquipment",
            "Substation",
            "Line",
            "Process",
        ],
    },
    ProtNs: {
        parents: ["DAType", "DA"],
        children: [],
    },
    Protocol: {
        parents: ["GSEControl", "SampledValueControl"],
        children: [],
    },
    ReadWrite: {
        parents: ["Services"],
        children: [],
    },
    RedProt: {
        parents: ["Services"],
        children: [],
    },
    ReportControl: {
        parents: [...tAnyLN],
        children: [...tControlWithTriggerOptSequence, "OptFields", "RptEnabled"],
    },
    ReportSettings: {
        parents: ["Services"],
        children: [],
    },
    RptEnabled: {
        parents: ["ReportControl"],
        children: [...tUnNamingSequence, "ClientLN"],
    },
    SamplesPerSec: {
        parents: ["SMVSettings"],
        children: [],
    },
    SampledValueControl: {
        parents: ["LN0"],
        children: [...tControlWithIEDNameSequence, "SmvOpts"],
    },
    SecPerSamples: {
        parents: ["SMVSettings"],
        children: [],
    },
    SCL: {
        parents: [],
        children: [
            ...tBaseNameSequence,
            "Header",
            "Substation",
            "Communication",
            "IED",
            "DataTypeTemplates",
            "Line",
            "Process",
        ],
    },
    SDI: {
        parents: ["DOI", "SDI"],
        children: [...tUnNamingSequence, "SDI", "DAI"],
    },
    SDO: {
        parents: ["DOType"],
        children: [...tNamingSequence],
    },
    Server: {
        parents: ["AccessPoint"],
        children: [
            ...tUnNamingSequence,
            "Authentication",
            "LDevice",
            "Association",
        ],
    },
    ServerAt: {
        parents: ["AccessPoint"],
        children: [...tUnNamingSequence],
    },
    Services: {
        parents: ["IED", "AccessPoint"],
        children: [
            "DynAssociation",
            "SettingGroups",
            "GetDirectory",
            "GetDataObjectDefinition",
            "DataObjectDirectory",
            "GetDataSetValue",
            "SetDataSetValue",
            "DataSetDirectory",
            "ConfDataSet",
            "DynDataSet",
            "ReadWrite",
            "TimerActivatedControl",
            "ConfReportControl",
            "GetCBValues",
            "ConfLogControl",
            "ReportSettings",
            "LogSettings",
            "GSESettings",
            "SMVSettings",
            "GSEDir",
            "GOOSE",
            "GSSE",
            "SMVsc",
            "FileHandling",
            "ConfLNs",
            "ClientServices",
            "ConfLdName",
            "SupSubscription",
            "ConfSigRef",
            "ValueHandling",
            "RedProt",
            "TimeSyncProt",
            "CommProt",
        ],
    },
    SetDataSetValue: {
        parents: ["Services"],
        children: [],
    },
    SettingControl: {
        parents: ["LN0"],
        children: [...tUnNamingSequence],
    },
    SettingGroups: {
        parents: ["Services"],
        children: ["SGEdit", "ConfSG"],
    },
    SGEdit: {
        parents: ["SettingGroups"],
        children: [],
    },
    SmpRate: {
        parents: ["SMVSettings"],
        children: [],
    },
    SMV: {
        parents: ["ConnectedAP"],
        children: [...tControlBlockSequence],
    },
    SmvOpts: {
        parents: ["SampledValueControl"],
        children: [],
    },
    SMVsc: {
        parents: ["Services"],
        children: [],
    },
    SMVSecurity: {
        parents: ["AccessPoint"],
        children: [...tNamingSequence, "Subject", "IssuerName"],
    },
    SMVSettings: {
        parents: ["Services"],
        children: ["SmpRate", "SamplesPerSec", "SecPerSamples", "McSecurity"],
    },
    SubEquipment: {
        parents: [
            "TapChanger",
            "PowerTransformer",
            "ConductingEquipment",
            "TransformerWinding",
            ...tAbstractConductingEquipment,
        ],
        children: [...tPowerSystemResourceSequence, "EqFunction"],
    },
    SubFunction: {
        parents: ["SubFunction", "Function"],
        children: [
            ...tPowerSystemResourceSequence,
            "GeneralEquipment",
            "ConductingEquipment",
            "SubFunction",
        ],
    },
    SubNetwork: {
        parents: ["Communication"],
        children: [...tNamingSequence, "BitRate", "ConnectedAP"],
    },
    Subject: {
        parents: ["GOOSESecurity", "SMVSecurity"],
        children: [],
    },
    Substation: {
        parents: ["SCL"],
        children: [...tEquipmentContainerSequence, "VoltageLevel", "Function"],
    },
    SupSubscription: {
        parents: ["Services"],
        children: [],
    },
    TapChanger: {
        parents: ["TransformerWinding"],
        children: [...tPowerSystemResourceSequence, "SubEquipment", "EqFunction"],
    },
    Terminal: {
        parents: [...tEquipment],
        children: [...tUnNamingSequence],
    },
    Text: {
        parents: sCLTags.filter((tag) => tag !== "Text" && tag !== "Private"),
        children: [],
    },
    TimerActivatedControl: {
        parents: ["Services"],
        children: [],
    },
    TimeSyncProt: {
        parents: ["Services", "ClientServices"],
        children: [],
    },
    TransformerWinding: {
        parents: ["PowerTransformer"],
        children: [
            ...tAbstractConductingEquipmentSequence,
            "TapChanger",
            "NeutralPoint",
            "EqFunction",
            "SubEquipment",
        ],
    },
    TrgOps: {
        parents: ["ReportControl"],
        children: [],
    },
    Val: {
        parents: ["DAI", "DA", "BDA"],
        children: [],
    },
    ValueHandling: {
        parents: ["Services"],
        children: [],
    },
    Voltage: {
        parents: ["VoltageLevel"],
        children: [],
    },
    VoltageLevel: {
        parents: ["Substation"],
        children: [...tEquipmentContainerSequence, "Voltage", "Bay", "Function"],
    },
};
const tagSet = new Set(sCLTags);
function isSCLTag(tag) {
    return tagSet.has(tag);
}

/**
 * Helper function for to determine schema valid `reference` for OpenSCD
 * core Insert event.
 * !! only valid with Edition 2.1 projects (2007B4)
 * @param parent - The parent element the new child shall be added to
 * @param tag - The `tagName` of the new child
 * @returns Reference for new [[`tag`]] child within [[`parent`]]  or `null`
 */
function getReference(parent, tag) {
    if (!isSCLTag(tag))
        return null;
    const parentTag = parent.tagName;
    const children = Array.from(parent.children);
    if (parentTag === "Services" ||
        parentTag === "SettingGroups" ||
        !isSCLTag(parentTag))
        return children.find((child) => child.tagName === tag) ?? null;
    const sequence = tags$1[parentTag].children;
    let index = sequence.findIndex((element) => element === tag);
    if (index < 0)
        return null;
    let nextSibling;
    while (index < sequence.length && !nextSibling) {
        // eslint-disable-next-line no-loop-func
        nextSibling = children.find((child) => child.tagName === sequence[index]);
        index += 1;
    }
    return nextSibling ?? null;
}

/** maximum value for `lnInst` attribute */
const maxLnInst = 99;
Array(maxLnInst)
    .fill(1)
    .map((_, i) => `${i + 1}`);

/** @returns Unique element name with  [[`tagName`]] within [[`parent`]] */
function uniqueElementName(parent, tagName) {
    const nameCore = `new${tagName}`;
    const siblingNames = Array.from(parent.querySelectorAll(`:scope > ${tagName}`)).map((child) => child.getAttribute("name") ?? child.tagName);
    if (!siblingNames.length)
        return `${nameCore}_001`;
    let newName = "";
    let i = 1;
    newName = `${nameCore}_${i.toString().padStart(3, "0")}`;
    while (i < siblingNames.length + 1) {
        if (!siblingNames.includes(newName))
            break;
        i += 1;
        newName = `${nameCore}_${i.toString().padStart(3, "0")}`;
    }
    return newName;
}

/** @returns ConnectedAP element for LN0 within AccessPoint */
function connectedAp(ln0, apName) {
    const accessPointName = apName ?? ln0.closest("AccessPoint")?.getAttribute("name");
    const iedName = ln0.closest("IED")?.getAttribute("name");
    return ln0.ownerDocument.querySelector(`:root > Communication > SubNetwork > ConnectedAP[iedName="${iedName}"][apName="${accessPointName}"]`);
}

function pathId(ln0, cbName) {
    const iedName = ln0.closest("IED")?.getAttribute("name");
    const ldInst = ln0.closest("LDevice")?.getAttribute("inst");
    const prefix = ln0.getAttribute("prefix") ?? "";
    const lnClass = ln0.getAttribute("lnClass");
    const inst = ln0.getAttribute("inst");
    return `${iedName}/${ldInst}/${prefix}${lnClass}${inst}/${cbName}`;
}

function maxGSEControl(parent) {
    {
        const selector = `:scope > Services > GOOSE`;
        const apGOOSE = parent.closest("AccessPoint")?.querySelector(selector);
        if (apGOOSE)
            return {
                max: parseInt(apGOOSE.getAttribute("max") ?? "0", 10),
                scope: "AccessPoint",
            };
        const iedGOOSE = parent.closest("IED")?.querySelector(selector);
        return {
            max: parseInt(iedGOOSE?.getAttribute("max") ?? "0", 10),
            scope: "IED",
        };
    }
}
/** Checks Services>GOOSE AccessPoint or on IED if the first is not present
 * @param parent - parent `LN0`
 * @returns Whether new `GSEControl` is exceeding GOOSE.max attribute */
function canAddGSEControl(ln0) {
    const { max, scope } = maxGSEControl(ln0);
    const existingGseControls = Array.from(ln0
        .closest(scope)
        ?.querySelectorAll(":scope Server > LDevice > LN0 > GSEControl") ?? []).length;
    return max > existingGseControls;
}

const maxGseMacAddress = 0x010ccd0101ff;
const minGseMacAddress = 0x010ccd010000;
const maxSmvMacAddress = 0x010ccd0401ff;
const minSmvMacAddress = 0x010ccd040000;
function convertToMac(mac) {
    const str = 0 + mac.toString(16).toUpperCase();
    const arr = str.match(/.{1,2}/g);
    return arr.join("-");
}
const gseMacRange = Array(maxGseMacAddress - minGseMacAddress)
    .fill(1)
    .map((_, i) => convertToMac(minGseMacAddress + i));
const smvMacRange = Array(maxSmvMacAddress - minSmvMacAddress)
    .fill(1)
    .map((_, i) => convertToMac(minSmvMacAddress + i));
/** Generator function returning `MAC-Address` within `doc`. Defined once it can
 * generate unique `MAC-address` without the need to update the `doc` in-between:
 * @example
 * ```ts
 * const macGenerator = macAddressGenerator(doc,"GSE");
 * const mac1 = macGenerator();        //01-0C-CD-01-00-09
 * const mac2 = macGenerator();        //01-0C-CD-01-00-0A
 * ```
 * @param doc - Project SCL as XMLDocument
 * @param serviceType - SampledValueControl (SMV) or GSEControl (GSE)
 * @returns A function generating increasing unused `MAC-Address` within `doc`
 *          on subsequent invocations
 */
function macAddressGenerator(doc, serviceType) {
    const macs = new Set(Array.from(doc.querySelectorAll(`${serviceType} > Address > P[type="MAC-Address"]`)).map((mac) => mac.textContent));
    const range = serviceType === "SMV" ? smvMacRange : gseMacRange;
    return () => {
        const uniqueMAC = range.find((mac) => !macs.has(mac));
        if (uniqueMAC)
            macs.add(uniqueMAC);
        return uniqueMAC ?? null;
    };
}

const maxGseAppId = 0x3fff;
const minGseAppId = 0x0000;
// APPID range for Type1A(Trip) GOOSE acc. IEC 61850-8-1
const maxGseTripAppId = 0xbfff;
const minGseTripAppId = 0x8000;
const maxSmvAppId = 0x7fff;
const minSmvAppId = 0x4000;
const gseAppIdRange = Array(maxGseAppId - minGseAppId)
    .fill(1)
    .map((_, i) => (minGseAppId + i).toString(16).toUpperCase().padStart(4, "0"));
const gseTripAppIdRange = Array(maxGseTripAppId - minGseTripAppId)
    .fill(1)
    .map((_, i) => (minGseTripAppId + i).toString(16).toUpperCase().padStart(4, "0"));
const smvAppIdRange = Array(maxSmvAppId - minSmvAppId)
    .fill(1)
    .map((_, i) => (minSmvAppId + i).toString(16).toUpperCase().padStart(4, "0"));
/** Generator function returning unique `APPID` within `doc`. Defined once it
 * can generate unique `APPID`s without the need to update the `doc` in-between
 * ```md
 * GSE:         0x0000 - 0x3FFF
 * GSE Type1A:  0x8000 - 0xBFFF
 * SMV:         0x4000 - 0x7FFF
 * ```
 * @example
 * ```ts
 * const appIdGen = appIdGenerator(doc,"GSE");
 * const appId1 = appIdGen();        //0001
 * const appId2 = appIdGen();        //000A
 * ```
 * @param doc - Project SCL as XMLDocument
 * @param serviceType - SampledValueControl (SMV) or GSEControl (GSE)
 * @param type1A - Whether the GOOSE is a Trip GOOSE resulting
 *                 in different APPID range - default false
 * @returns A function generating increasing unused `APPID` within `doc`
 *          on subsequent invocations
 */
function appIdGenerator(doc, serviceType, type1A = false) {
    const appIds = new Set(Array.from(doc.querySelectorAll(`${serviceType} > Address > P[type="APPID"]`)).map((appId) => appId.textContent));
    const range = 
    // eslint-disable-next-line no-nested-ternary
    serviceType === "SMV"
        ? smvAppIdRange
        : type1A
            ? gseTripAppIdRange
            : gseAppIdRange;
    return () => {
        const uniqueAppId = range.find((appId) => !appIds.has(appId));
        if (uniqueAppId)
            appIds.add(uniqueAppId);
        return uniqueAppId ?? null;
    };
}

/** @returns Edit inserting new `GSE` to [[`parent`]] ConnectedAP element */
function createGSE(parent, attributes, options = {}) {
    if (parent.tagName !== "ConnectedAP")
        return null;
    const doc = parent.ownerDocument;
    const gSE = createElement(doc, "GSE", attributes);
    const address = createElement(doc, "Address", {});
    gSE.appendChild(address);
    const pTypes = {};
    pTypes["MAC-Address"] = options.mac ?? macAddressGenerator(doc, "GSE")();
    pTypes.APPID = options.appId ?? appIdGenerator(doc, "GSE")();
    pTypes["VLAN-ID"] = options.vlanId ?? "000";
    pTypes["VLAN-PRIORITY"] = options.vlanPriority ?? "4";
    Object.entries(pTypes)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .filter(([_, value]) => value !== undefined)
        .forEach(([type, value]) => {
        const child = createElement(doc, "P", { type });
        child.textContent = value;
        address.appendChild(child);
    });
    const newMinTime = createElement(doc, "MinTime", {
        unit: "s",
        multiplier: "m",
    });
    newMinTime.textContent = options.MinTime ?? "10";
    gSE.appendChild(newMinTime);
    const newMaxTime = createElement(doc, "MaxTime", {
        unit: "s",
        multiplier: "m",
    });
    newMaxTime.textContent = options.MaxTime ?? "10000";
    gSE.appendChild(newMaxTime);
    return {
        parent,
        node: gSE,
        reference: getReference(parent, "GSE"),
    };
}

function invalidGSEControl(ln0, name, datSet) {
    const uniqueName = name
        ? !ln0.querySelector(`:scope > GSEControl[name="${name}"]`)
        : true;
    const validDataSet = datSet
        ? !!ln0.querySelector(`:scope > DataSet[name="${datSet}"]`)
        : true;
    return !(uniqueName && validDataSet && canAddGSEControl(ln0));
}
/** Utility function to create schema valid `GSEControl` and `GSE` elements
 * @parent Parent element such as `LN0`, `LDevice`, `AccessPoint` and `IED`
 * @options Configuration for GSEControl/GSE element
 * @returns Edit inserting new `GSEControl` to [[`parent`]] element and when possible
 *          `GSE` to connected `ConnectedAP`
 * */
function createGSEControl(parent, options = { gseControl: {}, gse: {} }) {
    const ln0 = parent.tagName === "LN0" ? parent : parent.querySelector("LN0");
    if (!ln0)
        return [];
    const name = options.gseControl?.name;
    const datSet = options.gseControl?.datSet;
    if (!options.skipCheck && invalidGSEControl(ln0, name, datSet))
        return [];
    const attributes = { ...options.gseControl };
    const cbName = name ? name : uniqueElementName(ln0, "GSEControl");
    if (!options.gseControl?.name)
        attributes.name = cbName;
    if (!options.gseControl?.confRev)
        attributes.confRev = "1";
    if (!options.gseControl?.type)
        attributes.type = "GOOSE";
    if (!options.gseControl?.appID)
        attributes.appID = pathId(ln0, cbName);
    const generatedConfRev = options.gseControl?.datSet ? "1" : "0";
    const userConfRev = options.gseControl?.confRev;
    attributes.confRev = userConfRev ? userConfRev : generatedConfRev;
    const gseControl = createElement(ln0.ownerDocument, "GSEControl", attributes);
    const edits = [];
    edits.push({
        parent: ln0,
        node: gseControl,
        reference: getReference(ln0, "GSEControl"),
    });
    const connAp = connectedAp(ln0, options.gse?.apName);
    if (!connAp)
        return edits;
    const ldInst = ln0.closest("LDevice").getAttribute("inst");
    if (!ldInst || !cbName)
        return edits;
    const gseCreateOptions = options.gse ?? {};
    delete gseCreateOptions.apName;
    const gseAttrs = { ldInst, cbName };
    const gseEdit = createGSE(connAp, gseAttrs, gseCreateOptions);
    if (gseEdit)
        edits.push(gseEdit);
    return edits;
}

/** @returns Edit inserting new `SMV` to [[`parent`]] ConnectedAP element */
function createSMV(parent, attributes, options = {}) {
    if (parent.tagName !== "ConnectedAP")
        return null;
    const doc = parent.ownerDocument;
    const gSE = createElement(doc, "SMV", attributes);
    const address = createElement(doc, "Address", {});
    gSE.appendChild(address);
    const pTypes = {};
    pTypes["MAC-Address"] = options.mac ?? macAddressGenerator(doc, "SMV")();
    pTypes.APPID = options.appId ?? appIdGenerator(doc, "SMV")();
    pTypes["VLAN-ID"] = options.vlanId ?? "000";
    pTypes["VLAN-PRIORITY"] = options.vlanPriority ?? "4";
    Object.entries(pTypes)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .filter(([_, value]) => value !== undefined)
        .forEach(([type, value]) => {
        const child = createElement(doc, "P", { type });
        child.textContent = value;
        address.appendChild(child);
    });
    return {
        parent,
        node: gSE,
        reference: getReference(parent, "SMV"),
    };
}

function maxSampledValueControl(parent) {
    {
        const selector = `:scope > Services > SMVsc`;
        const apSMV = parent.closest("AccessPoint")?.querySelector(selector);
        if (apSMV)
            return {
                max: parseInt(apSMV.getAttribute("max") ?? "0", 10),
                scope: "AccessPoint",
            };
        const iedSMV = parent.closest("IED")?.querySelector(selector);
        return {
            max: parseInt(iedSMV?.getAttribute("max") ?? "0", 10),
            scope: "IED",
        };
    }
}
/** Checks Services>SMVsc AccessPoint or on IED if the first is not present
 * @param parent - parent `LN0`
 * @returns Whether new `SampledValueControl` is exceeding SMVsc.max attribute */
function canAddSampledValueControl(ln0) {
    const { max, scope } = maxSampledValueControl(ln0);
    const existingSampledValueControls = Array.from(ln0
        .closest(scope)
        ?.querySelectorAll(":scope Server > LDevice > LN0 > SampledValueControl") ?? []).length;
    return max > existingSampledValueControls;
}

function invalidSampledValueControl(ln0, name, datSet) {
    const uniqueName = name
        ? !ln0.querySelector(`:scope > SampledValueControl[name="${name}"]`)
        : true;
    const validDataSet = datSet
        ? !!ln0.querySelector(`:scope > DataSet[name="${datSet}"]`)
        : true;
    return !(uniqueName && validDataSet && canAddSampledValueControl(ln0));
}
/** Utility function to create schema valid `SampledValueControl` and `SMV` elements
 * @parent Parent element such as `LN0`, `LDevice`, `AccessPoint` and `IED`
 * @options Configuration for SampledValueControl/SMV element
 * @returns Edit inserting new `SampledValueControl` to [[`parent`]] element and when possible
 *          `SMV` to connected `ConnectedAP`
 * */
function createSampledValueControl(parent, options = {
    smvControl: {},
    smv: {},
}) {
    const ln0 = parent.tagName === "LN0" ? parent : parent.querySelector("LN0");
    if (!ln0)
        return [];
    const name = options.smvControl?.name;
    const datSet = options.smvControl?.datSet;
    if (!options.skipCheck && invalidSampledValueControl(ln0, name, datSet))
        return [];
    const attributes = { ...options.smvControl };
    const cbName = name ? name : uniqueElementName(ln0, "SampledValueControl");
    if (!options.smvControl?.name)
        attributes.name = cbName;
    if (!options.smvControl?.multicast)
        attributes.multicast = "true";
    if (!options.smvControl?.smpRate)
        attributes.smpRate = "80";
    if (!options.smvControl?.nofASDU)
        attributes.nofASDU = "1";
    if (!options.smvControl?.smpMod)
        attributes.smpMod = "SmpPerPeriod";
    if (!options.smvControl?.smvID)
        attributes.smvID = pathId(ln0, cbName);
    const generatedConfRev = options.smvControl?.datSet ? "1" : "0";
    const userConfRev = options.smvControl?.confRev;
    attributes.confRev = userConfRev ? userConfRev : generatedConfRev;
    const smvControl = createElement(ln0.ownerDocument, "SampledValueControl", attributes);
    const smvOpts = createElement(ln0.ownerDocument, "SmvOpts", options.smvOpts ?? {});
    smvControl.appendChild(smvOpts);
    const edits = [];
    edits.push({
        parent: ln0,
        node: smvControl,
        reference: getReference(ln0, "SampledValueControl"),
    });
    const connAp = connectedAp(ln0, options.smv?.apName);
    if (!connAp)
        return edits;
    const ldInst = ln0.closest("LDevice").getAttribute("inst");
    if (!ldInst || !cbName)
        return edits;
    const smvCreateOptions = options.smv ?? {};
    delete smvCreateOptions.apName;
    const smvAttrs = { ldInst, cbName };
    const smvEdit = createSMV(connAp, smvAttrs, smvCreateOptions);
    if (smvEdit)
        edits.push(smvEdit);
    return edits;
}

await fetch(new URL(new URL('assets/nsd-0a370a57.json', import.meta.url).href, import.meta.url)).then((res) => res.json());

/* eslint-disable no-use-before-define */
function hitemIdentity(e) {
    return `${e.getAttribute("version")}\t${e.getAttribute("revision")}`;
}
function terminalIdentity(e) {
    return `${identity(e.parentElement)}>${e.getAttribute("connectivityNode")}`;
}
function lNodeIdentity(e) {
    const [iedName, ldInst, prefix, lnClass, lnInst, lnType] = [
        "iedName",
        "ldInst",
        "prefix",
        "lnClass",
        "lnInst",
        "lnType",
    ].map((name) => e.getAttribute(name));
    if (iedName === "None")
        return `${identity(e.parentElement)}>(${lnClass} ${lnInst ?? ""} ${lnType})`;
    return `${iedName} ${ldInst || "(Client)"}/${prefix ?? ""} ${lnClass} ${lnInst ?? ""}`;
}
function kDCIdentity(e) {
    return `${identity(e.parentElement)}>${e.getAttribute("iedName")} ${e.getAttribute("apName")}`;
}
function associationIdentity(e) {
    const [iedName, ldInst, prefix, lnClass, lnInst] = [
        "iedName",
        "ldInst",
        "prefix",
        "lnClass",
        "lnInst",
        "lnType",
    ].map((name) => e.getAttribute(name));
    return `${identity(e.parentElement)}>${iedName} ${ldInst}/${prefix ?? ""} ${lnClass} ${lnInst ?? ""}`;
}
function lDeviceIdentity(e) {
    return `${identity(e.closest("IED"))}>>${e.getAttribute("inst")}`;
}
function iEDNameIdentity(e) {
    const iedName = e.textContent;
    const [apRef, ldInst, prefix, lnClass, lnInst] = [
        "apRef",
        "ldInst",
        "prefix",
        "lnClass",
        "lnInst",
    ].map((name) => e.getAttribute(name));
    return `${identity(e.parentElement)}>${iedName} ${apRef || ""} ${ldInst || ""}/${prefix ?? ""} ${lnClass ?? ""} ${lnInst ?? ""}`;
}
function fCDAIdentity(e) {
    const [ldInst, prefix, lnClass, lnInst, doName, daName, fc, ix] = [
        "ldInst",
        "prefix",
        "lnClass",
        "lnInst",
        "doName",
        "daName",
        "fc",
        "ix",
    ].map((name) => e.getAttribute(name));
    const dataPath = `${ldInst}/${prefix ?? ""} ${lnClass} ${lnInst ?? ""}.${doName} ${daName || ""}`;
    return `${identity(e.parentElement)}>${dataPath} (${fc}${ix ? ` [${ix}]` : ""})`;
}
function extRefIdentity(e) {
    if (!e.parentElement)
        return NaN;
    const parentIdentity = identity(e.parentElement);
    const iedName = e.getAttribute("iedName");
    const intAddr = e.getAttribute("intAddr");
    const intAddrIndex = Array.from(e.parentElement.querySelectorAll(`ExtRef[intAddr="${intAddr}"]`)).indexOf(e);
    if (intAddr)
        return `${parentIdentity}>${intAddr}[${intAddrIndex}]`;
    const [ldInst, prefix, lnClass, lnInst, doName, daName, serviceType, srcLDInst, srcPrefix, srcLNClass, srcLNInst, srcCBName,] = [
        "ldInst",
        "prefix",
        "lnClass",
        "lnInst",
        "doName",
        "daName",
        "serviceType",
        "srcLDInst",
        "srcPrefix",
        "srcLNClass",
        "srcLNInst",
        "srcCBName",
    ].map((name) => e.getAttribute(name));
    const defaultSrcPrefix = "";
    const finalSrcPrefix = srcPrefix ?? defaultSrcPrefix;
    const defaultSrcLNInst = "";
    const finalSrcLNInst = srcLNInst ?? defaultSrcLNInst;
    const cbPath = srcCBName
        ? `${serviceType}:${srcCBName} ${srcLDInst}/${finalSrcPrefix} ${srcLNClass} ${finalSrcLNInst}`
        : "";
    const defaultPrefix = "";
    const finalPrefix = prefix ?? defaultPrefix;
    const defaultLnInst = "";
    const finalLnInst = lnInst ?? defaultLnInst;
    const defaultDaName = "";
    const finalDaName = daName || defaultDaName;
    const dataPath = `${iedName} ${ldInst}/${finalPrefix} ${lnClass} ${finalLnInst} ${doName} ${finalDaName}`;
    return `${parentIdentity}>${cbPath ? `${cbPath} ` : ""}${dataPath}`;
}
function lNIdentity(e) {
    const [prefix, lnClass, inst] = ["prefix", "lnClass", "inst"].map((name) => e.getAttribute(name));
    return `${identity(e.parentElement)}>${prefix ?? ""} ${lnClass} ${inst}`;
}
function clientLNIdentity(e) {
    const [apRef, iedName, ldInst, prefix, lnClass, lnInst] = [
        "apRef",
        "iedName",
        "ldInst",
        "prefix",
        "lnClass",
        "lnInst",
    ].map((name) => e.getAttribute(name));
    return `${identity(e.parentElement)}>${iedName} ${apRef || ""} ${ldInst}/${prefix ?? ""} ${lnClass} ${lnInst}`;
}
function ixNamingIdentity(e) {
    const [name, ix] = ["name", "ix"].map((naming) => e.getAttribute(naming));
    return `${identity(e.parentElement)}>${name}${ix ? `[${ix}]` : ""}`;
}
function valIdentity(e) {
    if (!e.parentElement)
        return NaN;
    const sGroup = e.getAttribute("sGroup");
    const index = Array.from(e.parentElement.children)
        .filter((child) => child.getAttribute("sGroup") === sGroup)
        .findIndex((child) => child.isSameNode(e));
    return `${identity(e.parentElement)}>${sGroup ? `${sGroup}` : ""} ${index}`;
}
function connectedAPIdentity(e) {
    const [iedName, apName] = ["iedName", "apName"].map((name) => e.getAttribute(name));
    return `${iedName} ${apName}`;
}
function controlBlockIdentity(e) {
    const [ldInst, cbName] = ["ldInst", "cbName"].map((name) => e.getAttribute(name));
    return `${ldInst} ${cbName}`;
}
function physConnIdentity(e) {
    if (!e.parentElement)
        return NaN;
    const pcType = e.getAttribute("type");
    if (e.parentElement.children.length > 1 &&
        pcType !== "Connection" &&
        pcType !== "RedConn")
        return NaN;
    return `${identity(e.parentElement)}>${pcType}`;
}
function pIdentity(e) {
    if (!e.parentElement)
        return NaN;
    const eParent = e.parentElement;
    const eType = e.getAttribute("type");
    if (eParent.tagName === "PhysConn")
        return `${identity(e.parentElement)}>${eType}`;
    const index = Array.from(e.parentElement.children)
        .filter((child) => child.getAttribute("type") === eType)
        .findIndex((child) => child.isSameNode(e));
    return `${identity(e.parentElement)}>${eType} [${index}]`;
}
function enumValIdentity(e) {
    return `${identity(e.parentElement)}>${e.getAttribute("ord")}`;
}
function protNsIdentity(e) {
    if (!e.parentElement)
        return NaN;
    const type = e.getAttribute("type");
    return `${identity(e.parentElement)}>${type || "8-MMS"}\t${e.textContent}`;
}
function sCLIdentity() {
    return "";
}
function namingIdentity(e) {
    return e.parentElement.tagName === "SCL"
        ? e.getAttribute("name")
        : `${identity(e.parentElement)}>${e.getAttribute("name")}`;
}
function singletonIdentity(e) {
    return identity(e.parentElement).toString();
}
function idNamingIdentity(e) {
    return `#${e.id}`;
}
const tags = {
    AccessControl: {
        identity: singletonIdentity,
    },
    AccessPoint: {
        identity: namingIdentity,
    },
    Address: {
        identity: singletonIdentity,
    },
    Association: {
        identity: associationIdentity,
    },
    Authentication: {
        identity: singletonIdentity,
    },
    BDA: {
        identity: namingIdentity,
    },
    BitRate: {
        identity: singletonIdentity,
    },
    Bay: {
        identity: namingIdentity,
    },
    ClientLN: {
        identity: clientLNIdentity,
    },
    ClientServices: {
        identity: singletonIdentity,
    },
    CommProt: {
        identity: singletonIdentity,
    },
    Communication: {
        identity: singletonIdentity,
    },
    ConductingEquipment: {
        identity: namingIdentity,
    },
    ConfDataSet: {
        identity: singletonIdentity,
    },
    ConfLdName: {
        identity: singletonIdentity,
    },
    ConfLNs: {
        identity: singletonIdentity,
    },
    ConfLogControl: {
        identity: singletonIdentity,
    },
    ConfReportControl: {
        identity: singletonIdentity,
    },
    ConfSG: {
        identity: singletonIdentity,
    },
    ConfSigRef: {
        identity: singletonIdentity,
    },
    ConnectedAP: {
        identity: connectedAPIdentity,
    },
    ConnectivityNode: {
        identity: namingIdentity,
    },
    DA: {
        identity: namingIdentity,
    },
    DAI: {
        identity: ixNamingIdentity,
    },
    DAType: {
        identity: idNamingIdentity,
    },
    DO: {
        identity: namingIdentity,
    },
    DOI: {
        identity: namingIdentity,
    },
    DOType: {
        identity: idNamingIdentity,
    },
    DataObjectDirectory: {
        identity: singletonIdentity,
    },
    DataSet: {
        identity: namingIdentity,
    },
    DataSetDirectory: {
        identity: singletonIdentity,
    },
    DataTypeTemplates: {
        identity: singletonIdentity,
    },
    DynAssociation: {
        identity: singletonIdentity,
    },
    DynDataSet: {
        identity: singletonIdentity,
    },
    EnumType: {
        identity: idNamingIdentity,
    },
    EnumVal: {
        identity: enumValIdentity,
    },
    EqFunction: {
        identity: namingIdentity,
    },
    EqSubFunction: {
        identity: namingIdentity,
    },
    ExtRef: {
        identity: extRefIdentity,
    },
    FCDA: {
        identity: fCDAIdentity,
    },
    FileHandling: {
        identity: singletonIdentity,
    },
    Function: {
        identity: namingIdentity,
    },
    GeneralEquipment: {
        identity: namingIdentity,
    },
    GetCBValues: {
        identity: singletonIdentity,
    },
    GetDataObjectDefinition: {
        identity: singletonIdentity,
    },
    GetDataSetValue: {
        identity: singletonIdentity,
    },
    GetDirectory: {
        identity: singletonIdentity,
    },
    GOOSE: {
        identity: singletonIdentity,
    },
    GOOSESecurity: {
        identity: namingIdentity,
    },
    GSE: {
        identity: controlBlockIdentity,
    },
    GSEDir: {
        identity: singletonIdentity,
    },
    GSEControl: {
        identity: namingIdentity,
    },
    GSESettings: {
        identity: singletonIdentity,
    },
    GSSE: {
        identity: singletonIdentity,
    },
    Header: {
        identity: singletonIdentity,
    },
    History: {
        identity: singletonIdentity,
    },
    Hitem: {
        identity: hitemIdentity,
    },
    IED: {
        identity: namingIdentity,
    },
    IEDName: {
        identity: iEDNameIdentity,
    },
    Inputs: {
        identity: singletonIdentity,
    },
    IssuerName: {
        identity: singletonIdentity,
    },
    KDC: {
        identity: kDCIdentity,
    },
    LDevice: {
        identity: lDeviceIdentity,
    },
    LN: {
        identity: lNIdentity,
    },
    LN0: {
        identity: singletonIdentity,
    },
    LNode: {
        identity: lNodeIdentity,
    },
    LNodeType: {
        identity: idNamingIdentity,
    },
    Line: {
        identity: namingIdentity,
    },
    Log: {
        identity: namingIdentity,
    },
    LogControl: {
        identity: namingIdentity,
    },
    LogSettings: {
        identity: singletonIdentity,
    },
    MaxTime: {
        identity: singletonIdentity,
    },
    McSecurity: {
        identity: singletonIdentity,
    },
    MinTime: {
        identity: singletonIdentity,
    },
    NeutralPoint: {
        identity: terminalIdentity,
    },
    OptFields: {
        identity: singletonIdentity,
    },
    P: {
        identity: pIdentity,
    },
    PhysConn: {
        identity: physConnIdentity,
    },
    PowerTransformer: {
        identity: namingIdentity,
    },
    Process: {
        identity: namingIdentity,
    },
    ProtNs: {
        identity: protNsIdentity,
    },
    Protocol: {
        identity: singletonIdentity,
    },
    ReadWrite: {
        identity: singletonIdentity,
    },
    RedProt: {
        identity: singletonIdentity,
    },
    ReportControl: {
        identity: namingIdentity,
    },
    ReportSettings: {
        identity: singletonIdentity,
    },
    RptEnabled: {
        identity: singletonIdentity,
    },
    SamplesPerSec: {
        identity: singletonIdentity,
    },
    SampledValueControl: {
        identity: namingIdentity,
    },
    SecPerSamples: {
        identity: singletonIdentity,
    },
    SCL: {
        identity: sCLIdentity,
    },
    SDI: {
        identity: ixNamingIdentity,
    },
    SDO: {
        identity: namingIdentity,
    },
    Server: {
        identity: singletonIdentity,
    },
    ServerAt: {
        identity: singletonIdentity,
    },
    Services: {
        identity: singletonIdentity,
    },
    SetDataSetValue: {
        identity: singletonIdentity,
    },
    SettingControl: {
        identity: singletonIdentity,
    },
    SettingGroups: {
        identity: singletonIdentity,
    },
    SGEdit: {
        identity: singletonIdentity,
    },
    SmpRate: {
        identity: singletonIdentity,
    },
    SMV: {
        identity: controlBlockIdentity,
    },
    SmvOpts: {
        identity: singletonIdentity,
    },
    SMVsc: {
        identity: singletonIdentity,
    },
    SMVSecurity: {
        identity: namingIdentity,
    },
    SMVSettings: {
        identity: singletonIdentity,
    },
    SubEquipment: {
        identity: namingIdentity,
    },
    SubFunction: {
        identity: namingIdentity,
    },
    SubNetwork: {
        identity: namingIdentity,
    },
    Subject: {
        identity: singletonIdentity,
    },
    Substation: {
        identity: namingIdentity,
    },
    SupSubscription: {
        identity: singletonIdentity,
    },
    TapChanger: {
        identity: namingIdentity,
    },
    Terminal: {
        identity: terminalIdentity,
    },
    Text: {
        identity: singletonIdentity,
    },
    TimerActivatedControl: {
        identity: singletonIdentity,
    },
    TimeSyncProt: {
        identity: singletonIdentity,
    },
    TransformerWinding: {
        identity: namingIdentity,
    },
    TrgOps: {
        identity: singletonIdentity,
    },
    Val: {
        identity: valIdentity,
    },
    ValueHandling: {
        identity: singletonIdentity,
    },
    Voltage: {
        identity: singletonIdentity,
    },
    VoltageLevel: {
        identity: namingIdentity,
    },
};
/** @returns Identity string for a valid SCL element or NaN */
function identity(e) {
    if (e === null)
        return NaN;
    if (e.closest("Private"))
        return NaN;
    const tag = e.tagName;
    if (isSCLTag(tag))
        return tags[tag].identity(e);
    return NaN;
}

function newEditEvent(edit) {
    return new CustomEvent('oscd-edit', {
        composed: true,
        bubbles: true,
        detail: edit,
    });
}

const existingControlBlocks = [];
const inputs = {};
const createdExtRefs = [];
function getLnType(element) {
    var _a, _b;
    let lnType = element.getAttribute('lnType');
    if (!lnType) {
        const [iedName, ldInst, prefix, lnClass, lnInst] = [
            'iedName',
            'ldInst',
            'prefix',
            'lnClass',
            'lnInst',
        ].map(attr => element.getAttribute(attr));
        lnType =
            (_b = (_a = Array.from(element.ownerDocument.querySelectorAll(`:root > IED[name="${iedName}"] LDevice[inst="${ldInst}"] > LN, :root > IED[id="${iedName}"] LDevice[inst="${ldInst}"] > LN0`))
                .find(anyLn => {
                var _a, _b, _c;
                return (prefix !== null && prefix !== void 0 ? prefix : '') === ((_a = anyLn.getAttribute('prefix')) !== null && _a !== void 0 ? _a : '') &&
                    (lnClass !== null && lnClass !== void 0 ? lnClass : '') === ((_b = anyLn.getAttribute('lnClass')) !== null && _b !== void 0 ? _b : '') &&
                    (lnInst !== null && lnInst !== void 0 ? lnInst : '') === ((_c = anyLn.getAttribute('inst')) !== null && _c !== void 0 ? _c : '');
            })) === null || _a === void 0 ? void 0 : _a.getAttribute('lnType')) !== null && _b !== void 0 ? _b : 'undefined';
    }
    return `${lnType}`;
}
function nextChild(name, parent) {
    var _a, _b;
    if (!parent)
        return null;
    // eslint-disable-next-line consistent-return
    for (const child of Array.from(parent.children)) {
        if (child.tagName === 'LNode') {
            const lNodeSpec = child.querySelector(':scope LNodeSpecNaming');
            const prefix = (_a = lNodeSpec === null || lNodeSpec === void 0 ? void 0 : lNodeSpec.getAttribute('sPrefix')) !== null && _a !== void 0 ? _a : '';
            const lnClass = lNodeSpec === null || lNodeSpec === void 0 ? void 0 : lNodeSpec.getAttribute('sLnClass');
            const lnInst = (_b = lNodeSpec === null || lNodeSpec === void 0 ? void 0 : lNodeSpec.getAttribute('sLnInst')) !== null && _b !== void 0 ? _b : '';
            if (name === `${prefix}${lnClass}${lnInst}`)
                return child;
        }
        if (name === child.getAttribute('name'))
            return child;
    }
    return null;
}
function getSourceLNode(srcRef) {
    var _a, _b;
    let child = srcRef.ownerDocument.documentElement;
    for (const name of (_b = (_a = srcRef.getAttribute('source')) === null || _a === void 0 ? void 0 : _a.split('/')) !== null && _b !== void 0 ? _b : []) {
        child = nextChild(name, child);
        if (!child)
            return null;
        if (child.tagName === 'LNode')
            return child;
    }
    return null;
}
function sourceRefs(procRes) {
    return Array.from(procRes.ownerDocument.querySelectorAll(`SourceRef[resourceName="${procRes.getAttribute('name')}"]`));
}
function transform(doc) {
    const data = [];
    Array.from(doc.querySelectorAll(':root Private ProcessResource')).forEach(procRes => {
        const srcRefs = sourceRefs(procRes);
        const sourceIEDs = {};
        srcRefs.forEach(srcRef => {
            const srcLNode = getSourceLNode(srcRef);
            const iedName = srcLNode === null || srcLNode === void 0 ? void 0 : srcLNode.getAttribute('iedName');
            if (!srcLNode || !iedName || iedName === 'None')
                return;
            if (!sourceIEDs[iedName])
                sourceIEDs[iedName] = [{ srcRef, srcLNode }];
            else
                sourceIEDs[iedName].push({ srcRef, srcLNode });
        });
        Object.entries(sourceIEDs).forEach(([sourceIED, mappings]) => {
            if (data.some(d => d.sourceIED === sourceIED &&
                d.sourceName === procRes.getAttribute('name')))
                return;
            const cleanMappings = mappings.filter(map => { var _a; return ((_a = map.srcRef.closest('LNode')) === null || _a === void 0 ? void 0 : _a.getAttribute('iedName')) !== sourceIED; });
            if (cleanMappings.length !== 0)
                data.push({
                    sourceName: procRes.getAttribute('name'),
                    source: procRes,
                    sourceIED,
                    mappings: cleanMappings,
                });
        });
    });
    return data;
}
function getChild(name, parent) {
    var _a, _b, _c;
    if (!parent)
        return null;
    if (parent.tagName === 'LNode') {
        const lNodeType = parent.ownerDocument.querySelector(`:root > DataTypeTemplates > LNodeType[id="${getLnType(parent)}"]`);
        return (_a = lNodeType === null || lNodeType === void 0 ? void 0 : lNodeType.querySelector(`:scope > DO[name="${name}"]`)) !== null && _a !== void 0 ? _a : null;
    }
    if (parent.tagName === 'DO' || parent.tagName === 'SDO') {
        const lNodeType = parent.ownerDocument.querySelector(`:root > DataTypeTemplates > DOType[id="${parent.getAttribute('type')}"]`);
        return ((_b = lNodeType === null || lNodeType === void 0 ? void 0 : lNodeType.querySelector(`:scope > SDO[name="${name}"],:scope > DA[name="${name}"]`)) !== null && _b !== void 0 ? _b : null);
    }
    if (parent.tagName === 'DA' || parent.tagName === 'BDA') {
        const lNodeType = parent.ownerDocument.querySelector(`:root > DataTypeTemplates > DAType[id="${parent.getAttribute('type')}"]`);
        return (_c = lNodeType === null || lNodeType === void 0 ? void 0 : lNodeType.querySelector(`:scope > BDA[name="${name}"]`)) !== null && _c !== void 0 ? _c : null;
    }
    return null;
}
function getDataDetail(lNode, dataPath) {
    const datas = dataPath.split('.');
    let parent = lNode;
    let fc = '';
    let doName = '';
    let daName = '';
    for (const data of datas) {
        const child = getChild(data, parent);
        if (!child)
            return {};
        if (child.tagName === 'DO')
            doName = doName.concat(`${child.getAttribute('name')}`);
        else if (child.tagName === 'SDO')
            doName = doName.concat(`.${child.getAttribute('name')}`);
        else if (child.tagName === 'DA') {
            daName = daName.concat(`${child.getAttribute('name')}`);
            fc = child.getAttribute('fc');
        }
        else if (child.tagName === 'BDA')
            daName = daName.concat(`.${child.getAttribute('name')}`);
        parent = child;
    }
    return { doName, daName, fc };
}
function createFCDA(mapping) {
    var _a;
    const dataPath = (_a = mapping.srcRef.getAttribute('source')) === null || _a === void 0 ? void 0 : _a.split('/').pop();
    if (!dataPath)
        return null;
    const ldInst = mapping.srcLNode.getAttribute('ldInst');
    const prefix = mapping.srcLNode.getAttribute('prefix');
    const lnClass = mapping.srcLNode.getAttribute('lnClass');
    const lnInst = mapping.srcLNode.getAttribute('lnInst');
    const { doName, daName, fc } = getDataDetail(mapping.srcLNode, dataPath);
    if (!doName || !daName || !fc)
        return null;
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
function isNew(dataSet, newFcda) {
    return !Array.from(dataSet.querySelectorAll('FCDA')).some(fcda => {
        var _a, _b, _c, _d, _e, _f, _g;
        const [ldInst, prefix, lnClass, lnInst, doName, daName, fc] = [
            'ldInst',
            'prefix',
            'lnClass',
            'lnInst',
            'doName',
            'daName',
            'fc',
        ].map(attr => { var _a; return (_a = newFcda.getAttribute(attr)) !== null && _a !== void 0 ? _a : ''; });
        return ((_g = (ldInst === ((_a = fcda.getAttribute('ldInst')) !== null && _a !== void 0 ? _a : '') &&
            prefix === ((_b = fcda.getAttribute('prefix')) !== null && _b !== void 0 ? _b : '') &&
            lnClass === ((_c = fcda.getAttribute('lnClass')) !== null && _c !== void 0 ? _c : '') &&
            lnInst === ((_d = fcda.getAttribute('lnInst')) !== null && _d !== void 0 ? _d : '') &&
            doName === ((_e = fcda.getAttribute('doName')) !== null && _e !== void 0 ? _e : '') &&
            daName === ((_f = fcda.getAttribute('daName')) !== null && _f !== void 0 ? _f : '') &&
            fc === fcda.getAttribute('fc'))) !== null && _g !== void 0 ? _g : '');
    });
}
function createDataSet(commMapData) {
    const dataSet = createElement(commMapData.source.ownerDocument, 'DataSet', {
        name: `${commMapData.source.getAttribute('name')}_DS`,
    });
    commMapData.mappings.forEach(mapping => {
        const fcda = createFCDA(mapping);
        if (fcda && isNew(dataSet, fcda))
            dataSet.appendChild(fcda);
    });
    return dataSet;
}
function createControlBlock(commMapData) {
    const ln0 = commMapData.source.ownerDocument.querySelector(`IED[name="${commMapData.sourceIED}"] LN0`);
    if (!ln0)
        return [];
    const service = commMapData.mappings[0].srcRef.getAttribute('service');
    const dataSet = createDataSet(commMapData);
    const datSet = dataSet.getAttribute('name');
    const edits = [];
    if (service === 'GOOSE') {
        edits.push(...createGSEControl(ln0, {
            gseControl: {
                name: commMapData.sourceName,
                datSet,
            },
            skipCheck: true,
        }));
    }
    else if (service === 'SMV') {
        edits.push(...createSampledValueControl(ln0, {
            smvControl: { name: commMapData.sourceName, datSet },
            skipCheck: true,
        }));
    }
    return [
        {
            parent: ln0,
            node: dataSet,
            reference: getReference(ln0, 'DataSet'),
        },
        ...edits,
    ];
}
function updatedExtRef(extRef, options) {
    const [ldInst, prefix, lnClass, lnInst, doName, daName] = [
        'ldInst',
        'prefix',
        'lnClass',
        'lnInst',
        'doName',
        'daName',
    ].map(attr => { var _a, _b; return (_b = (_a = options.fcda) === null || _a === void 0 ? void 0 : _a.getAttribute(attr)) !== null && _b !== void 0 ? _b : ''; });
    const iedName = options.ctrlParent.closest('IED').getAttribute('name');
    const srcLDInst = options.ctrlParent.closest('LDevice').getAttribute('inst');
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
function getSinkAnyLn(srcRef) {
    var _a, _b, _c;
    const [iedName, ldInst, prefix, lnClass, lnInst] = [
        'iedName',
        'ldInst',
        'prefix',
        'lnClass',
        'lnInst',
    ].map(attr => srcRef.closest('LNode').getAttribute(attr));
    const ied = srcRef.ownerDocument.querySelector(`IED[name="${iedName}"]`);
    const manufacturer = ied === null || ied === void 0 ? void 0 : ied.getAttribute('manufacturer');
    if (manufacturer === 'ABB')
        return (_a = ied === null || ied === void 0 ? void 0 : ied.querySelector('LN0')) !== null && _a !== void 0 ? _a : null;
    const lDevice = srcRef.ownerDocument.querySelector(`IED[name="${iedName}"] LDevice[inst="${ldInst}"]`);
    return ((_c = Array.from((_b = lDevice === null || lDevice === void 0 ? void 0 : lDevice.querySelectorAll(':scope > LN0,:scope > LN')) !== null && _b !== void 0 ? _b : []).find(anyLn => {
        var _a, _b;
        return ((_a = anyLn.getAttribute('prefix')) !== null && _a !== void 0 ? _a : '') === (prefix !== null && prefix !== void 0 ? prefix : '') &&
            anyLn.getAttribute('lnClass') === (lnClass !== null && lnClass !== void 0 ? lnClass : '') &&
            ((_b = anyLn.getAttribute('inst')) !== null && _b !== void 0 ? _b : '') === (lnInst !== null && lnInst !== void 0 ? lnInst : '');
    })) !== null && _c !== void 0 ? _c : null);
}
function createExtRef(srcRef, options) {
    const parent = getSinkAnyLn(srcRef);
    if (!parent)
        return [];
    const [ldInst, prefix, lnClass, lnInst, doName, daName] = [
        'ldInst',
        'prefix',
        'lnClass',
        'lnInst',
        'doName',
        'daName',
        'fc',
    ].map(attr => options.fcda.getAttribute(attr));
    const iedName = options.parent.closest('IED').getAttribute('name');
    const srcLDInst = options.parent.closest('LDevice').getAttribute('inst');
    const srcPrefix = null;
    const srcLNClass = 'LLN0';
    const srcLNInst = null;
    const srcCBName = options.ctrlBlock.getAttribute('name');
    const extRefAttr = {
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
    };
    const parentId = { parent: identity(parent) };
    const newExtRef = { ...parentId, ...extRefAttr };
    if (createdExtRefs.some(ref => JSON.stringify(ref) === JSON.stringify(newExtRef)))
        return [];
    const extRef = createElement(parent.ownerDocument, 'ExtRef', extRefAttr);
    const inputsElement = parent.querySelector(':scope > Inputs');
    if (inputsElement) {
        createdExtRefs.push(newExtRef);
        return [
            {
                parent: inputsElement,
                node: extRef,
                reference: getReference(parent, 'ExtRef'),
            },
        ];
    }
    const existInputs = inputs[identity(parent)];
    if (existInputs) {
        createdExtRefs.push(newExtRef);
        return [
            {
                parent: existInputs,
                node: extRef,
                reference: getReference(parent, 'ExtRef'),
            },
        ];
    }
    const newInputs = createElement(parent.ownerDocument, 'Inputs', {});
    inputs[identity(parent)] = newInputs;
    createdExtRefs.push(newExtRef);
    return [
        {
            parent,
            node: newInputs,
            reference: getReference(parent, 'Inputs'),
        },
        {
            parent: newInputs,
            node: extRef,
            reference: null,
        },
    ];
}
function getExtRef(srcRef) {
    var _a;
    const extRefAddr = srcRef.getAttribute('extRefAddr');
    if (extRefAddr.startsWith('@')) {
        const intAddr = extRefAddr.slice(1);
        const anyLn = getSinkAnyLn(srcRef);
        return anyLn.querySelector(`:scope > Inputs > ExtRef[intAddr="${intAddr}"]`);
    }
    const [iedName, ldInst, anyLnId] = extRefAddr.split('/', 3);
    const intAddr = extRefAddr
        .split(`${[iedName, ldInst, anyLnId].join('/')}/`)
        .pop();
    const lDevice = srcRef.ownerDocument.querySelector(`:root > IED[name="${iedName}"] LDevice[inst="${ldInst}"]`);
    const anyLn = Array.from((_a = lDevice === null || lDevice === void 0 ? void 0 : lDevice.children) !== null && _a !== void 0 ? _a : []).find(ln => {
        var _a, _b;
        const lnId = `${(_a = ln.getAttribute('prefix')) !== null && _a !== void 0 ? _a : ''}${ln.getAttribute('lnClass')}${(_b = ln.getAttribute('inst')) !== null && _b !== void 0 ? _b : ''}`;
        return lnId === anyLnId;
    });
    return anyLn.querySelector(`:scope > Inputs > ExtRef[intAddr="${intAddr}"]`);
}
function findFCDA(dataSet, mapping) {
    var _a;
    const dataPath = (_a = mapping.srcRef.getAttribute('source')) === null || _a === void 0 ? void 0 : _a.split('/').pop();
    if (!dataPath)
        return null;
    const ldInst = mapping.srcLNode.getAttribute('ldInst');
    const prefix = mapping.srcLNode.getAttribute('prefix');
    const lnClass = mapping.srcLNode.getAttribute('lnClass');
    const lnInst = mapping.srcLNode.getAttribute('lnInst');
    const { doName, daName, fc } = getDataDetail(mapping.srcLNode, dataPath);
    if (!doName || !daName || !fc)
        return null;
    const fcda = dataSet.querySelector(`:scope > FCDA[ldInst="${ldInst}"]${prefix ? `[prefix="${prefix}"]` : `:not([prefix])`}[lnClass="${lnClass}"][lnInst="${lnInst}"][doName="${doName}"][daName="${daName}"][fc="${fc}"]`);
    return fcda;
}
function createExtRefs(commMapData, options) {
    const edits = [];
    commMapData.mappings.forEach(mapping => {
        const { srcRef } = mapping;
        const extRefAddr = srcRef.getAttribute('extRefAddr');
        const fcda = findFCDA(options.dataSet, mapping);
        if (!fcda)
            return;
        if (extRefAddr) {
            edits.push(updatedExtRef(getExtRef(srcRef), {
                fcda,
                ctrlParent: options.parent,
                ctrlBlock: options.ctrlBlock,
            }));
            return;
        }
        edits.push(...createExtRef(srcRef, {
            fcda,
            parent: options.parent,
            ctrlBlock: options.ctrlBlock,
        }));
    });
    return edits;
}
function existCtrlBlock(ctrlParent, ctrlBlock) {
    return existingControlBlocks.some(source => source.parent === ctrlParent &&
        source.ctrlBlock.getAttribute('name') === ctrlBlock.getAttribute('name'));
}
function existDataSet(dataSet) {
    return existingControlBlocks.some(source => source.dataSet.getAttribute('name') === dataSet.getAttribute('name'));
}
function getSourceElement(edits, commMap) {
    var _a;
    const newDataSet = edits[0].node;
    const newParent = edits[1].parent;
    const newCtrlBlock = edits[1].node;
    const dataSet = Array.from(newDataSet.ownerDocument.querySelectorAll(`IED[name="${commMap.sourceIED}"] LN0 > DataSet`)).find(sclDataSet => !Array.from(newDataSet.querySelectorAll('FCDA')).some(newFcda => {
        const [prefix, lnClass, lnInst, doName, daName, fc] = [
            'prefix',
            'lnClass',
            'lnInst',
            'doName',
            'daName',
            'fc',
        ].map(attr => { var _a; return (_a = newFcda.getAttribute(attr)) !== null && _a !== void 0 ? _a : ''; });
        return !sclDataSet.querySelector(`FCDA[prefix="${prefix}"][lnClass="${lnClass}"][lnInst="${lnInst}"][doName="${doName}"][daName="${daName}"][fc="${fc}"]`);
    }));
    if (dataSet) {
        const parent = dataSet.parentElement;
        const ctrlBlock = (_a = dataSet.parentElement) === null || _a === void 0 ? void 0 : _a.querySelector(`:scope > *[datSet="${dataSet.getAttribute('name')}"]`);
        if (ctrlBlock && parent) {
            return { parent, ctrlBlock, dataSet };
        }
    }
    return { parent: newParent, ctrlBlock: newCtrlBlock, dataSet: newDataSet };
}
function clear(inp) {
    Object.keys(inp).forEach(key => {
        // eslint-disable-next-line no-param-reassign
        delete inp[key];
    });
}
/** An editor [[`plugin`]] to configure `Report`, `GOOSE`, `SampledValue` control blocks and its `DataSet` */
class SclCommMapGenerator extends s {
    constructor() {
        super(...arguments);
        /** SCL change indicator */
        this.editCount = -1;
    }
    createCommMap(commMapData) {
        commMapData.forEach(commMap => {
            const edits = [];
            const ctrlEdits = createControlBlock(commMap);
            const { parent, ctrlBlock, dataSet } = getSourceElement(ctrlEdits, commMap);
            if ((dataSet.parentElement !== null &&
                dataSet.parentElement === ctrlBlock.parentElement) || // there is a control block that is doing what I want already
                (existCtrlBlock(parent, ctrlBlock) && existDataSet(dataSet)))
                edits.push(...createExtRefs(commMap, { dataSet, parent, ctrlBlock }));
            else {
                existingControlBlocks.push({ parent, ctrlBlock, dataSet });
                edits.push(ctrlEdits, ...createExtRefs(commMap, { dataSet, parent, ctrlBlock }));
            }
            this.dispatchEvent(newEditEvent(edits));
        });
    }
    async run() {
        clear(inputs);
        createdExtRefs.length = 0;
        const commMapData = transform(this.doc);
        this.createCommMap(commMapData);
    }
}
SclCommMapGenerator.styles = i$2 `
    input {
      width: 0;
      height: 0;
      opacity: 0;
    }
  `;
__decorate([
    n$1({ attribute: false })
], SclCommMapGenerator.prototype, "doc", void 0);
__decorate([
    n$1({ type: Number })
], SclCommMapGenerator.prototype, "editCount", void 0);

export { SclCommMapGenerator as default };
//# sourceMappingURL=scl-comm-map-generator.js.map
