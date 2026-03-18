function t(t,e,i,s){var a,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(o<3?a(n):o>3?a(e,i,n):a(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n}function e(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i=globalThis,s=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),o=new WeakMap;let n=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}};const r=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new n(i,t,a)},l=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,a))(e)})(t):t,{is:c,defineProperty:d,getOwnPropertyDescriptor:h,getOwnPropertyNames:u,getOwnPropertySymbols:p,getPrototypeOf:m}=Object,v=globalThis,g=v.trustedTypes,f=g?g.emptyScript:"",y=v.reactiveElementPolyfillSupport,b=(t,e)=>t,_={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},x=(t,e)=>!c(t,e),$={attribute:!0,type:String,converter:_,reflect:!1,useDefault:!1,hasChanged:x};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),v.litPropertyMetadata??=new WeakMap;let S=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&d(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:a}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const o=s?.call(this);a?.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const t=m(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const t=this.properties,e=[...u(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(s)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const s of e){const e=document.createElement("style"),a=i.litNonce;void 0!==a&&e.setAttribute("nonce",a),e.textContent=s.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const a=(void 0!==i.converter?.toAttribute?i.converter:_).toAttribute(e,i.type);this._$Em=t,null==a?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),a="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:_;this._$Em=s;const o=a.fromAttribute(e,t.type);this[s]=o??this._$Ej?.get(s)??o,this._$Em=null}}requestUpdate(t,e,i,s=!1,a){if(void 0!==t){const o=this.constructor;if(!1===s&&(a=this[t]),i??=o.getPropertyOptions(t),!((i.hasChanged??x)(a,e)||i.useDefault&&i.reflect&&a===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:a},o){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==a||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[b("elementProperties")]=new Map,S[b("finalized")]=new Map,y?.({ReactiveElement:S}),(v.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const C=globalThis,w=t=>t,A=C.trustedTypes,E=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,P="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,I="?"+k,N=`<${I}>`,z=document,T=()=>z.createComment(""),O=t=>null===t||"object"!=typeof t&&"function"!=typeof t,M=Array.isArray,R="[ \t\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,B=/-->/g,H=/>/g,j=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,F=/"/g,L=/^(?:script|style|textarea|title)$/i,V=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),W=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),J=new WeakMap,K=z.createTreeWalker(z,129);function Y(t,e){if(!M(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const Z=(t,e)=>{const i=t.length-1,s=[];let a,o=2===e?"<svg>":3===e?"<math>":"",n=U;for(let e=0;e<i;e++){const i=t[e];let r,l,c=-1,d=0;for(;d<i.length&&(n.lastIndex=d,l=n.exec(i),null!==l);)d=n.lastIndex,n===U?"!--"===l[1]?n=B:void 0!==l[1]?n=H:void 0!==l[2]?(L.test(l[2])&&(a=RegExp("</"+l[2],"g")),n=j):void 0!==l[3]&&(n=j):n===j?">"===l[0]?(n=a??U,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,r=l[1],n=void 0===l[3]?j:'"'===l[3]?F:D):n===F||n===D?n=j:n===B||n===H?n=U:(n=j,a=void 0);const h=n===j&&t[e+1].startsWith("/>")?" ":"";o+=n===U?i+N:c>=0?(s.push(r),i.slice(0,c)+P+i.slice(c)+k+h):i+k+(-2===c?e:h)}return[Y(t,o+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class G{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let a=0,o=0;const n=t.length-1,r=this.parts,[l,c]=Z(t,e);if(this.el=G.createElement(l,i),K.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=K.nextNode())&&r.length<n;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(P)){const e=c[o++],i=s.getAttribute(t).split(k),n=/([.?@])?(.*)/.exec(e);r.push({type:1,index:a,name:n[2],strings:i,ctor:"."===n[1]?it:"?"===n[1]?st:"@"===n[1]?at:et}),s.removeAttribute(t)}else t.startsWith(k)&&(r.push({type:6,index:a}),s.removeAttribute(t));if(L.test(s.tagName)){const t=s.textContent.split(k),e=t.length-1;if(e>0){s.textContent=A?A.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],T()),K.nextNode(),r.push({type:2,index:++a});s.append(t[e],T())}}}else if(8===s.nodeType)if(s.data===I)r.push({type:2,index:a});else{let t=-1;for(;-1!==(t=s.data.indexOf(k,t+1));)r.push({type:7,index:a}),t+=k.length-1}a++}}static createElement(t,e){const i=z.createElement("template");return i.innerHTML=t,i}}function Q(t,e,i=t,s){if(e===W)return e;let a=void 0!==s?i._$Co?.[s]:i._$Cl;const o=O(e)?void 0:e._$litDirective$;return a?.constructor!==o&&(a?._$AO?.(!1),void 0===o?a=void 0:(a=new o(t),a._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=a:i._$Cl=a),void 0!==a&&(e=Q(t,a._$AS(t,e.values),a,s)),e}class X{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??z).importNode(e,!0);K.currentNode=s;let a=K.nextNode(),o=0,n=0,r=i[0];for(;void 0!==r;){if(o===r.index){let e;2===r.type?e=new tt(a,a.nextSibling,this,t):1===r.type?e=new r.ctor(a,r.name,r.strings,this,t):6===r.type&&(e=new ot(a,this,t)),this._$AV.push(e),r=i[++n]}o!==r?.index&&(a=K.nextNode(),o++)}return K.currentNode=z,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class tt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),O(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>M(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==q&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(z.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=G.createElement(Y(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new X(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=J.get(t.strings);return void 0===e&&J.set(t.strings,e=new G(t)),e}k(t){M(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const a of t)s===e.length?e.push(i=new tt(this.O(T()),this.O(T()),this,this.options)):i=e[s],i._$AI(a),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=w(t).nextSibling;w(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class et{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,a){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=a,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=q}_$AI(t,e=this,i,s){const a=this.strings;let o=!1;if(void 0===a)t=Q(this,t,e,0),o=!O(t)||t!==this._$AH&&t!==W,o&&(this._$AH=t);else{const s=t;let n,r;for(t=a[0],n=0;n<a.length-1;n++)r=Q(this,s[i+n],e,n),r===W&&(r=this._$AH[n]),o||=!O(r)||r!==this._$AH[n],r===q?t=q:t!==q&&(t+=(r??"")+a[n+1]),this._$AH[n]=r}o&&!s&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class it extends et{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}class st extends et{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==q)}}class at extends et{constructor(t,e,i,s,a){super(t,e,i,s,a),this.type=5}_$AI(t,e=this){if((t=Q(this,t,e,0)??q)===W)return;const i=this._$AH,s=t===q&&i!==q||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,a=t!==q&&(i===q||s);s&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}}const nt=C.litHtmlPolyfillSupport;nt?.(G,tt),(C.litHtmlVersions??=[]).push("3.3.2");const rt=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class lt extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let a=s._$litPart$;if(void 0===a){const t=i?.renderBefore??null;s._$litPart$=a=new tt(e.insertBefore(T(),t),t,void 0,i??{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}}lt._$litElement$=!0,lt.finalized=!0,rt.litElementHydrateSupport?.({LitElement:lt});const ct=rt.litElementPolyfillSupport;ct?.({LitElement:lt}),(rt.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dt={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:x},ht=(t=dt,e,i)=>{const{kind:s,metadata:a}=i;let o=globalThis.litPropertyMetadata.get(a);if(void 0===o&&globalThis.litPropertyMetadata.set(a,o=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),o.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const a=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,a,t,!0,i)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const a=this[s];e.call(this,i),this.requestUpdate(s,a,t,!0,i)}}throw Error("Unsupported decorator location: "+s)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ut(t){return(e,i)=>"object"==typeof i?ht(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pt(t){return ut({...t,state:!0,attribute:!1})}const mt=r`
  :host {
    display: block;
  }

  ha-card {
    padding: var(--card-padding, 8px);
    border-radius: var(--ha-card-border-radius, 12px);
    box-shadow: var(--ha-card-box-shadow, none);
  }

  ha-card header {
    padding: var(--header-padding-top, 16px) var(--header-padding-right, 16px)
      var(--header-padding-bottom, 12px) var(--header-padding-left, 16px);
    font-weight: var(--header-font-weight, 500);
    font-size: var(--header-font-size, 18px);
    color: var(--header-text-color, var(--primary-text-color));
    font-family: var(--header-font-family, inherit);
    line-height: 1.4;
  }

  .card-content {
    padding: var(--content-padding, 8px);
  }

  .nav-item-container {
    margin-bottom: var(--nav-item-spacing, 4px);
  }

  .nav-item {
    display: flex;
    align-items: center;
    text-decoration: none;
    background-color: var(
      --main-background-color,
      var(--card-background-color, rgba(0, 0, 0, 0.05))
    );
    padding: var(--main-padding-top, 12px) var(--main-padding-right, 16px)
      var(--main-padding-bottom, 12px) var(--main-padding-left, 16px);
    color: var(--main-text-color, var(--primary-text-color));
    border-radius: var(--main-border-radius, 8px);
    position: relative;
    cursor: pointer;
    transition: all var(--transition-duration, 0.2s) ease;
    border: var(--main-border, none);
    box-shadow: var(--main-box-shadow, none);
    font-weight: var(--main-font-weight, 400);
  }

  .nav-item span {
    font-size: var(--main-font-size, 16px);
    font-family: var(--main-font-family, inherit);
    flex: 1;
  }

  .nav-item ha-icon {
    --mdc-icon-size: var(--main-icon-size, 24px);
    margin-right: var(--main-icon-spacing, 12px);
    color: var(--item-icon-color, var(--main-icon-color, currentColor));
  }

  .unfolded {
    border-bottom-left-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
  }

  .sub-nav-items {
    background-color: var(
      --sub-container-background-color,
      var(--card-background-color, transparent)
    );
    border-bottom-left-radius: var(--main-border-radius, 8px);
    border-bottom-right-radius: var(--main-border-radius, 8px);
    overflow: hidden;
    max-height: 0;
    opacity: 0;
    transition: max-height var(--transition-duration, 0.2s) ease,
                opacity var(--transition-duration, 0.2s) ease;
  }

  .sub-nav-items.expanded {
    max-height: 500px;
    opacity: 1;
  }

  .sub-item {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--sub-text-color, var(--secondary-text-color));
    position: relative;
    padding: var(--sub-padding-top, 10px) var(--sub-padding-right, 16px)
      var(--sub-padding-bottom, 10px) var(--sub-padding-left, 48px);
    background-color: var(
      --sub-background-color,
      var(--card-background-color, rgba(0, 0, 0, 0.02))
    );
    border-radius: var(--sub-border-radius, 0);
    transition: all var(--transition-duration, 0.2s) ease;
    border: var(--sub-border, none);
    box-shadow: var(--sub-box-shadow, none);
    font-weight: var(--sub-font-weight, 400);
  }

  .sub-item span {
    font-size: var(--sub-font-size, 14px);
    font-family: var(--sub-font-family, inherit);
    flex: 1;
  }

  .sub-item ha-icon {
    --mdc-icon-size: var(--sub-icon-size, 20px);
    margin-right: var(--sub-icon-spacing, 12px);
    color: var(--item-icon-color, var(--sub-icon-color, currentColor));
  }

  .sub-item:first-child {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  .sub-item:last-child {
    border-bottom-left-radius: var(--main-border-radius, 8px);
    border-bottom-right-radius: var(--main-border-radius, 8px);
  }

  .nav-item:hover {
    background-color: var(
      --main-hover-color,
      var(--secondary-background-color, rgba(0, 0, 0, 0.08))
    );
    transform: var(--main-hover-transform, none);
    box-shadow: var(--main-hover-box-shadow, var(--main-box-shadow, none));
  }

  .nav-item.active {
    background-color: var(
      --main-active-color,
      var(--primary-color, rgba(3, 169, 244, 0.15))
    );
    color: var(--main-active-text-color, var(--primary-color));
    font-weight: var(--main-active-font-weight, 500);
    box-shadow: var(--main-active-box-shadow, var(--main-box-shadow, none));
  }

  .subnav-indicator {
    position: absolute;
    right: 12px;
    --mdc-icon-size: var(--subnav-indicator-size, 20px);
    transition: transform var(--transition-duration, 0.2s) ease;
    color: var(--subnav-indicator-color, currentColor);
  }

  .nav-item.unfolded .subnav-indicator {
    transform: rotate(180deg);
  }

  .sub-item:hover {
    background-color: var(
      --sub-hover-color,
      var(--secondary-background-color, rgba(0, 0, 0, 0.05))
    );
    transform: var(--sub-hover-transform, none);
    box-shadow: var(--sub-hover-box-shadow, var(--sub-box-shadow, none));
  }

  .sub-item.active {
    background-color: var(
      --sub-active-color,
      var(--primary-color, rgba(3, 169, 244, 0.1))
    );
    color: var(--sub-active-text-color, var(--primary-color));
    font-weight: var(--sub-active-font-weight, 500);
    box-shadow: var(--sub-active-box-shadow, var(--sub-box-shadow, none));
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 20px;
    height: 20px;
    padding: 0 6px;
    border-radius: 10px;
    background-color: var(--primary-color, #03a9f4);
    color: var(--text-primary-color, #fff);
    font-size: 11px;
    font-weight: 600;
    line-height: 1;
    margin-left: 8px;
    flex-shrink: 0;
  }
`,vt=r`
  .card-config {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 16px;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  h3 {
    margin: 16px 0 8px 0;
    color: var(--primary-text-color);
    font-size: 16px;
    font-weight: 500;
  }

  .nav-items-header {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    margin-bottom: 12px;
  }

  .main-nav-name {
    width: 100%;
  }

  .nav-items {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 12px;
  }

  .nav-item {
    display: flex;
    flex-direction: column;
    border: 1px solid var(--divider-color);
    border-radius: 8px;
    padding: 12px;
    background-color: var(--card-background-color);
    gap: 8px;
  }

  .nav-item-main-config {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .nav-item-options {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
  }

  .sub-nav-items {
    display: flex;
    flex-direction: column;
    margin-top: 8px;
  }

  .sub-nav-item {
    display: flex;
    flex-direction: column;
    border: 1px solid var(--divider-color);
    border-radius: 8px;
    padding: 12px;
    margin-bottom: 8px;
    background-color: var(--secondary-background-color);
    gap: 8px;
  }

  .sub-nav-item-main-config {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .main-config-row {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 8px;
  }

  .input-icon-picker {
    flex: 1;
    min-width: 0;
  }

  .input-name {
    flex: 2;
    min-width: 0;
  }

  .destination-input {
    width: 100%;
  }

  .sub-nav-item-options {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 8px;
  }

  mwc-button {
    --mdc-theme-primary: var(--primary-color);
  }

  .add-nav-item {
    border-radius: 8px;
  }

  .add-sub-nav-item {
    color: var(--primary-color);
    border-radius: 8px;
  }

  .remove-nav-item {
    color: var(--error-color);
    border-radius: 8px;
  }

  .remove-sub-nav-item {
    color: var(--error-color);
    border-radius: 8px;
  }

  details {
    margin-top: 8px;
    padding: 12px;
    border-radius: 8px;
    background-color: var(--card-background-color);
    border: 1px solid var(--divider-color);
  }

  details summary {
    font-weight: 500;
    cursor: pointer;
    user-select: none;
    color: var(--primary-text-color);
    padding: 4px 0;
    list-style: none;
    display: flex;
    align-items: center;
  }

  details summary::-webkit-details-marker {
    display: none;
  }

  details summary::before {
    content: "▶";
    display: inline-block;
    margin-right: 8px;
    transition: transform 0.2s ease;
    font-size: 12px;
  }

  details[open] summary::before {
    transform: rotate(90deg);
  }

  details details {
    background-color: var(--secondary-background-color);
  }

  .details-row {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 8px;
  }

  .color-preview {
    width: 40px;
    height: 40px;
    min-width: 40px;
    border-radius: 8px;
    border: 2px solid var(--divider-color);
    cursor: pointer;
    transition: transform 0.2s ease;
  }

  .color-preview:hover {
    transform: scale(1.05);
  }

  .custom-style-input {
    flex: 1;
  }

  ha-textfield,
  ha-icon-picker {
    width: 100%;
  }

  ha-formfield {
    display: flex;
    align-items: center;
  }

  .section-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 16px 0 8px 0;
  }

  .help-text {
    color: var(--secondary-text-color);
    font-size: 12px;
    margin-top: 4px;
    font-style: italic;
  }

  .visibility-config,
  .tap-action-config {
    margin-top: 8px;
    padding: 8px;
    border: 1px dashed var(--divider-color);
    border-radius: 6px;
  }

  .visibility-config h4,
  .tap-action-config h4 {
    margin: 0 0 8px 0;
    font-size: 13px;
    color: var(--secondary-text-color);
  }
`;class gt extends Event{constructor(t){super("config-changed",{bubbles:!0,composed:!0}),this.detail={config:t}}}let ft=class extends lt{constructor(){super(...arguments),this.label="",this.placeholder="",this.value="",this.destinations=[],this.isOpen=!1}static get styles(){return r`
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
    `}connectedCallback(){super.connectedCallback(),this.fetchDestinations()}async fetchDestinations(){if(this.hass){const t=await this.hass.callWS({type:"lovelace/config"});this.destinations=t.views.map(t=>`/lovelace/${t.path||t.title}`)}}handleInput(t){const e=t.target;this.value=e.value,this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value}})),this.isOpen=!0}handleBlur(){setTimeout(()=>{this.isOpen=!1},100)}handleItemClick(t){this.value=t,this.isOpen=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value}}))}render(){return V`
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
          ${this.destinations.map(t=>V`
              <div
                class="option"
                @click="${()=>this.handleItemClick(t)}"
              >
                ${t}
              </div>
            `)}
        </div>
      </div>
    `}};t([ut({attribute:!1}),e("design:type",Object)],ft.prototype,"hass",void 0),t([ut(),e("design:type",Object)],ft.prototype,"label",void 0),t([ut(),e("design:type",Object)],ft.prototype,"placeholder",void 0),t([ut(),e("design:type",Object)],ft.prototype,"value",void 0),t([pt(),e("design:type",Array)],ft.prototype,"destinations",void 0),t([pt(),e("design:type",Object)],ft.prototype,"isOpen",void 0),ft=t([(t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)})("destination-input")],ft);class yt extends(function(t){return class extends t{cloneConfig(){return JSON.parse(JSON.stringify(this._config))}dispatchConfigChanged(t){this._config=t;const e=new gt(t);this.dispatchEvent(e)}navNameChanged(t){if(!this._config||!t.target)return;const e=t.target,i=this.cloneConfig();i.nav_name=e.value,this.dispatchConfigChanged(i)}autoActiveChanged(t){if(!this._config||!t.target)return;const e=t.target,i=this.cloneConfig();i.auto_active=e.checked,this.dispatchConfigChanged(i)}addNavItem(t){if(!this._config||!t.target)return;const e=this.cloneConfig();e.nav_items||(e.nav_items=[]),e.nav_items.push({name:"New Item",icon:"mdi:home",destination:""}),this.dispatchConfigChanged(e)}removeNavItem(t,e){if(!this._config||!t.target)return;const i=this.cloneConfig();i.nav_items.splice(e,1),this.dispatchConfigChanged(i)}navItemChanged(t,e,i){if(!this._config||!t.target)return;const s=t.target,a=this.cloneConfig();let o;o="value-changed"===t.type?t.detail.value:s.value,a.nav_items[e][i]="active"===i||"unfolded"===i?s.checked:o,this.dispatchConfigChanged(a)}navItemVisibilityChanged(t,e,i){if(!this._config||!t.target)return;const s=t.target,a=this.cloneConfig();a.nav_items[e].visibility||(a.nav_items[e].visibility={entity:""}),s.value?a.nav_items[e].visibility[i]=s.value:(delete a.nav_items[e].visibility[i],a.nav_items[e].visibility.entity||delete a.nav_items[e].visibility),this.dispatchConfigChanged(a)}navItemTapActionChanged(t,e,i){if(!this._config||!t.target)return;const s=t.target,a=this.cloneConfig();a.nav_items[e].tap_action||(a.nav_items[e].tap_action={action:"navigate"});const o=a.nav_items[e].tap_action;"action"===i?o.action=s.value:"navigation_path"===i?o.navigation_path=s.value||void 0:"url_path"===i?o.url_path=s.value||void 0:"service"===i?o.service=s.value||void 0:"entity"===i&&(o.entity=s.value||void 0),"navigate"!==o.action||o.navigation_path||o.url_path||o.service||o.entity||delete a.nav_items[e].tap_action,this.dispatchConfigChanged(a)}addSubNavItem(t,e){if(!this._config||!t.target)return;const i=this.cloneConfig(),s=i.nav_items[e];s&&(s.sub_nav_items||(s.sub_nav_items=[]),s.sub_nav_items.push({name:"New Sub Item",icon:"mdi:home",destination:"/lovelace/0"}),this.dispatchConfigChanged(i))}removeSubNavItem(t,e,i){if(!this._config||!t.target)return;const s=this.cloneConfig(),a=s.nav_items[e]?.sub_nav_items;a&&(a.splice(i,1),0===a.length&&delete s.nav_items[e].sub_nav_items,this.dispatchConfigChanged(s))}subNavItemChanged(t,e,i,s){if(!this._config||!t.target)return;const a=t.target,o=this.cloneConfig(),n=o.nav_items[e]?.sub_nav_items?.[i];if(n){let e;e="value-changed"===t.type?t.detail.value:a.value,n[s]="active"===s?a.checked:e,this.dispatchConfigChanged(o)}}subNavItemVisibilityChanged(t,e,i,s){if(!this._config||!t.target)return;const a=t.target,o=this.cloneConfig(),n=o.nav_items[e]?.sub_nav_items?.[i];n&&(n.visibility||(n.visibility={entity:""}),a.value?n.visibility[s]=a.value:(delete n.visibility[s],n.visibility.entity||delete n.visibility),this.dispatchConfigChanged(o))}customStyleColorsChanged(t,e,i){if(!this._config||!t.target)return;const s=t.target,a=this.cloneConfig();a.custom_styles||(a.custom_styles={}),a.custom_styles.colors||(a.custom_styles.colors={}),a.custom_styles.colors[e]||(a.custom_styles.colors[e]={}),s.value?a.custom_styles.colors[e][i]=s.value:delete a.custom_styles.colors[e][i],this.dispatchConfigChanged(a),this.requestUpdate()}customStyleFontSizeChanged(t,e,i){if(!this._config||!t.target)return;const s=t.target,a=this.cloneConfig();a.custom_styles||(a.custom_styles={}),a.custom_styles.font_size||(a.custom_styles.font_size={}),a.custom_styles.font_size[e]||(a.custom_styles.font_size[e]={}),s.value?a.custom_styles.font_size[e][i]=s.value:delete a.custom_styles.font_size[e][i],this.dispatchConfigChanged(a)}customStyleFontWeightChanged(t,e){if(!this._config||!t.target)return;const i=t.target,s=this.cloneConfig();s.custom_styles||(s.custom_styles={}),s.custom_styles.font_weight||(s.custom_styles.font_weight={}),i.value?s.custom_styles.font_weight[e]=i.value:delete s.custom_styles.font_weight[e],this.dispatchConfigChanged(s)}customStyleFontFamilyChanged(t,e){if(!this._config||!t.target)return;const i=t.target,s=this.cloneConfig();s.custom_styles||(s.custom_styles={}),s.custom_styles.font_family||(s.custom_styles.font_family={}),i.value?s.custom_styles.font_family[e]=i.value:delete s.custom_styles.font_family[e],this.dispatchConfigChanged(s)}customStyleBorderRadiusChanged(t,e){if(!this._config||!t.target)return;const i=t.target,s=this.cloneConfig();s.custom_styles||(s.custom_styles={}),s.custom_styles.border_radius||(s.custom_styles.border_radius={}),i.value?s.custom_styles.border_radius[e]=i.value:delete s.custom_styles.border_radius[e],this.dispatchConfigChanged(s)}customStyleBorderChanged(t,e){if(!this._config||!t.target)return;const i=t.target,s=this.cloneConfig();s.custom_styles||(s.custom_styles={}),s.custom_styles.border||(s.custom_styles.border={}),i.value?s.custom_styles.border[e]=i.value:delete s.custom_styles.border[e],this.dispatchConfigChanged(s)}customStyleBoxShadowChanged(t,e){if(!this._config||!t.target)return;const i=t.target,s=this.cloneConfig();s.custom_styles||(s.custom_styles={}),s.custom_styles.box_shadow||(s.custom_styles.box_shadow={}),i.value?s.custom_styles.box_shadow[e]=i.value:delete s.custom_styles.box_shadow[e],this.dispatchConfigChanged(s)}customStyleTransitionDurationChanged(t){if(!this._config||!t.target)return;const e=t.target,i=this.cloneConfig();i.custom_styles||(i.custom_styles={}),i.custom_styles.transitions||(i.custom_styles.transitions={}),e.value?i.custom_styles.transitions.duration=e.value:delete i.custom_styles.transitions.duration,this.dispatchConfigChanged(i)}}}(lt)){constructor(){super(...arguments),this._config={nav_name:"",nav_items:[]},this.card=null}setConfig(t){if(!t.nav_items)throw new Error("You need to define nav_items");this._config=t,this.card=document.querySelector("vertical-stacked-navigation-card")}static get styles(){return vt}updated(t){this.card&&this.card.setConfig(this._config)}render(){return this.hass&&this._config?V`
      <div class="card-config">
        ${this.renderBasicSettings()}
        ${this.renderNavigationItems()}
        ${this.renderCustomStyles()}
      </div>
    `:V``}renderBasicSettings(){return V`
      <div class="section">
        <h3>Basic Settings</h3>
        <ha-textfield
          label="Navigation Name"
          class="main-nav-name"
          .value="${this._config.nav_name||""}"
          placeholder="My Custom Navigation"
          @change="${this.navNameChanged}"
        ></ha-textfield>
        <div class="help-text">Set to "none" to hide the header</div>
        <ha-formfield>
          <ha-switch
            type="checkbox"
            ?checked=${!1!==this._config.auto_active}
            @change="${this.autoActiveChanged}"
          ></ha-switch>
          <label class="mdc-label">Auto-detect active page from URL</label>
        </ha-formfield>
        <div class="help-text">Automatically highlights the nav item matching the current URL path</div>
      </div>
    `}renderNavigationItems(){return V`
      <div class="section">
        <div class="nav-items-header">
          <h3>Navigation Items</h3>
          <mwc-button
            class="add-nav-item"
            @click="${t=>this.addNavItem(t)}"
          >
            <ha-icon .icon=${"mdi:plus"}></ha-icon> Add Nav Item
          </mwc-button>
        </div>
        <div class="nav-items">
          ${this._config.nav_items.map((t,e)=>V`
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
                  <div class="main-config-row">
                    <ha-textfield
                      label="Icon Color"
                      placeholder="var(--primary-color)"
                      .value="${t.icon_color||""}"
                      @change="${t=>this.navItemChanged(t,e,"icon_color")}"
                    ></ha-textfield>
                    <ha-textfield
                      label="Entity (for badge)"
                      placeholder="sensor.temperature"
                      .value="${t.entity||""}"
                      @change="${t=>this.navItemChanged(t,e,"entity")}"
                    ></ha-textfield>
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
                  ${t?.sub_nav_items&&t.sub_nav_items.length>0?V`
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
                ${this.renderVisibilityConfig(e)}
                ${this.renderTapActionConfig(e)}
                ${this.renderSubNavItems(t,e)}
              </div>
            `)}
        </div>
      </div>
    `}renderVisibilityConfig(t){const e=this._config.nav_items[t];return V`
      <details>
        <summary>Visibility Condition</summary>
        <div class="visibility-config">
          <ha-textfield
            label="Entity"
            placeholder="binary_sensor.guest_mode"
            .value="${e.visibility?.entity||""}"
            @change="${e=>this.navItemVisibilityChanged(e,t,"entity")}"
          ></ha-textfield>
          <div class="main-config-row">
            <ha-textfield
              label="Required State"
              placeholder="on"
              .value="${e.visibility?.state||""}"
              @change="${e=>this.navItemVisibilityChanged(e,t,"state")}"
            ></ha-textfield>
            <ha-textfield
              label="State Not"
              placeholder="off"
              .value="${e.visibility?.state_not||""}"
              @change="${e=>this.navItemVisibilityChanged(e,t,"state_not")}"
            ></ha-textfield>
          </div>
          <div class="help-text">Show this item only when entity matches condition</div>
        </div>
      </details>
    `}renderTapActionConfig(t){const e=this._config.nav_items[t],i=e.tap_action?.action||"navigate";return V`
      <details>
        <summary>Tap Action</summary>
        <div class="tap-action-config">
          <ha-textfield
            label="Action"
            placeholder="navigate"
            .value="${i}"
            @change="${e=>this.navItemTapActionChanged(e,t,"action")}"
          ></ha-textfield>
          <div class="help-text">Options: navigate, url, call-service, more-info, none</div>
          ${"url"===i?V`
                <ha-textfield
                  label="URL"
                  placeholder="https://example.com"
                  .value="${e.tap_action?.url_path||""}"
                  @change="${e=>this.navItemTapActionChanged(e,t,"url_path")}"
                ></ha-textfield>
              `:""}
          ${"call-service"===i?V`
                <ha-textfield
                  label="Service"
                  placeholder="light.toggle"
                  .value="${e.tap_action?.service||""}"
                  @change="${e=>this.navItemTapActionChanged(e,t,"service")}"
                ></ha-textfield>
              `:""}
          ${"more-info"===i?V`
                <ha-textfield
                  label="Entity"
                  placeholder="light.living_room"
                  .value="${e.tap_action?.entity||""}"
                  @change="${e=>this.navItemTapActionChanged(e,t,"entity")}"
                ></ha-textfield>
              `:""}
        </div>
      </details>
    `}renderSubNavItems(t,e){return t?.sub_nav_items&&0!==t.sub_nav_items.length?V`
      <div class="sub-nav-items">
        <details>
          <summary>Sub Navigation Items (${t.sub_nav_items.length})</summary>
          ${t.sub_nav_items.map((t,i)=>V`
              <div class="sub-nav-item" index="${i}">
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
                  <div class="main-config-row">
                    <ha-textfield
                      label="Icon Color"
                      placeholder="var(--primary-color)"
                      .value="${t.icon_color||""}"
                      @change="${t=>this.subNavItemChanged(t,e,i,"icon_color")}"
                    ></ha-textfield>
                    <ha-textfield
                      label="Entity (for badge)"
                      placeholder="sensor.temperature"
                      .value="${t.entity||""}"
                      @change="${t=>this.subNavItemChanged(t,e,i,"entity")}"
                    ></ha-textfield>
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
                <details>
                  <summary>Visibility Condition</summary>
                  <div class="visibility-config">
                    <ha-textfield
                      label="Entity"
                      placeholder="binary_sensor.guest_mode"
                      .value="${t.visibility?.entity||""}"
                      @change="${t=>this.subNavItemVisibilityChanged(t,e,i,"entity")}"
                    ></ha-textfield>
                    <div class="main-config-row">
                      <ha-textfield
                        label="Required State"
                        placeholder="on"
                        .value="${t.visibility?.state||""}"
                        @change="${t=>this.subNavItemVisibilityChanged(t,e,i,"state")}"
                      ></ha-textfield>
                      <ha-textfield
                        label="State Not"
                        placeholder="off"
                        .value="${t.visibility?.state_not||""}"
                        @change="${t=>this.subNavItemVisibilityChanged(t,e,i,"state_not")}"
                      ></ha-textfield>
                    </div>
                  </div>
                </details>
              </div>
            `)}
        </details>
      </div>
    `:""}renderCustomStyles(){return V`
      <div class="section">
        <h3>Custom Styles</h3>
        <details class="custom-styles">
          <summary>Customize Appearance</summary>

          ${this.renderColorsSection()}
          ${this.renderTypographySection()}
          ${this.renderLayoutSection()}
          ${this.renderEffectsSection()}
        </details>
      </div>
    `}renderColorsSection(){return V`
      <details>
        <summary>Colors</summary>

        <details>
          <summary>Text Color</summary>
          ${this.renderColorInput("text","main","Main Text","rgba(0, 0, 0, 0.87)")}
          ${this.renderColorInput("text","sub","Sub Text","rgba(0, 0, 0, 0.6)")}
        </details>

        <details>
          <summary>Background Color</summary>
          ${this.renderColorInput("background","main","Main Background","rgba(0, 0, 0, 0.05)")}
          ${this.renderColorInput("background","sub","Sub Background","rgba(0, 0, 0, 0.02)")}
        </details>

        <details>
          <summary>Hover Color</summary>
          ${this.renderColorInput("hover","main","Main Hover","rgba(0, 0, 0, 0.08)")}
          ${this.renderColorInput("hover","sub","Sub Hover","rgba(0, 0, 0, 0.05)")}
        </details>

        <details>
          <summary>Active State Color</summary>
          ${this.renderColorInput("active","main","Main Active Background","rgba(3, 169, 244, 0.15)")}
          ${this.renderColorInput("active","sub","Sub Active Background","rgba(3, 169, 244, 0.1)")}
          ${this.renderColorInput("active_text","main","Main Active Text","rgb(3, 169, 244)")}
          ${this.renderColorInput("active_text","sub","Sub Active Text","rgb(3, 169, 244)")}
        </details>

        <details>
          <summary>Icon Color</summary>
          ${this.renderColorInput("icon","main","Main Icon","currentColor")}
          ${this.renderColorInput("icon","sub","Sub Icon","currentColor")}
        </details>
      </details>
    `}renderTypographySection(){return V`
      <details>
        <summary>Typography</summary>

        <details>
          <summary>Text Size</summary>
          <ha-textfield
            label="Main Text Size"
            placeholder="16px"
            .value="${this._config.custom_styles?.font_size?.text?.main||""}"
            @change="${t=>this.customStyleFontSizeChanged(t,"text","main")}"
          ></ha-textfield>
          <ha-textfield
            label="Sub Text Size"
            placeholder="14px"
            .value="${this._config.custom_styles?.font_size?.text?.sub||""}"
            @change="${t=>this.customStyleFontSizeChanged(t,"text","sub")}"
          ></ha-textfield>
        </details>

        <details>
          <summary>Icon Size</summary>
          <ha-textfield
            label="Main Icon Size"
            placeholder="24px"
            .value="${this._config.custom_styles?.font_size?.icon?.main||""}"
            @change="${t=>this.customStyleFontSizeChanged(t,"icon","main")}"
          ></ha-textfield>
          <ha-textfield
            label="Sub Icon Size"
            placeholder="20px"
            .value="${this._config.custom_styles?.font_size?.icon?.sub||""}"
            @change="${t=>this.customStyleFontSizeChanged(t,"icon","sub")}"
          ></ha-textfield>
        </details>

        <details>
          <summary>Font Weight</summary>
          <ha-textfield
            label="Main Font Weight"
            placeholder="400"
            .value="${this._config.custom_styles?.font_weight?.main||""}"
            @change="${t=>this.customStyleFontWeightChanged(t,"main")}"
          ></ha-textfield>
          <ha-textfield
            label="Sub Font Weight"
            placeholder="400"
            .value="${this._config.custom_styles?.font_weight?.sub||""}"
            @change="${t=>this.customStyleFontWeightChanged(t,"sub")}"
          ></ha-textfield>
          <ha-textfield
            label="Main Active Font Weight"
            placeholder="500"
            .value="${this._config.custom_styles?.font_weight?.main_active||""}"
            @change="${t=>this.customStyleFontWeightChanged(t,"main_active")}"
          ></ha-textfield>
          <ha-textfield
            label="Sub Active Font Weight"
            placeholder="500"
            .value="${this._config.custom_styles?.font_weight?.sub_active||""}"
            @change="${t=>this.customStyleFontWeightChanged(t,"sub_active")}"
          ></ha-textfield>
        </details>

        <details>
          <summary>Font Family</summary>
          <ha-textfield
            label="Main Font Family"
            placeholder="inherit"
            .value="${this._config.custom_styles?.font_family?.main||""}"
            @change="${t=>this.customStyleFontFamilyChanged(t,"main")}"
          ></ha-textfield>
          <ha-textfield
            label="Sub Font Family"
            placeholder="inherit"
            .value="${this._config.custom_styles?.font_family?.sub||""}"
            @change="${t=>this.customStyleFontFamilyChanged(t,"sub")}"
          ></ha-textfield>
        </details>
      </details>
    `}renderLayoutSection(){return V`
      <details>
        <summary>Layout & Spacing</summary>

        <details>
          <summary>Border Radius</summary>
          <ha-textfield
            label="Main Border Radius"
            placeholder="8px"
            .value="${this._config.custom_styles?.border_radius?.main||""}"
            @change="${t=>this.customStyleBorderRadiusChanged(t,"main")}"
          ></ha-textfield>
          <ha-textfield
            label="Sub Border Radius"
            placeholder="0"
            .value="${this._config.custom_styles?.border_radius?.sub||""}"
            @change="${t=>this.customStyleBorderRadiusChanged(t,"sub")}"
          ></ha-textfield>
          <ha-textfield
            label="Card Border Radius"
            placeholder="12px"
            .value="${this._config.custom_styles?.border_radius?.card||""}"
            @change="${t=>this.customStyleBorderRadiusChanged(t,"card")}"
          ></ha-textfield>
        </details>

        <details>
          <summary>Borders</summary>
          <ha-textfield
            label="Main Border"
            placeholder="none"
            .value="${this._config.custom_styles?.border?.main||""}"
            @change="${t=>this.customStyleBorderChanged(t,"main")}"
          ></ha-textfield>
          <div class="help-text">Example: 1px solid rgba(0,0,0,0.1)</div>
          <ha-textfield
            label="Sub Border"
            placeholder="none"
            .value="${this._config.custom_styles?.border?.sub||""}"
            @change="${t=>this.customStyleBorderChanged(t,"sub")}"
          ></ha-textfield>
        </details>
      </details>
    `}renderEffectsSection(){return V`
      <details>
        <summary>Effects & Animations</summary>

        <details>
          <summary>Box Shadows</summary>
          <ha-textfield
            label="Main Box Shadow"
            placeholder="none"
            .value="${this._config.custom_styles?.box_shadow?.main||""}"
            @change="${t=>this.customStyleBoxShadowChanged(t,"main")}"
          ></ha-textfield>
          <ha-textfield
            label="Sub Box Shadow"
            placeholder="none"
            .value="${this._config.custom_styles?.box_shadow?.sub||""}"
            @change="${t=>this.customStyleBoxShadowChanged(t,"sub")}"
          ></ha-textfield>
          <ha-textfield
            label="Main Hover Box Shadow"
            placeholder="none"
            .value="${this._config.custom_styles?.box_shadow?.main_hover||""}"
            @change="${t=>this.customStyleBoxShadowChanged(t,"main_hover")}"
          ></ha-textfield>
          <ha-textfield
            label="Card Box Shadow"
            placeholder="none"
            .value="${this._config.custom_styles?.box_shadow?.card||""}"
            @change="${t=>this.customStyleBoxShadowChanged(t,"card")}"
          ></ha-textfield>
          <div class="help-text">Example: 0 2px 4px rgba(0,0,0,0.1)</div>
        </details>

        <details>
          <summary>Transition Duration</summary>
          <ha-textfield
            label="Transition Duration"
            placeholder="0.2s"
            .value="${this._config.custom_styles?.transitions?.duration||""}"
            @change="${t=>this.customStyleTransitionDurationChanged(t)}"
          ></ha-textfield>
          <div class="help-text">Controls animation speed (e.g., 0.3s, 200ms)</div>
        </details>
      </details>
    `}renderColorInput(t,e,i,s){const a=this._config.custom_styles?.colors?.[t]?.[e]||"";return V`
      <div class="details-row">
        <div
          class="color-preview"
          style="background-color: ${a||s};"
          title="${i}"
        ></div>
        <ha-textfield
          label="${i}"
          class="custom-style-input"
          placeholder="${s}"
          .value="${a}"
          @change="${i=>this.customStyleColorsChanged(i,t,e)}"
        ></ha-textfield>
      </div>
    `}}t([ut({attribute:!1}),e("design:type",Object)],yt.prototype,"hass",void 0),t([ut(),e("design:type",Object)],yt.prototype,"_config",void 0),customElements.define("vertical-stacked-navigation-card-editor",yt);class bt extends lt{constructor(){super(...arguments),this.content=null,this.isContentSet=!1,this._expandedItems=new Set}static get styles(){return mt}static getConfigElement(){return document.createElement("vertical-stacked-navigation-card-editor")}static getStubConfig(){return{nav_name:"Navigation",auto_active:!0,nav_items:[{name:"Home",icon:"mdi:home",destination:"/lovelace/0"},{name:"Lights",icon:"mdi:lightbulb",sub_nav_items:[{name:"Living Room",icon:"mdi:lightbulb",destination:"/lovelace/1"}]}]}}_isItemActive(t){if(t.active)return!0;if(this.config.auto_active&&t.destination){return window.location.pathname===t.destination}return!1}_isItemVisible(t){if(!t.visibility||!this.hass)return!0;const{entity:e,state:i,state_not:s}=t.visibility;if(!e)return!0;const a=this.hass.states[e];return!a||(void 0!==i?a.state===i:void 0===s||a.state!==s)}_getEntityBadge(t){if(!t.entity||!this.hass)return null;const e=this.hass.states[t.entity];return e?e.state:null}_handleTapAction(t,e){if(!t.tap_action||"navigate"===t.tap_action.action)return;e.preventDefault();const i=t.tap_action;switch(i.action){case"url":i.url_path&&window.open(i.url_path,"_blank");break;case"call-service":if(i.service&&this.hass){const[t,e]=i.service.split(".");this.hass.callService(t,e,i.service_data||{})}break;case"more-info":if(i.entity||t.entity){const e=new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:i.entity||t.entity}});this.dispatchEvent(e)}}}_getItemHref(t){if(t.tap_action)switch(t.tap_action.action){case"navigate":return t.tap_action.navigation_path||t.destination||"#";case"url":case"call-service":case"more-info":case"none":return"#"}return t.destination||"#"}render(){const t=this.config.nav_items.map((t,e)=>{if(!this._isItemVisible(t))return q;const i=this._isItemActive(t),s=t.sub_nav_items&&t.sub_nav_items.length>0,a=this._expandedItems.has(e),o=this._getEntityBadge(t),n=(s?t.sub_nav_items.filter(t=>this._isItemVisible(t)):[]).map(t=>V`
          <a
            href="${this._getItemHref(t)}"
            class="sub-item ${this._isItemActive(t)?"active":""}"
            @click=${e=>this._handleTapAction(t,e)}
            style="${t.icon_color?`--item-icon-color: ${t.icon_color}`:""}"
          >
            <ha-icon icon="${t.icon}"></ha-icon>
            <span>${t.name}</span>
            ${t.entity&&this._getEntityBadge(t)?V`<span class="badge">${this._getEntityBadge(t)}</span>`:""}
          </a>
        `);return V`
        <div class="nav-item-container">
          <a
            href="${s?"#":this._getItemHref(t)}"
            class="nav-item ${i?"active":""} ${a?"unfolded":""}"
            @click=${s?t=>this._toggleSubnav(t,e):e=>this._handleTapAction(t,e)}
            style="${t.icon_color?`--item-icon-color: ${t.icon_color}`:""}"
          >
            <ha-icon icon="${t.icon}"></ha-icon>
            <span>${t.name}</span>
            ${o?V`<span class="badge">${o}</span>`:""}
            ${s?V`<ha-icon
                  icon="mdi:chevron-down"
                  class="subnav-indicator"
                ></ha-icon>`:""}
          </a>
          ${s?V`<div class="sub-nav-items ${a?"expanded":""}">
                ${n}
              </div>`:""}
        </div>
      `});return V`
      <ha-card>
        ${"none"!==this.config.nav_name?V`<header>${this.config.nav_name||"My Custom Navigation"}</header>`:""}
        <div class="card-content">${t}</div>
      </ha-card>
    `}updated(t){this.content||(this.content=this.shadowRoot.querySelector(".card-content")),!this.isContentSet&&this.content&&(this.applyCustomStyles(),this.isContentSet=!0)}applyCustomStyles(){if(!this.config.custom_styles)return;const{colors:t,font_size:e,font_weight:i,font_family:s,border_radius:a,padding:o,spacing:n,border:r,box_shadow:l,header:c,transitions:d,subnav_indicator:h}=this.config.custom_styles;t&&(this.setStyleProperty("--main-background-color",t.background?.main),this.setStyleProperty("--sub-background-color",t.background?.sub),this.setStyleProperty("--main-text-color",t.text?.main),this.setStyleProperty("--sub-text-color",t.text?.sub),this.setStyleProperty("--main-hover-color",t.hover?.main),this.setStyleProperty("--sub-hover-color",t.hover?.sub),this.setStyleProperty("--main-active-color",t.active?.main),this.setStyleProperty("--sub-active-color",t.active?.sub),this.setStyleProperty("--main-active-text-color",t.active_text?.main),this.setStyleProperty("--sub-active-text-color",t.active_text?.sub),this.setStyleProperty("--main-icon-color",t.icon?.main),this.setStyleProperty("--sub-icon-color",t.icon?.sub)),e&&(this.setStyleProperty("--main-font-size",e.text?.main),this.setStyleProperty("--sub-font-size",e.text?.sub),this.setStyleProperty("--main-icon-size",e.icon?.main),this.setStyleProperty("--sub-icon-size",e.icon?.sub)),i&&(this.setStyleProperty("--main-font-weight",i.main),this.setStyleProperty("--sub-font-weight",i.sub),this.setStyleProperty("--main-active-font-weight",i.main_active),this.setStyleProperty("--sub-active-font-weight",i.sub_active)),s&&(this.setStyleProperty("--main-font-family",s.main),this.setStyleProperty("--sub-font-family",s.sub)),a&&(this.setStyleProperty("--main-border-radius",a.main),this.setStyleProperty("--sub-border-radius",a.sub),this.setStyleProperty("--ha-card-border-radius",a.card)),o&&(o.main&&(this.setStyleProperty("--main-padding-top",o.main.top),this.setStyleProperty("--main-padding-right",o.main.right),this.setStyleProperty("--main-padding-bottom",o.main.bottom),this.setStyleProperty("--main-padding-left",o.main.left)),o.sub&&(this.setStyleProperty("--sub-padding-top",o.sub.top),this.setStyleProperty("--sub-padding-right",o.sub.right),this.setStyleProperty("--sub-padding-bottom",o.sub.bottom),this.setStyleProperty("--sub-padding-left",o.sub.left)),this.setStyleProperty("--content-padding",o.content),this.setStyleProperty("--card-padding",o.card)),n&&(this.setStyleProperty("--nav-item-spacing",n.nav_items),this.setStyleProperty("--main-icon-spacing",n.icon?.main),this.setStyleProperty("--sub-icon-spacing",n.icon?.sub)),r&&(this.setStyleProperty("--main-border",r.main),this.setStyleProperty("--sub-border",r.sub)),l&&(this.setStyleProperty("--main-box-shadow",l.main),this.setStyleProperty("--sub-box-shadow",l.sub),this.setStyleProperty("--main-hover-box-shadow",l.main_hover),this.setStyleProperty("--sub-hover-box-shadow",l.sub_hover),this.setStyleProperty("--main-active-box-shadow",l.main_active),this.setStyleProperty("--sub-active-box-shadow",l.sub_active),this.setStyleProperty("--ha-card-box-shadow",l.card)),c&&(this.setStyleProperty("--header-font-size",c.font_size),this.setStyleProperty("--header-font-weight",c.font_weight),this.setStyleProperty("--header-font-family",c.font_family),this.setStyleProperty("--header-text-color",c.color),c.padding&&(this.setStyleProperty("--header-padding-top",c.padding.top),this.setStyleProperty("--header-padding-right",c.padding.right),this.setStyleProperty("--header-padding-bottom",c.padding.bottom),this.setStyleProperty("--header-padding-left",c.padding.left))),d&&this.setStyleProperty("--transition-duration",d.duration),h&&(this.setStyleProperty("--subnav-indicator-size",h.size),this.setStyleProperty("--subnav-indicator-color",h.color))}setStyleProperty(t,e){null!=e&&""!==e&&this.style.setProperty(t,e)}setConfig(t){if(!t.nav_items)throw new Error("You need to define nav_items");this.config=t,this.isContentSet=!1,this._expandedItems=new Set,t.nav_items.forEach((t,e)=>{t.unfolded&&this._expandedItems.add(e)}),this.requestUpdate()}getCardSize(){return 1*this.config.nav_items.length}_toggleSubnav(t,e){t.preventDefault();const i=new Set(this._expandedItems);i.has(e)?i.delete(e):i.add(e),this._expandedItems=i}}t([ut({attribute:!1}),e("design:type",Object)],bt.prototype,"hass",void 0),t([pt(),e("design:type",Set)],bt.prototype,"_expandedItems",void 0),customElements.define("vertical-stacked-navigation-card",bt),window.customCards=window.customCards||[],window.customCards.push({type:"vertical-stacked-navigation-card",name:"Vertical Stacked Navigation Card",description:"A custom card for displaying a vertical stacked navigation with optional sub-navigation and extensive customization options",preview:!0,documentationURL:"https://github.com/REDDE4D/hass-vertical-stacked-navigation-card"});export{bt as VerticalStackedNavCard};
