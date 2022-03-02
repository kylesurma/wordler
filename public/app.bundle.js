/*! For license information please see app.bundle.js.LICENSE.txt */
(()=>{"use strict";const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),s=new Map;class i{constructor(t,s){if(this._$cssResult$=!0,s!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let e=s.get(this.cssText);return t&&void 0===e&&(s.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const n=t=>new i("string"==typeof t?t:t+"",e),r=(t,...s)=>{const n=1===t.length?t[0]:s.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new i(n,e)},o=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return n(e)})(t):t;var l;const a=window.trustedTypes,h=a?a.emptyScript:"",d=window.reactiveElementPolyfillSupport,c={toAttribute(t,e){switch(e){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},p=(t,e)=>e!==t&&(e==e||t==t),u={attribute:!0,type:String,converter:c,reflect:!1,hasChanged:p};class v extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,s)=>{const i=this._$Eh(s,e);void 0!==i&&(this._$Eu.set(i,s),t.push(i))})),t}static createProperty(t,e=u){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const n=this[t];this[e]=i,this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||u}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of e)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Eh(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,s;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const s=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,s)=>{t?e.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((t=>{const s=document.createElement("style"),i=window.litNonce;void 0!==i&&s.setAttribute("nonce",i),s.textContent=t.cssText,e.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ES(t,e,s=u){var i,n;const r=this.constructor._$Eh(t,s);if(void 0!==r&&!0===s.reflect){const o=(null!==(n=null===(i=s.converter)||void 0===i?void 0:i.toAttribute)&&void 0!==n?n:c.toAttribute)(e,s.type);this._$Ei=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$Ei=null}}_$AK(t,e){var s,i,n;const r=this.constructor,o=r._$Eu.get(t);if(void 0!==o&&this._$Ei!==o){const t=r.getPropertyOptions(o),l=t.converter,a=null!==(n=null!==(i=null===(s=l)||void 0===s?void 0:s.fromAttribute)&&void 0!==i?i:"function"==typeof l?l:null)&&void 0!==n?n:c.fromAttribute;this._$Ei=o,this[o]=a(e,t.type),this._$Ei=null}}requestUpdate(t,e,s){let i=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||p)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Ei!==t&&(void 0===this._$E_&&(this._$E_=new Map),this._$E_.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(s)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$E_&&(this._$E_.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}}var $;v.finalized=!0,v.elementProperties=new Map,v.elementStyles=[],v.shadowRootOptions={mode:"open"},null==d||d({ReactiveElement:v}),(null!==(l=globalThis.reactiveElementVersions)&&void 0!==l?l:globalThis.reactiveElementVersions=[]).push("1.2.0");const y=globalThis.trustedTypes,g=y?y.createPolicy("lit-html",{createHTML:t=>t}):void 0,f=`lit$${(Math.random()+"").slice(9)}$`,_="?"+f,m=`<${_}>`,A=document,w=(t="")=>A.createComment(t),b=t=>null===t||"object"!=typeof t&&"function"!=typeof t,x=Array.isArray,E=t=>{var e;return x(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,k=/-->/g,C=/>/g,P=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,U=/'/g,H=/"/g,R=/^(?:script|style|textarea)$/i,T=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),M=T(1),N=(T(2),Symbol.for("lit-noChange")),L=Symbol.for("lit-nothing"),O=new WeakMap,B=A.createTreeWalker(A,129,null,!1),j=(t,e)=>{const s=t.length-1,i=[];let n,r=2===e?"<svg>":"",o=S;for(let e=0;e<s;e++){const s=t[e];let l,a,h=-1,d=0;for(;d<s.length&&(o.lastIndex=d,a=o.exec(s),null!==a);)d=o.lastIndex,o===S?"!--"===a[1]?o=k:void 0!==a[1]?o=C:void 0!==a[2]?(R.test(a[2])&&(n=RegExp("</"+a[2],"g")),o=P):void 0!==a[3]&&(o=P):o===P?">"===a[0]?(o=null!=n?n:S,h=-1):void 0===a[1]?h=-2:(h=o.lastIndex-a[2].length,l=a[1],o=void 0===a[3]?P:'"'===a[3]?H:U):o===H||o===U?o=P:o===k||o===C?o=S:(o=P,n=void 0);const c=o===P&&t[e+1].startsWith("/>")?" ":"";r+=o===S?s+m:h>=0?(i.push(l),s.slice(0,h)+"$lit$"+s.slice(h)+f+c):s+f+(-2===h?(i.push(void 0),e):c)}const l=r+(t[s]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==g?g.createHTML(l):l,i]};class z{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,r=0;const o=t.length-1,l=this.parts,[a,h]=j(t,e);if(this.el=z.createElement(a,s),B.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=B.nextNode())&&l.length<o;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(f)){const s=h[r++];if(t.push(e),void 0!==s){const t=i.getAttribute(s.toLowerCase()+"$lit$").split(f),e=/([.?@])?(.*)/.exec(s);l.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?W:"?"===e[1]?q:"@"===e[1]?F:I})}else l.push({type:6,index:n})}for(const e of t)i.removeAttribute(e)}if(R.test(i.tagName)){const t=i.textContent.split(f),e=t.length-1;if(e>0){i.textContent=y?y.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],w()),B.nextNode(),l.push({type:2,index:++n});i.append(t[e],w())}}}else if(8===i.nodeType)if(i.data===_)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(f,t+1));)l.push({type:7,index:n}),t+=f.length-1}n++}}static createElement(t,e){const s=A.createElement("template");return s.innerHTML=t,s}}function G(t,e,s=t,i){var n,r,o,l;if(e===N)return e;let a=void 0!==i?null===(n=s._$Cl)||void 0===n?void 0:n[i]:s._$Cu;const h=b(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==h&&(null===(r=null==a?void 0:a._$AO)||void 0===r||r.call(a,!1),void 0===h?a=void 0:(a=new h(t),a._$AT(t,s,i)),void 0!==i?(null!==(o=(l=s)._$Cl)&&void 0!==o?o:l._$Cl=[])[i]=a:s._$Cu=a),void 0!==a&&(e=G(t,a._$AS(t,e.values),a,i)),e}class D{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:s},parts:i}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:A).importNode(s,!0);B.currentNode=n;let r=B.nextNode(),o=0,l=0,a=i[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new K(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new J(r,this,t)),this.v.push(e),a=i[++l]}o!==(null==a?void 0:a.index)&&(r=B.nextNode(),o++)}return n}m(t){let e=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class K{constructor(t,e,s,i){var n;this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cg=null===(n=null==i?void 0:i.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=G(this,t,e),b(t)?t===L||null==t||""===t?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==N&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):E(t)?this.A(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==L&&b(this._$AH)?this._$AA.nextSibling.data=t:this.S(A.createTextNode(t)),this._$AH=t}T(t){var e;const{values:s,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=z.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.m(s);else{const t=new D(n,this),e=t.p(this.options);t.m(s),this.S(e),this._$AH=t}}_$AC(t){let e=O.get(t.strings);return void 0===e&&O.set(t.strings,e=new z(t)),e}A(t){x(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new K(this.M(w()),this.M(w()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class I{constructor(t,e,s,i,n){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=L}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const n=this.strings;let r=!1;if(void 0===n)t=G(this,t,e,0),r=!b(t)||t!==this._$AH&&t!==N,r&&(this._$AH=t);else{const i=t;let o,l;for(t=n[0],o=0;o<n.length-1;o++)l=G(this,i[s+o],e,o),l===N&&(l=this._$AH[o]),r||(r=!b(l)||l!==this._$AH[o]),l===L?t=L:t!==L&&(t+=(null!=l?l:"")+n[o+1]),this._$AH[o]=l}r&&!i&&this.k(t)}k(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class W extends I{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===L?void 0:t}}const V=y?y.emptyScript:"";class q extends I{constructor(){super(...arguments),this.type=4}k(t){t&&t!==L?this.element.setAttribute(this.name,V):this.element.removeAttribute(this.name)}}class F extends I{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){var s;if((t=null!==(s=G(this,t,e,0))&&void 0!==s?s:L)===N)return;const i=this._$AH,n=t===L&&i!==L||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==L&&(i===L||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class J{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}}const Z={P:"$lit$",V:f,L:_,I:1,N:j,R:D,D:E,j:G,H:K,O:I,F:q,B:F,W,Z:J},Y=window.litHtmlPolyfillSupport;var Q,X;null==Y||Y(z,K),(null!==($=globalThis.litHtmlVersions)&&void 0!==$?$:globalThis.litHtmlVersions=[]).push("2.1.1");class tt extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,s)=>{var i,n;const r=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:e;let o=r._$litPart$;if(void 0===o){const t=null!==(n=null==s?void 0:s.renderBefore)&&void 0!==n?n:null;r._$litPart$=o=new K(e.insertBefore(w(),t),t,void 0,null!=s?s:{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return N}}tt.finalized=!0,tt._$litElement$=!0,null===(Q=globalThis.litElementHydrateSupport)||void 0===Q||Q.call(globalThis,{LitElement:tt});const et=globalThis.litElementPolyfillSupport;null==et||et({LitElement:tt}),(null!==(X=globalThis.litElementVersions)&&void 0!==X?X:globalThis.litElementVersions=[]).push("3.1.1");const st={method:"GET",headers:{"x-rapidapi-host":"wordsapiv1.p.rapidapi.com","x-rapidapi-key":"eb73006b2fmsh2e04fc76104e655p188b82jsn55999ca4d18b"}},it=async(t=5)=>{const e=await(async(t=5)=>{const e=await fetch(`https://wordsapiv1.p.rapidapi.com/words/?random=true&letters=${t}`,st);return(await e.json()).word})(t);return new class{constructor(t){this.word=t,this.wordArray=t.split(""),this.guess=[],this.guessArchive=[],this.round=1,this.finalRound=6,this.keysPlayed={},this.won=!1}async submitGuess(t){const e=await(async t=>{const e=await fetch(`https://wordsapiv1.p.rapidapi.com/words/${t}}/definitions`,st);return(await e.json()).definitions||null})(t);if(e){const e=t.map(((t,e)=>{const s=t===this.wordArray[e]?"match":this.wordArray.includes(t)?"wrong-spot":"not-here";return this.keysPlayed[t]||(this.keysPlayed[t]=s),s}));this.guessArchive.push({guessNumber:this.round,word:t,guessedLetterStatus:e}),this.round+=1,this.won=(t=>t.every((t=>"match"===t)))(e)}return e}}(e)},{H:nt}=Z,rt=()=>document.createComment(""),ot=(t,e,s)=>{var i;const n=t._$AA.parentNode,r=void 0===e?t._$AB:e._$AA;if(void 0===s){const e=n.insertBefore(rt(),r),i=n.insertBefore(rt(),r);s=new nt(e,i,t,t.options)}else{const e=s._$AB.nextSibling,o=s._$AM,l=o!==t;if(l){let e;null===(i=s._$AQ)||void 0===i||i.call(s,t),s._$AM=t,void 0!==s._$AP&&(e=t._$AU)!==o._$AU&&s._$AP(e)}if(e!==r||l){let t=s._$AA;for(;t!==e;){const e=t.nextSibling;n.insertBefore(t,r),t=e}}}return s},lt=(t,e,s=t)=>(t._$AI(e,s),t),at={},ht=t=>{var e;null===(e=t._$AP)||void 0===e||e.call(t,!1,!0);let s=t._$AA;const i=t._$AB.nextSibling;for(;s!==i;){const t=s.nextSibling;s.remove(),s=t}},dt=(t,e,s)=>{const i=new Map;for(let n=e;n<=s;n++)i.set(t[n],n);return i},ct=(pt=class extends class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}{constructor(t){if(super(t),2!==t.type)throw Error("repeat() can only be used in text expressions")}dt(t,e,s){let i;void 0===s?s=e:void 0!==e&&(i=e);const n=[],r=[];let o=0;for(const e of t)n[o]=i?i(e,o):o,r[o]=s(e,o),o++;return{values:r,keys:n}}render(t,e,s){return this.dt(t,e,s).values}update(t,[e,s,i]){var n;const r=(t=>t._$AH)(t),{values:o,keys:l}=this.dt(e,s,i);if(!Array.isArray(r))return this.at=l,o;const a=null!==(n=this.at)&&void 0!==n?n:this.at=[],h=[];let d,c,p=0,u=r.length-1,v=0,$=o.length-1;for(;p<=u&&v<=$;)if(null===r[p])p++;else if(null===r[u])u--;else if(a[p]===l[v])h[v]=lt(r[p],o[v]),p++,v++;else if(a[u]===l[$])h[$]=lt(r[u],o[$]),u--,$--;else if(a[p]===l[$])h[$]=lt(r[p],o[$]),ot(t,h[$+1],r[p]),p++,$--;else if(a[u]===l[v])h[v]=lt(r[u],o[v]),ot(t,r[p],r[u]),u--,v++;else if(void 0===d&&(d=dt(l,v,$),c=dt(a,p,u)),d.has(a[p]))if(d.has(a[u])){const e=c.get(l[v]),s=void 0!==e?r[e]:null;if(null===s){const e=ot(t,r[p]);lt(e,o[v]),h[v]=e}else h[v]=lt(s,o[v]),ot(t,r[p],s),r[e]=null;v++}else ht(r[u]),u--;else ht(r[p]),p++;for(;v<=$;){const e=ot(t,h[$+1]);lt(e,o[v]),h[v++]=e}for(;p<=u;){const t=r[p++];null!==t&&ht(t)}return this.at=l,((t,e=at)=>{t._$AH=e})(t,h),N}},(...t)=>({_$litDirective$:pt,values:t}));var pt;class ut extends tt{static styles=r`
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
      box-shadow: inset 1px 5px rgba(0, 0, 0, 1);
    }
  `;static properties={guesses:{type:Array,state:!0},currentGuess:{type:Array,state:!0},round:{type:Number,state:!0},rows:{type:Array,state:!0}};constructor(){super(),this.guesses=[],this.currentGuess=[],this.rows=new Array(6),this.column=new Array(5)}render(){return M`
      <div class="game-board-container">
        ${ct(this.rows,((t,e)=>e),((t,e)=>M`
            <div class="row">
              ${this.guesses[e]?ct(this.guesses[e].word,((t,e)=>e),((t,s)=>M` <span
                      class="letter-box ${this.guesses[e].matches[s]}"
                      >${t.toUpperCase()}</span
                    >`)):ct(this.column,((t,e)=>e),((t,s)=>{const i=e===this.guesses.length;return M`
                        <span class="letter-box"
                          >${i&&this.currentGuess[s]?this.currentGuess[s].toUpperCase():""}</span
                        >
                      `}))}
            </div>
          `))}
      </div>
    `}}customElements.define("game-board",ut);const vt={firstRow:["q","w","e","r","t","y","u","i","o","p"],secondRow:["a","s","d","f","g","h","j","k","l"],thirdRow:["enter","z","x","c","v","b","n","m","backspace"],alphabet:"abcdefghijklmnopqrstuvwxyz"};class $t extends tt{static styles=r`
    .keyboard-container {
      display: flex;
      flex-direction: column;
      padding: 0 5px;
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
          ${ct(vt.firstRow,((t,e)=>e),(t=>M`<span id=${t} class="letter ${this.keysPlayed[t]||""}"
                >${t.toUpperCase()}</span
              > `))}
        </div>
        <div class="second row">
          ${ct(vt.secondRow,((t,e)=>e),(t=>M`<span id=${t} class="letter ${this.keysPlayed[t]||""}"
                >${t.toUpperCase()}</span
              > `))}
        </div>
        <div class="third row">
          ${ct(vt.thirdRow,((t,e)=>e),(t=>{const e="backspace"===t||"enter"===t?this.createActionKey(t):null;return M`<span
                id=${t}
                class="letter ${this.keysPlayed[t]||""}"
                >${e||t.toUpperCase()}</span
              > `}))}
        </div>
      </div>
    `}_handleKeypress(t){`${vt.alphabet}enterbackspace`.includes(t.key.toLowerCase())&&(console.log("here"),this.keyEvent(t.key.toLowerCase()),this.renderRoot.querySelector(`#${t.key.toLowerCase()}`).classList.add("active"))}_handleKeyup(t){`${vt.alphabet}enterbackspace`.includes(t.key.toLowerCase())&&this.renderRoot.querySelector(`#${t.key.toLowerCase()}`)?.classList.remove("active")}_handleKeyClick(t){t.target.classList.contains("letter")&&this.keyEvent(t.target.textContent.toLowerCase())}keyEvent(t){const e={detail:{letter:null,action:null},bubbles:!0,composed:!0,cancelable:!0};if(vt.alphabet.includes(t)&&(e.detail.letter=t),"enter"!==t&&"backspace"!==t||(e.detail.action=t),e.detail.letter||e.detail.action){const t=new CustomEvent("pressedKey",{...e});this.dispatchEvent(t)}}createActionKey(t){return"backspace"===t?M`<img
          src="./assets/delete.svg"
          alt="Delete"
          style="height: 22px;"
        />`:M`<img
          src="./assets/enter.svg"
          alt="Enter by Bartama Graphic from NounProject.com"
          style="height: 35px; top: 5px"
        />`}}customElements.define("wordler-keyboard",$t);class yt extends tt{static properties={title:{}};static styles=r`
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
    `}}customElements.define("wordler-title",yt);class gt extends tt{static properties={game:{type:Object,state:!0},currentGuess:{type:Array,state:!0},isWinner:{type:Boolean},isLoss:{type:Boolean}};static styles=r`
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
  `;constructor(){super(),this.game={},this.guesses=[],this.keysPlayed={},this.currentGuess=[]}firstUpdated(){(async()=>{const t=await it();this.game=t,this.guesses=t.guessArchive,this.keysPlayed=t.keysPlayed})()}render(){return console.log(this.game?.word),M`
    <wordler-title></wordler-title>
      <div class="tile">
        <div class="game-container">
          <game-board
            .guesses=${this.guesses}
            .currentGuess=${this.currentGuess}
          ></game-board>
          <wordler-keyboard
            .keysPlayed=${this.keysPlayed}
            @pressedKey=${this._handlePressedKey}
          ></wordler-keyboard>
        </div>
      </div>
    `}_handlePressedKey(t){const{letter:e,action:s}=t.detail,i=[...this.currentGuess];e&&i.length<5&&(i.push(e),this.currentGuess=i),"enter"===s&&5===i.length&&(this.makeGuess(i),this.currentGuess=[]),"backspace"===s&&i.length>0&&(i.pop(),this.currentGuess=i)}async makeGuess(t){if(await this.game.submitGuess(t)){const{guessArchive:t,keysPlayed:e,isWinner:s,isLoss:i}=this.game;this.guesses=t,this.keysPlayed=e,this.isWinner=s,this.isLoss=i}else this.displayNotAWord=!0,this.currentGuess=[]}}customElements.define("wordler-app",gt)})();