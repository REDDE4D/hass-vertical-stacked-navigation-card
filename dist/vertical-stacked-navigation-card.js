function t(t,e,s,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,s,i);else for(var r=t.length-1;r>=0;r--)(o=t[r])&&(a=(n<3?o(a):n>3?o(e,s,a):o(e,s))||a);return n>3&&a&&Object.defineProperty(e,s,a),a}function e(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const s=globalThis,i=s.ShadowRoot&&(void 0===s.ShadyCSS||s.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),n=new WeakMap;let a=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&n.set(e,t))}return t}toString(){return this.cssText}};const r=(t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new a(s,t,o)},c=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new a("string"==typeof t?t:t+"",void 0,o))(e)})(t):t,{is:l,defineProperty:d,getOwnPropertyDescriptor:h,getOwnPropertyNames:u,getOwnPropertySymbols:m,getPrototypeOf:p}=Object,v=globalThis,g=v.trustedTypes,f=g?g.emptyScript:"",b=v.reactiveElementPolyfillSupport,_=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},$=(t,e)=>!l(t,e),x={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:$};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),v.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=x){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&d(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:o}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const n=i?.call(this);o?.call(this,e),this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??x}static _$Ei(){if(this.hasOwnProperty(_("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(_("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_("properties"))){const t=this.properties,e=[...u(t),...m(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(c(t))}else void 0!==t&&e.push(c(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(i)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of e){const e=document.createElement("style"),o=s.litNonce;void 0!==o&&e.setAttribute("nonce",o),e.textContent=i.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const o=(void 0!==s.converter?.toAttribute?s.converter:y).toAttribute(e,s.type);this._$Em=t,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=i;const n=o.fromAttribute(e,t.type);this[i]=n??this._$Ej?.get(i)??n,this._$Em=null}}requestUpdate(t,e,s){if(void 0!==t){const i=this.constructor,o=this[t];if(s??=i.getPropertyOptions(t),!((s.hasChanged??$)(o,e)||s.useDefault&&s.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:o},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==o||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,s,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[_("elementProperties")]=new Map,w[_("finalized")]=new Map,b?.({ReactiveElement:w}),(v.reactiveElementVersions??=[]).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const A=globalThis,S=A.trustedTypes,C=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,O="?"+k,P=`<${O}>`,N=document,z=()=>N.createComment(""),U=t=>null===t||"object"!=typeof t&&"function"!=typeof t,I=Array.isArray,M="[ \t\n\f\r]",j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,H=/>/g,T=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,L=/"/g,q=/^(?:script|style|textarea|title)$/i,B=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),W=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),F=new WeakMap,J=N.createTreeWalker(N,129);function K(t,e){if(!I(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(e):e}const Y=(t,e)=>{const s=t.length-1,i=[];let o,n=2===e?"<svg>":3===e?"<math>":"",a=j;for(let e=0;e<s;e++){const s=t[e];let r,c,l=-1,d=0;for(;d<s.length&&(a.lastIndex=d,c=a.exec(s),null!==c);)d=a.lastIndex,a===j?"!--"===c[1]?a=R:void 0!==c[1]?a=H:void 0!==c[2]?(q.test(c[2])&&(o=RegExp("</"+c[2],"g")),a=T):void 0!==c[3]&&(a=T):a===T?">"===c[0]?(a=o??j,l=-1):void 0===c[1]?l=-2:(l=a.lastIndex-c[2].length,r=c[1],a=void 0===c[3]?T:'"'===c[3]?L:D):a===L||a===D?a=T:a===R||a===H?a=j:(a=T,o=void 0);const h=a===T&&t[e+1].startsWith("/>")?" ":"";n+=a===j?s+P:l>=0?(i.push(r),s.slice(0,l)+E+s.slice(l)+k+h):s+k+(-2===l?e:h)}return[K(t,n+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class Z{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0;const a=t.length-1,r=this.parts,[c,l]=Y(t,e);if(this.el=Z.createElement(c,s),J.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=J.nextNode())&&r.length<a;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(E)){const e=l[n++],s=i.getAttribute(t).split(k),a=/([.?@])?(.*)/.exec(e);r.push({type:1,index:o,name:a[2],strings:s,ctor:"."===a[1]?et:"?"===a[1]?st:"@"===a[1]?it:tt}),i.removeAttribute(t)}else t.startsWith(k)&&(r.push({type:6,index:o}),i.removeAttribute(t));if(q.test(i.tagName)){const t=i.textContent.split(k),e=t.length-1;if(e>0){i.textContent=S?S.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],z()),J.nextNode(),r.push({type:2,index:++o});i.append(t[e],z())}}}else if(8===i.nodeType)if(i.data===O)r.push({type:2,index:o});else{let t=-1;for(;-1!==(t=i.data.indexOf(k,t+1));)r.push({type:7,index:o}),t+=k.length-1}o++}}static createElement(t,e){const s=N.createElement("template");return s.innerHTML=t,s}}function G(t,e,s=t,i){if(e===W)return e;let o=void 0!==i?s._$Co?.[i]:s._$Cl;const n=U(e)?void 0:e._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),void 0===n?o=void 0:(o=new n(t),o._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=o:s._$Cl=o),void 0!==o&&(e=G(t,o._$AS(t,e.values),o,i)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??N).importNode(e,!0);J.currentNode=i;let o=J.nextNode(),n=0,a=0,r=s[0];for(;void 0!==r;){if(n===r.index){let e;2===r.type?e=new X(o,o.nextSibling,this,t):1===r.type?e=new r.ctor(o,r.name,r.strings,this,t):6===r.type&&(e=new ot(o,this,t)),this._$AV.push(e),r=s[++a]}n!==r?.index&&(o=J.nextNode(),n++)}return J.currentNode=N,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=G(this,t,e),U(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>I(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==V&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(N.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=Z.createElement(K(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new Q(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=F.get(t.strings);return void 0===e&&F.set(t.strings,e=new Z(t)),e}k(t){I(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new X(this.O(z()),this.O(z()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=V}_$AI(t,e=this,s,i){const o=this.strings;let n=!1;if(void 0===o)t=G(this,t,e,0),n=!U(t)||t!==this._$AH&&t!==W,n&&(this._$AH=t);else{const i=t;let a,r;for(t=o[0],a=0;a<o.length-1;a++)r=G(this,i[s+a],e,a),r===W&&(r=this._$AH[a]),n||=!U(r)||r!==this._$AH[a],r===V?t=V:t!==V&&(t+=(r??"")+o[a+1]),this._$AH[a]=r}n&&!i&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}}class st extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==V)}}class it extends tt{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=G(this,t,e,0)??V)===W)return;const s=this._$AH,i=t===V&&s!==V||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==V&&(s===V||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}}const nt=A.litHtmlPolyfillSupport;nt?.(Z,X),(A.litHtmlVersions??=[]).push("3.3.1");const at=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class rt extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let o=i._$litPart$;if(void 0===o){const t=s?.renderBefore??null;i._$litPart$=o=new X(e.insertBefore(z(),t),t,void 0,s??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}}rt._$litElement$=!0,rt.finalized=!0,at.litElementHydrateSupport?.({LitElement:rt});const ct=at.litElementPolyfillSupport;ct?.({LitElement:rt}),(at.litElementVersions??=[]).push("4.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const lt={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:$},dt=(t=lt,e,s)=>{const{kind:i,metadata:o}=s;let n=globalThis.litPropertyMetadata.get(o);if(void 0===n&&globalThis.litPropertyMetadata.set(o,n=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),n.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const o=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,o,t)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=s;return function(s){const o=this[i];e.call(this,s),this.requestUpdate(i,o,t)}}throw Error("Unsupported decorator location: "+i)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ht(t){return(e,s)=>"object"==typeof s?dt(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ut(t){return ht({...t,state:!0,attribute:!1})}const mt=r`
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
`,pt=r`
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
`;class vt extends Event{constructor(t){super("config-changed",{bubbles:!0,composed:!0}),this.detail={config:t}}}let gt=class extends rt{constructor(){super(...arguments),this.label="",this.placeholder="",this.value="",this.destinations=[],this.isOpen=!1}static get styles(){return r`
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
    `}connectedCallback(){super.connectedCallback(),this.fetchDestinations()}async fetchDestinations(){if(this.hass){const t=await this.hass.callWS({type:"lovelace/config"});this.destinations=t.views.map(t=>`/lovelace/${t.path||t.title}`)}}handleInput(t){const e=t.target;this.value=e.value,this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value}})),this.isOpen=!0}handleBlur(){setTimeout(()=>{this.isOpen=!1},100)}handleItemClick(t){this.value=t,this.isOpen=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value}}))}render(){return B`
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
          ${this.destinations.map(t=>B`
              <div
                class="option"
                @click="${()=>this.handleItemClick(t)}"
              >
                ${t}
              </div>
            `)}
        </div>
      </div>
    `}};t([ht({attribute:!1}),e("design:type",Object)],gt.prototype,"hass",void 0),t([ht(),e("design:type",Object)],gt.prototype,"label",void 0),t([ht(),e("design:type",Object)],gt.prototype,"placeholder",void 0),t([ht(),e("design:type",Object)],gt.prototype,"value",void 0),t([ut(),e("design:type",Array)],gt.prototype,"destinations",void 0),t([ut(),e("design:type",Object)],gt.prototype,"isOpen",void 0),gt=t([(t=>(e,s)=>{void 0!==s?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)})("destination-input")],gt);class ft extends(function(t){return class extends t{navNameChanged(t){if(!this._config||!t.target)return;const e=t.target,s=Object.assign({},this._config);s.nav_name=e.value,this._config=s;const i=new vt(s);this.dispatchEvent(i)}addNavItem(t){if(!this._config||!t.target)return;const e=Object.assign({},this._config);e.nav_items||(e.nav_items=[]),e.nav_items.push({name:"New Item",icon:"mdi:home",destination:""}),this._config=e;const s=new vt(e);this.dispatchEvent(s)}removeNavItem(t,e){if(!this._config||!t.target)return;t.target;const s=Object.assign({},this._config);s.nav_items.splice(e,1),this._config=s;const i=new vt(s);this.dispatchEvent(i)}navItemChanged(t,e,s){if(!this._config||!t.target)return;const i=t.target,o=Object.assign({},this._config);let n;n="value-changed"===t.type?t.detail.value:i.value,o.nav_items[e][s]="active"===s||"unfolded"===s?i.checked:n,this._config=o;const a=new vt(o);this.dispatchEvent(a)}addSubNavItem(t,e){if(!this._config||!t.target)return;t.target;const s=Object.assign({},this._config),i=s.nav_items[e];if(i){i.sub_nav_items||(i.sub_nav_items=[]),i.sub_nav_items.push({name:"New Sub Item",icon:"mdi:home",destination:"lovelace"}),this._config=s;const t=new vt(s);this.dispatchEvent(t)}}removeSubNavItem(t,e,s){if(!this._config||!t.target)return;const i=Object.assign({},this._config),o=i.nav_items[e]?.sub_nav_items;if(o){o.splice(s,1),0===o.length&&delete i.nav_items[e].sub_nav_items,this._config=i;const t=new vt(i);this.dispatchEvent(t)}}subNavItemChanged(t,e,s,i){if(!this._config||!t.target)return;const o=t.target,n=Object.assign({},this._config),a=n.nav_items[e]?.sub_nav_items?.[s];if(a){let e;e="value-changed"===t.type?t.detail.value:o.value,a[i]="active"===i?o.checked:e,this._config=n;const s=new vt(n);this.dispatchEvent(s)}}customStyleColorsChanged(t,e,s){if(!this._config||!t.target)return;const i=t.target,o=Object.assign({},this._config);o.custom_styles||(o.custom_styles={}),o.custom_styles.colors||(o.custom_styles.colors={}),o.custom_styles.colors[e]||(o.custom_styles.colors[e]={}),i.value?o.custom_styles.colors[e][s]=i.value:delete o.custom_styles.colors[e][s],this._config=o;const n=new vt(o);this.dispatchEvent(n),this.requestUpdate()}customStyleFontSizeChanged(t,e,s){if(!this._config||!t.target)return;const i=t.target,o=Object.assign({},this._config);o.custom_styles||(o.custom_styles={}),o.custom_styles.font_size||(o.custom_styles.font_size={}),o.custom_styles.font_size[e]||(o.custom_styles.font_size[e]={}),i.value?o.custom_styles.font_size[e][s]=i.value:delete o.custom_styles.font_size[e][s],this._config=o;const n=new vt(o);this.dispatchEvent(n)}}}(rt)){constructor(){super(...arguments),this._config={nav_name:"",nav_items:[]},this.card=null}setConfig(t){if(!t.nav_items)throw new Error("You need to define nav_items");this._config=t,this.card=document.querySelector("vertical-stacked-navigation-card")}static get styles(){return pt}updated(t){this.card&&this.card.setConfig(this._config)}render(){return this.hass&&this._config?B`
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
        ${this._config.nav_items.map((t,e)=>B`
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
                ${t?.sub_nav_items&&t.sub_nav_items.length>0?B`
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
              ${t?.sub_nav_items&&t.sub_nav_items.length>0?B`
                    <div class="sub-nav-items">
                      <details>
                        <summary>Sub Navigation Items</summary>
                        ${t?.sub_nav_items?.map((t,s)=>B`
                              <div
                                class="sub-nav-item"
                                index="${s}"
                              >
                                <div class="sub-nav-item-main-config">
                                  <div class="main-config-row">
                                    <ha-icon-picker
                                      label="Icon"
                                      placeholder="mdi:home"
                                      class="input-icon-picker"
                                      .value="${t.icon||""}"
                                      @value-changed="${t=>this.subNavItemChanged(t,e,s,"icon")}"
                                    ></ha-icon-picker>
                                    <ha-textfield
                                      label="Name"
                                      placeholder="Home"
                                      class="input-name"
                                      .value="${t.name||""}"
                                      @change="${t=>this.subNavItemChanged(t,e,s,"name")}"
                                    ></ha-textfield>
                                  </div>
                                  <div class="main-config-row">
                                    <destination-input
                                      label="Destination"
                                      class="destination-input"
                                      placeholder="/lovelace/home"
                                      .value="${t.destination||""}"
                                      .hass="${this.hass}"
                                      @change="${t=>this.subNavItemChanged(t,e,s,"destination")}"
                                    ></destination-input>
                                  </div>
                                </div>
                                <div class="sub-nav-item-options">
                                  <ha-formfield>
                                    <ha-switch
                                      type="checkbox"
                                      ?checked=${t.active}
                                      @change="${t=>this.subNavItemChanged(t,e,s,"active")}"
                                    ></ha-switch>
                                    <label class="mdc-label">Active</label>
                                  </ha-formfield>
                                  <mwc-button
                                    class="remove-sub-nav-item"
                                    @click="${t=>this.removeSubNavItem(t,e,s)}"
                                  >
                                    <ha-icon .icon=${"mdi:delete"}></ha-icon>
                                  </mwc-button>
                                </div>
                              </div>
                            `)}
                      </details>
                    </div>
                    `:""}
            </div>
          `)}
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
                style="background-color: ${this._config.custom_styles?.colors?.text?.main||""};"
              ></div>
              <ha-textfield
                label="Main"
                class="custom-style-input"
                placeholder="rgba(255, 255, 255, 1)"
                .value="${this._config.custom_styles?.colors?.text?.main||""}"
                @change="${t=>this.customStyleColorsChanged(t,"text","main")}"
              ></ha-textfield>
            </div>
            <div class="details-row">
              <div
                class="color-preview text-sub"
                style="background-color: ${this._config.custom_styles?.colors?.text?.sub||""};"
              ></div>
              <ha-textfield
                label="Sub"
                class="custom-style-input"
                placeholder="rgba(255, 255, 255, 0.5)"
                .value="${this._config.custom_styles?.colors?.text?.sub||""}"
                @change="${t=>this.customStyleColorsChanged(t,"text","sub")}"
              ></ha-textfield>
            </div>
          </details>

          <details class="custom-hover">
            <summary>Hover Color</summary>
            <div class="details-row">
              <div
                class="color-preview hover-main"
                style="background-color: ${this._config.custom_styles?.colors?.hover?.main||""};"
              ></div>
              <ha-textfield
                label="Main"
                class="custom-style-input"
                placeholder="rgba(255, 255, 255, 0.1)"
                .value="${this._config.custom_styles?.colors?.hover?.main||""}"
                @change="${t=>this.customStyleColorsChanged(t,"hover","main")}"
              ></ha-textfield>
            </div>
            <div class="details-row">
              <div
                class="color-preview hover-sub"
                style="background-color: ${this._config.custom_styles?.colors?.hover?.sub||""};"
              ></div>
              <ha-textfield
                label="Sub"
                class="custom-style-input"
                placeholder="rgba(255, 255, 255, 0.05)"
                .value="${this._config.custom_styles?.colors?.hover?.sub||""}"
                @change="${t=>this.customStyleColorsChanged(t,"hover","sub")}"
              ></ha-textfield>
            </div>
          </details>
          <details class="custom-active">
            <summary>Active Color</summary>
            <div class="details-row">
              <div
                class="color-preview active-main"
                style="background-color: ${this._config.custom_styles?.colors?.active?.main||""};"
              ></div>
              <ha-textfield
                label="Main"
                class="custom-style-input"
                placeholder="rgba(255, 255, 255, 0.2)"
                .value="${this._config.custom_styles?.colors?.active?.main||""}"
                @change="${t=>this.customStyleColorsChanged(t,"active","main")}"
              ></ha-textfield>
            </div>
            <div class="details-row">
              <div
                class="color-preview active-sub"
                style="background-color: ${this._config.custom_styles?.colors?.active?.sub||""};"
              ></div>
              <ha-textfield
                label="Sub"
                class="custom-style-input"
                placeholder="rgba(255, 255, 255, 0.1)"
                .value="${this._config.custom_styles?.colors?.active?.sub||""}"
                @change="${t=>this.customStyleColorsChanged(t,"active","sub")}"
              ></ha-textfield>
            </div>
          </details>
          <details class="custom-background">
            <summary>Background Color</summary>
            <div class="details-row">
              <div
                class="color-preview background-main"
                style="background-color: ${this._config.custom_styles?.colors?.background?.main||""};"
              ></div>
              <ha-textfield
                label="Main"
                class="custom-style-input"
                placeholder="rgba(0, 0, 0, 0.5)"
                .value="${this._config.custom_styles?.colors?.background?.main||""}"
                @change="${t=>this.customStyleColorsChanged(t,"background","main")}"
              ></ha-textfield>
            </div>
            <div class="details-row">
              <div
                class="color-preview background-sub"
                style="background-color: ${this._config.custom_styles?.colors?.background?.sub||""};"
              ></div>
              <ha-textfield
                label="Sub"
                class="custom-style-input"
                placeholder="rgba(0, 0, 0, 0.3)"
                .value="${this._config.custom_styles?.colors?.background?.sub||""}"
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
              .value="${this._config.custom_styles?.font_size?.text?.main||""}"
              @change="${t=>this.customStyleFontSizeChanged(t,"text","main")}"
            ></ha-textfield>
            <ha-textfield
              label="Sub"
              placeholder="0.8rem"
              .value="${this._config.custom_styles?.font_size?.text?.sub||""}"
              @change="${t=>this.customStyleFontSizeChanged(t,"text","sub")}"
            ></ha-textfield>
          </details>
        </details>
      </details>
    `:B``}}t([ht({attribute:!1}),e("design:type",Object)],ft.prototype,"hass",void 0),t([ht(),e("design:type",Object)],ft.prototype,"_config",void 0),customElements.define("vertical-stacked-navigation-card-editor",ft);class bt extends rt{constructor(){super(...arguments),this.content=null,this.isContentSet=!1}static get styles(){return mt}static getConfigElement(){return document.createElement("vertical-stacked-navigation-card-editor")}static getStubConfig(){return{nav_name:"Navigation",nav_items:[{name:"Home",icon:"mdi:home",destination:"/lovelace/0"},{name:"Lights",icon:"mdi:lightbulb",sub_nav_items:[{name:"Living Room",icon:"mdi:lightbulb",destination:"/lovelace/1"}]}]}}render(){const t=this.config.nav_items.map((t,e)=>{const s=t.active?"active":"",i=t.sub_nav_items?t.sub_nav_items.map(t=>B`
              <a
                href="${t.destination}"
                class="sub-item ${t.active?"active":""} nav-item-${e}"
              >
                <ha-icon icon="${t.icon}"></ha-icon>
                <span>${t.name}</span>
              </a>
            `):"";return B`
        <div class="nav-item-container">
          <a
            href="${t.sub_nav_items?"#":t.destination}"
            class="nav-item ${s} ${t.unfolded?"unfolded":""} nav-item-${e}"
            @click=${t.sub_nav_items?this._toggleSubnav:null}
          >
            <ha-icon icon="${t.icon}"></ha-icon>
            <span>${t.name}</span>
            ${t.sub_nav_items?B`<ha-icon
                  icon="mdi:chevron-down"
                  class="subnav-indicator"
                ></ha-icon>`:""}
          </a>
          <div
            class="sub-nav-items"
            style="display: ${t.unfolded?"block":"none"}"
          >
            ${i}
          </div>
        </div>
      `});return B`
      <ha-card>
        ${"none"!==this.config.nav_name?B`
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
    `}updated(t){if(this.content||(this.content=this.shadowRoot.querySelector(".card-content")),!this.isContentSet&&this.content){if(this.config.custom_styles){const{colors:t,font_size:e}=this.config.custom_styles;t&&(this.style.setProperty("--main-background-color",t.background?.main??null),this.style.setProperty("--sub-background-color",t.background?.sub??null),this.style.setProperty("--main-text-color",t.text?.main??null),this.style.setProperty("--sub-text-color",t.text?.sub??null),this.style.setProperty("--main-hover-color",t.hover?.main??null),this.style.setProperty("--sub-hover-color",t.hover?.sub??null),this.style.setProperty("--main-active-color",t.active?.main??null),this.style.setProperty("--sub-active-color",t.active?.sub??null)),e&&(this.style.setProperty("--main-font-size",e.text?.main??null),this.style.setProperty("--sub-font-size",e.text?.sub??null))}this.isContentSet=!0}}setConfig(t){if(!t.nav_items)throw new Error("You need to define nav_items");this.config=t,this.requestUpdate()}getCardSize(){return 1*this.config.nav_items.length}_toggleSubnav(t){t.preventDefault();const e=t.target.closest(".nav-item-container");if(!e||!e.querySelector(".sub-nav-items"))return;const s=e.querySelector(".sub-nav-items"),i=e.querySelector(".nav-item");"block"===s.style.display?(s.style.display="none",i.classList.remove("unfolded")):(s.style.display="block",i.classList.add("unfolded"))}}t([ht({attribute:!1}),e("design:type",Object)],bt.prototype,"hass",void 0),customElements.define("vertical-stacked-navigation-card",bt),window.customCards=window.customCards||[],window.customCards.push({type:"vertical-stacked-navigation-card",name:"Vertical Stacked Navigation Card",description:"A custom card for displaying a vertical stacked navigation with optional sub-navigation",preview:!0,documentationURL:"https://github.com/REDDE4D/hass-vertical-stacked-navigation-card"});export{bt as VerticalStackedNavCard};
