/*! For license information please see bundle.js.LICENSE.txt */
(()=>{var t={104:t=>{t.exports="data:image/svg+xml,%3c!-- Generator: Adobe Illustrator 18.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3e %3c!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e %3csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 44.18 44.18' style='enable-background:new 0 0 44.18 44.18;' xml:space='preserve'%3e %3cg%3e %3cpath d='M10.625,5.09L0,22.09l10.625,17H44.18v-34H10.625z M42.18,37.09H11.734l-9.375-15l9.375-15H42.18V37.09z'/%3e %3cpolygon points='18.887,30.797 26.18,23.504 33.473,30.797 34.887,29.383 27.594,22.09 34.887,14.797 33.473,13.383 26.18,20.676 18.887,13.383 17.473,14.797 24.766,22.09 17.473,29.383 '/%3e %3c/g%3e %3c/svg%3e"},100:t=>{t.exports="data:image/svg+xml,%3csvg width='700pt' height='700pt' version='1.1' viewBox='0 0 700 700' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e %3cg%3e %3cpath d='m568.75 140h-70c-4.832 0-8.75 3.918-8.75 8.75v122.5h-227.5v-52.5c0-3.25-1.8008-6.2305-4.6758-7.7422-2.875-1.5156-6.3516-1.3086-9.0312 0.53125l-140 96.25c-2.375 1.6328-3.793 4.3281-3.793 7.2109s1.418 5.5781 3.793 7.2109l140 96.25c2.6797 1.8398 6.1562 2.0469 9.0312 0.53125 2.875-1.5117 4.6758-4.4922 4.6758-7.7422v-52.5h306.25c2.3203 0 4.5469-0.92188 6.1875-2.5625s2.5625-3.8672 2.5625-6.1875v-201.25c0-2.3203-0.92188-4.5469-2.5625-6.1875s-3.8672-2.5625-6.1875-2.5625zm-8.75 201.25h-306.25c-4.832 0-8.75 3.918-8.75 8.75v44.617l-115.81-79.617 115.81-79.617v44.617c0 2.3203 0.92188 4.5469 2.5625 6.1875s3.8672 2.5625 6.1875 2.5625h245c2.3203 0 4.5469-0.92188 6.1875-2.5625s2.5625-3.8672 2.5625-6.1875v-122.5h52.5z'/%3e %3c/g%3e %3c/svg%3e"}},e={};function s(i){var n=e[i];if(void 0!==n)return n.exports;var o=e[i]={exports:{}};return t[i](o,o.exports,s),o.exports}s.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return s.d(e,{a:e}),e},s.d=(t,e)=>{for(var i in e)s.o(e,i)&&!s.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),i=new Map;class n{constructor(t,s){if(this._$cssResult$=!0,s!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let e=i.get(this.cssText);return t&&void 0===e&&(i.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const o=t=>new n("string"==typeof t?t:t+"",e),r=(t,...s)=>{const i=1===t.length?t[0]:s.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new n(i,e)},a=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return o(e)})(t):t;var l;const d=window.trustedTypes,c=d?d.emptyScript:"",h=window.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?c:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},u=(t,e)=>e!==t&&(e==e||t==t),v={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:u};class f extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,s)=>{const i=this._$Eh(s,e);void 0!==i&&(this._$Eu.set(i,s),t.push(i))})),t}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const n=this[t];this[e]=i,this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||v}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of e)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eh(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,s;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const s=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,s)=>{t?e.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((t=>{const s=document.createElement("style"),i=window.litNonce;void 0!==i&&s.setAttribute("nonce",i),s.textContent=t.cssText,e.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ES(t,e,s=v){var i,n;const o=this.constructor._$Eh(t,s);if(void 0!==o&&!0===s.reflect){const r=(null!==(n=null===(i=s.converter)||void 0===i?void 0:i.toAttribute)&&void 0!==n?n:p.toAttribute)(e,s.type);this._$Ei=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$Ei=null}}_$AK(t,e){var s,i,n;const o=this.constructor,r=o._$Eu.get(t);if(void 0!==r&&this._$Ei!==r){const t=o.getPropertyOptions(r),a=t.converter,l=null!==(n=null!==(i=null===(s=a)||void 0===s?void 0:s.fromAttribute)&&void 0!==i?i:"function"==typeof a?a:null)&&void 0!==n?n:p.fromAttribute;this._$Ei=r,this[r]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,s){let i=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||u)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Ei!==t&&(void 0===this._$E_&&(this._$E_=new Map),this._$E_.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(s)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$E_&&(this._$E_.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}}var g;f.finalized=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==h||h({ReactiveElement:f}),(null!==(l=globalThis.reactiveElementVersions)&&void 0!==l?l:globalThis.reactiveElementVersions=[]).push("1.2.2");const y=globalThis.trustedTypes,$=y?y.createPolicy("lit-html",{createHTML:t=>t}):void 0,x=`lit$${(Math.random()+"").slice(9)}$`,b="?"+x,m=`<${b}>`,w=document,_=(t="")=>w.createComment(t),A=t=>null===t||"object"!=typeof t&&"function"!=typeof t,E=Array.isArray,S=t=>{var e;return E(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,C=/-->/g,P=/>/g,U=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,L=/'/g,N=/"/g,O=/^(?:script|style|textarea|title)$/i,G=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),T=G(1),H=(G(2),Symbol.for("lit-noChange")),M=Symbol.for("lit-nothing"),R=new WeakMap,B=w.createTreeWalker(w,129,null,!1),W=(t,e)=>{const s=t.length-1,i=[];let n,o=2===e?"<svg>":"",r=k;for(let e=0;e<s;e++){const s=t[e];let a,l,d=-1,c=0;for(;c<s.length&&(r.lastIndex=c,l=r.exec(s),null!==l);)c=r.lastIndex,r===k?"!--"===l[1]?r=C:void 0!==l[1]?r=P:void 0!==l[2]?(O.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=U):void 0!==l[3]&&(r=U):r===U?">"===l[0]?(r=null!=n?n:k,d=-1):void 0===l[1]?d=-2:(d=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?U:'"'===l[3]?N:L):r===N||r===L?r=U:r===C||r===P?r=k:(r=U,n=void 0);const h=r===U&&t[e+1].startsWith("/>")?" ":"";o+=r===k?s+m:d>=0?(i.push(a),s.slice(0,d)+"$lit$"+s.slice(d)+x+h):s+x+(-2===d?(i.push(void 0),e):h)}const a=o+(t[s]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==$?$.createHTML(a):a,i]};class j{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,o=0;const r=t.length-1,a=this.parts,[l,d]=W(t,e);if(this.el=j.createElement(l,s),B.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=B.nextNode())&&a.length<r;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(x)){const s=d[o++];if(t.push(e),void 0!==s){const t=i.getAttribute(s.toLowerCase()+"$lit$").split(x),e=/([.?@])?(.*)/.exec(s);a.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?V:"?"===e[1]?J:"@"===e[1]?Y:K})}else a.push({type:6,index:n})}for(const e of t)i.removeAttribute(e)}if(O.test(i.tagName)){const t=i.textContent.split(x),e=t.length-1;if(e>0){i.textContent=y?y.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],_()),B.nextNode(),a.push({type:2,index:++n});i.append(t[e],_())}}}else if(8===i.nodeType)if(i.data===b)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(x,t+1));)a.push({type:7,index:n}),t+=x.length-1}n++}}static createElement(t,e){const s=w.createElement("template");return s.innerHTML=t,s}}function z(t,e,s=t,i){var n,o,r,a;if(e===H)return e;let l=void 0!==i?null===(n=s._$Cl)||void 0===n?void 0:n[i]:s._$Cu;const d=A(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===d?l=void 0:(l=new d(t),l._$AT(t,s,i)),void 0!==i?(null!==(r=(a=s)._$Cl)&&void 0!==r?r:a._$Cl=[])[i]=l:s._$Cu=l),void 0!==l&&(e=z(t,l._$AS(t,e.values),l,i)),e}class D{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:s},parts:i}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:w).importNode(s,!0);B.currentNode=n;let o=B.nextNode(),r=0,a=0,l=i[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new I(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new Z(o,this,t)),this.v.push(e),l=i[++a]}r!==(null==l?void 0:l.index)&&(o=B.nextNode(),r++)}return n}m(t){let e=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class I{constructor(t,e,s,i){var n;this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cg=null===(n=null==i?void 0:i.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=z(this,t,e),A(t)?t===M||null==t||""===t?(this._$AH!==M&&this._$AR(),this._$AH=M):t!==this._$AH&&t!==H&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):S(t)?this.A(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==M&&A(this._$AH)?this._$AA.nextSibling.data=t:this.S(w.createTextNode(t)),this._$AH=t}T(t){var e;const{values:s,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=j.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.m(s);else{const t=new D(n,this),e=t.p(this.options);t.m(s),this.S(e),this._$AH=t}}_$AC(t){let e=R.get(t.strings);return void 0===e&&R.set(t.strings,e=new j(t)),e}A(t){E(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new I(this.M(_()),this.M(_()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class K{constructor(t,e,s,i,n){this.type=1,this._$AH=M,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=M}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const n=this.strings;let o=!1;if(void 0===n)t=z(this,t,e,0),o=!A(t)||t!==this._$AH&&t!==H,o&&(this._$AH=t);else{const i=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=z(this,i[s+r],e,r),a===H&&(a=this._$AH[r]),o||(o=!A(a)||a!==this._$AH[r]),a===M?t=M:t!==M&&(t+=(null!=a?a:"")+n[r+1]),this._$AH[r]=a}o&&!i&&this.k(t)}k(t){t===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class V extends K{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===M?void 0:t}}const q=y?y.emptyScript:"";class J extends K{constructor(){super(...arguments),this.type=4}k(t){t&&t!==M?this.element.setAttribute(this.name,q):this.element.removeAttribute(this.name)}}class Y extends K{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){var s;if((t=null!==(s=z(this,t,e,0))&&void 0!==s?s:M)===H)return;const i=this._$AH,n=t===M&&i!==M||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==M&&(i===M||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class Z{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){z(this,t)}}const F={P:"$lit$",V:x,L:b,I:1,N:W,R:D,D:S,j:z,H:I,O:K,F:J,B:Y,W:V,Z},Q=window.litHtmlPolyfillSupport;var X,tt;null==Q||Q(j,I),(null!==(g=globalThis.litHtmlVersions)&&void 0!==g?g:globalThis.litHtmlVersions=[]).push("2.1.3");class et extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,s)=>{var i,n;const o=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:e;let r=o._$litPart$;if(void 0===r){const t=null!==(n=null==s?void 0:s.renderBefore)&&void 0!==n?n:null;o._$litPart$=r=new I(e.insertBefore(_(),t),t,void 0,null!=s?s:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return H}}et.finalized=!0,et._$litElement$=!0,null===(X=globalThis.litElementHydrateSupport)||void 0===X||X.call(globalThis,{LitElement:et});const st=globalThis.litElementPolyfillSupport;null==st||st({LitElement:et}),(null!==(tt=globalThis.litElementVersions)&&void 0!==tt?tt:globalThis.litElementVersions=[]).push("3.1.2");const it={word:"",definitions:[],guess:[],guessArchive:[],round:1,finalRound:6,keysPlayed:{},isWon:!1,isLose:!1},nt=async(t=5)=>{const{word:e,definitions:s}=await(async()=>{const t=await fetch("./api/new-word/",{method:"GET"}),{word:e,definitions:s}=await t.json();return{word:e,definitions:s}})();return new class{constructor(t,e){this.word=t,this.definitions=e,this.guess=[],this.guessArchive=[],this.round=1,this.finalRound=6,this.keysPlayed={},this.isWon=!1,this.isLose=!1}async submitGuess(t,e){const s=await(async t=>{const e={word:t};try{const t=await fetch("./api/check-word/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});return(await t.json()).isWord}catch(t){return!1}})(t.join("")),i=this.word.split("");if(s){const s=t.map(((t,e)=>{const s=t===i[e]?"match":i.includes(t)?"wrong-spot":"not-here";return"wrong-spot"===s&&(i[i.indexOf(t)]=""),"match"===s&&(i[e]=""),this.keysPlayed={...this.keysPlayed,[t]:s},s}));this.animateCurrentGuess(t,s,e),this.round+=1,this.isWon=(t=>t.every((t=>"match"===t)))(s),this.isWon||(this.isLose=this.round>this.finalRound)}return s}animateCurrentGuess(t,e,s){const i=new Array(5).fill(" "),n=new Array(5).fill(" ");let o=0;this.guessArchive.push({word:i,guessedLetterStatus:n});const r=setInterval((()=>{if(o>=5)clearInterval(r);else{i[o]=t[o],n[o]=e[o];const r={word:i,guessedLetterStatus:n},a=this.guessArchive.slice(0,this.guessArchive.length-1);a.push({...r}),this.guessArchive=a,o+=1,s.requestUpdate()}}),250)}}(e,s)},ot=t=>(...e)=>({_$litDirective$:t,values:e});class rt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const{H:at}=F,lt=()=>document.createComment(""),dt=(t,e,s)=>{var i;const n=t._$AA.parentNode,o=void 0===e?t._$AB:e._$AA;if(void 0===s){const e=n.insertBefore(lt(),o),i=n.insertBefore(lt(),o);s=new at(e,i,t,t.options)}else{const e=s._$AB.nextSibling,r=s._$AM,a=r!==t;if(a){let e;null===(i=s._$AQ)||void 0===i||i.call(s,t),s._$AM=t,void 0!==s._$AP&&(e=t._$AU)!==r._$AU&&s._$AP(e)}if(e!==o||a){let t=s._$AA;for(;t!==e;){const e=t.nextSibling;n.insertBefore(t,o),t=e}}}return s},ct=(t,e,s=t)=>(t._$AI(e,s),t),ht={},pt=t=>{var e;null===(e=t._$AP)||void 0===e||e.call(t,!1,!0);let s=t._$AA;const i=t._$AB.nextSibling;for(;s!==i;){const t=s.nextSibling;s.remove(),s=t}},ut=(t,e,s)=>{const i=new Map;for(let n=e;n<=s;n++)i.set(t[n],n);return i},vt=ot(class extends rt{constructor(t){if(super(t),2!==t.type)throw Error("repeat() can only be used in text expressions")}dt(t,e,s){let i;void 0===s?s=e:void 0!==e&&(i=e);const n=[],o=[];let r=0;for(const e of t)n[r]=i?i(e,r):r,o[r]=s(e,r),r++;return{values:o,keys:n}}render(t,e,s){return this.dt(t,e,s).values}update(t,[e,s,i]){var n;const o=(t=>t._$AH)(t),{values:r,keys:a}=this.dt(e,s,i);if(!Array.isArray(o))return this.at=a,r;const l=null!==(n=this.at)&&void 0!==n?n:this.at=[],d=[];let c,h,p=0,u=o.length-1,v=0,f=r.length-1;for(;p<=u&&v<=f;)if(null===o[p])p++;else if(null===o[u])u--;else if(l[p]===a[v])d[v]=ct(o[p],r[v]),p++,v++;else if(l[u]===a[f])d[f]=ct(o[u],r[f]),u--,f--;else if(l[p]===a[f])d[f]=ct(o[p],r[f]),dt(t,d[f+1],o[p]),p++,f--;else if(l[u]===a[v])d[v]=ct(o[u],r[v]),dt(t,o[p],o[u]),u--,v++;else if(void 0===c&&(c=ut(a,v,f),h=ut(l,p,u)),c.has(l[p]))if(c.has(l[u])){const e=h.get(a[v]),s=void 0!==e?o[e]:null;if(null===s){const e=dt(t,o[p]);ct(e,r[v]),d[v]=e}else d[v]=ct(s,r[v]),dt(t,o[p],s),o[e]=null;v++}else pt(o[u]),u--;else pt(o[p]),p++;for(;v<=f;){const e=dt(t,d[f+1]);ct(e,r[v]),d[v++]=e}for(;p<=u;){const t=o[p++];null!==t&&pt(t)}return this.at=a,((t,e=ht)=>{t._$AH=e})(t,d),H}}),ft=ot(class extends rt{constructor(t){var e;if(super(t),1!==t.type||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var s,i;if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.et=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(s=this.et)||void 0===s?void 0:s.has(t))&&this.st.add(t);return this.render(e)}const n=t.element.classList;this.st.forEach((t=>{t in e||(n.remove(t),this.st.delete(t))}));for(const t in e){const s=!!e[t];s===this.st.has(t)||(null===(i=this.et)||void 0===i?void 0:i.has(t))||(s?(n.add(t),this.st.add(t)):(n.remove(t),this.st.delete(t)))}return H}});class gt extends et{static styles=r`
    .game-board-container {
      display: flex;
      height: 380px;
      flex-direction: column;
      justify-content: space-between;
      padding: 0 0 20px;
    }

    .row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      height: 15%;
      position: relative;
    }

    .letter-box {
      box-shadow: 1px 0px 5px 2px inset rgba(0, 0, 0, 0.2);
      background-color: #dae3e5;
      width: 18%;
      height: 100%;
      font-size: 3em;
      font-family: 'JetBrains Mono', monospace;
      text-shadow: 2px 1px 2px rgba(0, 0, 0, 0.2);
      color: rgb(255, 255, 255);
      font-weight: 600;
    }

    .letter-box.not-here {
      background-color: rgba(57, 62, 65, 0.8);
    }

    .letter-box.wrong-spot {
      background-color: rgba(255, 136, 17, 0.8);
    }

    .letter-box.match {
      background-color: rgba(20, 204, 96, 0.8);
    }

    .not-word {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      background-color: #fff;
      width: 80%;
      height: 80%;
      box-shadow: 1px 0px 5px 2px rgba(0, 0, 0, 0.2);
      border-radius: 4px;
    }

    .not-word > p {
      font-family: monospace;
      position: relative;
      bottom: 2px;
      font-size: 16px;
    }

    .hidden {
      visibility: hidden;
      opacity: 0;
      transition: visibility 0s 0.25s, opacity 0.25s linear;
    }

    .visible {
      visibility: visible;
      opacity: 1;
      transition: opacity 0.25s linear;
    }

  `;static properties={guesses:{type:Array},currentGuess:{type:Array,state:!0},isNotWord:{type:Boolean},currentGuessStr:{type:String}};constructor(){super(),this.guesses=[],this.currentGuess=[],this.currentGuessStr="",this.rows=new Array(6),this.column=new Array(5)}willUpdate(t){t.has("isNotWord")&&this.isNotWord&&setTimeout((()=>{this.isNotWord=!1}),1e3)}render(){const t={hidden:!this.isNotWord,visible:this.isNotWord};return T`
      <div class="game-board-container">
        ${vt(this.rows,((t,e)=>e),((e,s)=>T`
            <div class="row">
              ${this.guesses[s]?vt(this.guesses[s].word,((t,e)=>e),((t,e)=>T` <span
                      class="letter-box
                    guess-achive
                    ${this.guesses[s].guessedLetterStatus[e]}"
                      >${t.toUpperCase()}</span
                    >`)):vt(this.column,((t,e)=>e),((e,i)=>{const n=s===this.guesses.length;return T`
                        ${n&&0===i?T`<div
                              class="not-word ${ft(t)}"
                            >
                              <p>"${this.currentGuessStr}" is not a word</p>
                            </div>`:M}
                        <span class="letter-box"
                          >${n&&this.currentGuess[i]?this.currentGuess[i].toUpperCase():""}</span
                        >
                      `}))}
            </div>
          `))}
      </div>
    `}}customElements.define("game-board",gt);const yt={firstRow:["q","w","e","r","t","y","u","i","o","p"],secondRow:["a","s","d","f","g","h","j","k","l"],thirdRow:["enter","z","x","c","v","b","n","m","backspace"],alphabet:"abcdefghijklmnopqrstuvwxyz"};var $t=s(104),xt=s.n($t),bt=s(100),mt=s.n(bt);class wt extends et{static styles=r`
    .keyboard-container {
      display: flex;
      flex-direction: column;
    }

    .row {
      display: flex;
      justify-content: center;
    }

    .letter {
      min-width: 30px;
      max-width: 50px;
      height: 60px;
      margin: 1.5px;
      align-items: center;
      appearance: none;
      background-color: #fcfcfd;
      border-radius: 4px;
      border-width: 0;
      box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
        rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
      box-sizing: border-box;
      color: #36395a;
      cursor: pointer;
      display: inline-flex;
      font-family: 'JetBrains Mono', monospace;
      height: 48px;
      justify-content: center;
      line-height: 1;
      list-style: none;
      overflow: hidden;
      position: relative;
      text-align: left;
      text-decoration: none;
      transition: box-shadow 0.15s, transform 0.15s;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      white-space: nowrap;
      will-change: box-shadow, transform;
      font-size: 18px;
    }

    .letter:focus {
      box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
        rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
    }

    .letter:hover {
      box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
        rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
      transform: translateY(-2px);
    }

    .letter:active,
    .letter.active {
      box-shadow: #d6d6e7 0 3px 7px inset;
      transform: translateY(2px);
    }

    .letter.not-here {
      background-color: rgba(57, 62, 65, 0.2);
    }

    .letter.wrong-spot {
      background-color: rgba(255, 136, 17, 0.2);
    }

    .letter.match {
      background-color: rgba(20, 204, 96, 0.2);
    }

    .third span:first-child,
    .third span:last-child {
      width: 50px;
    }

    img {
      position: relative;
    }

  `;connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",(t=>this._handleKeypress.call(this,t))),window.addEventListener("keyup",(t=>this._handleKeyup.call(this,t)))}disconnectedCallback(){window.removeEventListener("keydown",this._handleKeypress),window.removeEventListener("keydown",this._handleKeyup),super.disconnectedCallback()}static properties={keysPlayed:{type:Object,state:!0}};constructor(){super(),this.keysPlayed={}}render(){return T`
      <div class="keyboard-container" @click=${this._handleKeyClick}>
        <div class="first row">
          ${vt(yt.firstRow,((t,e)=>e),(t=>T`<span
                id=${t}
                class="letter ${this.keysPlayed[t]||""}"
                @click=${e=>this._handleKeyClick(e,t)}
                >${t.toUpperCase()}</span
              > `))}
        </div>
        <div class="second row">
          ${vt(yt.secondRow,((t,e)=>e),(t=>T`<span
                id=${t}
                class="letter ${this.keysPlayed[t]||""}"
                @click=${e=>this._handleKeyClick(e,t)}
                >${t.toUpperCase()}</span
              > `))}
        </div>
        <div class="third row">
          ${vt(yt.thirdRow,((t,e)=>e),(t=>{const e="backspace"===t||"enter"===t?this.createActionKey(t):null;return T`<span
                id=${t}
                class="letter ${this.keysPlayed[t]||""}"
                @click=${e=>this._handleKeyClick(e,t)}
                >${e||t.toUpperCase()}</span
              > `}))}
        </div>
      </div>
    `}_handleKeypress(t){`${yt.alphabet}enterbackspace`.includes(t.key.toLowerCase())&&(this.keyEvent(t.key.toLowerCase()),this.renderRoot.querySelector(`#${t.key.toLowerCase()}`).classList.add("active"))}_handleKeyup(t){`${yt.alphabet}enterbackspace`.includes(t.key.toLowerCase())&&this.renderRoot.querySelector(`#${t.key.toLowerCase()}`)?.classList.remove("active")}_handleKeyClick(t,e){this.keyEvent(e)}keyEvent(t){const e={detail:{letter:null,action:null},bubbles:!0,composed:!0,cancelable:!0};if(yt.alphabet.includes(t)&&(e.detail.letter=t),"enter"!==t&&"backspace"!==t||(e.detail.action=t),e.detail.letter||e.detail.action){const t=new CustomEvent("pressedKey",{...e});this.dispatchEvent(t)}}createActionKey(t){return"backspace"===t?T`<img src=${xt()} alt="Delete" style="height: 22px;" />`:T`<img
          src=${mt()}
          alt="Enter by Bartama Graphic from NounProject.com"
          style="height: 35px; top: 5px"
        />`}}customElements.define("wordler-keyboard",wt);class _t extends et{static properties={title:{}};static styles=r`
    .title-container {
        display:flex;
    }

  .letter {
      min-width: 30px;
      max-width: 50px;
      height: 60px;
      margin: 1px;
      align-items: center;
      appearance: none;
      background-color: #fcfcfd;
      border-radius: 4px;
      border-width: 0;
      box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
        rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
      box-sizing: border-box;
      color: #36395a;
      cursor: pointer;
      display: inline-flex;
      font-family: 'JetBrains Mono', monospace;
      height: 48px;
      justify-content: center;
      line-height: 1;
      list-style: none;
      overflow: hidden;
      position: relative;
      text-align: left;
      text-decoration: none;
      transition: box-shadow 0.15s, transform 0.15s;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      white-space: nowrap;
      will-change: box-shadow, transform;
      font-size: 3em
    }
  `;constructor(){super(),this.title=["W","O","R","D","L","E","R"]}render(){return T`
    <div class="title.container">
    ${this.title.map((t=>T`
    <span class="letter">${t}</span>
    `))}
    </div>
    `}}customElements.define("wordler-title",_t);class At extends et{static properties={winOrLose:{type:String},word:{type:String},definitions:{type:Array},currentDef:{type:Number}};static styles=r`
    :host {
      font-family: monospace;
    }

    .title {
      font-size: 3em;
      padding: 10px 0;
      font-weight: 400;
    }

    .word-container {
      display: flex;
      flex-direction: column;
      margin-top: 80px;
    }

    .word-title {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;
    }

    span {
      font-size: 35px;
      text-align: start;
      position: relative;
      top: 6px;
    }

    .definitions-container {
      height: 250px;
      display: grid;
      grid-auto-flow: column;
      grid-auto-columns: 100%;
      overflow-x: auto;
      overscroll-behavior-inline: contain;
      text-align: left;
      scroll-snap-type: inline mandatory;
      scrollbar-width: none;
      /* scroll-padding-inline: 20px; */
    }

    ::-webkit-scrollbar {
      display: none;
    }

    .definition {
      scroll-snap-align: start;
      padding-left: 30px;
    }

    .menu-container {
      position: absolute;
      width: 297px;
      height: 517px;
      z-index: 5;
      box-shadow: 1px 0px 5px 2px rgba(0, 0, 0, 0.2);
      background-color: #fffffb;
      border-radius: 4px;
    }
  `;constructor(){super(),this.winOrLose="",this.word="",this.definitions=[],this.currentDef=1}render(){return this.title="winner"===this.winOrLose?"You Got It!":"Wordled Out!",T`
      <div class="title">${this.title}</div>
      <div class="word-container">
        <div class="word-title">
          <span>${this.word}</span>
          <div>${this.currentDef} of ${this.definitions.length}</div>
        </div>
        <div class="definitions-container" @scroll=${this._handleScroll}>
          ${vt(this.definitions,((t,e)=>e),(t=>T`<p class="definition">${t}</p>`))}
        </div>
      </div>
    `}_handleScroll(t){const e=t.target.scrollLeft;0!==e&&e%297!=0||(this.currentDef=e/297+1)}}customElements.define("win-lose-menu",At);class Et extends et{static properties={isWin:{type:Boolean},isLose:{type:Boolean},isOptions:{type:Boolean},isLogin:{type:Boolean},word:{type:String},definitions:{type:Array}};static styles=r`
    .hidden {
      visibility: hidden;
      opacity: 0;
      transition: visibility 0s 0.25s, opacity 0.25s linear;
    }

    .visible {
      visibility: visible;
      opacity: 1;
      transition: opacity 0.25s linear;
    }

    .menu-container {
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 297px;
      height: 517px;
      z-index: 5;
      box-shadow: 1px 0px 5px 2px rgba(0, 0, 0, 0.2);
      background-color: #fffffb;
      border-radius: 4px;
      padding: 20px;
    }

    .button {
      width: 130px;
      height: 60px;
      margin: 1.5px;
      align-items: center;
      appearance: none;
      background-color: #fcfcfd;
      border-radius: 4px;
      border-width: 0;
      box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
        rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
      box-sizing: border-box;
      color: #36395a;
      cursor: pointer;
      display: inline-flex;
      font-family: 'JetBrains Mono', monospace;
      height: 48px;
      justify-content: center;
      line-height: 1;
      list-style: none;
      overflow: hidden;
      position: relative;
      text-align: left;
      text-decoration: none;
      transition: box-shadow 0.15s, transform 0.15s;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      white-space: nowrap;
      will-change: box-shadow, transform;
      font-size: 18px;
    }

    .button:focus {
      box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
        rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
    }

    .button:hover {
      box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
        rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
      transform: translateY(-2px);
    }

    .button:active,
    .button.active {
      box-shadow: #d6d6e7 0 3px 7px inset;
      transform: translateY(2px);
    }
  `;constructor(){super(),this.word="",this.definitions=[]}render(){const t={hidden:!(this.isLogin||this.isOptions||this.isLose||this.isWin),visible:this.isLogin||this.isOptions||this.isLose||this.isWin,winner:this.isWin,loser:this.isLose,options:this.isOptions,login:this.isLogin};return T` <div class="menu-container ${ft(t)}">
      ${this.menuContent(t)}
      <div class="bottom-buttons">
        <button class="button" @click=${t=>this._handleClose(t,"NEW_GAME")}>
          New Game
        </button>
        <button class="button" @click=${t=>this._handleClose(t,"CLOSE")}>
          Close
        </button>
      </div>
    </div>`}menuContent(t){const e=(t=>{const e=Object.keys(t);for(const s of e)if("visible"!==s&&"hidden"!==s&&t[s])return s})(t);switch(e){case"winner":case"loser":return T`<win-lose-menu
          winOrLose=${e}
          .word=${this.word}
          .definitions=${this.definitions}
        ></win-lose-menu>`;case"options":case"login":return T``;default:return M}}_handleClose(t,e){if(this.isWin=!1,this.isLose=!1,this.isOptions=!1,this.isLogin=!1,"NEW_GAME"===e){const t=new CustomEvent("startNewGame",{detail:{startNewGame:!0},bubbles:!0,composed:!0,cancelable:!0});this.dispatchEvent(t)}}}customElements.define("game-modal",Et);class St extends et{static properties={game:{type:Object,state:!0},currentGuess:{type:Array,state:!0},isNotWord:{type:Boolean,state:!0},currentGuessStr:{type:String}};static styles=r`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--wordler-app-background-color);
    }

    .tile {
      box-shadow: 1px 0px 5px 2px rgba(0, 0, 0, 0.2);
      background-color: #fffffb;
      border-radius: 4px;
      padding: 20px;
    }

    .game-container {
      flex-grow: 1;
    }

    .app-footer {
      font-size: calc(12px + 0.5vmin);
      align-items: center;
    }

    .app-footer a {
      margin-left: 5px;
    }
  `;constructor(){super(),this.game={guessArchive:[],keysPlayed:{}},this.currentGuess=[],this.currentGuessStr="",this.isNotWord=!1}firstUpdated(){this.newGame()}willUpdate(t){}render(){const{guessArchive:t,keysPlayed:e,isWon:s,isLose:i,word:n,definitions:o}=this.game;return T`
      <wordler-title></wordler-title>
      <div class="tile">
        <game-modal
          .word=${n||""}
          .definitions=${o||[]}
          .isWin=${s}
          .isLose=${i}
          @startNewGame=${this._handleStart}
          ></game-modal>
          <div class="game-container">
          <game-board
          .guesses=${t}
          .currentGuess=${this.currentGuess}
          .currentGuessStr=${this.currentGuessStr}
            .isNotWord=${this.isNotWord}
          ></game-board>
          <wordler-keyboard
            .keysPlayed=${e}
            @pressedKey=${this._handlePressedKey}
          ></wordler-keyboard>
        </div>
      </div>
    `}async makeGuess(t){this.currentGuessStr=t.join(""),this.isNotWord=!1,await this.game.submitGuess(t,this)||(this.isNotWord=!0),this.currentGuess=[]}_handleStart(){this.game=it,this.newGame()}async newGame(){const t=await nt();this.game=t,this.requestUpdate()}_handlePressedKey(t){const{letter:e,action:s}=t.detail,i=[...this.currentGuess];e&&i.length<5&&(i.push(e),this.currentGuess=i),"enter"===s&&5===i.length&&(this.makeGuess(i),this.currentGuess=[]),"backspace"===s&&i.length>0&&(i.pop(),this.currentGuess=i)}}customElements.define("wordler-app",St)})()})();