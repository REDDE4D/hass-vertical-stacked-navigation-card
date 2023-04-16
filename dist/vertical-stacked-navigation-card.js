/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),n=new WeakMap;class s{constructor(t,e,n){if(this._$cssResult$=!0,n!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=n.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n.set(i,t))}return t}toString(){return this.cssText}}const o=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1]),t[0]);return new s(n,t,i)},r=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,i))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var a;const l=window,c=l.trustedTypes,d=c?c.emptyScript:"",h=l.reactiveElementPolyfillSupport,u={toAttribute(t,e){switch(e){case Boolean:t=t?d:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>e!==t&&(e==e||t==t),p={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:v};class m extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const n=this._$Ep(i,e);void 0!==n&&(this._$Ev.set(n,i),t.push(n))})),t}static createProperty(t,e=p){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||p}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var i;const n=null!==(i=this.shadowRoot)&&void 0!==i?i:this.attachShadow(this.constructor.shadowRootOptions);return((i,n)=>{e?i.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),s=t.litNonce;void 0!==s&&n.setAttribute("nonce",s),n.textContent=e.cssText,i.appendChild(n)}))})(n,this.constructor.elementStyles),n}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=p){var n;const s=this.constructor._$Ep(t,i);if(void 0!==s&&!0===i.reflect){const o=(void 0!==(null===(n=i.converter)||void 0===n?void 0:n.toAttribute)?i.converter:u).toAttribute(e,i.type);this._$El=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(void 0!==s&&this._$El!==s){const t=n.getPropertyOptions(s),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:u;this._$El=s,this[s]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var g;m.finalized=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null==h||h({ReactiveElement:m}),(null!==(a=l.reactiveElementVersions)&&void 0!==a?a:l.reactiveElementVersions=[]).push("1.6.1");const f=window,_=f.trustedTypes,b=_?_.createPolicy("lit-html",{createHTML:t=>t}):void 0,$="$lit$",y=`lit$${(Math.random()+"").slice(9)}$`,A="?"+y,x=`<${A}>`,E=document,w=()=>E.createComment(""),S=t=>null===t||"object"!=typeof t&&"function"!=typeof t,C=Array.isArray,k="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,P=/-->/g,O=/>/g,I=RegExp(`>|${k}(?:([^\\s"'>=/]+)(${k}*=${k}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),U=/'/g,H=/"/g,R=/^(?:script|style|textarea|title)$/i,j=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),T=Symbol.for("lit-noChange"),z=Symbol.for("lit-nothing"),M=new WeakMap,D=E.createTreeWalker(E,129,null,!1),L=(t,e)=>{const i=t.length-1,n=[];let s,o=2===e?"<svg>":"",r=N;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,d=0;for(;d<i.length&&(r.lastIndex=d,l=r.exec(i),null!==l);)d=r.lastIndex,r===N?"!--"===l[1]?r=P:void 0!==l[1]?r=O:void 0!==l[2]?(R.test(l[2])&&(s=RegExp("</"+l[2],"g")),r=I):void 0!==l[3]&&(r=I):r===I?">"===l[0]?(r=null!=s?s:N,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?I:'"'===l[3]?H:U):r===H||r===U?r=I:r===P||r===O?r=N:(r=I,s=void 0);const h=r===I&&t[e+1].startsWith("/>")?" ":"";o+=r===N?i+x:c>=0?(n.push(a),i.slice(0,c)+$+i.slice(c)+y+h):i+y+(-2===c?(n.push(void 0),e):h)}const a=o+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==b?b.createHTML(a):a,n]};class B{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,o=0;const r=t.length-1,a=this.parts,[l,c]=L(t,e);if(this.el=B.createElement(l,i),D.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(n=D.nextNode())&&a.length<r;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const e of n.getAttributeNames())if(e.endsWith($)||e.startsWith(y)){const i=c[o++];if(t.push(e),void 0!==i){const t=n.getAttribute(i.toLowerCase()+$).split(y),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:s,name:e[2],strings:t,ctor:"."===e[1]?J:"?"===e[1]?Z:"@"===e[1]?F:K})}else a.push({type:6,index:s})}for(const e of t)n.removeAttribute(e)}if(R.test(n.tagName)){const t=n.textContent.split(y),e=t.length-1;if(e>0){n.textContent=_?_.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],w()),D.nextNode(),a.push({type:2,index:++s});n.append(t[e],w())}}}else if(8===n.nodeType)if(n.data===A)a.push({type:2,index:s});else{let t=-1;for(;-1!==(t=n.data.indexOf(y,t+1));)a.push({type:7,index:s}),t+=y.length-1}s++}}static createElement(t,e){const i=E.createElement("template");return i.innerHTML=t,i}}function V(t,e,i=t,n){var s,o,r,a;if(e===T)return e;let l=void 0!==n?null===(s=i._$Co)||void 0===s?void 0:s[n]:i._$Cl;const c=S(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,n)),void 0!==n?(null!==(r=(a=i)._$Co)&&void 0!==r?r:a._$Co=[])[n]=l:i._$Cl=l),void 0!==l&&(e=V(t,l._$AS(t,e.values),l,n)),e}class q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:E).importNode(i,!0);D.currentNode=s;let o=D.nextNode(),r=0,a=0,l=n[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new W(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new G(o,this,t)),this._$AV.push(e),l=n[++a]}r!==(null==l?void 0:l.index)&&(o=D.nextNode(),r++)}return s}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class W{constructor(t,e,i,n){var s;this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=null===(s=null==n?void 0:n.isConnected)||void 0===s||s}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=V(this,t,e),S(t)?t===z||null==t||""===t?(this._$AH!==z&&this._$AR(),this._$AH=z):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>C(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==z&&S(this._$AH)?this._$AA.nextSibling.data=t:this.$(E.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,s="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=B.createElement(n.h,this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===s)this._$AH.v(i);else{const t=new q(s,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=M.get(t.strings);return void 0===e&&M.set(t.strings,e=new B(t)),e}T(t){C(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new W(this.k(w()),this.k(w()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class K{constructor(t,e,i,n,s){this.type=1,this._$AH=z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=z}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let o=!1;if(void 0===s)t=V(this,t,e,0),o=!S(t)||t!==this._$AH&&t!==T,o&&(this._$AH=t);else{const n=t;let r,a;for(t=s[0],r=0;r<s.length-1;r++)a=V(this,n[i+r],e,r),a===T&&(a=this._$AH[r]),o||(o=!S(a)||a!==this._$AH[r]),a===z?t=z:t!==z&&(t+=(null!=a?a:"")+s[r+1]),this._$AH[r]=a}o&&!n&&this.j(t)}j(t){t===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class J extends K{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===z?void 0:t}}const Y=_?_.emptyScript:"";class Z extends K{constructor(){super(...arguments),this.type=4}j(t){t&&t!==z?this.element.setAttribute(this.name,Y):this.element.removeAttribute(this.name)}}class F extends K{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=V(this,t,e,0))&&void 0!==i?i:z)===T)return;const n=this._$AH,s=t===z&&n!==z||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==z&&(n===z||s);s&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class G{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){V(this,t)}}const Q=f.litHtmlPolyfillSupport;null==Q||Q(B,W),(null!==(g=f.litHtmlVersions)&&void 0!==g?g:f.litHtmlVersions=[]).push("2.7.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var X,tt;class et extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var n,s;const o=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:e;let r=o._$litPart$;if(void 0===r){const t=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:null;o._$litPart$=r=new W(e.insertBefore(w(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return T}}et.finalized=!0,et._$litElement$=!0,null===(X=globalThis.litElementHydrateSupport)||void 0===X||X.call(globalThis,{LitElement:et});const it=globalThis.litElementPolyfillSupport;null==it||it({LitElement:et}),(null!==(tt=globalThis.litElementVersions)&&void 0!==tt?tt:globalThis.litElementVersions=[]).push("3.3.1");const nt=o`
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
    font-size: var(--main-font-size, 20px);
    position: relative;
  }
  .nav-item.unfolded {
    border-bottom-right-radius: none !important;
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
    font-size: var(--sub-font-size, 14px);
    border-radius: none;
  }
  .sub-item:first-child {
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
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
`,st=o`
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
    flex-wrap: wrap;
    align-items: center;
  }

  .sub-nav-items {
    display: flex;
    flex-direction: column;
    margin-top: 8px;
    margin-left: 16px;
  }

  .sub-nav-item {
    display: flex;
    flex-direction: column;
    border: 0.5px solid;
    border-radius: 10px;
    border-color: rgba(255, 255, 255, 0.3);
    padding: 8px;
  }

  .sub-nav-item-main-config {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .icon-input {
    max-width: calc(33.33% - 20px);
  }

  .name-input {
    margin-left: 10px;
    max-width: calc(33.33% - 10px);
  }

  .destination-input {
    margin-left: 10px;
    max-width: calc(33.33% - 10px);
  }

  button.add-nav-item {
    align-self: flex-end;
    margin-bottom: 16px;
    background-color: var(--primary-color);
    border-radius: 5px;
    border: none;
  }

  button.add-sub-nav-item {
    align-self: flex-end;
    margin-bottom: 16px;
    background-color: var(--primary-color);
    border-radius: 5px;
    border: none;
  }

  button.remove-nav-item {
    align-self: flex-end;
    margin-bottom: 16px;
    background-color: var(--error-color);
    border-radius: 5px;
    border: none;
  }

  button.remove-sub-nav-item {
    align-self: flex-end;
    margin-bottom: 16px;
    background-color: var(--error-color);
    border-radius: 5px;
    border: none;
  }
`;function ot(t,e,i,n){var s,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,i,r):s(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r}function rt(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const at=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function lt(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):at(t,e)
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}var ct;null===(ct=window.HTMLSlotElement)||void 0===ct||ct.prototype.assignedElements;class dt extends Event{constructor(t){super("config-changed",{bubbles:!0,composed:!0}),this.detail={config:t}}}class ht extends et{constructor(){super(...arguments),this._config={nav_name:"",nav_items:[]},this.card=null}setConfig(t){if(!t.nav_items)throw new Error("You need to define nav_items");this._config=t,this.card=document.querySelector("vertical-stacked-navigation-card")}static get styles(){return st}updated(t){this.card&&this.card.setConfig(this._config)}navNameChanged(t){if(!this._config||!t.target)return;const e=t.target,i=Object.assign({},this._config);i.nav_name=e.value,this._config=i;const n=new dt(i);this.dispatchEvent(n)}addNavItem(t){if(!this._config||!t.target)return;const e=Object.assign({},this._config);e.nav_items||(e.nav_items=[]),e.nav_items.push({name:"New Item",icon:"mdi:home",destination:""}),this._config=e;const i=new dt(e);this.dispatchEvent(i)}removeNavItem(t,e){if(!this._config||!t.target)return;t.target;const i=Object.assign({},this._config);i.nav_items.splice(e,1),this._config=i;const n=new dt(i);this.dispatchEvent(n)}navItemNameChanged(t,e){if(!this._config||!t.target)return;const i=t.target,n=Object.assign({},this._config);n.nav_items[e].name=i.value,this._config=n;const s=new dt(n);this.dispatchEvent(s)}navItemIconChanged(t,e){if(!this._config||!t.target)return;const i=t.target,n=Object.assign({},this._config);n.nav_items[e].icon=i.value,this._config=n;const s=new dt(n);this.dispatchEvent(s)}navItemDestinationChanged(t,e){if(!this._config||!t.target)return;const i=t.target,n=Object.assign({},this._config);n.nav_items[e].destination=i.value,this._config=n;const s=new dt(n);this.dispatchEvent(s)}addSubNavItem(t,e){if(!this._config||!t.target)return;t.target;const i=Object.assign({},this._config),n=i.nav_items[e];if(n){n.sub_nav_items||(n.sub_nav_items=[]),n.sub_nav_items.push({name:"New Sub Item",icon:"mdi:home",destination:"lovelace"}),this._config=i;const t=new dt(i);this.dispatchEvent(t)}}removeSubNavItem(t,e,i){var n;if(!this._config||!t.target)return;const s=Object.assign({},this._config),o=null===(n=s.nav_items[e])||void 0===n?void 0:n.sub_nav_items;if(o){o.splice(i,1),this._config=s;const t=new dt(s);this.dispatchEvent(t)}}subNavItemNameChanged(t,e,i){var n,s;if(!this._config||!t.target)return;const o=t.target,r=Object.assign({},this._config),a=null===(s=null===(n=r.nav_items[e])||void 0===n?void 0:n.sub_nav_items)||void 0===s?void 0:s[i];if(a){a.name=o.value,this._config=r;const t=new dt(r);this.dispatchEvent(t)}}subNavItemIconChanged(t,e,i){var n,s;if(!this._config||!t.target)return;const o=t.target,r=Object.assign({},this._config),a=null===(s=null===(n=r.nav_items[e])||void 0===n?void 0:n.sub_nav_items)||void 0===s?void 0:s[i];if(a){a.icon=o.value,this._config=r;const t=new dt(r);this.dispatchEvent(t)}}subNavItemDestinationChanged(t,e,i){var n,s;if(!this._config||!t.target)return;const o=t.target,r=Object.assign({},this._config),a=null===(s=null===(n=r.nav_items[e])||void 0===n?void 0:n.sub_nav_items)||void 0===s?void 0:s[i];if(a){a.destination=o.value,this._config=r;const t=new dt(r);this.dispatchEvent(t)}}navItemActiveChanged(t,e){if(!this._config||!t.target)return;const i=t.target,n=Object.assign({},this._config);n.nav_items[e].active=i.checked,this._config=n;const s=new dt(n);this.dispatchEvent(s)}subNavItemActiveChanged(t,e,i){var n,s;if(!this._config||!t.target)return;const o=t.target,r=Object.assign({},this._config),a=null===(s=null===(n=r.nav_items[e])||void 0===n?void 0:n.sub_nav_items)||void 0===s?void 0:s[i];if(a){a.active=o.checked,this._config=r;const t=new dt(r);this.dispatchEvent(t)}}navItemUnfoldedChanged(t,e){if(!this._config||!t.target)return;const i=t.target,n=Object.assign({},this._config);n.nav_items[e].unfolded=i.checked,this._config=n;const s=new dt(n);this.dispatchEvent(s)}render(){return this.hass&&this._config?j`
      <header>
        <paper-input
          label="Nav Name"
          .value="${this._config.nav_name||""}"
          @change="${this.navNameChanged}"
        ></paper-input>
      </header>
      <div class="nav-items">
        ${this._config.nav_items.map(((t,e)=>{var i;return j`
            <div class="nav-item" index="${e}">
              <div class="nav-item-main-config">
                <paper-input
                  class="icon-input"
                  label="Icon"
                  .value="${t.icon||""}"
                  @change="${t=>this.navItemIconChanged(t,e)}"
                ></paper-input>
                <paper-input
                  class="name-input"
                  label="Name"
                  .value="${t.name||""}"
                  @change="${t=>this.navItemNameChanged(t,e)}"
                ></paper-input>
                <paper-input
                  class="destination-input"
                  label="Destination"
                  .value="${t.destination||""}"
                  @change="${t=>this.navItemDestinationChanged(t,e)}"
                ></paper-input>
              </div>
              <div class="nav-item-options">
                <input
                  type="checkbox"
                  ?checked=${t.active}
                  @change="${t=>this.navItemActiveChanged(t,e)}"
                />
                Active
                <input
                  type="checkbox"
                  ?checked=${t.unfolded}
                  @change="${t=>this.navItemUnfoldedChanged(t,e)}"
                />
                Unfolded
                <button
                  class="remove-nav-item"
                  @click="${t=>this.removeNavItem(t,e)}"
                >
                  Remove
                </button>
              </div>
              <div class="sub-nav-items">
                ${null===(i=null==t?void 0:t.sub_nav_items)||void 0===i?void 0:i.map(((t,i)=>j`
                    <div class="sub-nav-item" index="${i}">
                      <div class="sub-nav-item-main-config">
                        <paper-input
                          class="icon-input"
                          label="Icon"
                          .value="${t.icon||""}"
                          @change="${t=>this.subNavItemIconChanged(t,e,i)}"
                        ></paper-input>
                        <paper-input
                          class="name-input"
                          label="Name"
                          .value="${t.name||""}"
                          @change="${t=>this.subNavItemNameChanged(t,e,i)}"
                        ></paper-input>
                        <paper-input
                          class="destination-input"
                          label="Destination"
                          .value="${t.destination||""}"
                          @change="${t=>this.subNavItemDestinationChanged(t,e,i)}"
                        ></paper-input>
                      </div>
                      <div class="sub-nav-item-options">
                        <input
                          type="checkbox"
                          ?checked=${t.active}
                          @change="${t=>this.subNavItemActiveChanged(t,e,i)}"
                        />
                        Active
                        <button
                          class="remove-sub-nav-item"
                          @click="${t=>this.removeSubNavItem(t,e,i)}"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  `))}
                <button class="add-sub-nav-item" @click="${this.addSubNavItem}">
                  <ha-icon .icon=${"mdi:plus"}></ha-icon>
                </button>
              </div>
            </div>
          `}))}
        <div class="add-button-container">
          <button class="add-nav-item" @click="${this.addNavItem}">
            <ha-icon .icon=${"mdi:plus"}></ha-icon>
          </button>
        </div>
      </div>
    `:j``}}ot([lt({attribute:!1}),rt("design:type",Object)],ht.prototype,"hass",void 0),ot([lt(),rt("design:type",Object)],ht.prototype,"_config",void 0),customElements.define("vertical-stacked-navigation-card-editor",ht);class ut extends et{constructor(){super(...arguments),this.content=null,this.isContentSet=!1}static get styles(){return nt}static getConfigElement(){return document.createElement("vertical-stacked-navigation-card-editor")}static getStubConfig(){return{nav_name:"Navigation",nav_items:[{name:"Home",icon:"mdi:home",destination:"/lovelace/0"},{name:"Lights",icon:"mdi:lightbulb",sub_nav_items:[{name:"Living Room",icon:"mdi:lightbulb",destination:"/lovelace/1"}]}]}}render(){const t=this.config.nav_items.map(((t,e)=>{const i=t.active?"active":"",n=t.sub_nav_items?t.sub_nav_items.map((t=>j`
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
            class="nav-item ${i} nav-item-${e}"
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
            ${n}
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
    `}updated(t){var e,i,n,s,o,r,a,l,c,d,h,u,v,p,m,g,f,_;if(this.content||(this.content=this.shadowRoot.querySelector(".card-content")),!this.isContentSet&&this.content&&this.config.custom_styles){const{colors:t,font_size:b}=this.config.custom_styles;t&&(this.style.setProperty("--main-background-color",null!==(i=null===(e=t.background)||void 0===e?void 0:e.main)&&void 0!==i?i:null),this.style.setProperty("--sub-background-color",null!==(s=null===(n=t.background)||void 0===n?void 0:n.sub)&&void 0!==s?s:null),this.style.setProperty("--main-text-color",null!==(r=null===(o=t.text)||void 0===o?void 0:o.main)&&void 0!==r?r:null),this.style.setProperty("--sub-text-color",null!==(l=null===(a=t.text)||void 0===a?void 0:a.sub)&&void 0!==l?l:null),this.style.setProperty("--main-hover-color",null!==(d=null===(c=t.hover)||void 0===c?void 0:c.main)&&void 0!==d?d:null),this.style.setProperty("--sub-hover-color",null!==(u=null===(h=t.hover)||void 0===h?void 0:h.sub)&&void 0!==u?u:null),this.style.setProperty("--main-active-color",null!==(p=null===(v=t.active)||void 0===v?void 0:v.main)&&void 0!==p?p:null),this.style.setProperty("--sub-active-color",null!==(g=null===(m=t.active)||void 0===m?void 0:m.sub)&&void 0!==g?g:null)),b&&(this.style.setProperty("--main-font-size",null!==(f=b.main)&&void 0!==f?f:null),this.style.setProperty("--sub-font-size",null!==(_=b.sub)&&void 0!==_?_:null))}}setConfig(t){if(!t.nav_items)throw new Error("You need to define nav_items");this.config=t}getCardSize(){return 1*this.config.nav_items.length}_toggleSubnav(t){t.preventDefault();const e=t.target.closest(".nav-item-container");if(!e||!e.querySelector(".sub-nav-items"))return;const i=e.querySelector(".sub-nav-items"),n=e.querySelector(".nav-item");"block"===i.style.display?(i.style.display="none",n.classList.remove("unfolded")):(i.style.display="block",n.classList.add("unfolded"))}}customElements.define("vertical-stacked-navigation-card",ut),window.customCards=window.customCards||[],window.customCards.push({type:"vertical-stacked-navigation-card",name:"Vertical Stacked Navigation Card",description:"A vertical stacked navigation card"});export{ut as VerticalStackedNavCard};
