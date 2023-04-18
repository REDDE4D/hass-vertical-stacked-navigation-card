/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;class o{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}}const n=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new o(s,t,i)},l=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,i))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var a;const r=window,c=r.trustedTypes,d=c?c.emptyScript:"",h=r.reactiveElementPolyfillSupport,u={toAttribute(t,e){switch(e){case Boolean:t=t?d:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>e!==t&&(e==e||t==t),m={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:v};class p extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=m){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||m}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var i;const s=null!==(i=this.shadowRoot)&&void 0!==i?i:this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{e?i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((e=>{const s=document.createElement("style"),o=t.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=e.cssText,i.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=m){var s;const o=this.constructor._$Ep(t,i);if(void 0!==o&&!0===i.reflect){const n=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:u).toAttribute(e,i.type);this._$El=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,o=s._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=s.getPropertyOptions(o),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:u;this._$El=o,this[o]=n.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var g;p.finalized=!0,p.elementProperties=new Map,p.elementStyles=[],p.shadowRootOptions={mode:"open"},null==h||h({ReactiveElement:p}),(null!==(a=r.reactiveElementVersions)&&void 0!==a?a:r.reactiveElementVersions=[]).push("1.6.1");const f=window,b=f.trustedTypes,_=b?b.createPolicy("lit-html",{createHTML:t=>t}):void 0,y="$lit$",$=`lit$${(Math.random()+"").slice(9)}$`,x="?"+$,w=`<${x}>`,A=document,S=()=>A.createComment(""),C=t=>null===t||"object"!=typeof t&&"function"!=typeof t,E=Array.isArray,k="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,P=/>/g,z=RegExp(`>|${k}(?:([^\\s"'>=/]+)(${k}*=${k}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),U=/'/g,I=/"/g,H=/^(?:script|style|textarea|title)$/i,j=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),R=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),M=new WeakMap,L=A.createTreeWalker(A,129,null,!1),D=(t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":"",l=N;for(let e=0;e<i;e++){const i=t[e];let a,r,c=-1,d=0;for(;d<i.length&&(l.lastIndex=d,r=l.exec(i),null!==r);)d=l.lastIndex,l===N?"!--"===r[1]?l=O:void 0!==r[1]?l=P:void 0!==r[2]?(H.test(r[2])&&(o=RegExp("</"+r[2],"g")),l=z):void 0!==r[3]&&(l=z):l===z?">"===r[0]?(l=null!=o?o:N,c=-1):void 0===r[1]?c=-2:(c=l.lastIndex-r[2].length,a=r[1],l=void 0===r[3]?z:'"'===r[3]?I:U):l===I||l===U?l=z:l===O||l===P?l=N:(l=z,o=void 0);const h=l===z&&t[e+1].startsWith("/>")?" ":"";n+=l===N?i+w:c>=0?(s.push(a),i.slice(0,c)+y+i.slice(c)+$+h):i+$+(-2===c?(s.push(void 0),e):h)}const a=n+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==_?_.createHTML(a):a,s]};class B{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const l=t.length-1,a=this.parts,[r,c]=D(t,e);if(this.el=B.createElement(r,i),L.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=L.nextNode())&&a.length<l;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith(y)||e.startsWith($)){const i=c[n++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+y).split($),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?K:"?"===e[1]?Y:"@"===e[1]?Z:F})}else a.push({type:6,index:o})}for(const e of t)s.removeAttribute(e)}if(H.test(s.tagName)){const t=s.textContent.split($),e=t.length-1;if(e>0){s.textContent=b?b.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],S()),L.nextNode(),a.push({type:2,index:++o});s.append(t[e],S())}}}else if(8===s.nodeType)if(s.data===x)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf($,t+1));)a.push({type:7,index:o}),t+=$.length-1}o++}}static createElement(t,e){const i=A.createElement("template");return i.innerHTML=t,i}}function V(t,e,i=t,s){var o,n,l,a;if(e===R)return e;let r=void 0!==s?null===(o=i._$Co)||void 0===o?void 0:o[s]:i._$Cl;const c=C(e)?void 0:e._$litDirective$;return(null==r?void 0:r.constructor)!==c&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===c?r=void 0:(r=new c(t),r._$AT(t,i,s)),void 0!==s?(null!==(l=(a=i)._$Co)&&void 0!==l?l:a._$Co=[])[s]=r:i._$Cl=r),void 0!==r&&(e=V(t,r._$AS(t,e.values),r,s)),e}class q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:A).importNode(i,!0);L.currentNode=o;let n=L.nextNode(),l=0,a=0,r=s[0];for(;void 0!==r;){if(l===r.index){let e;2===r.type?e=new W(n,n.nextSibling,this,t):1===r.type?e=new r.ctor(n,r.name,r.strings,this,t):6===r.type&&(e=new G(n,this,t)),this._$AV.push(e),r=s[++a]}l!==(null==r?void 0:r.index)&&(n=L.nextNode(),l++)}return o}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class W{constructor(t,e,i,s){var o;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=null===(o=null==s?void 0:s.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=V(this,t,e),C(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==R&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>E(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&C(this._$AH)?this._$AA.nextSibling.data=t:this.$(A.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,o="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=B.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.v(i);else{const t=new q(o,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=M.get(t.strings);return void 0===e&&M.set(t.strings,e=new B(t)),e}T(t){E(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new W(this.k(S()),this.k(S()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class F{constructor(t,e,i,s,o){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=T}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=V(this,t,e,0),n=!C(t)||t!==this._$AH&&t!==R,n&&(this._$AH=t);else{const s=t;let l,a;for(t=o[0],l=0;l<o.length-1;l++)a=V(this,s[i+l],e,l),a===R&&(a=this._$AH[l]),n||(n=!C(a)||a!==this._$AH[l]),a===T?t=T:t!==T&&(t+=(null!=a?a:"")+o[l+1]),this._$AH[l]=a}n&&!s&&this.j(t)}j(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class K extends F{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===T?void 0:t}}const J=b?b.emptyScript:"";class Y extends F{constructor(){super(...arguments),this.type=4}j(t){t&&t!==T?this.element.setAttribute(this.name,J):this.element.removeAttribute(this.name)}}class Z extends F{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=V(this,t,e,0))&&void 0!==i?i:T)===R)return;const s=this._$AH,o=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==T&&(s===T||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class G{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){V(this,t)}}const Q=f.litHtmlPolyfillSupport;null==Q||Q(B,W),(null!==(g=f.litHtmlVersions)&&void 0!==g?g:f.litHtmlVersions=[]).push("2.7.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var X,tt;class et extends p{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var s,o;const n=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new W(e.insertBefore(S(),t),t,void 0,null!=i?i:{})}return l._$AI(t),l})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return R}}et.finalized=!0,et._$litElement$=!0,null===(X=globalThis.litElementHydrateSupport)||void 0===X||X.call(globalThis,{LitElement:et});const it=globalThis.litElementPolyfillSupport;null==it||it({LitElement:et}),(null!==(tt=globalThis.litElementVersions)&&void 0!==tt?tt:globalThis.litElementVersions=[]).push("3.3.1");const st=n`
  .nav-item-container .nav-item span {
    font-size: var(--main-font-size, 20px);
  }

  .nav-item-container .sub-nav-items .sub-item span {
    font-size: var(--sub-font-size, 14px);
  }

  ha-card header {
    padding-top: 10px;
    padding-left: 16px;
    padding-bottom: 20px;
    font-weight: bold;
    font-size: 20px;
  }
  .nav-item-container {
    margin-bottom: 5px;
  }
  .nav-item {
    display: flex;
    align-items: center;
    text-decoration: none;
    background-color: var(--main-background-color, rgba(255, 255, 255, 0.2));
    padding: 10px;
    color: var(--main-text-color, #fff);
    border-radius: 5px;
    position: relative;
  }

  .unfolded {
    border-bottom-right-radius: 0 !important;
  }

  .sub-item {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--sub-text-color, #fff);
    position: relative;
    padding: 5px;
    background-color: var(--sub-background-color, rgba(255, 255, 255, 0.2));
    margin-left: 15px;
    padding-left: 25px;
    border-radius: none;
  }
  .sub-item:first-child {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  .sub-item:last-child {
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  .nav-item:hover {
    background-color: var(--main-hover-color, rgba(255, 255, 255, 0.3));
  }
  .nav-item.active {
    background-color: var(--main-active-color, rgba(55, 55, 255, 0.5));
  }
  .subnav-indicator {
    position: absolute;
    right: 5px;
  }
  ha-icon {
    margin-right: 5px;
  }
  .sub-nav-items {
    display: none;
  }
  .sub-nav-items.open {
    display: block;
  }
  .sub-item:hover {
    background-color: var(--sub-hover-color, rgba(255, 255, 255, 0.3));
  }
  .sub-item.active {
    background-color: var(--sub-active-color, rgba(55, 55, 255, 0.5));
  }
`,ot=n`
  .card-config {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  .nav-items-header {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
  }

  .main-nav-name {
    width: 100%;
  }

  .nav-items {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .nav-item {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
    border: 0.5px solid;
    border-radius: 10px;
    border-color: rgba(255, 255, 255, 0.3);
    padding: 8px;
  }

  .nav-item-main-config {
    display: flex;
    flex-direction: column;
  }

  .nav-item-options {
    display: grid;
    grid-template-columns: repeat(3, 1fr) auto;
    align-items: center;
    gap: 10px;
  }

  .sub-nav-items {
    display: flex;
    flex-direction: column;
    margin-top: 8px;
  }

  .sub-nav-item {
    display: flex;
    flex-direction: column;
    border: 0.5px solid;
    border-radius: 10px;
    border-color: rgba(255, 255, 255, 0.3);
    padding: 8px;
    margin-bottom: 5px;
  }

  .sub-nav-item-main-config {
    display: flex;
    flex-direction: column;
  }

  .main-config-row {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 8px;
  }

  .input-icon-picker {
    width: 40%;
  }

  .input-name {
    width: 60%;
    margin-left: 10px;
  }

  .destination-input {
    width: 100%;
  }

  .sub-nav-item-options {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
  }

  .add-nav-item {
    border-radius: 5px;
  }

  .add-sub-nav-item {
    color: var(--primary-color);
    border-radius: 5px;
  }

  .remove-nav-item {
    color: var(--danger-color);
    border-radius: 5px;
  }

  .remove-sub-nav-item {
    color: var(--danger-color);
    border-radius: 5px;
  }

  .custom-styles,
  .custom-colors,
  .custom-textcolor,
  .custom-hover,
  .custom-active,
  .custom-background,
  .custom-fontsize,
  .custom-textsize,
  .custom-iconsize {
    margin-top: 16px;
    padding: 8px;
    border-radius: 4px;
  }

  .custom-styles summary,
  .custom-colors summary,
  .custom-textcolor summary,
  .custom-hover summary,
  .custom-active summary,
  .custom-background summary,
  .custom-fontsize summary,
  .custom-textsize summary,
  .custom-iconsize summary {
    font-weight: bold;
    cursor: pointer;
    user-select: none;
    color: var(--primary-text-color);
  }

  .custom-styles {
    border: 1px solid var(--divider-color);
  }

  .custom-colors,
  .custom-textcolor,
  .custom-hover,
  .custom-active,
  .custom-background,
  .custom-fontsize,
  .custom-textsize,
  .custom-iconsize {
    background-color: var(--card-background-color);
    border: 1px solid var(--divider-color);
  }

  .details-row {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .color-preview {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.3);
  }

  .custon-style-input {
    width: 100%;
  }
`;function nt(t,e,i,s){var o,n=arguments.length,l=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(l=(n<3?o(l):n>3?o(e,i,l):o(e,i))||l);return n>3&&l&&Object.defineProperty(e,i,l),l}function lt(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const at=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function rt(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):at(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function ct(t){return rt({...t,state:!0})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var dt;null===(dt=window.HTMLSlotElement)||void 0===dt||dt.prototype.assignedElements;class ht extends Event{constructor(t){super("config-changed",{bubbles:!0,composed:!0}),this.detail={config:t}}}let ut=class extends et{constructor(){super(...arguments),this.label="",this.placeholder="",this.value="",this.destinations=[],this.isOpen=!1}static get styles(){return n`
      .dropdown {
        position: absolute;
        background-color: var(--primary-background-color);
        z-index: 1;
        display: none;
      }

      .dropdown.open {
        display: block;
      }

      .option {
        padding: 8px;
        cursor: pointer;
      }

      .option:hover {
        background-color: var(--primary-color);
      }
    `}connectedCallback(){super.connectedCallback(),this.fetchDestinations()}async fetchDestinations(){if(this.hass){const t=await this.hass.callWS({type:"lovelace/config"});this.destinations=t.views.map((t=>`/lovelace/${t.path||t.title}`))}}handleInput(t){const e=t.target;this.value=e.value,this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value}})),this.isOpen=!0}handleBlur(){setTimeout((()=>{this.isOpen=!1}),100)}handleItemClick(t){this.value=t,this.isOpen=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value}}))}render(){return j`
      <div style="position: relative;">
        <ha-textfield
          .label="${this.label}"
          style="width: 100%;"
          .placeholder="${this.placeholder}"
          .value="${this.value}"
          @input="${this.handleInput}"
          @blur="${this.handleBlur}"
        ></ha-textfield>
        <div class="dropdown ${this.isOpen?"open":""}">
          ${this.destinations.map((t=>j`
              <div
                class="option"
                @click="${()=>this.handleItemClick(t)}"
              >
                ${t}
              </div>
            `))}
        </div>
      </div>
    `}};nt([rt({attribute:!1}),lt("design:type",Object)],ut.prototype,"hass",void 0),nt([rt(),lt("design:type",Object)],ut.prototype,"label",void 0),nt([rt(),lt("design:type",Object)],ut.prototype,"placeholder",void 0),nt([rt(),lt("design:type",Object)],ut.prototype,"value",void 0),nt([ct(),lt("design:type",Array)],ut.prototype,"destinations",void 0),nt([ct(),lt("design:type",Object)],ut.prototype,"isOpen",void 0),ut=nt([(t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){customElements.define(t,e)}}})(t,e))("destination-input")],ut);class vt extends(function(t){return class extends t{navNameChanged(t){if(!this._config||!t.target)return;const e=t.target,i=Object.assign({},this._config);i.nav_name=e.value,this._config=i;const s=new ht(i);this.dispatchEvent(s)}addNavItem(t){if(!this._config||!t.target)return;const e=Object.assign({},this._config);e.nav_items||(e.nav_items=[]),e.nav_items.push({name:"New Item",icon:"mdi:home",destination:""}),this._config=e;const i=new ht(e);this.dispatchEvent(i)}removeNavItem(t,e){if(!this._config||!t.target)return;t.target;const i=Object.assign({},this._config);i.nav_items.splice(e,1),this._config=i;const s=new ht(i);this.dispatchEvent(s)}navItemChanged(t,e,i){if(!this._config||!t.target)return;const s=t.target,o=Object.assign({},this._config);let n;n="value-changed"===t.type?t.detail.value:s.value,o.nav_items[e][i]="active"===i||"unfolded"===i?s.checked:n,this._config=o;const l=new ht(o);this.dispatchEvent(l)}addSubNavItem(t,e){if(!this._config||!t.target)return;t.target;const i=Object.assign({},this._config),s=i.nav_items[e];if(s){s.sub_nav_items||(s.sub_nav_items=[]),s.sub_nav_items.push({name:"New Sub Item",icon:"mdi:home",destination:"lovelace"}),this._config=i;const t=new ht(i);this.dispatchEvent(t)}}removeSubNavItem(t,e,i){var s;if(!this._config||!t.target)return;const o=Object.assign({},this._config),n=null===(s=o.nav_items[e])||void 0===s?void 0:s.sub_nav_items;if(n){n.splice(i,1),0===n.length&&delete o.nav_items[e].sub_nav_items,this._config=o;const t=new ht(o);this.dispatchEvent(t)}}subNavItemChanged(t,e,i,s){var o,n;if(!this._config||!t.target)return;const l=t.target,a=Object.assign({},this._config),r=null===(n=null===(o=a.nav_items[e])||void 0===o?void 0:o.sub_nav_items)||void 0===n?void 0:n[i];if(r){let e;e="value-changed"===t.type?t.detail.value:l.value,r[s]="active"===s?l.checked:e,this._config=a;const i=new ht(a);this.dispatchEvent(i)}}customStyleColorsChanged(t,e,i){if(!this._config||!t.target)return;const s=t.target,o=Object.assign({},this._config);o.custom_styles||(o.custom_styles={}),o.custom_styles.colors||(o.custom_styles.colors={}),o.custom_styles.colors[e]||(o.custom_styles.colors[e]={}),s.value?o.custom_styles.colors[e][i]=s.value:delete o.custom_styles.colors[e][i],this._config=o;const n=new ht(o);this.dispatchEvent(n),this.requestUpdate()}customStyleFontSizeChanged(t,e,i){if(!this._config||!t.target)return;const s=t.target,o=Object.assign({},this._config);o.custom_styles||(o.custom_styles={}),o.custom_styles.font_size||(o.custom_styles.font_size={}),o.custom_styles.font_size[e]||(o.custom_styles.font_size[e]={}),s.value?o.custom_styles.font_size[e][i]=s.value:delete o.custom_styles.font_size[e][i],this._config=o;const n=new ht(o);this.dispatchEvent(n)}}}(et)){constructor(){super(...arguments),this._config={nav_name:"",nav_items:[]},this.card=null}setConfig(t){if(!t.nav_items)throw new Error("You need to define nav_items");this._config=t,this.card=document.querySelector("vertical-stacked-navigation-card")}static get styles(){return ot}updated(t){this.card&&this.card.setConfig(this._config)}render(){var t,e,i,s,o,n,l,a,r,c,d,h,u,v,m,p,g,f,b,_,y,$,x,w,A,S,C,E,k,N,O,P,z,U,I,H,R,T,M,L,D,B,V,q,W,F,K,J,Y,Z,G,Q,X,tt;return this.hass&&this._config?j`
      <header>
        <ha-textfield
          label="Nav Name"
          class="main-nav-name"
          .value="${this._config.nav_name||""}"
          placeholder="My Custom Navigation"
          @change="${this.navNameChanged}"
        ></ha-textfield>
      </header>
      <div class="nav-items">
        <div class="nav-items-header">
          <h3>Navigation Items</h3>
          <mwc-button
            class="add-nav-item"
            @click="${t=>this.addNavItem(t)}"
          >
            <ha-icon .icon=${"mdi:plus"}></ha-icon> Add Nav Item
          </mwc-button>
        </div>
        ${this._config.nav_items.map(((t,e)=>{var i;return j`
            <div class="nav-item" index="${e}">
              <div class="nav-item-main-config">
                <div class="main-config-row">
                  <ha-icon-picker
                    label="Icon"
                    class="input-icon-picker"
                    placeholder="mdi:home"
                    .value="${t.icon||""}"
                    @value-changed="${t=>this.navItemChanged(t,e,"icon")}"
                  ></ha-icon-picker>
                  <ha-textfield
                    label="Name"
                    class="input-name"
                    placeholder="Home"
                    .value="${t.name||""}"
                    @change="${t=>this.navItemChanged(t,e,"name")}"
                  ></ha-textfield>
                </div>
                <div class="main-config-row">
                  <destination-input
                    placeholder="/lovelace/home"
                    class="destination-input"
                    label="Destination"
                    .value="${t.destination||""}"
                    .hass="${this.hass}"
                    @change="${t=>this.navItemChanged(t,e,"destination")}"
                  ></destination-input>
                </div>
              </div>
              <div class="nav-item-options">
                <ha-formfield>
                  <ha-switch
                    type="checkbox"
                    ?checked=${t.active}
                    @change="${t=>this.navItemChanged(t,e,"active")}"
                  ></ha-switch>
                  <label class="mdc-label">Active</label>
                </ha-formfield>
                ${(null==t?void 0:t.sub_nav_items)&&t.sub_nav_items.length>0?j`
                      <ha-formfield>
                        <ha-switch
                          type="checkbox"
                          ?checked=${t.unfolded}
                          @change="${t=>this.navItemChanged(t,e,"unfolded")}"
                        ></ha-switch>
                        <label class="mdc-label">Unfolded</label>
                      </ha-formfield>
                    `:""}
                <mwc-button
                  class="add-sub-nav-item"
                  @click="${t=>this.addSubNavItem(t,e)}"
                >
                  <ha-icon .icon=${"mdi:plus"}></ha-icon>
                </mwc-button>
                <mwc-button
                  class="remove-nav-item"
                  @click="${t=>this.removeNavItem(t,e)}"
                >
                  <ha-icon .icon=${"mdi:delete"}></ha-icon>
                </mwc-button>
              </div>
              ${(null==t?void 0:t.sub_nav_items)&&t.sub_nav_items.length>0?j`
                    <div class="sub-nav-items">
                      <details>
                        <summary>Sub Navigation Items</summary>
                        ${null===(i=null==t?void 0:t.sub_nav_items)||void 0===i?void 0:i.map(((t,i)=>j`
                              <div
                                class="sub-nav-item"
                                index="${i}"
                              >
                                <div class="sub-nav-item-main-config">
                                  <div class="main-config-row">
                                    <ha-icon-picker
                                      label="Icon"
                                      placeholder="mdi:home"
                                      class="input-icon-picker"
                                      .value="${t.icon||""}"
                                      @value-changed="${t=>this.subNavItemChanged(t,e,i,"icon")}"
                                    ></ha-icon-picker>
                                    <ha-textfield
                                      label="Name"
                                      placeholder="Home"
                                      class="input-name"
                                      .value="${t.name||""}"
                                      @change="${t=>this.subNavItemChanged(t,e,i,"name")}"
                                    ></ha-textfield>
                                  </div>
                                  <div class="main-config-row">
                                    <destination-input
                                      label="Destination"
                                      class="destination-input"
                                      placeholder="/lovelace/home"
                                      .value="${t.destination||""}"
                                      .hass="${this.hass}"
                                      @change="${t=>this.subNavItemChanged(t,e,i,"destination")}"
                                    ></destination-input>
                                  </div>
                                </div>
                                <div class="sub-nav-item-options">
                                  <ha-formfield>
                                    <ha-switch
                                      type="checkbox"
                                      ?checked=${t.active}
                                      @change="${t=>this.subNavItemChanged(t,e,i,"active")}"
                                    ></ha-switch>
                                    <label class="mdc-label">Active</label>
                                  </ha-formfield>
                                  <mwc-button
                                    class="remove-sub-nav-item"
                                    @click="${t=>this.removeSubNavItem(t,e,i)}"
                                  >
                                    <ha-icon .icon=${"mdi:delete"}></ha-icon>
                                  </mwc-button>
                                </div>
                              </div>
                            `))}
                      <details>
                    </div>
                    `:""}
            </div>
          `}))}
      </div>
      <h3>Custom Styles</h3>
      <details class="custom-styles">
        <summary>Custom Styles</summary>
        <details class="custom-colors">
          <summary>Colors</summary>
          <details class="custom-textcolor">
            <summary>Text Color</summary>
            <div class="details-row">
              <div
                class="color-preview text-main"
                style="background-color: ${(null===(i=null===(e=null===(t=this._config.custom_styles)||void 0===t?void 0:t.colors)||void 0===e?void 0:e.text)||void 0===i?void 0:i.main)||""};"
              ></div>
              <ha-textfield
                label="Main"
                class="custom-style-input"
                placeholder="rgba(255, 255, 255, 1)"
                .value="${(null===(n=null===(o=null===(s=this._config.custom_styles)||void 0===s?void 0:s.colors)||void 0===o?void 0:o.text)||void 0===n?void 0:n.main)||""}"
                @change="${t=>this.customStyleColorsChanged(t,"text","main")}"
              ></ha-textfield>
            </div>
            <div class="details-row">
              <div
                class="color-preview text-sub"
                style="background-color: ${(null===(r=null===(a=null===(l=this._config.custom_styles)||void 0===l?void 0:l.colors)||void 0===a?void 0:a.text)||void 0===r?void 0:r.sub)||""};"
              ></div>
              <ha-textfield
                label="Sub"
                class="custom-style-input"
                placeholder="rgba(255, 255, 255, 0.5)"
                .value="${(null===(h=null===(d=null===(c=this._config.custom_styles)||void 0===c?void 0:c.colors)||void 0===d?void 0:d.text)||void 0===h?void 0:h.sub)||""}"
                @change="${t=>this.customStyleColorsChanged(t,"text","sub")}"
              ></ha-textfield>
            </div>
          </details>

          <details class="custom-hover">
            <summary>Hover Color</summary>
            <div class="details-row">
              <div
                class="color-preview hover-main"
                style="background-color: ${(null===(m=null===(v=null===(u=this._config.custom_styles)||void 0===u?void 0:u.colors)||void 0===v?void 0:v.hover)||void 0===m?void 0:m.main)||""};"
              ></div>
              <ha-textfield
                label="Main"
                class="custom-style-input"
                placeholder="rgba(255, 255, 255, 0.1)"
                .value="${(null===(f=null===(g=null===(p=this._config.custom_styles)||void 0===p?void 0:p.colors)||void 0===g?void 0:g.hover)||void 0===f?void 0:f.main)||""}"
                @change="${t=>this.customStyleColorsChanged(t,"hover","main")}"
              ></ha-textfield>
            </div>
            <div class="details-row">
              <div
                class="color-preview hover-sub"
                style="background-color: ${(null===(y=null===(_=null===(b=this._config.custom_styles)||void 0===b?void 0:b.colors)||void 0===_?void 0:_.hover)||void 0===y?void 0:y.sub)||""};"
              ></div>
              <ha-textfield
                label="Sub"
                class="custom-style-input"
                placeholder="rgba(255, 255, 255, 0.05)"
                .value="${(null===(w=null===(x=null===($=this._config.custom_styles)||void 0===$?void 0:$.colors)||void 0===x?void 0:x.hover)||void 0===w?void 0:w.sub)||""}"
                @change="${t=>this.customStyleColorsChanged(t,"hover","sub")}"
              ></ha-textfield>
            </div>
          </details>
          <details class="custom-active">
            <summary>Active Color</summary>
            <div class="details-row">
              <div
                class="color-preview active-main"
                style="background-color: ${(null===(C=null===(S=null===(A=this._config.custom_styles)||void 0===A?void 0:A.colors)||void 0===S?void 0:S.active)||void 0===C?void 0:C.main)||""};"
              ></div>
              <ha-textfield
                label="Main"
                class="custom-style-input"
                placeholder="rgba(255, 255, 255, 0.2)"
                .value="${(null===(N=null===(k=null===(E=this._config.custom_styles)||void 0===E?void 0:E.colors)||void 0===k?void 0:k.active)||void 0===N?void 0:N.main)||""}"
                @change="${t=>this.customStyleColorsChanged(t,"active","main")}"
              ></ha-textfield>
            </div>
            <div class="details-row">
              <div
                class="color-preview active-sub"
                style="background-color: ${(null===(z=null===(P=null===(O=this._config.custom_styles)||void 0===O?void 0:O.colors)||void 0===P?void 0:P.active)||void 0===z?void 0:z.sub)||""};"
              ></div>
              <ha-textfield
                label="Sub"
                class="custom-style-input"
                placeholder="rgba(255, 255, 255, 0.1)"
                .value="${(null===(H=null===(I=null===(U=this._config.custom_styles)||void 0===U?void 0:U.colors)||void 0===I?void 0:I.active)||void 0===H?void 0:H.sub)||""}"
                @change="${t=>this.customStyleColorsChanged(t,"active","sub")}"
              ></ha-textfield>
            </div>
          </details>
          <details class="custom-background">
            <summary>Background Color</summary>
            <div class="details-row">
              <div
                class="color-preview background-main"
                style="background-color: ${(null===(M=null===(T=null===(R=this._config.custom_styles)||void 0===R?void 0:R.colors)||void 0===T?void 0:T.background)||void 0===M?void 0:M.main)||""};"
              ></div>
              <ha-textfield
                label="Main"
                class="custom-style-input"
                placeholder="rgba(0, 0, 0, 0.5)"
                .value="${(null===(B=null===(D=null===(L=this._config.custom_styles)||void 0===L?void 0:L.colors)||void 0===D?void 0:D.background)||void 0===B?void 0:B.main)||""}"
                @change="${t=>this.customStyleColorsChanged(t,"background","main")}"
              ></ha-textfield>
            </div>
            <div class="details-row">
              <div
                class="color-preview background-sub"
                style="background-color: ${(null===(W=null===(q=null===(V=this._config.custom_styles)||void 0===V?void 0:V.colors)||void 0===q?void 0:q.background)||void 0===W?void 0:W.sub)||""};"
              ></div>
              <ha-textfield
                label="Sub"
                class="custom-style-input"
                placeholder="rgba(0, 0, 0, 0.3)"
                .value="${(null===(J=null===(K=null===(F=this._config.custom_styles)||void 0===F?void 0:F.colors)||void 0===K?void 0:K.background)||void 0===J?void 0:J.sub)||""}"
                @change="${t=>this.customStyleColorsChanged(t,"background","sub")}"
              ></ha-textfield>
            </div>
          </details>
        </details>
        <details class="custom-fontsize">
          <summary>Fontsize</summary>
          <details class="custom-textsize">
            <summary>Text Size</summary>
            <ha-textfield
              label="Main"
              placeholder="1.2rem"
              .value="${(null===(G=null===(Z=null===(Y=this._config.custom_styles)||void 0===Y?void 0:Y.font_size)||void 0===Z?void 0:Z.text)||void 0===G?void 0:G.main)||""}"
              @change="${t=>this.customStyleFontSizeChanged(t,"text","main")}"
            ></ha-textfield>
            <ha-textfield
              label="Sub"
              placeholder="0.8rem"
              .value="${(null===(tt=null===(X=null===(Q=this._config.custom_styles)||void 0===Q?void 0:Q.font_size)||void 0===X?void 0:X.text)||void 0===tt?void 0:tt.sub)||""}"
              @change="${t=>this.customStyleFontSizeChanged(t,"text","sub")}"
            ></ha-textfield>
          </details>
        </details>
      </details>
    `:j``}}nt([rt({attribute:!1}),lt("design:type",Object)],vt.prototype,"hass",void 0),nt([rt(),lt("design:type",Object)],vt.prototype,"_config",void 0),customElements.define("vertical-stacked-navigation-card-editor",vt);class mt extends et{constructor(){super(...arguments),this.content=null,this.isContentSet=!1}static get styles(){return st}static getConfigElement(){return document.createElement("vertical-stacked-navigation-card-editor")}static getStubConfig(){return{nav_name:"Navigation",nav_items:[{name:"Home",icon:"mdi:home",destination:"/lovelace/0"},{name:"Lights",icon:"mdi:lightbulb",sub_nav_items:[{name:"Living Room",icon:"mdi:lightbulb",destination:"/lovelace/1"}]}]}}render(){const t=this.config.nav_items.map(((t,e)=>{const i=t.active?"active":"",s=t.sub_nav_items?t.sub_nav_items.map((t=>j`
              <a
                href="${t.destination}"
                class="sub-item ${t.active?"active":""} nav-item-${e}"
              >
                <ha-icon icon="${t.icon}"></ha-icon>
                <span>${t.name}</span>
              </a>
            `)):"";return j`
        <div class="nav-item-container">
          <a
            href="${t.sub_nav_items?"#":t.destination}"
            class="nav-item ${i} ${t.unfolded?"unfolded":""} nav-item-${e}"
            @click=${t.sub_nav_items?this._toggleSubnav:null}
          >
            <ha-icon icon="${t.icon}"></ha-icon>
            <span>${t.name}</span>
            ${t.sub_nav_items?j`<ha-icon
                  icon="mdi:chevron-down"
                  class="subnav-indicator"
                ></ha-icon>`:""}
          </a>
          <div
            class="sub-nav-items"
            style="display: ${t.unfolded?"block":"none"}"
          >
            ${s}
          </div>
        </div>
      `}));return j`
      <ha-card>
        ${"none"!==this.config.nav_name?j`
              <header>
                <style>
                  header {
                    padding-top: 10px;
                    padding-left: 16px;
                    padding-bottom: 20px;
                    font-weight: bold;
                    font-size: 20px;
                  }
                </style>
                ${this.config.nav_name||"My Custom Navigation"}
              </header>
            `:""}
        <div class="card-content">${t}</div>
      </ha-card>
    `}updated(t){var e,i,s,o,n,l,a,r,c,d,h,u,v,m,p,g,f,b,_,y;if(this.content||(this.content=this.shadowRoot.querySelector(".card-content")),!this.isContentSet&&this.content&&this.config.custom_styles){const{colors:t,font_size:$}=this.config.custom_styles;t&&(this.style.setProperty("--main-background-color",null!==(i=null===(e=t.background)||void 0===e?void 0:e.main)&&void 0!==i?i:null),this.style.setProperty("--sub-background-color",null!==(o=null===(s=t.background)||void 0===s?void 0:s.sub)&&void 0!==o?o:null),this.style.setProperty("--main-text-color",null!==(l=null===(n=t.text)||void 0===n?void 0:n.main)&&void 0!==l?l:null),this.style.setProperty("--sub-text-color",null!==(r=null===(a=t.text)||void 0===a?void 0:a.sub)&&void 0!==r?r:null),this.style.setProperty("--main-hover-color",null!==(d=null===(c=t.hover)||void 0===c?void 0:c.main)&&void 0!==d?d:null),this.style.setProperty("--sub-hover-color",null!==(u=null===(h=t.hover)||void 0===h?void 0:h.sub)&&void 0!==u?u:null),this.style.setProperty("--main-active-color",null!==(m=null===(v=t.active)||void 0===v?void 0:v.main)&&void 0!==m?m:null),this.style.setProperty("--sub-active-color",null!==(g=null===(p=t.active)||void 0===p?void 0:p.sub)&&void 0!==g?g:null)),$&&(this.style.setProperty("--main-font-size",null!==(b=null===(f=$.text)||void 0===f?void 0:f.main)&&void 0!==b?b:null),this.style.setProperty("--sub-font-size",null!==(y=null===(_=$.text)||void 0===_?void 0:_.sub)&&void 0!==y?y:null))}}setConfig(t){if(!t.nav_items)throw new Error("You need to define nav_items");this.config=t,this.requestUpdate()}getCardSize(){return 1*this.config.nav_items.length}_toggleSubnav(t){t.preventDefault();const e=t.target.closest(".nav-item-container");if(!e||!e.querySelector(".sub-nav-items"))return;const i=e.querySelector(".sub-nav-items"),s=e.querySelector(".nav-item");"block"===i.style.display?(i.style.display="none",s.classList.remove("unfolded")):(i.style.display="block",s.classList.add("unfolded"))}}customElements.define("vertical-stacked-navigation-card",mt),window.customCards=window.customCards||[],window.customCards.push({type:"vertical-stacked-navigation-card",name:"Vertical Stacked Navigation Card",description:"A vertical stacked navigation card"});export{mt as VerticalStackedNavCard};
