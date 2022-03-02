/*! For license information please see bundle.js.LICENSE.txt */
(()=>{var t={104:t=>{t.exports="data:image/svg+xml,%3c!-- Generator: Adobe Illustrator 18.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3e %3c!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e %3csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 44.18 44.18' style='enable-background:new 0 0 44.18 44.18;' xml:space='preserve'%3e %3cg%3e %3cpath d='M10.625,5.09L0,22.09l10.625,17H44.18v-34H10.625z M42.18,37.09H11.734l-9.375-15l9.375-15H42.18V37.09z'/%3e %3cpolygon points='18.887,30.797 26.18,23.504 33.473,30.797 34.887,29.383 27.594,22.09 34.887,14.797 33.473,13.383 26.18,20.676 18.887,13.383 17.473,14.797 24.766,22.09 17.473,29.383 '/%3e %3c/g%3e %3c/svg%3e"},100:t=>{t.exports="data:image/svg+xml,%3csvg width='700pt' height='700pt' version='1.1' viewBox='0 0 700 700' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e %3cg%3e %3cpath d='m568.75 140h-70c-4.832 0-8.75 3.918-8.75 8.75v122.5h-227.5v-52.5c0-3.25-1.8008-6.2305-4.6758-7.7422-2.875-1.5156-6.3516-1.3086-9.0312 0.53125l-140 96.25c-2.375 1.6328-3.793 4.3281-3.793 7.2109s1.418 5.5781 3.793 7.2109l140 96.25c2.6797 1.8398 6.1562 2.0469 9.0312 0.53125 2.875-1.5117 4.6758-4.4922 4.6758-7.7422v-52.5h306.25c2.3203 0 4.5469-0.92188 6.1875-2.5625s2.5625-3.8672 2.5625-6.1875v-201.25c0-2.3203-0.92188-4.5469-2.5625-6.1875s-3.8672-2.5625-6.1875-2.5625zm-8.75 201.25h-306.25c-4.832 0-8.75 3.918-8.75 8.75v44.617l-115.81-79.617 115.81-79.617v44.617c0 2.3203 0.92188 4.5469 2.5625 6.1875s3.8672 2.5625 6.1875 2.5625h245c2.3203 0 4.5469-0.92188 6.1875-2.5625s2.5625-3.8672 2.5625-6.1875v-122.5h52.5z'/%3e %3c/g%3e %3c/svg%3e"}},e={};function s(i){var n=e[i];if(void 0!==n)return n.exports;var r=e[i]={exports:{}};return t[i](r,r.exports,s),r.exports}s.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return s.d(e,{a:e}),e},s.d=(t,e)=>{for(var i in e)s.o(e,i)&&!s.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),i=new Map;class n{constructor(t,s){if(this._$cssResult$=!0,s!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let e=i.get(this.cssText);return t&&void 0===e&&(i.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const r=t=>new n("string"==typeof t?t:t+"",e),o=(t,...s)=>{const i=1===t.length?t[0]:s.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new n(i,e)},l=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r(e)})(t):t;var a;const h=window.trustedTypes,c=h?h.emptyScript:"",d=window.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?c:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},u=(t,e)=>e!==t&&(e==e||t==t),v={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:u};class g extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,s)=>{const i=this._$Eh(s,e);void 0!==i&&(this._$Eu.set(i,s),t.push(i))})),t}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const n=this[t];this[e]=i,this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||v}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of e)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Eh(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,s;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const s=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,s)=>{t?e.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((t=>{const s=document.createElement("style"),i=window.litNonce;void 0!==i&&s.setAttribute("nonce",i),s.textContent=t.cssText,e.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ES(t,e,s=v){var i,n;const r=this.constructor._$Eh(t,s);if(void 0!==r&&!0===s.reflect){const o=(null!==(n=null===(i=s.converter)||void 0===i?void 0:i.toAttribute)&&void 0!==n?n:p.toAttribute)(e,s.type);this._$Ei=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$Ei=null}}_$AK(t,e){var s,i,n;const r=this.constructor,o=r._$Eu.get(t);if(void 0!==o&&this._$Ei!==o){const t=r.getPropertyOptions(o),l=t.converter,a=null!==(n=null!==(i=null===(s=l)||void 0===s?void 0:s.fromAttribute)&&void 0!==i?i:"function"==typeof l?l:null)&&void 0!==n?n:p.fromAttribute;this._$Ei=o,this[o]=a(e,t.type),this._$Ei=null}}requestUpdate(t,e,s){let i=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||u)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Ei!==t&&(void 0===this._$E_&&(this._$E_=new Map),this._$E_.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(s)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$E_&&(this._$E_.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}}var $;g.finalized=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},null==d||d({ReactiveElement:g}),(null!==(a=globalThis.reactiveElementVersions)&&void 0!==a?a:globalThis.reactiveElementVersions=[]).push("1.2.2");const y=globalThis.trustedTypes,f=y?y.createPolicy("lit-html",{createHTML:t=>t}):void 0,m=`lit$${(Math.random()+"").slice(9)}$`,_="?"+m,w=`<${_}>`,b=document,x=(t="")=>b.createComment(t),A=t=>null===t||"object"!=typeof t&&"function"!=typeof t,E=Array.isArray,k=t=>{var e;return E(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,C=/-->/g,P=/>/g,U=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,L=/'/g,O=/"/g,T=/^(?:script|style|textarea|title)$/i,H=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),M=H(1),R=(H(2),Symbol.for("lit-noChange")),N=Symbol.for("lit-nothing"),B=new WeakMap,j=b.createTreeWalker(b,129,null,!1),G=(t,e)=>{const s=t.length-1,i=[];let n,r=2===e?"<svg>":"",o=S;for(let e=0;e<s;e++){const s=t[e];let l,a,h=-1,c=0;for(;c<s.length&&(o.lastIndex=c,a=o.exec(s),null!==a);)c=o.lastIndex,o===S?"!--"===a[1]?o=C:void 0!==a[1]?o=P:void 0!==a[2]?(T.test(a[2])&&(n=RegExp("</"+a[2],"g")),o=U):void 0!==a[3]&&(o=U):o===U?">"===a[0]?(o=null!=n?n:S,h=-1):void 0===a[1]?h=-2:(h=o.lastIndex-a[2].length,l=a[1],o=void 0===a[3]?U:'"'===a[3]?O:L):o===O||o===L?o=U:o===C||o===P?o=S:(o=U,n=void 0);const d=o===U&&t[e+1].startsWith("/>")?" ":"";r+=o===S?s+w:h>=0?(i.push(l),s.slice(0,h)+"$lit$"+s.slice(h)+m+d):s+m+(-2===h?(i.push(void 0),e):d)}const l=r+(t[s]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==f?f.createHTML(l):l,i]};class z{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,r=0;const o=t.length-1,l=this.parts,[a,h]=G(t,e);if(this.el=z.createElement(a,s),j.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=j.nextNode())&&l.length<o;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(m)){const s=h[r++];if(t.push(e),void 0!==s){const t=i.getAttribute(s.toLowerCase()+"$lit$").split(m),e=/([.?@])?(.*)/.exec(s);l.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?V:"?"===e[1]?F:"@"===e[1]?J:K})}else l.push({type:6,index:n})}for(const e of t)i.removeAttribute(e)}if(T.test(i.tagName)){const t=i.textContent.split(m),e=t.length-1;if(e>0){i.textContent=y?y.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],x()),j.nextNode(),l.push({type:2,index:++n});i.append(t[e],x())}}}else if(8===i.nodeType)if(i.data===_)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(m,t+1));)l.push({type:7,index:n}),t+=m.length-1}n++}}static createElement(t,e){const s=b.createElement("template");return s.innerHTML=t,s}}function D(t,e,s=t,i){var n,r,o,l;if(e===R)return e;let a=void 0!==i?null===(n=s._$Cl)||void 0===n?void 0:n[i]:s._$Cu;const h=A(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==h&&(null===(r=null==a?void 0:a._$AO)||void 0===r||r.call(a,!1),void 0===h?a=void 0:(a=new h(t),a._$AT(t,s,i)),void 0!==i?(null!==(o=(l=s)._$Cl)&&void 0!==o?o:l._$Cl=[])[i]=a:s._$Cu=a),void 0!==a&&(e=D(t,a._$AS(t,e.values),a,i)),e}class W{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:s},parts:i}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:b).importNode(s,!0);j.currentNode=n;let r=j.nextNode(),o=0,l=0,a=i[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new I(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new Y(r,this,t)),this.v.push(e),a=i[++l]}o!==(null==a?void 0:a.index)&&(r=j.nextNode(),o++)}return n}m(t){let e=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class I{constructor(t,e,s,i){var n;this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cg=null===(n=null==i?void 0:i.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=D(this,t,e),A(t)?t===N||null==t||""===t?(this._$AH!==N&&this._$AR(),this._$AH=N):t!==this._$AH&&t!==R&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):k(t)?this.A(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==N&&A(this._$AH)?this._$AA.nextSibling.data=t:this.S(b.createTextNode(t)),this._$AH=t}T(t){var e;const{values:s,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=z.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.m(s);else{const t=new W(n,this),e=t.p(this.options);t.m(s),this.S(e),this._$AH=t}}_$AC(t){let e=B.get(t.strings);return void 0===e&&B.set(t.strings,e=new z(t)),e}A(t){E(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new I(this.M(x()),this.M(x()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class K{constructor(t,e,s,i,n){this.type=1,this._$AH=N,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=N}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const n=this.strings;let r=!1;if(void 0===n)t=D(this,t,e,0),r=!A(t)||t!==this._$AH&&t!==R,r&&(this._$AH=t);else{const i=t;let o,l;for(t=n[0],o=0;o<n.length-1;o++)l=D(this,i[s+o],e,o),l===R&&(l=this._$AH[o]),r||(r=!A(l)||l!==this._$AH[o]),l===N?t=N:t!==N&&(t+=(null!=l?l:"")+n[o+1]),this._$AH[o]=l}r&&!i&&this.k(t)}k(t){t===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class V extends K{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===N?void 0:t}}const q=y?y.emptyScript:"";class F extends K{constructor(){super(...arguments),this.type=4}k(t){t&&t!==N?this.element.setAttribute(this.name,q):this.element.removeAttribute(this.name)}}class J extends K{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){var s;if((t=null!==(s=D(this,t,e,0))&&void 0!==s?s:N)===R)return;const i=this._$AH,n=t===N&&i!==N||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==N&&(i===N||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class Y{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){D(this,t)}}const Z={P:"$lit$",V:m,L:_,I:1,N:G,R:W,D:k,j:D,H:I,O:K,F,B:J,W:V,Z:Y},Q=window.litHtmlPolyfillSupport;var X,tt;null==Q||Q(z,I),(null!==($=globalThis.litHtmlVersions)&&void 0!==$?$:globalThis.litHtmlVersions=[]).push("2.1.3");class et extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,s)=>{var i,n;const r=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:e;let o=r._$litPart$;if(void 0===o){const t=null!==(n=null==s?void 0:s.renderBefore)&&void 0!==n?n:null;r._$litPart$=o=new I(e.insertBefore(x(),t),t,void 0,null!=s?s:{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return R}}et.finalized=!0,et._$litElement$=!0,null===(X=globalThis.litElementHydrateSupport)||void 0===X||X.call(globalThis,{LitElement:et});const st=globalThis.litElementPolyfillSupport;null==st||st({LitElement:et}),(null!==(tt=globalThis.litElementVersions)&&void 0!==tt?tt:globalThis.litElementVersions=[]).push("3.1.2");const it=async(t=5)=>{const e=await(async()=>{const t=await fetch("./api/new-word/",{method:"GET"});return(await t.json()).word})();return new class{constructor(t){this.word=t,this.guess=[],this.guessArchive=[],this.round=1,this.finalRound=6,this.keysPlayed={},this.isWon=!1,this.isLose=!1}async submitGuess(t,e){const s=await(async t=>{const e={word:t};try{const t=await fetch("./api/check-word/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});return(await t.json()).isWord}catch(t){return!1}})(t.join("")),i=this.word.split("");if(s){const s=t.map(((t,e)=>{const s=t===i[e]?"match":i.includes(t)?"wrong-spot":"not-here";return"wrong-spot"===s&&(i[i.indexOf(t)]=""),"match"===s&&(i[e]=""),this.keysPlayed={...this.keysPlayed,[t]:s},s}));this.animateCurrentGuess(t,s,e),this.round+=1,this.isWon=(t=>t.every((t=>"match"===t)))(s),this.isWon||(this.isLose=this.round>this.finalRound)}return s}animateCurrentGuess(t,e,s){const i=new Array(5).fill(" "),n=new Array(5).fill(" ");let r=0;this.guessArchive.push({word:i,guessedLetterStatus:n});const o=setInterval((()=>{if(r>=5)clearInterval(o);else{i[r]=t[r],n[r]=e[r];const o={word:i,guessedLetterStatus:n},l=this.guessArchive.slice(0,this.guessArchive.length-1);l.push({...o}),this.guessArchive=l,r+=1,s.requestUpdate()}}),250)}}(e)},nt=t=>(...e)=>({_$litDirective$:t,values:e});class rt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const{H:ot}=Z,lt=()=>document.createComment(""),at=(t,e,s)=>{var i;const n=t._$AA.parentNode,r=void 0===e?t._$AB:e._$AA;if(void 0===s){const e=n.insertBefore(lt(),r),i=n.insertBefore(lt(),r);s=new ot(e,i,t,t.options)}else{const e=s._$AB.nextSibling,o=s._$AM,l=o!==t;if(l){let e;null===(i=s._$AQ)||void 0===i||i.call(s,t),s._$AM=t,void 0!==s._$AP&&(e=t._$AU)!==o._$AU&&s._$AP(e)}if(e!==r||l){let t=s._$AA;for(;t!==e;){const e=t.nextSibling;n.insertBefore(t,r),t=e}}}return s},ht=(t,e,s=t)=>(t._$AI(e,s),t),ct={},dt=t=>{var e;null===(e=t._$AP)||void 0===e||e.call(t,!1,!0);let s=t._$AA;const i=t._$AB.nextSibling;for(;s!==i;){const t=s.nextSibling;s.remove(),s=t}},pt=(t,e,s)=>{const i=new Map;for(let n=e;n<=s;n++)i.set(t[n],n);return i},ut=nt(class extends rt{constructor(t){if(super(t),2!==t.type)throw Error("repeat() can only be used in text expressions")}dt(t,e,s){let i;void 0===s?s=e:void 0!==e&&(i=e);const n=[],r=[];let o=0;for(const e of t)n[o]=i?i(e,o):o,r[o]=s(e,o),o++;return{values:r,keys:n}}render(t,e,s){return this.dt(t,e,s).values}update(t,[e,s,i]){var n;const r=(t=>t._$AH)(t),{values:o,keys:l}=this.dt(e,s,i);if(!Array.isArray(r))return this.at=l,o;const a=null!==(n=this.at)&&void 0!==n?n:this.at=[],h=[];let c,d,p=0,u=r.length-1,v=0,g=o.length-1;for(;p<=u&&v<=g;)if(null===r[p])p++;else if(null===r[u])u--;else if(a[p]===l[v])h[v]=ht(r[p],o[v]),p++,v++;else if(a[u]===l[g])h[g]=ht(r[u],o[g]),u--,g--;else if(a[p]===l[g])h[g]=ht(r[p],o[g]),at(t,h[g+1],r[p]),p++,g--;else if(a[u]===l[v])h[v]=ht(r[u],o[v]),at(t,r[p],r[u]),u--,v++;else if(void 0===c&&(c=pt(l,v,g),d=pt(a,p,u)),c.has(a[p]))if(c.has(a[u])){const e=d.get(l[v]),s=void 0!==e?r[e]:null;if(null===s){const e=at(t,r[p]);ht(e,o[v]),h[v]=e}else h[v]=ht(s,o[v]),at(t,r[p],s),r[e]=null;v++}else dt(r[u]),u--;else dt(r[p]),p++;for(;v<=g;){const e=at(t,h[g+1]);ht(e,o[v]),h[v++]=e}for(;p<=u;){const t=r[p++];null!==t&&dt(t)}return this.at=l,((t,e=ct)=>{t._$AH=e})(t,h),R}});class vt extends et{static styles=o`
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
  `;static properties={guesses:{type:Array},currentGuess:{type:Array,state:!0},round:{type:Number,state:!0},rows:{type:Array,state:!0}};constructor(){super(),this.guesses=[],this.currentGuess=[],this.rows=new Array(6),this.column=new Array(5)}render(){return M`
      <div class="game-board-container">
        ${ut(this.rows,((t,e)=>e),((t,e)=>M`
            <div class="row">
              ${this.guesses[e]?ut(this.guesses[e].word,((t,e)=>e),((t,s)=>M` <span
                      class="letter-box
                      guess-achive
                      ${this.guesses[e].guessedLetterStatus[s]}"
                      >${t.toUpperCase()}</span
                    >`)):ut(this.column,((t,e)=>e),((t,s)=>{const i=e===this.guesses.length;return M`
                        <span class="letter-box"
                          >${i&&this.currentGuess[s]?this.currentGuess[s].toUpperCase():""}</span
                        >
                      `}))}
            </div>
          `))}
      </div>
    `}async animate(t){await(1e3,new Promise((t=>setTimeout(t,1e3))))}}customElements.define("game-board",vt);const gt={firstRow:["q","w","e","r","t","y","u","i","o","p"],secondRow:["a","s","d","f","g","h","j","k","l"],thirdRow:["enter","z","x","c","v","b","n","m","backspace"],alphabet:"abcdefghijklmnopqrstuvwxyz"};var $t=s(104),yt=s.n($t),ft=s(100),mt=s.n(ft);class _t extends et{static styles=o`
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

  `;connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",(t=>this._handleKeypress.call(this,t))),window.addEventListener("keyup",(t=>this._handleKeyup.call(this,t)))}disconnectedCallback(){window.removeEventListener("keydown",this._handleKeypress),window.removeEventListener("keydown",this._handleKeyup),super.disconnectedCallback()}static properties={keysPlayed:{type:Object,state:!0}};constructor(){super(),this.keysPlayed={}}render(){return M`
      <div class="keyboard-container" @click=${this._handleKeyClick}>
        <div class="first row">
          ${ut(gt.firstRow,((t,e)=>e),(t=>M`<span
                id=${t}
                class="letter ${this.keysPlayed[t]||""}"
                @click=${e=>this._handleKeyClick(e,t)}
                >${t.toUpperCase()}</span
              > `))}
        </div>
        <div class="second row">
          ${ut(gt.secondRow,((t,e)=>e),(t=>M`<span
                id=${t}
                class="letter ${this.keysPlayed[t]||""}"
                @click=${e=>this._handleKeyClick(e,t)}
                >${t.toUpperCase()}</span
              > `))}
        </div>
        <div class="third row">
          ${ut(gt.thirdRow,((t,e)=>e),(t=>{const e="backspace"===t||"enter"===t?this.createActionKey(t):null;return M`<span
                id=${t}
                class="letter ${this.keysPlayed[t]||""}"
                @click=${e=>this._handleKeyClick(e,t)}
                >${e||t.toUpperCase()}</span
              > `}))}
        </div>
      </div>
    `}_handleKeypress(t){`${gt.alphabet}enterbackspace`.includes(t.key.toLowerCase())&&(this.keyEvent(t.key.toLowerCase()),this.renderRoot.querySelector(`#${t.key.toLowerCase()}`).classList.add("active"))}_handleKeyup(t){`${gt.alphabet}enterbackspace`.includes(t.key.toLowerCase())&&this.renderRoot.querySelector(`#${t.key.toLowerCase()}`)?.classList.remove("active")}_handleKeyClick(t,e){this.keyEvent(e)}keyEvent(t){const e={detail:{letter:null,action:null},bubbles:!0,composed:!0,cancelable:!0};if(gt.alphabet.includes(t)&&(e.detail.letter=t),"enter"!==t&&"backspace"!==t||(e.detail.action=t),e.detail.letter||e.detail.action){const t=new CustomEvent("pressedKey",{...e});this.dispatchEvent(t)}}createActionKey(t){return"backspace"===t?M`<img src=${yt()} alt="Delete" style="height: 22px;" />`:M`<img
          src=${mt()}
          alt="Enter by Bartama Graphic from NounProject.com"
          style="height: 35px; top: 5px"
        />`}}customElements.define("wordler-keyboard",_t);class wt extends et{static properties={title:{}};static styles=o`
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
  `;constructor(){super(),this.title=["W","O","R","D","L","E","R"]}render(){return M`
    <div class="title.container">
    ${this.title.map((t=>M`
    <span class="letter">${t}</span>
    `))}
    </div>
    `}}customElements.define("wordler-title",wt);const bt=nt(class extends rt{constructor(t){var e;if(super(t),1!==t.type||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var s,i;if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.et=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(s=this.et)||void 0===s?void 0:s.has(t))&&this.st.add(t);return this.render(e)}const n=t.element.classList;this.st.forEach((t=>{t in e||(n.remove(t),this.st.delete(t))}));for(const t in e){const s=!!e[t];s===this.st.has(t)||(null===(i=this.et)||void 0===i?void 0:i.has(t))||(s?(n.add(t),this.st.add(t)):(n.remove(t),this.st.delete(t)))}return R}});class xt extends et{static properties={isWin:{type:Boolean},isLose:{type:Boolean},isOptions:{type:Boolean},isLogin:{type:Boolean},word:{type:String}};static styles=o`
    .hidden {
      visibility: hidden;
      opacity: 0;
      transition: visibility 0s .25s, opacity .25s linear;
    }

    .visible {
      visibility: visible;
      opacity: 1;
      transition: opacity .25s linear;
    }

    .menu-container {
      position: absolute;
      width: 297px;
      height: 517px;
      z-index: 5;
      box-shadow: 1px 0px 5px 2px rgba(0, 0, 0, 0.2);
      background-color: #fffffb;
      border-radius: 4px;
      padding: 20px;
    }
  `;constructor(){super()}render(){const t={hidden:!(this.isLogin||this.isOptions||this.isLose||this.isWin),visible:this.isLogin||this.isOptions||this.isLose||this.isWin,winner:this.isWin,loser:this.isLose,options:this.isOptions,login:this.isLogin};return M` <div class="menu-container ${bt(t)}">
      ${this.menuContent(t)}
      <button @click=${this._handleClose}>Ok</button>
    </div>`}menuContent(t){const e=(t=>{const e=Object.keys(t);for(const s of e)if("visible"!==s&&"hidden"!==s&&t[s])return s})(t);switch(e){case"winner":return M`<p>isWin, baby <br> ${this.word}</p>`;case"loser":return M`<p>isLose, baby <br> ${this.word}</p>`;case"options":case"login":return M``;default:return N}}_handleClose(){this.isWin=!1,this.isLose=!1,this.isOptions=!1,this.isLogin=!1}}customElements.define("game-modal",xt);class At extends et{static properties={game:{type:Object,state:!0},currentGuess:{type:Array,state:!0}};static styles=o`
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
      background-color: #FFFFFB;
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
  `;constructor(){super(),this.game={guessArchive:[],keysPlayed:{}},this.currentGuess=[]}firstUpdated(){this.newGame()}willUpdate(t){}render(){const{guessArchive:t,keysPlayed:e,isWon:s,isLose:i,word:n}=this.game;return M`
    <wordler-title></wordler-title>
      <div class="tile">
      <game-modal .word=${n} .isWin=${s} .isLose=${i}></game-modal>
        <div class="game-container">
          <game-board
            .guesses=${t}
            .currentGuess=${this.currentGuess}
          ></game-board>
          <wordler-keyboard
            .keysPlayed=${e}
            @pressedKey=${this._handlePressedKey}
          ></wordler-keyboard>
        </div>
      </div>
    `}async makeGuess(t){await this.game.submitGuess(t,this)||(this.displayNotAWord=!0),this.currentGuess=[]}async newGame(){const t=await it();this.game=t}_handlePressedKey(t){const{letter:e,action:s}=t.detail,i=[...this.currentGuess];e&&i.length<5&&(i.push(e),this.currentGuess=i),"enter"===s&&5===i.length&&(this.makeGuess(i),this.currentGuess=[]),"backspace"===s&&i.length>0&&(i.pop(),this.currentGuess=i)}}customElements.define("wordler-app",At)})()})();