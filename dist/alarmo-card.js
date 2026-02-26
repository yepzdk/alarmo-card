var AlarmoCard=function(e){"use strict";function t(e,t,i,a){var o,n=arguments.length,s=n<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,a);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(n<3?o(s):n>3?o(t,i,s):o(t,i))||s);return n>3&&s&&Object.defineProperty(t,i,s),s}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=Array(t);i<t;i++)a[i]=e[i];return a}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function o(e,t,i,a,o,n,s){try{var r=e[n](s),l=r.value}catch(e){return void i(e)}r.done?t(l):Promise.resolve(l).then(a,o)}function n(e,t,i){return t=u(t),function(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return a(e)}(e,g()?Reflect.construct(t,i||[],u(e).constructor):t.apply(e,i))}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,w(a.key),a)}}function l(e,t,i){return t&&r(e.prototype,t),i&&r(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}function d(e,t){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!i){if(Array.isArray(e)||(i=x(e))||t){i&&(e=i);var a=0,o=function(){};return{s:o,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,s=!0,r=!1;return{s:function(){i=i.call(e)},n:function(){var e=i.next();return s=e.done,e},e:function(e){r=!0,n=e},f:function(){try{s||null==i.return||i.return()}finally{if(r)throw n}}}}function c(e,t,i){return(t=w(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,i){var a=function(e,t){for(;!{}.hasOwnProperty.call(e,t)&&null!==(e=u(e)););return e}(e,t);if(a){var o=Object.getOwnPropertyDescriptor(a,t);return o.get?o.get.call(arguments.length<3?e:i):o.value}},h.apply(null,arguments)}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}function g(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(g=function(){return!!e})()}function _(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function m(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?_(Object(i),!0).forEach((function(t){c(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):_(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function f(){f=function(){return t};var e,t={},i=Object.prototype,a=i.hasOwnProperty,o=Object.defineProperty||function(e,t,i){e[t]=i.value},n="function"==typeof Symbol?Symbol:{},s=n.iterator||"@@iterator",r=n.asyncIterator||"@@asyncIterator",l=n.toStringTag||"@@toStringTag";function d(e,t,i){return Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{d({},"")}catch(e){d=function(e,t,i){return e[t]=i}}function c(e,t,i,a){var n=t&&t.prototype instanceof v?t:v,s=Object.create(n.prototype),r=new j(a||[]);return o(s,"_invoke",{value:S(e,i,r)}),s}function h(e,t,i){try{return{type:"normal",arg:e.call(t,i)}}catch(e){return{type:"throw",arg:e}}}t.wrap=c;var u="suspendedStart",p="suspendedYield",g="executing",_="completed",m={};function v(){}function b(){}function y(){}var k={};d(k,s,(function(){return this}));var w=Object.getPrototypeOf,$=w&&w(w(P([])));$&&$!==i&&a.call($,s)&&(k=$);var x=y.prototype=v.prototype=Object.create(k);function A(e){["next","throw","return"].forEach((function(t){d(e,t,(function(e){return this._invoke(t,e)}))}))}function C(e,t){function i(o,n,s,r){var l=h(e[o],e,n);if("throw"!==l.type){var d=l.arg,c=d.value;return c&&"object"==typeof c&&a.call(c,"__await")?t.resolve(c.__await).then((function(e){i("next",e,s,r)}),(function(e){i("throw",e,s,r)})):t.resolve(c).then((function(e){d.value=e,s(d)}),(function(e){return i("throw",e,s,r)}))}r(l.arg)}var n;o(this,"_invoke",{value:function(e,a){function o(){return new t((function(t,o){i(e,a,t,o)}))}return n=n?n.then(o,o):o()}})}function S(t,i,a){var o=u;return function(n,s){if(o===g)throw Error("Generator is already running");if(o===_){if("throw"===n)throw s;return{value:e,done:!0}}for(a.method=n,a.arg=s;;){var r=a.delegate;if(r){var l=O(r,a);if(l){if(l===m)continue;return l}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(o===u)throw o=_,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);o=g;var d=h(t,i,a);if("normal"===d.type){if(o=a.done?_:p,d.arg===m)continue;return{value:d.arg,done:a.done}}"throw"===d.type&&(o=_,a.method="throw",a.arg=d.arg)}}}function O(t,i){var a=i.method,o=t.iterator[a];if(o===e)return i.delegate=null,"throw"===a&&t.iterator.return&&(i.method="return",i.arg=e,O(t,i),"throw"===i.method)||"return"!==a&&(i.method="throw",i.arg=new TypeError("The iterator does not provide a '"+a+"' method")),m;var n=h(o,t.iterator,i.arg);if("throw"===n.type)return i.method="throw",i.arg=n.arg,i.delegate=null,m;var s=n.arg;return s?s.done?(i[t.resultName]=s.value,i.next=t.nextLoc,"return"!==i.method&&(i.method="next",i.arg=e),i.delegate=null,m):s:(i.method="throw",i.arg=new TypeError("iterator result is not an object"),i.delegate=null,m)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function z(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function P(t){if(t||""===t){var i=t[s];if(i)return i.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,n=function i(){for(;++o<t.length;)if(a.call(t,o))return i.value=t[o],i.done=!1,i;return i.value=e,i.done=!0,i};return n.next=n}}throw new TypeError(typeof t+" is not iterable")}return b.prototype=y,o(x,"constructor",{value:y,configurable:!0}),o(y,"constructor",{value:b,configurable:!0}),b.displayName=d(y,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,d(e,l,"GeneratorFunction")),e.prototype=Object.create(x),e},t.awrap=function(e){return{__await:e}},A(C.prototype),d(C.prototype,r,(function(){return this})),t.AsyncIterator=C,t.async=function(e,i,a,o,n){void 0===n&&(n=Promise);var s=new C(c(e,i,a,o),n);return t.isGeneratorFunction(i)?s:s.next().then((function(e){return e.done?e.value:s.next()}))},A(x),d(x,l,"Generator"),d(x,s,(function(){return this})),d(x,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),i=[];for(var a in t)i.push(a);return i.reverse(),function e(){for(;i.length;){var a=i.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},t.values=P,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(z),!t)for(var i in this)"t"===i.charAt(0)&&a.call(this,i)&&!isNaN(+i.slice(1))&&(this[i]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var i=this;function o(a,o){return r.type="throw",r.arg=t,i.next=a,o&&(i.method="next",i.arg=e),!!o}for(var n=this.tryEntries.length-1;n>=0;--n){var s=this.tryEntries[n],r=s.completion;if("root"===s.tryLoc)return o("end");if(s.tryLoc<=this.prev){var l=a.call(s,"catchLoc"),d=a.call(s,"finallyLoc");if(l&&d){if(this.prev<s.catchLoc)return o(s.catchLoc,!0);if(this.prev<s.finallyLoc)return o(s.finallyLoc)}else if(l){if(this.prev<s.catchLoc)return o(s.catchLoc,!0)}else{if(!d)throw Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return o(s.finallyLoc)}}}},abrupt:function(e,t){for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i];if(o.tryLoc<=this.prev&&a.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var n=o;break}}n&&("break"===e||"continue"===e)&&n.tryLoc<=t&&t<=n.finallyLoc&&(n=null);var s=n?n.completion:{};return s.type=e,s.arg=t,n?(this.method="next",this.next=n.finallyLoc,m):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var i=this.tryEntries[t];if(i.finallyLoc===e)return this.complete(i.completion,i.afterLoc),z(i),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var i=this.tryEntries[t];if(i.tryLoc===e){var a=i.completion;if("throw"===a.type){var o=a.arg;z(i)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,i,a){return this.delegate={iterator:P(t),resultName:i,nextLoc:a},"next"===this.method&&(this.arg=e),m}},t}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var a,o,n,s,r=[],l=!0,d=!1;try{if(n=(i=i.call(e)).next,0===t);else for(;!(l=(a=n.call(i)).done)&&(r.push(a.value),r.length!==t);l=!0);}catch(e){d=!0,o=e}finally{try{if(!l&&null!=i.return&&(s=i.return(),Object(s)!==s))return}finally{if(d)throw o}}return r}}(e,t)||x(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t,i,a){var o=h(u(e.prototype),t,i);return"function"==typeof o?function(e){return o.apply(i,e)}:o}function k(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||x(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var a=i.call(e,t||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}function $(e){return $="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$(e)}function x(e,t){if(e){if("string"==typeof e)return i(e,t);var a={}.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?i(e,t):void 0}}function A(e){var t="function"==typeof Map?new Map:void 0;return A=function(e){if(null===e||!function(e){try{return-1!==Function.toString.call(e).indexOf("[native code]")}catch(t){return"function"==typeof e}}(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,i)}function i(){return function(e,t,i){if(g())return Reflect.construct.apply(null,arguments);var a=[null];a.push.apply(a,t);var o=new(e.bind.apply(e,a));return i&&v(o,i.prototype),o}(e,arguments,u(this).constructor)}return i.prototype=Object.create(e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),v(i,e)},A(e)
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */}"function"==typeof SuppressedError&&SuppressedError;var C,S,O,E=globalThis,z=E.ShadowRoot&&(void 0===E.ShadyCSS||E.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,j=Symbol(),P=new WeakMap,T=function(){return l((function e(t,i,a){if(s(this,e),this._$cssResult$=!0,a!==j)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}),[{key:"styleSheet",get:function(){var e=this.o,t=this.t;if(z&&void 0===e){var i=void 0!==t&&1===t.length;i&&(e=P.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&P.set(t,e))}return e}},{key:"toString",value:function(){return this.cssText}}])}(),M=function(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),a=1;a<t;a++)i[a-1]=arguments[a];var o=1===e.length?e[0]:i.reduce((function(t,i,a){return t+function(e){if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")}(i)+e[a+1]}),e[0]);return new T(o,e,j)},L=z?function(e){return e}:function(e){return e instanceof CSSStyleSheet?function(e){var t,i="",a=d(e.cssRules);try{for(a.s();!(t=a.n()).done;){i+=t.value.cssText}}catch(e){a.e(e)}finally{a.f()}return function(e){return new T("string"==typeof e?e:e+"",void 0,j)}(i)}(e):e},U=Object.is,N=Object.defineProperty,H=Object.getOwnPropertyDescriptor,D=Object.getOwnPropertyNames,R=Object.getOwnPropertySymbols,I=Object.getPrototypeOf,B=globalThis,V=B.trustedTypes,F=V?V.emptyScript:"",q=B.reactiveElementPolyfillSupport,Z=function(e,t){return e},W={toAttribute:function(e,t){switch(t){case Boolean:e=e?F:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute:function(e,t){var i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},G=function(e,t){return!U(e,t)},K={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:G};null!==(C=Symbol.metadata)&&void 0!==C||(Symbol.metadata=Symbol("metadata")),null!==(S=B.litPropertyMetadata)&&void 0!==S||(B.litPropertyMetadata=new WeakMap);var J,Y=function(e){function t(){var e;return s(this,t),(e=n(this,t))._$Ep=void 0,e.isUpdatePending=!1,e.hasUpdated=!1,e._$Em=null,e._$Ev(),e}return p(t,e),l(t,[{key:"_$Ev",value:function(){var e,t=this;this._$ES=new Promise((function(e){return t.enableUpdating=e})),this._$AL=new Map,this._$E_(),this.requestUpdate(),null===(e=this.constructor.l)||void 0===e||e.forEach((function(e){return e(t)}))}},{key:"addController",value:function(e){var t,i;(null!==(t=this._$EO)&&void 0!==t?t:this._$EO=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}},{key:"removeController",value:function(e){var t;null===(t=this._$EO)||void 0===t||t.delete(e)}},{key:"_$E_",value:function(){var e,t=new Map,i=d(this.constructor.elementProperties.keys());try{for(i.s();!(e=i.n()).done;){var a=e.value;this.hasOwnProperty(a)&&(t.set(a,this[a]),delete this[a])}}catch(e){i.e(e)}finally{i.f()}t.size>0&&(this._$Ep=t)}},{key:"createRenderRoot",value:function(){var e,t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return function(e,t){if(z)e.adoptedStyleSheets=t.map((function(e){return e instanceof CSSStyleSheet?e:e.styleSheet}));else{var i,a=d(t);try{for(a.s();!(i=a.n()).done;){var o=i.value,n=document.createElement("style"),s=E.litNonce;void 0!==s&&n.setAttribute("nonce",s),n.textContent=o.cssText,e.appendChild(n)}}catch(e){a.e(e)}finally{a.f()}}}(t,this.constructor.elementStyles),t}},{key:"connectedCallback",value:function(){var e,t;null!==(e=this.renderRoot)&&void 0!==e||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$EO)||void 0===t||t.forEach((function(e){var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}},{key:"enableUpdating",value:function(e){}},{key:"disconnectedCallback",value:function(){var e;null===(e=this._$EO)||void 0===e||e.forEach((function(e){var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}},{key:"attributeChangedCallback",value:function(e,t,i){this._$AK(e,i)}},{key:"_$EC",value:function(e,t){var i=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,i);if(void 0!==a&&!0===i.reflect){var o,n=(void 0!==(null===(o=i.converter)||void 0===o?void 0:o.toAttribute)?i.converter:W).toAttribute(t,i.type);this._$Em=e,null==n?this.removeAttribute(a):this.setAttribute(a,n),this._$Em=null}}},{key:"_$AK",value:function(e,t){var i=this.constructor,a=i._$Eh.get(e);if(void 0!==a&&this._$Em!==a){var o,n=i.getPropertyOptions(a),s="function"==typeof n.converter?{fromAttribute:n.converter}:void 0!==(null===(o=n.converter)||void 0===o?void 0:o.fromAttribute)?n.converter:W;this._$Em=a,this[a]=s.fromAttribute(t,n.type),this._$Em=null}}},{key:"requestUpdate",value:function(e,t,i){if(void 0!==e){var a,o;if(null!==(a=i)&&void 0!==a||(i=this.constructor.getPropertyOptions(e)),!(null!==(o=i.hasChanged)&&void 0!==o?o:G)(this[e],t))return;this.P(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}},{key:"P",value:function(e,t,i){var a;this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$Em!==e&&(null!==(a=this._$Ej)&&void 0!==a?a:this._$Ej=new Set).add(e)}},{key:"_$ET",value:(i=function(e){return function(){var t=this,i=arguments;return new Promise((function(a,n){var s=e.apply(t,i);function r(e){o(s,a,n,r,l,"next",e)}function l(e){o(s,a,n,r,l,"throw",e)}r(void 0)}))}}(f().mark((function e(){var t;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.isUpdatePending=!0,e.prev=1,e.next=4,this._$ES;case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),Promise.reject(e.t0);case 9:if(t=this.scheduleUpdate(),e.t1=null!=t,!e.t1){e.next=14;break}return e.next=14,t;case 14:return e.abrupt("return",!this.isUpdatePending);case 15:case"end":return e.stop()}}),e,this,[[1,6]])}))),function(){return i.apply(this,arguments)})},{key:"scheduleUpdate",value:function(){return this.performUpdate()}},{key:"performUpdate",value:function(){if(this.isUpdatePending){if(!this.hasUpdated){var e;if(null!==(e=this.renderRoot)&&void 0!==e||(this.renderRoot=this.createRenderRoot()),this._$Ep){var t,i=d(this._$Ep);try{for(i.s();!(t=i.n()).done;){var a=b(t.value,2),o=a[0],n=a[1];this[o]=n}}catch(e){i.e(e)}finally{i.f()}this._$Ep=void 0}var s=this.constructor.elementProperties;if(s.size>0){var r,l=d(s);try{for(l.s();!(r=l.n()).done;){var c=b(r.value,2),h=c[0],u=c[1];!0!==u.wrapped||this._$AL.has(h)||void 0===this[h]||this.P(h,this[h],u)}}catch(e){l.e(e)}finally{l.f()}}}var p=!1,g=this._$AL;try{var _;(p=this.shouldUpdate(g))?(this.willUpdate(g),null!==(_=this._$EO)&&void 0!==_&&_.forEach((function(e){var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(g)):this._$EU()}catch(g){throw p=!1,this._$EU(),g}p&&this._$AE(g)}}},{key:"willUpdate",value:function(e){}},{key:"_$AE",value:function(e){var t;null!==(t=this._$EO)&&void 0!==t&&t.forEach((function(e){var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}},{key:"_$EU",value:function(){this._$AL=new Map,this.isUpdatePending=!1}},{key:"updateComplete",get:function(){return this.getUpdateComplete()}},{key:"getUpdateComplete",value:function(){return this._$ES}},{key:"shouldUpdate",value:function(e){return!0}},{key:"update",value:function(e){var t=this;this._$Ej&&(this._$Ej=this._$Ej.forEach((function(e){return t._$EC(e,t[e])}))),this._$EU()}},{key:"updated",value:function(e){}},{key:"firstUpdated",value:function(e){}}],[{key:"addInitializer",value:function(e){var t;this._$Ei(),(null!==(t=this.l)&&void 0!==t?t:this.l=[]).push(e)}},{key:"observedAttributes",get:function(){return this.finalize(),this._$Eh&&k(this._$Eh.keys())}},{key:"createProperty",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:K;if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){var i=Symbol(),a=this.getPropertyDescriptor(e,i,t);void 0!==a&&N(this.prototype,e,a)}}},{key:"getPropertyDescriptor",value:function(e,t,i){var a,o=null!==(a=H(this.prototype,e))&&void 0!==a?a:{get:function(){return this[t]},set:function(e){this[t]=e}},n=o.get,s=o.set;return{get:function(){return null==n?void 0:n.call(this)},set:function(t){var a=null==n?void 0:n.call(this);s.call(this,t),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}},{key:"getPropertyOptions",value:function(e){var t;return null!==(t=this.elementProperties.get(e))&&void 0!==t?t:K}},{key:"_$Ei",value:function(){if(!this.hasOwnProperty(Z("elementProperties"))){var e=I(this);e.finalize(),void 0!==e.l&&(this.l=k(e.l)),this.elementProperties=new Map(e.elementProperties)}}},{key:"finalize",value:function(){if(!this.hasOwnProperty(Z("finalized"))){if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Z("properties"))){var e,t=this.properties,i=d([].concat(k(D(t)),k(R(t))));try{for(i.s();!(e=i.n()).done;){var a=e.value;this.createProperty(a,t[a])}}catch(e){i.e(e)}finally{i.f()}}var o=this[Symbol.metadata];if(null!==o){var n=litPropertyMetadata.get(o);if(void 0!==n){var s,r=d(n);try{for(r.s();!(s=r.n()).done;){var l=b(s.value,2),c=l[0],h=l[1];this.elementProperties.set(c,h)}}catch(e){r.e(e)}finally{r.f()}}}this._$Eh=new Map;var u,p=d(this.elementProperties);try{for(p.s();!(u=p.n()).done;){var g=b(u.value,2),_=g[0],m=g[1],f=this._$Eu(_,m);void 0!==f&&this._$Eh.set(f,_)}}catch(e){p.e(e)}finally{p.f()}this.elementStyles=this.finalizeStyles(this.styles)}}},{key:"finalizeStyles",value:function(e){var t=[];if(Array.isArray(e)){var i,a=d(new Set(e.flat(1/0).reverse()));try{for(a.s();!(i=a.n()).done;){var o=i.value;t.unshift(L(o))}}catch(e){a.e(e)}finally{a.f()}}else void 0!==e&&t.push(L(e));return t}},{key:"_$Eu",value:function(e,t){var i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}}]);var i}(A(HTMLElement));Y.elementStyles=[],Y.shadowRootOptions={mode:"open"},Y[Z("elementProperties")]=new Map,Y[Z("finalized")]=new Map,null!=q&&q({ReactiveElement:Y}),(null!==(O=B.reactiveElementVersions)&&void 0!==O?O:B.reactiveElementVersions=[]).push("2.0.4");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var Q=globalThis,X=Q.trustedTypes,ee=X?X.createPolicy("lit-html",{createHTML:function(e){return e}}):void 0,te="$lit$",ie="lit$".concat(Math.random().toFixed(9).slice(2),"$"),ae="?"+ie,oe="<".concat(ae,">"),ne=document,se=function(){return ne.createComment("")},re=function(e){return null===e||"object"!=$(e)&&"function"!=typeof e},le=Array.isArray,de="[ \t\n\f\r]",ce=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,he=/-->/g,ue=/>/g,pe=RegExp(">|".concat(de,"(?:([^\\s\"'>=/]+)(").concat(de,"*=").concat(de,"*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"),"g"),ge=/'/g,_e=/"/g,me=/^(?:script|style|textarea|title)$/i,fe=function(e){return function(t){for(var i=arguments.length,a=new Array(i>1?i-1:0),o=1;o<i;o++)a[o-1]=arguments[o];return{_$litType$:e,strings:t,values:a}}}(1),ve=Symbol.for("lit-noChange"),be=Symbol.for("lit-nothing"),ye=new WeakMap,ke=ne.createTreeWalker(ne,129);function we(e,t){if(!le(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==ee?ee.createHTML(t):t}var $e=function(){return l((function e(t,i){var a,o=t.strings,n=t._$litType$;s(this,e),this.parts=[];var r=0,l=0,c=o.length-1,h=this.parts,u=function(e,t){for(var i,a=e.length-1,o=[],n=2===t?"<svg>":3===t?"<math>":"",s=ce,r=0;r<a;r++){for(var l=e[r],d=void 0,c=void 0,h=-1,u=0;u<l.length&&(s.lastIndex=u,null!==(c=s.exec(l)));){var p;u=s.lastIndex,s===ce?"!--"===c[1]?s=he:void 0!==c[1]?s=ue:void 0!==c[2]?(me.test(c[2])&&(i=RegExp("</"+c[2],"g")),s=pe):void 0!==c[3]&&(s=pe):s===pe?">"===c[0]?(s=null!==(p=i)&&void 0!==p?p:ce,h=-1):void 0===c[1]?h=-2:(h=s.lastIndex-c[2].length,d=c[1],s=void 0===c[3]?pe:'"'===c[3]?_e:ge):s===_e||s===ge?s=pe:s===he||s===ue?s=ce:(s=pe,i=void 0)}var g=s===pe&&e[r+1].startsWith("/>")?" ":"";n+=s===ce?l+oe:h>=0?(o.push(d),l.slice(0,h)+te+l.slice(h)+ie+g):l+ie+(-2===h?r:g)}return[we(e,n+(e[a]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),o]}(o,n),p=b(u,2),g=p[0],_=p[1];if(this.el=e.createElement(g,i),ke.currentNode=this.el.content,2===n||3===n){var m=this.el.content.firstChild;m.replaceWith.apply(m,k(m.childNodes))}for(;null!==(a=ke.nextNode())&&h.length<c;){if(1===a.nodeType){if(a.hasAttributes()){var f,v=d(a.getAttributeNames());try{for(v.s();!(f=v.n()).done;){var y=f.value;if(y.endsWith(te)){var w=_[l++],$=a.getAttribute(y).split(ie),x=/([.?@])?(.*)/.exec(w);h.push({type:1,index:r,name:x[2],strings:$,ctor:"."===x[1]?Oe:"?"===x[1]?Ee:"@"===x[1]?ze:Se}),a.removeAttribute(y)}else y.startsWith(ie)&&(h.push({type:6,index:r}),a.removeAttribute(y))}}catch(e){v.e(e)}finally{v.f()}}if(me.test(a.tagName)){var A=a.textContent.split(ie),C=A.length-1;if(C>0){a.textContent=X?X.emptyScript:"";for(var S=0;S<C;S++)a.append(A[S],se()),ke.nextNode(),h.push({type:2,index:++r});a.append(A[C],se())}}}else if(8===a.nodeType)if(a.data===ae)h.push({type:2,index:r});else for(var O=-1;-1!==(O=a.data.indexOf(ie,O+1));)h.push({type:7,index:r}),O+=ie.length-1;r++}}),null,[{key:"createElement",value:function(e,t){var i=ne.createElement("template");return i.innerHTML=e,i}}])}();function xe(e,t){var i,a,o,n,s,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e,l=arguments.length>3?arguments[3]:void 0;if(t===ve)return t;var d=void 0!==l?null===(i=r.o)||void 0===i?void 0:i[l]:r.l,c=re(t)?void 0:t._$litDirective$;return(null===(a=d)||void 0===a?void 0:a.constructor)!==c&&(null!==(o=d)&&void 0!==o&&null!==(n=o._$AO)&&void 0!==n&&n.call(o,!1),void 0===c?d=void 0:(d=new c(e))._$AT(e,r,l),void 0!==l?(null!==(s=r.o)&&void 0!==s?s:r.o=[])[l]=d:r.l=d),void 0!==d&&(t=xe(e,d._$AS(e,t.values),d,l)),t}var Ae=function(){return l((function e(t,i){s(this,e),this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}),[{key:"parentNode",get:function(){return this._$AM.parentNode}},{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"u",value:function(e){var t,i=this._$AD,a=i.el.content,o=i.parts,n=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:ne).importNode(a,!0);ke.currentNode=n;for(var s=ke.nextNode(),r=0,l=0,d=o[0];void 0!==d;){var c;if(r===d.index){var h=void 0;2===d.type?h=new Ce(s,s.nextSibling,this,e):1===d.type?h=new d.ctor(s,d.name,d.strings,this,e):6===d.type&&(h=new je(s,this,e)),this._$AV.push(h),d=o[++l]}r!==(null===(c=d)||void 0===c?void 0:c.index)&&(s=ke.nextNode(),r++)}return ke.currentNode=ne,n}},{key:"p",value:function(e){var t,i=0,a=d(this._$AV);try{for(a.s();!(t=a.n()).done;){var o=t.value;void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,i),i+=o.strings.length-2):o._$AI(e[i])),i++}}catch(e){a.e(e)}finally{a.f()}}}])}(),Ce=function(){function e(t,i,a,o){var n;s(this,e),this.type=2,this._$AH=be,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=a,this.options=o,this.v=null===(n=null==o?void 0:o.isConnected)||void 0===n||n}return l(e,[{key:"_$AU",get:function(){var e,t;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this.v}},{key:"parentNode",get:function(){var e,t=this._$AA.parentNode,i=this._$AM;return void 0!==i&&11===(null===(e=t)||void 0===e?void 0:e.nodeType)&&(t=i.parentNode),t}},{key:"startNode",get:function(){return this._$AA}},{key:"endNode",get:function(){return this._$AB}},{key:"_$AI",value:function(e){e=xe(this,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this),re(e)?e===be||null==e||""===e?(this._$AH!==be&&this._$AR(),this._$AH=be):e!==this._$AH&&e!==ve&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):function(e){return le(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator])}(e)?this.k(e):this._(e)}},{key:"O",value:function(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}},{key:"T",value:function(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}},{key:"_",value:function(e){this._$AH!==be&&re(this._$AH)?this._$AA.nextSibling.data=e:this.T(ne.createTextNode(e)),this._$AH=e}},{key:"$",value:function(e){var t,i=e.values,a=e._$litType$,o="number"==typeof a?this._$AC(e):(void 0===a.el&&(a.el=$e.createElement(we(a.h,a.h[0]),this.options)),a);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===o)this._$AH.p(i);else{var n=new Ae(o,this),s=n.u(this.options);n.p(i),this.T(s),this._$AH=n}}},{key:"_$AC",value:function(e){var t=ye.get(e.strings);return void 0===t&&ye.set(e.strings,t=new $e(e)),t}},{key:"k",value:function(t){le(this._$AH)||(this._$AH=[],this._$AR());var i,a,o=this._$AH,n=0,s=d(t);try{for(s.s();!(a=s.n()).done;){var r=a.value;n===o.length?o.push(i=new e(this.O(se()),this.O(se()),this,this.options)):i=o[n],i._$AI(r),n++}}catch(e){s.e(e)}finally{s.f()}n<o.length&&(this._$AR(i&&i._$AB.nextSibling,n),o.length=n)}},{key:"_$AR",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,t=arguments.length>1?arguments[1]:void 0;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,t);e&&e!==this._$AB;){var i,a=e.nextSibling;e.remove(),e=a}}},{key:"setConnected",value:function(e){var t;void 0===this._$AM&&(this.v=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}])}(),Se=function(){return l((function e(t,i,a,o,n){s(this,e),this.type=1,this._$AH=be,this._$AN=void 0,this.element=t,this.name=i,this._$AM=o,this.options=n,a.length>2||""!==a[0]||""!==a[1]?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=be}),[{key:"tagName",get:function(){return this.element.tagName}},{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"_$AI",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,i=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0,o=this.strings,n=!1;if(void 0===o)e=xe(this,e,t,0),(n=!re(e)||e!==this._$AH&&e!==ve)&&(this._$AH=e);else{var s,r,l=e;for(e=o[0],s=0;s<o.length-1;s++){var d;(r=xe(this,l[i+s],t,s))===ve&&(r=this._$AH[s]),n||(n=!re(r)||r!==this._$AH[s]),r===be?e=be:e!==be&&(e+=(null!==(d=r)&&void 0!==d?d:"")+o[s+1]),this._$AH[s]=r}}n&&!a&&this.j(e)}},{key:"j",value:function(e){e===be?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}])}(),Oe=function(e){function t(){var e;return s(this,t),(e=n(this,t,arguments)).type=3,e}return p(t,e),l(t,[{key:"j",value:function(e){this.element[this.name]=e===be?void 0:e}}])}(Se),Ee=function(e){function t(){var e;return s(this,t),(e=n(this,t,arguments)).type=4,e}return p(t,e),l(t,[{key:"j",value:function(e){this.element.toggleAttribute(this.name,!!e&&e!==be)}}])}(Se),ze=function(e){function t(e,i,a,o,r){var l;return s(this,t),(l=n(this,t,[e,i,a,o,r])).type=5,l}return p(t,e),l(t,[{key:"_$AI",value:function(e){var t;if((e=null!==(t=xe(this,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,0))&&void 0!==t?t:be)!==ve){var i=this._$AH,a=e===be&&i!==be||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==be&&(i===be||a);a&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}}},{key:"handleEvent",value:function(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!==(t=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==t?t:this.element,e):this._$AH.handleEvent(e)}}])}(Se),je=function(){return l((function e(t,i,a){s(this,e),this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=a}),[{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"_$AI",value:function(e){xe(this,e)}}])}(),Pe=Q.litHtmlPolyfillSupport;null!=Pe&&Pe($e,Ce),(null!==(J=Q.litHtmlVersions)&&void 0!==J?J:Q.litHtmlVersions=[]).push("3.2.0");var Te,Me,Le=function(e){function t(){var e;return s(this,t),(e=n(this,t,arguments)).renderOptions={host:a(e)},e.o=void 0,e}return p(t,e),l(t,[{key:"createRenderRoot",value:function(){var e,i,a=y(t,"createRenderRoot",this)([]);return null!==(i=(e=this.renderOptions).renderBefore)&&void 0!==i||(e.renderBefore=a.firstChild),a}},{key:"update",value:function(e){var i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),y(t,"update",this)([e]),this.o=function(e,t,i){var a,o=null!==(a=null==i?void 0:i.renderBefore)&&void 0!==a?a:t,n=o._$litPart$;if(void 0===n){var s,r=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:null;o._$litPart$=n=new Ce(t.insertBefore(se(),r),r,void 0,null!=i?i:{})}return n._$AI(e),n}(i,this.renderRoot,this.renderOptions)}},{key:"connectedCallback",value:function(){var e;y(t,"connectedCallback",this)([]),null===(e=this.o)||void 0===e||e.setConnected(!0)}},{key:"disconnectedCallback",value:function(){var e;y(t,"disconnectedCallback",this)([]),null===(e=this.o)||void 0===e||e.setConnected(!1)}},{key:"render",value:function(){return ve}}])}(Y);Le._$litElement$=!0,Le.finalized=!0,null===(Te=globalThis.litElementHydrateSupport)||void 0===Te||Te.call(globalThis,{LitElement:Le});var Ue=globalThis.litElementPolyfillSupport;null==Ue||Ue({LitElement:Le}),(null!==(Me=globalThis.litElementVersions)&&void 0!==Me?Me:globalThis.litElementVersions=[]).push("4.1.0");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var Ne=function(e){return function(t,i){void 0!==i?i.addInitializer((function(){customElements.define(e,t)})):customElements.define(e,t)}},He={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:G},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He,t=arguments.length>1?arguments[1]:void 0,i=arguments.length>2?arguments[2]:void 0,a=i.kind,o=i.metadata,n=globalThis.litPropertyMetadata.get(o);if(void 0===n&&globalThis.litPropertyMetadata.set(o,n=new Map),n.set(i.name,e),"accessor"===a){var s=i.name;return{set:function(i){var a=t.get.call(this);t.set.call(this,i),this.requestUpdate(s,a,e)},init:function(t){return void 0!==t&&this.P(s,void 0,e),t}}}if("setter"===a){var r=i.name;return function(i){var a=this[r];t.call(this,i),this.requestUpdate(r,a,e)}}throw Error("Unsupported decorator location: "+a)};
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function Re(e){return function(t,i){return"object"==$(i)?De(e,t,i):function(e,t,i){var a=t.hasOwnProperty(i);return t.constructor.createProperty(i,a?m(m({},e),{},{wrapped:!0}):e),a?Object.getOwnPropertyDescriptor(t,i):void 0}(e,t,i)}}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function Ie(e){return Re(m(m({},e),{},{state:!0,attribute:!1}))}const Be="number";var Ve;!function(e){e.Disarmed="disarmed",e.Arming="arming",e.Pending="pending",e.Triggered="triggered",e.ArmedAway="armed_away",e.ArmedHome="armed_home",e.ArmedNight="armed_night",e.ArmedVacation="armed_vacation",e.ArmedCustomBypass="armed_custom_bypass"}(Ve||(Ve={}));const Fe={[Ve.ArmedAway]:"hass:shield-lock",[Ve.ArmedHome]:"hass:shield-home",[Ve.ArmedNight]:"hass:shield-moon",[Ve.ArmedVacation]:"hass:shield-airplane",[Ve.ArmedCustomBypass]:"hass:security",[Ve.Disarmed]:"hass:shield-off",[Ve.Arming]:"hass:shield-outline",[Ve.Pending]:"hass:shield-outline",[Ve.Triggered]:"hass:bell-ring"};var qe;!function(e){e.ArmAway="arm_away",e.ArmHome="arm_home",e.ArmNight="arm_night",e.ArmVacation="arm_vacation",e.ArmCustomBypass="arm_custom_bypass",e.Disarm="disarm"}(qe||(qe={}));const Ze={[qe.ArmAway]:"mdi:lock",[qe.ArmHome]:"mdi:home",[qe.ArmNight]:"mdi:moon-waning-crescent",[qe.ArmVacation]:"mdi:airplane",[qe.ArmCustomBypass]:"mdi:shield",[qe.Disarm]:"mdi:shield-off"},We={[qe.ArmAway]:Ve.ArmedAway,[qe.ArmHome]:Ve.ArmedHome,[qe.ArmNight]:Ve.ArmedNight,[qe.ArmVacation]:Ve.ArmedVacation,[qe.ArmCustomBypass]:Ve.ArmedCustomBypass,[qe.Disarm]:Ve.Disarmed};var Ge;!function(e){e.Disarm="disarm",e.Arm="arm",e.Trigger="trigger",e.FailedToArm="failed_to_arm",e.CommandNotAllowed="command_not_allowed",e.NoCodeProvided="no_code_provided",e.InvalidCodeProvided="invalid_code_provided",e.TriggerTimeExpired="trigger_time_expired",e.ReadyToArmModesChanged="ready_to_arm_modes_changed"}(Ge||(Ge={}));const Ke="alarmo_updated",Je=["arming","pending"],Ye={type:"",entity:"",name:"",keep_keypad_visible:!1,button_scale_actions:1,button_scale_keypad:1,states:{},show_messages:!0,show_ready_indicator:!0,show_bypassed_sensors:!0,use_code_dialog:!1,hide_keypad:!1,hide_arm_options:!1,pending_sound:""},Qe=2.5,Xe={skip_delay:!1,force:!1};var et;!function(e){e.Red="red",e.Pink="pink",e.Purple="purple",e.DeepPurple="deep-purple",e.Indigo="indigo",e.Blue="blue",e.LightBlue="light-blue",e.Cyan="cyan",e.Teal="teal",e.Green="green",e.LightGreen="light-green",e.Lime="lime",e.Yellow="yellow",e.Amber="amber",e.Orange="orange",e.DeepOrange="deep-orange",e.Brown="brown",e.LightGrey="light-grey",e.Grey="grey",e.DarkGrey="dark-grey",e.BlueGrey="blue-grey",e.Black="black",e.White="white"}(et||(et={}));var tt="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",it={heading:"Možnosti aktivace",skip_delay:"Přeskočit čas pro vystup",force:"Bypass otevřených senzorů"},at={keep_keypad_visible:"Zachovat klávesnici vždy viditelnou, i když není vyžadován žádný kód.",button_scale_actions:"Měřítko použité pro změnu velikosti tlačítek akcí.",button_scale_keypad:"Měřítko použité pro změnu velikosti tlačítek klávesnice.",show_messages:"Zobrazit diagnostické zprávy při spuštění alarmu nebo nemožnosti aktivace.",show_ready_indicator:"Zobrazit indikátor připraveno/nepřipraveno na tlačítkách režimu aktivace.",show_bypassed_sensors:"Zobrazit varování při aktivaci alarmu s přemostěnými senzory.",use_code_dialog:"Zobrazte klávesnici pro zadání kódu jako vyskakovací dialog.",hide_keypad:"Skrýt tlačítka klávesnice pro zadávání kódu.",available_actions:"Dostupné akce:",action_dialog:{title:"Upravit zobrazení akce '{action}'",show_button:{title:"Viditelnost akčního tlačítka",options:{always:"Vždy zobrazeno",never:"Nikdy zobrazeno",disarmed:"Zobrazit pouze při odzbrojení",armed:"Zobrazit pouze při zapnutí"}},button_label:"Přepsat popisek tlačítka",button_icon:"Ikona zobrazeného tlačítka",state_label:"Přepsat popisek stavu",color:"Přepsat barvu použitou pro akci"}},ot={blocking_sensors:"Nelze aktivovat kvůli následujícím senzorům",triggered_sensors:"Alarm byl spuštěn následujícími senzory",bypassed_sensors:"Jsou tam přemostěné senzory"},nt={arm_options:it,editor:at,errors:ot},st={heading:"Scharfschaltungsoptionen",skip_delay:"Ausgangsverzögerung überspringen",force:"Offene Sensoren ignorieren"},rt={keep_keypad_visible:"Zeige das Pin-Eingabefeld immer an, auch wenn kein Code erfordert ist.",button_scale_actions:"Skalierungsfaktor für Buttongröße der Aktionen.",button_scale_keypad:"Skalierungsfaktor für Buttongröße der Pin-Eingabefeld.",show_messages:"Anzeige von Diagnosemeldungen, wenn der Alarm ausgelöst wird oder nicht scharf geschaltet werden kann.",show_ready_indicator:"Zeigt die Bereitschafts-/Nicht-Bereitschaftsanzeige auf den Scharfschaltmodus-Tasten an.",show_bypassed_sensors:"Warnung anzeigen, wenn der Alarm mit umgangenen Sensoren aktiviert wird.",use_code_dialog:"Zeigen Sie die Tastatur zur Codeeingabe als Popup-Dialog an.",hide_keypad:"Blenden Sie die Tasten der Tastatur zur Codeeingabe aus.",available_actions:"Verfügbare Aktionen:",action_dialog:{title:"Anzeige der Aktion '{action}' anpassen",show_button:{title:"Sichtbarkeit der Aktionsschaltfläche",options:{always:"Immer angezeigt",never:"Nie angezeigt",disarmed:"Nur im deaktivierten Zustand anzeigen",armed:"Nur im aktivierten Zustand anzeigen"}},button_label:"Überschreibung der Tastenbeschriftung",button_icon:"Angezeigtes Schaltflächensymbol",state_label:"Überschreibung der Statusbezeichnung",color:"Die für die Aktion verwendete Farbe überschreiben"}},lt={blocking_sensors:"Konnte nicht scharf geschaltet werden, da folgende Sensoren geöffnet sind",triggered_sensors:"Alarm wurde durch folgende Sensoren ausgelöst",bypassed_sensors:"Es gibt umgangene Sensoren"},dt={arm_options:st,editor:rt,errors:lt},ct={heading:"Επιλογές για όπλισμα",skip_delay:"Παράλειψη καθυστέρησης εξόδου",force:"Παράκαμψη ανοιχτών αισθητήρων"},ht={keep_keypad_visible:"Κράτησε το πληκτρολόγιο πάντα ορατό, ακόμη και όταν δεν απαιτείται εισαγωγή κωδικού.",button_scale_actions:"Συντελεστής κλίμακας για αλλαγή μεγέθους των κουμπιών ενεργειών.",button_scale_keypad:"Συντελεστής κλίμακας για αλλαγή μεγέθους των κουμπιών του πληκτρολογίου.",show_messages:"Εμφάνιση διαγνωστικών μηνυμάτων όταν ενεργοποιείται ο συναγερμός ή δεν μπορεί να οπλιστεί.",show_ready_indicator:"Εμφάνιση ένδειξης έτοιμο/μη έτοιμο στα κουμπιά λειτουργίας όπλισης.",show_bypassed_sensors:"Εμφάνιση προειδοποιητικού μηνύματος όταν ο συναγερμός οπλίζεται με παρακαμφθέντες αισθητήρες.",use_code_dialog:"Εμφανίστε το πληκτρολόγιο για την εισαγωγή του κωδικού ως αναδυόμενο παράθυρο διαλόγου.",hide_keypad:"Απόκρυψη των κουμπιών του πληκτρολογίου για την εισαγωγή του κωδικού.",available_actions:"Διαθέσιμες ενέργειες:",action_dialog:{title:"Προσαρμογή εμφάνισης της ενέργειας '{action}'",show_button:{title:"Ορατότητα κουμπιού ενέργειας",options:{always:"Εμφανίζεται πάντα",never:"Ποτέ δεν εμφανίζεται",disarmed:"Εμφάνιση μόνο όταν είναι αφοπλισμένο",armed:"Εμφάνιση μόνο όταν είναι οπλισμένο"}},button_icon:"Εμφανιζόμενο εικονίδιο κουμπιού",state_label:"Αντικατάσταση ετικέτας κατάστασης",color:"Παράκαμψη χρώματος που χρησιμοποιείται για την ενέργεια"}},ut={blocking_sensors:"Δεν ήταν δυνατή η όπλιση λόγω των ακόλουθων αισθητήρων",triggered_sensors:"Ο συναγερμός ενεργοποιήθηκε από τους ακόλουθους αισθητήρες",bypassed_sensors:"Υπάρχουν παρακαμφθέντες αισθητήρες"},pt={arm_options:ct,editor:ht,errors:ut},gt={heading:"Options for arming",skip_delay:"Skip exit delay",force:"Bypass open sensors"},_t={keep_keypad_visible:"Keep the keypad always visible, also when no code input is required.",button_scale_actions:"Scaling factor to apply for resizing the action buttons.",button_scale_keypad:"Scaling factor to apply for resizing the keypad buttons.",show_messages:"Display diagnostic messages when alarm is triggered or cannot be armed.",show_ready_indicator:"Show ready/not ready indicator on arm mode buttons.",show_bypassed_sensors:"Show warning message when alarm is armed with bypassed sensors.",use_code_dialog:"Display the keypad for entering the code as a popup dialog.",hide_keypad:"Hide the keypad buttons for entering the code.",hide_arm_options:"Hide arm options menu.",pending_sound:"Set a url to a soundclip that should be played when alarm is pending.",available_actions:"Available actions:",action_dialog:{title:"Customize display of action '{action}'",show_button:{title:"Button visibility",options:{always:"Always shown",never:"Never shown",disarmed:"Show only when disarmed",armed:"Hide only when disarmed"}},button_label:"Override displayed action label",button_icon:"Override displayed icon",state_label:"Override displayed state label",color:"Override color used for the action"}},mt={blocking_sensors:"Could not arm due to the following sensors",triggered_sensors:"Alarm was triggered by the following sensors",bypassed_sensors:"There are bypassed sensors"},ft={arm_options:gt,editor:_t,errors:mt},vt={heading:"Opciones de armado",skip_delay:"Omitir el retardo de salida",force:"Pasar por alto los sensores abiertos"},bt={keep_keypad_visible:"Mantener el teclado siempre visible, también cuando no se requiere ninguna entrada de código.",button_scale_actions:"Factor de escalado para cambiar el tamaño de los botones de acción.",button_scale_keypad:"Factor de escalado para cambiar el tamaño de los botones del teclado.",show_messages:"Mostrar mensajes de diagnóstico cuando se activa la alarma o no se puede activar.",show_ready_indicator:"Mostrar indicador listo/no listo en los botones de modo armado.",show_bypassed_sensors:"Mostrar advertencia cuando la alarma está activada con sensores omitidos.",use_code_dialog:"Muestra el teclado para ingresar el código como un cuadro de diálogo emergente.",hide_keypad:"Ocultar los botones del teclado para ingresar el código.",available_actions:"Acciones disponibles:",action_dialog:{title:"Personalizar la visualización de la acción '{action}'",show_button:{title:"Visibilidad del botón de acción",options:{always:"Mostrar siempre",never:"Ocultar siempre",disarmed:"Mostrar solo si desarmada",armed:"Ocultar solo si desarmada"}},button_label:"Sobrescribir el texto del botón",button_icon:"Icono de botón mostrado",state_label:"Sobrescribir el texto de estado",color:"Anular el color utilizado para la acción"}},yt={blocking_sensors:"No se pudo armar debido a los siguientes sensores",triggered_sensors:"La alarma fue disparada por los siguientes sensores",bypassed_sensors:"Hay sensores omitidos"},kt={arm_options:vt,editor:bt,errors:yt},wt={heading:"Options pour l'armement",skip_delay:"Ignorer le délai de sortie",force:"Bypasser les capteurs ouverts"},$t={keep_keypad_visible:"Gardez le clavier toujours visible, même lorsqu'aucune saisie de code n'est requise.",button_scale_actions:"Facteur d'échelle à appliquer pour le redimensionnement des boutons des actions.",button_scale_keypad:"Facteur d'échelle à appliquer pour le redimensionnement des boutons du clavier.",show_messages:"Afficher les messages de diagnostic lorsque l'alarme est déclenchée ou ne peut pas être armée.",show_ready_indicator:"Afficher l'indicateur prêt/pas prêt sur les boutons de mode d'armement.",show_bypassed_sensors:"Afficher un avertissement lorsque l'alarme est armée avec des capteurs ignorés.",use_code_dialog:"Affichez le clavier pour saisir le code sous forme de boîte de dialogue contextuelle.",hide_keypad:"Masquer les boutons du clavier pour saisir le code.",available_actions:"Actions disponibles:",action_dialog:{title:"Personnaliser l'affichage de l'action '{action}'",show_button:{title:"Visibilité du bouton d'action",options:{always:"Toujours affiché",never:"Jamais affiché",disarmed:"Afficher uniquement si désarmé",armed:"Afficher uniquement si armé"}},button_label:"Remplacer le libellé du bouton",button_icon:"Icône de bouton affichée",state_label:"Remplacer l'étiquette d'état",color:"Remplacer la couleur utilisée pour l'action"}},xt={blocking_sensors:"Impossible d'armer en raison du(es) capteur(s) suivant(s)",triggered_sensors:"L'alarme a été déclenchée par le(s) capteur(s) suivant(s)",bypassed_sensors:"Il y a des capteurs ignorés"},At={arm_options:wt,editor:$t,errors:xt},Ct={heading:"Opzioni di inserimento",skip_delay:"Ignorare il ritardo di uscita",force:"Ignorare i sensori aperti"},St={keep_keypad_visible:"Mantenere la tastiera sempre visibile, anche quando nessun codice è richiesto.",button_scale_actions:"Fattore di scala da applicare per ridimensionare i pulsanti di azione.",button_scale_keypad:"Fattore di scala da applicare per ridimensionare i pulsanti della tastiera.",show_messages:"Mostrare messaggi diagnostici quando l'allarme viene attivato o non può essere inserito.",show_ready_indicator:"Mostra l'indicatore pronto/non pronto sui pulsanti della modalità di inserimento.",show_bypassed_sensors:"Mostra avviso quando l'allarme è armato con sensori esclusi.",use_code_dialog:"Visualizza la tastiera per l'immissione del codice come finestra di dialogo popup.",hide_keypad:"Nascondi i pulsanti della tastiera per l'inserimento del codice.",available_actions:"Azioni disponibili:",action_dialog:{title:"Personalizzare la visualizzazione dell'azione '{action}'",show_button:{title:"Visibilità del pulsante di azione",options:{always:"Sempre visualizzato",never:"Mai visualizzato",disarmed:"Mostra solo quando disarmato",armed:"Mostra solo quando disarmato"}},button_label:"Sovrascrivere l'etichetta del pulsante",button_icon:"Icona del pulsante visualizzato",state_label:"Sovrascrivere l'etichetta di stato",color:"Sostituisci il colore utilizzato per l'azione"}},Ot={blocking_sensors:"Impossibile inserire l'allarme a causa dei seguenti sensori",triggered_sensors:"L'allarme è stato attivato dai seguenti sensori",bypassed_sensors:"Sono presenti sensori esclusi"},Et={arm_options:Ct,editor:St,errors:Ot},zt={heading:"Opties voor inschakelen",skip_delay:"Sla vertraging over",force:"Negeer open sensoren"},jt={keep_keypad_visible:"Houd het keypad altijd zichtbaar, ook wanneer er geen code vereist is.",button_scale_actions:"Schaalfactor actieknoppen",button_scale_keypad:"Schaalfactor keypadknoppen",show_messages:"Toon diagnostische berichten wanneer het alarm wordt geactiveerd of niet kan worden ingeschakeld.",show_ready_indicator:"Toon gereed/niet gereed-indicator op inschakelmodusknoppen.",show_bypassed_sensors:"Toon melding wanneer het alarm is ingeschakeld met omzeilde sensoren.",use_code_dialog:"Geef het toetsenbord voor het invoeren van de code weer als een pop-upvenster.",hide_keypad:"Verberg het toetsenbord voor het invoeren van de code.",available_actions:"Beschikbare acties:",action_dialog:{title:"Weergave van actie '{action}' aanpassen",show_button:{title:"Actieknop weergave",options:{always:"Altijd zichtbaar",never:"Nooit zichtbaar",disarmed:"Toon alleen bij uitgeschakeld",armed:"Zichtbaar tenzij uitgeschakeld"}},button_label:"Weergegeven naam voor actie",button_icon:"Weergegeven icoon voor actie",state_label:"Weergegeven status",color:"Weergegeven kleur voor action"}},Pt={blocking_sensors:"Kon niet inschakelen vanwege de volgende sensoren",triggered_sensors:"Alarm werd geactiveerd door de volgende sensoren",bypassed_sensors:"Er zijn omzeilde sensoren"},Tt={arm_options:zt,editor:jt,errors:Pt},Mt={heading:"Opções para armar",skip_delay:"Omitir tempo para sair",force:"Ignorar os sensores abertos"},Lt={keep_keypad_visible:"Mantenha o teclado sempre visível, mesmo quando não for necessária nenhuma entrada de código.",button_scale_actions:"Fator de escala para redimensionar botões de ação.",button_scale_keypad:"Fator de escala para redimensionar os botões do teclado.",show_messages:"Mostrar mensagens de diagnóstico quando o alarme estiver disparado ou não puder ser armado.",show_ready_indicator:"Mostrar indicador de disponível/não disponível nos botões do modo de armar.",show_bypassed_sensors:"Mostrar aviso quando o alarme for ativado com sensores ignorados.",use_code_dialog:"Exiba o teclado para inserir o código como uma caixa de diálogo pop-up.",hide_keypad:"Oculte os botões do teclado para inserir o código.",available_actions:"Ações disponíveis:",action_dialog:{title:"Personalize a exibição da ação '{action}'",show_button:{title:"Visibilidade do botão de ação",options:{always:"Sempre visível",never:"Sempre visível",disarmed:"Mostrar somente quando desarmado",armed:"Mostrar somente quando armado"}},button_label:"Substituir texto do botão",button_icon:"Ícone de botão exibido",state_label:"Substituir texto de status",color:"Substituir a cor usada para a ação"}},Ut={blocking_sensors:"Não foi possível armar devido aos seguintes sensores",triggered_sensors:"O alarme foi disparado pelos seguintes sensores",bypassed_sensors:"Existem sensores ignorados"},Nt={arm_options:Mt,editor:Lt,errors:Ut},Ht={heading:"Варианты постановки на охрану",skip_delay:"Задержка перед выходом",force:"Обход датчиков открытия"},Dt={keep_keypad_visible:"Клавиатура всегда видима, даже если ввод кода не требуется.",button_scale_actions:"Коэффициент масштабирования для изменения размера кнопок действий.",button_scale_keypad:"Коэффициент масштабирования для изменения размера кнопок клавиатуры.",show_messages:"Вывод диагностических сообщений, когда срабатывает сигнализация или ее невозможно включить.",show_ready_indicator:"Отображать индикатор готовности/неготовности на кнопках режима охраны.",show_bypassed_sensors:"Вывод предупреждающего сообщения, когда сигнализация включена с помощью обходных датчиков.",use_code_dialog:"Отобразить клавиатуру для ввода кода в виде всплывающего диалогового окна.",hide_keypad:"Скрыть кнопки клавиатуры для ввода кода.",available_actions:"Доступные действия:",action_dialog:{title:"Настройка отображения действия '{action}'",show_button:{title:"Видимость кнопки действия",options:{always:"Показывать всегда",never:"Показывать никогда",disarmed:"Показывать только при снятии с охраны",armed:"Показывать только при поддержании под охраной"}},button_label:"Измененение названия кнопки",button_icon:"Отображаемый значок кнопки",state_label:"Изменение названия состояния",color:"Переопределить цвет, используемый для действия"}},Rt={blocking_sensors:"Не удалось включить охрану из-за следующих датчиков",triggered_sensors:"Сигнал тревоги был вызван следующими датчиками",bypassed_sensors:"Есть обходные датчики"},It={arm_options:Ht,editor:Dt,errors:Rt},Bt={heading:"Alternativ vid aktivering",skip_delay:"Hoppa över lämna fördröjning",force:"Förbikoppla öppna sensorer"},Vt={keep_keypad_visible:"Håll knappsatsen alltid synlig, även när ingen kodinmatning krävs.",button_scale_actions:"Ändra storlek på åtgärdsknapparna.",button_scale_keypad:"Ändra storlek på knapparna på knappsatsen.",show_messages:"Visa diagnostiska meddelanden när larmet utlöses eller inte kan aktiveras.",show_ready_indicator:"Visa redo/ej redo-indikator på lägesknapparna.",show_bypassed_sensors:"Visa varningsmeddelande när larmet är aktiverat med förbikopplade sensorer.",use_code_dialog:"Visa knappsatsen för att ange koden som en popup-dialogruta.",hide_keypad:"Dölj knapparna på tangentbordet för att ange koden.",available_actions:"Tillgängliga åtgärder:",action_dialog:{title:"Anpassa visningen av åtgärden '{action}'",show_button:{title:"Synlighet för åtgärdsknapp",options:{always:"Visas alltid",never:"Visas aldrig",disarmed:"Visa endast vid avaktivering",armed:"Visa endast vid aktivering"}},button_label:"Anpassad knappetikett",button_icon:"Visad knappikon",state_label:"Anpassad tillståndsetikett",color:"Åsidosättningsfärg som används för åtgärden"}},Ft={blocking_sensors:"Kunde inte aktivera på grund av följande sensorer",triggered_sensors:"Larmet utlöstes av följande sensorer",bypassed_sensors:"Det finns förbikopplade sensorer"},qt={arm_options:Bt,editor:Vt,errors:Ft},Zt={heading:"警戒选项",skip_delay:"跳过离开延迟",force:"绕过开放的传感器"},Wt={keep_keypad_visible:"保持小键盘总是可见，即使不需要输入密码",button_scale_actions:"调整动作按键大小的缩放系数",button_scale_keypad:"调整小键盘按键大小的缩放系数",show_messages:"当警报被触发或无法警戒时，显示诊断信息。",show_ready_indicator:"在手臂模式按钮上显示就绪/未就绪指示器。",show_bypassed_sensors:"当警报配备旁路传感器时显示警告消息。",use_code_dialog:"以弹出对话框的形式显示用于输入代码的键盘。",hide_keypad:"隐藏用于输入代码的键盘按钮。",available_actions:"可用动作：",action_dialog:{title:"自定义动作'{action}'的显示",show_button:{title:"操作按钮可见性",options:{always:"始终显示",never:"从不显示",disarmed:"仅在解除武装时显示",armed:"仅在武装时显示"}},button_label:"覆盖按钮标签",button_icon:"显示的按钮图标",state_label:"覆盖状态标签",color:"覆盖操作使用的颜色"}},Gt={blocking_sensors:"由于以下传感器而无法警戒",triggered_sensors:"警报是由以下传感器触发的",bypassed_sensors:"有绕过的传感器"},Kt={arm_options:Zt,editor:Wt,errors:Gt},Jt={cs:Object.freeze({__proto__:null,arm_options:it,default:nt,editor:at,errors:ot}),de:Object.freeze({__proto__:null,arm_options:st,default:dt,editor:rt,errors:lt}),el:Object.freeze({__proto__:null,arm_options:ct,default:pt,editor:ht,errors:ut}),en:Object.freeze({__proto__:null,arm_options:gt,default:ft,editor:_t,errors:mt}),es:Object.freeze({__proto__:null,arm_options:vt,default:kt,editor:bt,errors:yt}),fr:Object.freeze({__proto__:null,arm_options:wt,default:At,editor:$t,errors:xt}),it:Object.freeze({__proto__:null,arm_options:Ct,default:Et,editor:St,errors:Ot}),nl:Object.freeze({__proto__:null,arm_options:zt,default:Tt,editor:jt,errors:Pt}),"pt-BR":Object.freeze({__proto__:null,arm_options:Mt,default:Nt,editor:Lt,errors:Ut}),ru:Object.freeze({__proto__:null,arm_options:Ht,default:It,editor:Dt,errors:Rt}),sv:Object.freeze({__proto__:null,arm_options:Bt,default:qt,editor:Vt,errors:Ft}),"zh-Hans":Object.freeze({__proto__:null,arm_options:Zt,default:Kt,editor:Wt,errors:Gt})};function Yt(e,t,i="",a=""){const o=t.replace(/['"]+/g,"");var n;try{n=e.split(".").reduce(((e,t)=>e[t]),Jt[o])}catch(t){n=e.split(".").reduce(((e,t)=>e[t]),Jt.en)}if(void 0===n&&(n=e.split(".").reduce(((e,t)=>e[t]),Jt.en)),""!==i&&""!==a){Array.isArray(i)||(i=[i]),Array.isArray(a)||(a=[a]);for(let e=0;e<i.length;e++)n=n.replace(i[e],a[e])}return n}function Qt(e){return null!=e}function Xt(e){switch(typeof e){case"object":return 0==Object.keys(e).length;case"string":return 0==String(e).length;default:return!Qt(e)}}function ei(e){return e.substring(0,e.indexOf("."))}const ti=(e,t)=>{let i={hide:!1};return(t.states||{}).hasOwnProperty(e)&&(i=Object.assign(Object.assign({},i),t.states[e])),i},ii=e=>{if(!e)return[];const t=e.attributes.supported_features||0;let i=[];return 2&t&&i.push(qe.ArmAway),1&t&&i.push(qe.ArmHome),4&t&&i.push(qe.ArmNight),32&t&&i.push(qe.ArmVacation),16&t&&i.push(qe.ArmCustomBypass),i},ai=(e,t,i)=>{const a=ei(e.entity_id),o=e.attributes.device_class,n=e.state;if(Object.values(Ve).includes(n)&&i){const e=ti(n,i);if(!Xt(e.state_label))return e.state_label}let s="";return o&&(s=t(`component.${a}.entity_component.${o}.state.${e.state}`)),s||(s=t(`component.${a}.entity_component._.state.${e.state}`)),s},oi=e=>null!==e.attributes.code_format,ni=(e,t,i=!1)=>{if(!e||!e.state)return"var(--state-unavailable-color)";let a=e.state;if(i){const i=Object.values(qe).map((e=>We[e]));if(!i.includes(a)){const t=e.attributes.arm_mode;t&&(a=t)}const o=[qe.Disarm,...ii(e)].filter((e=>!ti(We[e],t).hide));1==o.length&&(a=We[o[0]])}if(Object.keys(t.states||{}).includes(a)&&Qt((t.states[a]||{}).color)){const e=t.states[a].color;return Object.values(et).includes(e)?`var(--${e}-color)`:e}return a==Ve.Disarmed?"var(--state-alarm_control_panel-disarmed-color, var(--state-alarm_control_panel-inactive-color, var(--state-inactive-color)))":Object.values(Ve).includes(a)?`var(--state-alarm_control_panel-${a}-color, var(--state-alarm_control_panel-active-color, var(--state-active-color)))`:"var(--disabled-color, var(--state-inactive-color))"},si=e=>e.callWS({type:"alarmo/entities"}),ri=e=>e.callWS({type:"alarmo/config"}),li=(e,t,i,a)=>{a=a||{},i=null==i?{}:i;const o=new Event(t,{bubbles:void 0===a.bubbles||a.bubbles,cancelable:Boolean(a.cancelable),composed:void 0===a.composed||a.composed});return o.detail=i,e.dispatchEvent(o),o};let di=class extends Le{constructor(){super(...arguments),this._entities=null,this._editAction=null}async firstUpdated(){si(this.hass).then((e=>{this._entities=e.map((e=>e.entity_id))})).catch((e=>{var t;null===(t=this.hass)||void 0===t||t.callService("system_log","write",{message:`Failed to fetch entities: ${e}`,level:"error"})})),this._alarmoConfig=await ri(this.hass)}setConfig(e){!(null==e?void 0:e.button_scale_actions)&&(null==e?void 0:e.button_scale)&&(e=Object.assign(Object.assign({},e),{button_scale_actions:null==e?void 0:e.button_scale})),!(null==e?void 0:e.button_scale_keypad)&&(null==e?void 0:e.button_scale)&&(e=Object.assign(Object.assign({},e),{button_scale_keypad:null==e?void 0:e.button_scale})),this._config=Object.assign(Object.assign({},Ye),e)}render(){var e,t,i,a,o,n;if(!this._config||!this.hass||!this._entities)return fe``;if(!this._entities.length)return fe`
        <hui-warning>
          Could not establish a connection with the alarmo integration. Please check if it is installed and running.
        </hui-warning>
      `;const s=this._config.entity?this.hass.states[this._config.entity]:void 0,r=(null===(e=this._alarmoConfig)||void 0===e?void 0:e.code_format)===Be&&(this._alarmoConfig.code_arm_required||this._alarmoConfig.code_disarm_required);if(null!==this._editAction){const e=ti(We[this._editAction],this._config);return fe`
        <div class="header">
          <div class="back-title">
            <ha-icon-button
              .label=${this.hass.localize("ui.common.back")}
              .path=${"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"}
              @click=${this._goBack}
            ></ha-icon-button>
            <span slot="title"
              >${Yt("editor.action_dialog.title",this.hass.language,"{action}",this.hass.localize(`ui.card.alarm_control_panel.${this._editAction}`))}</span
            >
          </div>
        </div>

        <div>
          <span>${Yt("editor.action_dialog.show_button.title",this.hass.language)}</span>
          <div style="display: flex; flex-direction: row">
            <ha-formfield label="${Yt("editor.action_dialog.show_button.options.always",this.hass.language)}">
              <ha-radio
                name="show_button"
                value="never"
                @change=${()=>this._updateStateConfig(We[this._editAction],{hide:void 0})}
                ?checked=${!Qt(e.hide)||[!1,"never"].includes(e.hide)}
              >
              </ha-radio>
            </ha-formfield>

            <ha-formfield label="${Yt("editor.action_dialog.show_button.options.never",this.hass.language)}">
              <ha-radio
                name="show_button"
                value="always"
                @change=${()=>this._updateStateConfig(We[this._editAction],{hide:"always"})}
                ?checked=${[!0,"always"].includes(e.hide||!1)}
              >
              </ha-radio>
            </ha-formfield>

            ${this._editAction==qe.Disarm?fe`
            <ha-formfield label="${Yt("editor.action_dialog.show_button.options.armed",this.hass.language)}">
              <ha-radio
                name="show_button"
                value="disarmed"
                @change=${()=>this._updateStateConfig(We[this._editAction],{hide:"disarmed"})}
                ?checked=${"disarmed"==e.hide}
              >
              </ha-radio>
            </ha-formfield>`:fe`
            <ha-formfield label="${Yt("editor.action_dialog.show_button.options.disarmed",this.hass.language)}">
              <ha-radio
                name="show_button"
                value="armed"
                @change=${()=>this._updateStateConfig(We[this._editAction],{hide:"armed"})}
                ?checked=${"armed"==e.hide}
              >
              </ha-radio>
            </ha-formfield>
              `}
          </div>
        </div>

        <div class="grid">
          <ha-textfield
            label="${Yt("editor.action_dialog.button_label",this.hass.language)}"
            .value="${e.button_label||""}"
            placeholder="${this.hass.localize(`ui.card.alarm_control_panel.${this._editAction}`)}"
            ?disabled=${e.hide}
            @input=${e=>this._updateStateConfig(We[this._editAction],{button_label:String(e.target.value).trim()})}
          ></ha-textfield>

          <ha-icon-picker
            .hass=${this.hass}
            label="${Yt("editor.action_dialog.button_icon",this.hass.language)}"
            .value="${e.button_icon||Ze[this._editAction]}"
            ?disabled=${e.hide}
            @value-changed=${e=>this._updateStateConfig(We[this._editAction],{button_icon:e.detail.value})}
            >
          </ha-icon-picker>

          <ha-textfield
            label="${Yt("editor.action_dialog.state_label",this.hass.language)}"
            .value="${e.state_label||""}"
            placeholder="${this.hass.localize(`component.alarm_control_panel.entity_component._.state.${We[this._editAction]}`)}"
            @input=${e=>this._updateStateConfig(We[this._editAction],{state_label:String(e.target.value).trim()})}
          ></ha-textfield>

          <ha-select
            .icon=${Qt(e.color)}
            label="${Yt("editor.action_dialog.color",this.hass.language)}"
            .value=${e.color}
            @closed=${e=>{e.stopPropagation()}}
            @selected=${e=>{e.stopPropagation();const t=e.target.value;this._updateStateConfig(We[this._editAction],{color:t||void 0})}}
            fixedMenuPosition
            naturalMenuWidth
            clearable
          >
          ${e.color?fe`
              <span slot="icon">
                <span class="circle-color" style="--circle-color: ${Object.values(et).includes(e.color)?`var(--${e.color}-color)`:e.color}">
                </span>
              </span>
            `:be}
            ${Qt(e.color)&&e.color.length&&!Object.values(et).includes(e.color)?fe`
                <ha-list-item .value=${e.color} graphic="icon">
                  ${e.color}
                  <span slot="graphic">
                    <span class="circle-color" style="--circle-color: ${e.color}">
                    </span>
                  </span>
                </ha-list-item>
            `:be}
            ${Object.values(et).map((e=>fe`
                <ha-list-item .value=${e} graphic="icon">
                  ${this.hass.localize(`ui.components.color-picker.colors.${e}`)||e}
                  <span slot="graphic">
                    <span class="circle-color" style="--circle-color: ${`var(--${e}-color)`}">
                    </span>
                  </span>
                </ha-list-item>
              `))}
          </ha-select>
        </div>
      `}return fe`
      <div class="card-config">
        <div class="grid">
          <ha-entity-picker
            .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.required")})"
            .hass=${this.hass}
            .value="${this._config.entity||""}"
            .includeDomains=${["alarm_control_panel"]}
            .entityFilter=${e=>this._entities.includes(e.entity_id)}
            @change=${e=>this._updateConfig("entity",e.target.value)}
            allow-custom-entity
          ></ha-entity-picker>

          <ha-textfield
            .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.name")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
            .value="${this._config.name||""}"
            @input=${e=>this._updateConfig("name",String(e.target.value).trim())}
          ></ha-textfield>
        </div>

        ${s?fe`
              <div class="config-item">
                <span>${Yt("editor.available_actions",this.hass.language)}</span>
              </div>
              <div class="config-row">
                ${this._renderActionOptions()}
              </div>
            `:""}

        <div class="grid">
          <ha-formfield .label=${Yt("editor.button_scale_actions",this.hass.language)}>
            <ha-slider
              .value=${this._config.button_scale_actions||1}
              @change=${e=>this._updateConfig("button_scale_actions",Number(e.target.value))}
              min="${1}"
              max="${Qe}"
              step="0.1"
              labeled
            ></ha-slider>
          </ha-formfield>

          <ha-formfield .label=${Yt("editor.button_scale_keypad",this.hass.language)}>
            <ha-slider
              .value=${this._config.button_scale_keypad||1}
              @change=${e=>this._updateConfig("button_scale_keypad",Number(e.target.value))}
              min="${1}"
              max="${Qe}"
              step="0.1"
              labeled
              ?disabled=${!s||!r||(null===(t=this._config)||void 0===t?void 0:t.use_code_dialog)}
            ></ha-slider>
          </ha-formfield>

          <ha-formfield .label=${Yt("editor.hide_keypad",this.hass.language)}>
            <ha-switch
              .checked=${this._config.hide_keypad}
              @change=${e=>this._updateConfig("hide_keypad",e.target.checked)}
              ?disabled=${!s||!r}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${Yt("editor.keep_keypad_visible",this.hass.language)}>
            <ha-switch
              .checked=${this._config.keep_keypad_visible}
              @change=${e=>this._updateConfig("keep_keypad_visible",e.target.checked)}
              ?disabled=${!s||!r||(null===(i=this._alarmoConfig)||void 0===i?void 0:i.code_arm_required)==(null===(a=this._alarmoConfig)||void 0===a?void 0:a.code_disarm_required)||(null===(o=this._config)||void 0===o?void 0:o.use_code_dialog)||(null===(n=this._config)||void 0===n?void 0:n.hide_keypad)}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${Yt("editor.use_code_dialog",this.hass.language)}>
            <ha-switch
              .checked=${this._config.use_code_dialog}
              @change=${e=>this._updateConfig("use_code_dialog",e.target.checked)}
              ?disabled=${!s||!r||this._config.hide_keypad}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${Yt("editor.show_messages",this.hass.language)}>
            <ha-switch
              .checked=${this._config.show_messages||!Qt(this._config.show_messages)}
              @change=${e=>this._updateConfig("show_messages",e.target.checked)}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${Yt("editor.show_ready_indicator",this.hass.language)}>
            <ha-switch
              .checked=${this._config.show_ready_indicator}
              @change=${e=>this._updateConfig("show_ready_indicator",e.target.checked)}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${Yt("editor.show_bypassed_sensors",this.hass.language)}>
            <ha-switch
              .checked=${this._config.show_bypassed_sensors}
              @change=${e=>this._updateConfig("show_bypassed_sensors",e.target.checked)}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${Yt("editor.hide_arm_options",this.hass.language)}>
            <ha-switch
              .checked=${this._config.hide_arm_options}
              @change=${e=>this._updateConfig("hide_arm_options",e.target.checked)}
            ></ha-switch
          ></ha-formfield>

          <ha-textfield
            .label="${Yt("editor.pending_sound",this.hass.language)} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
            .value="${this._config.pending_sound||""}"
            @input=${e=>this._updateConfig("pending_sound",String(e.target.value).trim())}
          ></ha-textfield>

          <ha-formfield></ha-formfield>
        </div>
      </div>
    `}_renderActionOptions(){if(!this._config||!this.hass||!this._config.entity)return be;const e=this.hass.states[this._config.entity],t=ii(e);let i=[qe.Disarm,...t].map((e=>({id:e,label:this.hass.localize(`ui.card.alarm_control_panel.${e}`),hidden:["always",!0].includes(ti(We[e],this._config).hide||!1),order:ti(We[e],this._config).button_order})));return i.sort(((e,t)=>e.hidden&&!t.hidden?1:t.hidden&&!e.hidden?-1:Qt(e.order)||Qt(t.order)?Qt(e.order)&&!Qt(t.order)?-1:!Qt(e.order)&&Qt(t.order)?1:e.order-t.order:0)),fe`
      <ha-sortable
        handle-selector=".handle"
        draggable-selector=".draggable"
        @item-moved=${e=>this._handleActionsMoved(e,i.map((e=>We[e.id])))}
      >
        <div class="sortable-list">
        ${i.map(((e,t)=>fe`
          <div class="sortable-item ${e.hidden?"":"draggable"}"">
            <ha-svg-icon
              class="handle"
              style="cursor: grab"
              .path=${"M21 11H3V9H21V11M21 13H3V15H21V13Z"}
            ></ha-svg-icon>

            <ha-icon-button
              .path=${e.hidden?"M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z":"M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"}
              style="${e.hidden?"":"color: var(--primary-color)"}"
              ?disabled=${!e.hidden&&i.filter((e=>!e.hidden)).length<=2||e.id==qe.Disarm}
              @click=${a=>{if(this._updateStateConfig(We[e.id],e.hidden?{hide:void 0}:{hide:"always"}),e.hidden){let e=new CustomEvent("",{detail:{oldIdx:t,nexIdx:i.filter((e=>!e.hidden)).length}});this._handleActionsMoved(e,i.map((e=>We[e.id])))}a.target.blur()}}
            >
            </ha-icon-button>
            <span>${e.label}</span>
            <ha-icon-button
              .path=${"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"}
              style="color: var(--secondary-text-color); --mdc-icon-button-size: 42px"
              ?disabled=${e.hidden}
              @click=${()=>this._editActionClick(e.id)}
            >
            </ha-icon-button>
          </div>
        `))}
        </div>
      </ha-sortable>
    `}_handleActionsMoved(e,t){const i=e.detail.oldIndex,a=e.detail.newIndex;let o=t[i];t=t.filter(((e,t)=>t!=i)),t.splice(a,0,o);let n=Object.assign({},this._config.states);t.forEach(((e,t)=>{n=Object.assign(Object.assign({},n),{[e]:Object.assign(Object.assign({},n[e]||{}),{button_order:t+1})})})),this._updateConfig("states",n)}_updateConfig(e,t){if(this.hass){if(this._config=Object.assign(Object.assign({},this._config),{[e]:t}),"entity"==e){const e=this._config.entity?this.hass.states[this._config.entity]:void 0;e&&e.attributes.code_arm_required!=e.attributes.code_disarm_required||(this._config=Object.assign(Object.assign({},this._config),{keep_keypad_visible:!1}))}li(this,"config-changed",{config:this._config})}}_updateStateConfig(e,t){var i;const a=e=>function(e,t){return e?Object.entries(e).filter((([e])=>t.includes(e))).reduce(((e,[t,i])=>Object.assign(e,{[t]:i})),{}):{}}(e,Object.keys(e).filter((t=>Qt(e[t]||"string"==typeof e[t]))));let o=(null===(i=this._config)||void 0===i?void 0:i.states)||{};const n=a(Object.assign(Object.assign({},o[e]),t));o=a(Object.assign(Object.assign({},o),{[e]:n})),this._updateConfig("states",o)}_editActionClick(e){this._editAction=e}_goBack(){this._editAction=null}static get styles(){return M`
      div.config-row {
        font-size: 16px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 12px;
      }
      div.config-item {
        padding-top: 20px;
      }
      div.config-row > * {
        display: flex;
        align-items: center;
      }
      ha-textfield {
        width: 100%;
      }
      div.grid {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 20px 8px;
      }
      div.grid > * {
        display: flex;
        flex-direction: column;
        flex: 1 0 300px;
      }
      div.sortable-list {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 0px 8px;
      }
      div.sortable-item {
        display: flex;
        font-size: 0.875rem;
        align-items: center;
      }
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .back-title {
        display: flex;
        align-items: center;
        font-size: 18px;
      }
      .circle-color {
        display: block;
        background-color: var(--circle-color, var(--divider-color));
        border: 1px solid var(--outline-color);
        border-radius: var(--ha-border-radius-pill);
        width: 20px;
        height: 20px;
        box-sizing: border-box;
      }
    `}};t([Re({attribute:!1})],di.prototype,"hass",void 0),t([Ie()],di.prototype,"_config",void 0),t([Ie()],di.prototype,"_alarmoConfig",void 0),t([Ie()],di.prototype,"_entities",void 0),t([Ie()],di.prototype,"_editAction",void 0),di=t([Ne("alarmo-card-editor")],di);var ci,hi,ui=Object.freeze({__proto__:null,get AlarmoCardEditor(){return di}});class pi extends Le{constructor(){super(...arguments),this.duration=0,this.datetime=null,this.timer=0,this._touchStarted=!1,this._hover=!1}shouldUpdate(e){if(!e.size)return!0;const t=e.get("hass");if(!t||t.themes!==this.hass.themes||t.language!==this.hass.language)return!0;if(t.states[this.entity].state!==this.hass.states[this.entity].state||t.states[this.entity].attributes.delay!==this.hass.states[this.entity].attributes.delay){const e=t.states[this.entity].state,i=this.hass.states[this.entity].state;return Je.includes(i)?this.startTimer():Je.includes(e)&&this.stopTimer(),!0}return!1}firstUpdated(){const e=this.hass.states[this.entity].state;Je.includes(e)&&this.startTimer(),this.addEventListener("click",this.handleClick),this.addEventListener("touchstart",(()=>{this._touchStarted=!0})),this.addEventListener("touchend",(()=>{setTimeout((()=>{this._touchStarted=!1}),10)})),this.addEventListener("mouseenter",(()=>{this._touchStarted||(this._hover=!0)})),this.addEventListener("mouseleave",(()=>{this._hover=!1}))}async startTimer(){var e,t;clearInterval(this.timer),(e=this.hass,t=this.entity,e.callWS({type:"alarmo/countdown",entity_id:t})).then((e=>{this.duration=e.delay,this.datetime=new Date((new Date).getTime()+1e3*e.remaining)})).catch((e=>{})),this.timer=window.setInterval((()=>{this.requestUpdate()}),1e3)}stopTimer(){clearInterval(this.timer),this.datetime=null,this.duration=0}getRemaining(){if(!this.datetime)return 0;const e=(this.datetime.getTime()-(new Date).getTime())/1e3;return e<0?(clearInterval(this.timer),0):e}getFraction(){return this.duration?(Math.round(this.getRemaining())-1)/this.duration:1}_stateValue(e){return this._hover&&Je.includes(e)&&this.timer?fe` <ha-icon icon="mdi:skip-forward"></ha-icon> `:this.datetime&&this.duration?fe` ${Math.max(Math.round(this.getRemaining()),0)} `:fe` <ha-icon .icon=${Fe[e]}></ha-icon> `}handleClick(){const e=this.hass.states[this.entity].state;Je.includes(e)&&this.timer?this.hass.callService("alarmo","skip_delay",{entity_id:this.entity}):li(this,"hass-more-info",{entityId:this.entity})}render(){let e=45,t=2*Math.PI*e;const i=this.hass.states[this.entity],a=this.datetime&&this.duration;return fe`
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g class="track ${i.state.split("_").shift()} ${a?"timer":""}">
          <circle cx="${50}" cy="${50}" r="${e}"></circle>
          <path
            stroke-dasharray="${(this.getFraction()*t).toFixed(2)} ${t.toFixed(2)}"
            class="remaining"
            d="
              M ${50}, ${50}
              m -${e}, 0
              a ${e},${e} 0 1,0 90,0
              a ${e},${e} 0 1,0 -90,0
            "
          ></path>
        </g>
      </svg>
      <div class="overlay ${i.state.split("_").shift()} ${a?"timer":""}">
        <div class="value">${this._stateValue(i.state)}</div>
      </div>
    `}static get styles(){return M`
      :host {
        width: 60px;
        height: 60px;
        cursor: pointer;
      }
      svg {
        width: 100%;
        height: 100%;
        display: block;
        transform: rotateZ(90deg) scale(1, -1);
      }
      .track {
        stroke-width: 4px;
        stroke-linecap: round;
        stroke: var(--disabled-text-color);
        fill: none;
      }
      .track .remaining {
        transition: 0.3s linear stroke;
        stroke: var(--alarm-state-color);
      }
      .track.arming .remaining,
      .track.pending .remaining {
        transition: 1s linear stroke-dasharray;
      }
      .overlay {
        position: absolute;
        margin-top: -60px;
        margin-left: 0;
        width: 60px;
        height: 60px;
        font-size: 1.5em;
        white-space: nowrap;
      }
      .value {
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;
        color: var(--alarm-state-color);
        transition: 0.3s linear color;
        display: flex;
        flex: 1;
        height: 100%;
        align-items: center;
        justify-content: center;
        font-weight: 500;
      }
      .value ha-icon {
        --mdc-icon-size: 1.2em;
      }
      .disarmed,
      .armed {
        animation: none;
      }
      .triggered,
      .arming,
      .pending {
        animation: pulse 1s infinite;
      }
      .arming.timer,
      .pending.timer {
        animation: none;
      }
      @keyframes pulse {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    `}}t([Re()],pi.prototype,"hass",void 0),t([Re()],pi.prototype,"entity",void 0),t([Ie()],pi.prototype,"_hover",void 0),customElements.define("alarmo-state-badge",pi),function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(ci||(ci={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(hi||(hi={}));class gi extends Le{shouldUpdate(e){const t=e.get("hass");return!t||!(!this.entity||t.states[this.entity]===this.hass.states[this.entity])}render(){if(!this.hass||!this.entity)return fe``;const e=this.entity in this.hass.states;let t=Object.assign({},this.hass.states[this.entity]);void 0!==this.state&&(t=Object.assign(Object.assign({},t),{state:this.state}));const i=e?ai(t,this.hass.localize):this.hass.localize("state.default.unavailable",this.hass.locale||{language:this.hass.language,number_format:ci.language}),a=e?t.attributes.friendly_name||(o=t.entity_id).substring(o.indexOf(".")+1):this.entity;var o;let n=!!this.state||"on"==t.state;return fe`
      <div class="badge-container" @click=${()=>li(this,"hass-more-info",{entityId:this.entity})}>
        <div class="label-badge ${n?"active":""}" id="badge">
          <div class="value">
            <ha-state-icon
              .hass=${this.hass}
              .stateObj=${t}
            ></ha-state-icon>
            <div class="label">
              <span>${i}</span>
            </div>
          </div>
        </div>
        <div class="title">${a}</div>
      </div>
    `}static get styles(){return M`
      .badge-container {
        display: inline-block;
        text-align: center;
        vertical-align: top;
        padding: var(--ha-label-badge-padding, 0 0 0 0);
        cursor: pointer;
      }
      .label-badge {
        position: relative;
        display: block;
        margin: 0 auto;
        width: var(--ha-label-badge-size, 2.5em);
        text-align: center;
        height: var(--ha-label-badge-size, 2.5em);
        line-height: var(--ha-label-badge-size, 2.5em);
        font-size: var(--ha-label-badge-font-size, 1.5em);
        border-radius: 50%;
        border: 0.1em solid var(--primary-color);
        color: var(--label-badge-text-color, rgb(76, 76, 76));
        white-space: nowrap;
        background-color: none;
        background-size: cover;
        transition: border 0.3s ease-in-out;
      }
      .label-badge.active {
        border: 0.1em solid var(--label-badge-red);
      }
      .label-badge .value {
        font-size: 90%;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .label-badge .label {
        position: absolute;
        bottom: -1em;
        left: -0.2em;
        right: -0.2em;
        line-height: 1em;
        font-size: 0.5em;
      }
      .label-badge .label span {
        box-sizing: border-box;
        max-width: 100%;
        display: inline-block;
        background-color: var(--primary-color);
        color: var(--ha-label-badge-label-color, white);
        border-radius: 1em;
        padding: 9% 16% 8% 16%;
        font-weight: 500;
        overflow: hidden;
        text-transform: uppercase;
        text-overflow: ellipsis;
        transition: background-color 0.3s ease-in-out;
        text-transform: var(--ha-label-badge-label-text-transform, uppercase);
      }
      .label-badge.active .label span {
        background-color: var(--label-badge-red);
      }
      .badge-container .title {
        margin-top: 1em;
        font-size: var(--ha-label-badge-title-font-size, 0.9em);
        width: var(--ha-label-badge-title-width, 5em);
        font-weight: var(--ha-label-badge-title-font-weight, 400);
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: normal;
      }
    `}}t([Re()],gi.prototype,"hass",void 0),t([Re()],gi.prototype,"entity",void 0),t([Re()],gi.prototype,"state",void 0),customElements.define("alarmo-sensor-badge",gi);class _i extends Le{constructor(){super(...arguments),this.disabled=!1,this.scaled=!1}render(){return fe`
      <button ?disabled=${this.disabled}>
        <slot></slot>
      </button>
    `}handleFocus(e){e.target.blur()}static get styles(){return M`
      button {
        position: relative;
        width: 100%;
        height: 100%;
        border: 1px solid var(--alarmo-button-border-color, var(--outline-color));
        border-radius: var(--alarmo-button-border-radius, 8px);
        background: transparent;
        color: var(--alarmo-button-color, var(--primary-color));
        padding: calc(var(--content-scale, 1) * 0.875rem);
        font-size: calc(var(--content-scale, 1) * var(--alarmo-button-font-size));
        letter-spacing: 0.04em;
        font-weight: 500;
        -webkit-font-smoothing: antialiased;
        font-family: Roboto, sans-serif;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        z-index: 1;
        transition: border-color 0.1s ease-in-out;
      }
      button:before {
        position: absolute;
        pointer-events: none;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        content: '';
        border-radius: var(--alarmo-button-border-radius, 8px);
        background: var(--alarmo-button-background-color, var(--card-background-color));
        opacity: var(--alarmo-button-background-opacity, 0);
        z-index: -2;
        transition: opacity 0.1s ease-in-out;
      }
      button:not(:disabled):hover:before {
        background: var(--alarmo-button-background-color, var(--primary-color));
        opacity: calc(var(--alarmo-button-background-opacity, 0) + 0.12);
      }
      button:not(:disabled) {
        cursor: pointer;
      }
      button:disabled {
        color: var(--disabled-text-color);
      }
      button:not(:disabled):active:before {
        opacity: calc(var(--alarmo-button-background-opacity, 0) + 0.24);
      }
      button:not(:disabled):active {
        border: 1px solid var(--alarmo-button-border-color, var(--outline-hover-color));
      }
      button:focus {
        outline: none;
      }
      ::slotted(ha-icon) {
        --mdc-icon-size: calc(var(--content-scale, 1) * 1.5rem);
        margin: calc(var(--content-scale, 1) * -0.25rem) 0px;
        display: flex;
      }
      ::slotted(ha-icon.leading) {
        margin-left: calc(var(--content-scale, 1) * -0.3rem);
        margin-right: calc(var(--content-scale, 1) * 0.3rem);
      }
      ::slotted span {
        display: flex;
      }
    `}}t([Re({type:Boolean})],_i.prototype,"disabled",void 0),t([Re({type:Boolean})],_i.prototype,"scaled",void 0),customElements.define("alarmo-button",_i);const mi=e=>{class i extends e{connectedCallback(){super.connectedCallback(),this.__checkSubscribed()}disconnectedCallback(){if(super.disconnectedCallback(),this.__unsubs){for(;this.__unsubs.length;){const e=this.__unsubs.pop();e instanceof Promise?e.then((e=>e())):e()}this.__unsubs=void 0}}updated(e){super.updated(e),e.has("hass")&&this.__checkSubscribed()}hassSubscribe(){return[]}__checkSubscribed(){void 0===this.__unsubs&&this.isConnected&&void 0!==this.hass&&(this.__unsubs=this.hassSubscribe())}}return t([Re({attribute:!1})],i.prototype,"hass",void 0),i},fi=["1","2","3","4","5","6","7","8","9","0","clear","submit"];let vi=class extends(mi(Le)){constructor(){super(...arguments),this._input="",this._showClearButton=!1,this._narrow=!1,this._codeClearTimer=0,this.createCloseHeading=(e,t)=>{var i;return fe`
  <div class="header_title">
    <ha-icon-button
      .label=${null!==(i=null==e?void 0:e.localize("ui.common.close"))&&void 0!==i?i:"Close"}
      .path=${tt}
      dialogAction="close"
      class="header_button"
    ></ha-icon-button>
    <span>${t}</span>
  </div>
`}}hassSubscribe(){return[this.hass.connection.subscribeMessage((e=>this._fetchData(e)),{type:Ke})]}async _fetchData(e){var t;if(e.data.area_id===(null===(t=this._params)||void 0===t?void 0:t.area_id))switch(e.data.event){case Ge.Disarm:case Ge.Arm:case Ge.Trigger:this._confirm(e.data.event);break;case Ge.InvalidCodeProvided:case Ge.NoCodeProvided:this._showCodeError();break;case Ge.FailedToArm:case Ge.CommandNotAllowed:this._confirm(e.data.event);case Ge.TriggerTimeExpired:case Ge.ReadyToArmModesChanged:}}shouldUpdate(e){const t=e.get("hass");return!(!e.has("_params")&&this._params)||(!!e.has("_input")||(!t||t.states[this._params.entity_id]!==this.hass.states[this._params.entity_id]&&(t.states[this._params.entity_id],this.hass.states[this._params.entity_id],!0)))}firstUpdated(e){super.firstUpdated(e),this.addEventListener("keypress",(e=>{"Enter"===e.key&&this._input.length&&this._submit()}))}async showDialog(e){this._params=e,this._input="",this._narrow=matchMedia("all and (max-width: 450px), all and (max-height: 500px)").matches,await this.updateComplete}closeDialog(){return this._params=void 0,this._showClearButton=!1,!0}_showCodeError(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#code");t&&(t.classList.remove("error"),t.classList.add("error"),t.invalid=!0)}_clearCodeError(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#code");t&&t.classList.contains("error")&&(t.classList.remove("error"),t.invalid=!1,this._input="",this._cancelCodeClearTimer())}_clearCode(){this._input="",this._clearCodeError(),this._cancelCodeClearTimer()}_setCodeClearTimer(){this._cancelCodeClearTimer(),this._input.length&&(this._codeClearTimer=window.setTimeout((()=>{this._clearCode()}),12e4))}_cancelCodeClearTimer(){this._codeClearTimer&&clearTimeout(this._codeClearTimer)}_submit(){var e;const t=null!==(e=this._input)&&void 0!==e?e:"";this._clearCodeError(),this._params.action==qe.Disarm?this.hass.callService("alarmo","disarm",{entity_id:this._params.entity_id,code:t}):this.hass.callService("alarmo","arm",Object.assign(Object.assign({},this._params.armOptions),{entity_id:this._params.entity_id,mode:We[this._params.action],code:t}))}_confirm(e){var t,i;null===(i=null===(t=this._params)||void 0===t?void 0:t.confirm)||void 0===i||i.call(t,e),this.closeDialog()}_cancel(){var e,t;null===(t=null===(e=this._params)||void 0===e?void 0:e.cancel)||void 0===t||t.call(e),this.closeDialog()}_numberClick(e){const t=e.currentTarget.value;this._clearCodeError(),this._setCodeClearTimer(),this._input=this._input+t,this._showClearButton=!0}_clear(){this._input="",this._showClearButton=!1}render(){if(!this._params||!this.hass)return be;return"text"===this._params.code_format?fe`
        <ha-dialog
          open
          @closed=${this._cancel}
          .heading=${this.hass.localize("ui.dialogs.enter_code.title")}
        >
          <ha-textfield
            class="input"
            ?dialogInitialFocus=${!this._narrow}
            .value=${this._input}
            id="code"
            .label=${this.hass.localize("ui.dialogs.enter_code.input_label")}
            type="password"
            inputMode="text"
            @input=${e=>{this._clearCodeError(),this._input=e.target.value,this._setCodeClearTimer()}}
            @focus=${this._clearCodeError}
          ></ha-textfield>
          <ha-button slot="secondaryAction" dialogAction="cancel">
            ${this.hass.localize("ui.common.cancel")}
          </ha-button>
          <ha-button @click=${this._submit} slot="primaryAction">
            ${this.hass.localize("ui.common.submit")}
          </ha-button>
        </ha-dialog>
      `:fe`
      <ha-dialog
        open
        .heading=${this.createCloseHeading(this.hass,this.hass.localize("ui.dialogs.enter_code.title"))}
        @closed=${this._cancel}
        hideActions
      >
        <div class="container">
          <ha-textfield
            class="input"
            ?dialogInitialFocus=${!this._narrow}
            .value=${this._input}
            id="code"
            .label=${this.hass.localize("ui.dialogs.enter_code.input_label")}
            type="password"
            inputMode="numeric"
            @input=${e=>{this._clearCodeError(),this._input=e.target.value,this._setCodeClearTimer()}}
            @focus=${this._clearCodeError}
          ></ha-textfield>
          <div class="keypad">
            ${fi.map((e=>""===e?fe`<span></span>`:"clear"===e?fe`
                      <ha-control-button
                        @click=${this._clear}
                        class="clear"
                        .disabled=${!this._showClearButton}
                        .label=${this.hass.localize("ui.common.clear")}
                      >
                        <ha-svg-icon path=${tt}></ha-svg-icon>
                      </ha-control-button>
                    `:"submit"===e?fe`
                        <ha-control-button
                          @click=${this._submit}
                          class="submit"
                          .label=${this.hass.localize("ui.common.submit")}
                        >
                          <ha-svg-icon path=${"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}></ha-svg-icon>
                        </ha-control-button>
                      `:fe`
                        <ha-control-button
                          .value=${e}
                          @click=${this._numberClick}
                          .label=${e}
                        >
                          ${e}
                        </ha-control-button>
                      `))}
          </div>
        </div>
      </ha-dialog>
    `}};vi.styles=M`
    ha-dialog {
      /* Place above other dialogs */
      --dialog-z-index: 104;
    }
    ha-textfield {
      width: 100%;
      max-width: 240px;
      margin: 0px auto;
      text-align: center;
      margin-left: calc(50% - 240px / 2);
      margin-bottom: 18.5px;
    }
    ha-textfield.error {
      animation: shake 0.2s ease-in-out 0s 2;
      margin-bottom: 0px;
    }
    @keyframes shake {
      0% {
        margin-left: calc(50% - 240px / 2);
      }
      25% {
        margin-left: calc(50% - 240px / 2 + 10px);
      }
      75% {
        margin-left: calc(50% - 240px / 2 - 10px);
      }
      100% {
        margin-left: calc(50% - 240px / 2);
      }
    }
    .container {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    .keypad {
      --keypad-columns: 3;
      margin-top: 12px;
      padding: 12px;
      display: grid;
      grid-template-columns: repeat(var(--keypad-columns), auto);
      grid-auto-rows: auto;
      grid-gap: 24px;
      justify-items: center;
      align-items: center;
    }
    .clear {
      grid-row-start: 4;
      grid-column-start: 0;
    }
    @media all and (max-height: 450px) {
      .keypad {
        --keypad-columns: 6;
      }
      .clear {
        grid-row-start: 1;
        grid-column-start: 6;
      }
    }

    ha-control-button {
      width: 56px;
      height: 56px;
      --control-button-border-radius: 28px;
      --mdc-icon-size: 24px;
      font-size: 24px;
    }
    .submit {
      --control-button-background-color: var(--green-color);
      --control-button-icon-color: var(--green-color);
    }
    .clear {
      --control-button-background-color: var(--red-color);
      --control-button-icon-color: var(--red-color);
    }
    .hidden {
      display: none;
    }
    .buttons {
      margin-top: 12px;
    }
  `,t([Re({attribute:!1})],vi.prototype,"hass",void 0),t([Ie()],vi.prototype,"_params",void 0),t([Ie()],vi.prototype,"_input",void 0),t([Ie()],vi.prototype,"_showClearButton",void 0),t([Ie()],vi.prototype,"_narrow",void 0),vi=t([Ne("alarmo-code-dialog")],vi);var bi=Object.freeze({__proto__:null,get AlarmoCodeDialog(){return vi}});let yi=class extends Le{render(){if(!this.hass||!this.config)return be;const e=this.hass.states[this.config.entity];let t=e.state;const i=Object.values(qe).map((e=>We[e]));if(!i.includes(t)){const i=e.attributes.arm_mode;i&&(t=i)}return fe`
      <div class="container">
        ${this._renderOptions(t)}
      </div>
    `}_renderOptions(e){const t=this.hass.states[this.config.entity],i=[qe.Disarm,...ii(t)].filter((e=>{const i=ti(We[e],this.config).hide;if("boolean"==typeof i||!Qt(i))return!i;switch(i){case"always":return!1;case"never":return!0;case"armed":return"disarmed"==t.state;case"disarmed":return"disarmed"!==t.state}})),a=i.map((e=>ti(We[e],this.config))).some((e=>!Qt(e.button_label)||e.button_label.length));return i.sort(((e,t)=>{const i=ti(We[e],this.config).button_order,a=ti(We[t],this.config).button_order;return Qt(i)||Qt(a)?Qt(i)&&!Qt(a)?-1:!Qt(i)&&Qt(a)?1:i-a:0})),i.map((i=>{const o=Qt(this.readyForArmModes)&&!this.readyForArmModes.includes(We[i])&&i!=qe.Disarm,n=ti(We[i],this.config);return fe`
        <div class="button ${We[i]==e?"selected":""}" @click=${e=>this._handleClick(e,i)}>
          <div class="content ${a?"has-text":""}">
            <ha-icon icon="${Xt(n.button_icon)?Ze[i]:n.button_icon}"></ha-icon>
            ${We[i]!=e&&Qt(this.readyForArmModes)?fe`
              <ha-icon
                icon="${"mdi:circle-medium"}"
                class="badge ${o?"error":"success"}"
              ></ha-icon>
            `:be}
            <span>
              ${Qt(n.button_label)?n.button_label:i==qe.Disarm&&t.state!==Ve.Disarmed?this.hass.localize(`ui.card.alarm_control_panel.${i}`):this.hass.localize(`ui.card.alarm_control_panel.modes.${We[i]}`)}
            </span>
          </div>
        </div>
      `}))}_handleClick(e,t){li(this,"button-clicked",{ev:e,action:t})}static get styles(){return M`
      :host {
        width: 100%;
        display: inline-block;
        padding: 0px 10px;
        box-sizing: border-box;
      }
      div.container {
        position: relative;
        display: flex;
        width: 100%;
        gap: 0px;
        flex-wrap: wrap;
        padding: 4px;
        box-sizing: border-box;
        --selected-color: var(--alarm-state-color);
      }
      div.container::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: var(--primary-text-color);
        opacity: 0.05;
        border-radius: calc(var(--content-scale, 1) * 18px);
      }
      div.button {
        cursor: pointer;
        position: relative;
        flex: 1;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        /* For safari border-radius overflow */
        z-index: 0;
      }
      div.content {
        display: flex;
        position: relative;
        inline-size: calc(100% - 4px);
        border-radius: calc(var(--content-scale, 1) * 6px);
        height: calc(var(--content-scale, 1) * 26px);
        color: var(--primary-text-color);
        --mdc-icon-size: calc(var(--content-scale, 1) * 22px);
        align-items: center;
        justify-content: center;
        cursor: pointer;
        flex-direction: column;
        padding: 8px 2px;
        overvlow: hidden;
        flex: 1;
        gap: 4px;
        transition:
          color ease-in-out 180ms;
      }
      div.content.has-text {
        height: calc(var(--content-scale, 1) * 40px);
      }
      div.content::before {
        content: "";
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: var(--selected-color);
        opacity: 0;
        border-radius: calc(var(--content-scale, 1) * 14px);
        transition:
          background-color ease-in-out 180ms,
          opacity ease-in-out 80ms;
      }
      div.content.focused::before,
      div.content:hover::before {
        opacity: 0.24;
      }
      div.button.selected .content::before {
        opacity: 1;
      }
      div.content ha-icon {
        display: flex;
      }
      div.content span {
        display: flex;
        max-width: calc(100% - 4px);
        align-items: center;
        white-space: nowrap;
        overflow: hidden;
        overflow-wrap: break-word;
        text-overflow: clip;
        -webkit-hyphens: auto;
        -moz-hyphens: auto;
        hyphens: auto;
        word-break: break-word;
        font-weight: 400;
        font-size: calc(var(--content-scale, 1) * 1rem);
      }
      div.button.selected div.content ha-icon, div.button.selected div.content {
        color: white;
      }
      @media (max-width: 280px) {
        div.container {
          flex-direction: column;
        }
      }
      div.content ha-icon.badge {
        position: absolute;
        top: 0px;
        margin-left: calc(var(--content-scale, 1) * 28px);
      }
      div.content ha-icon.success {
        color: var(--green-color);
      }
      div.content ha-icon.error {
        color: var(--red-color);
      }
    `}};t([Re({attribute:!1})],yi.prototype,"hass",void 0),t([Re({attribute:!1})],yi.prototype,"config",void 0),t([Re({attribute:!1})],yi.prototype,"readyForArmModes",void 0),yi=t([Ne("alarmo-actions-bar")],yi);class ki{constructor(e,t="alarmoPendingAudioPosition"){this.audioPosition=0,this.lastUpdateTime=0,this.hasSoundUrl=!!e,this.storageKey=t,this.isPlayingKey=`${t}_isPlaying`,this.hasSoundUrl&&(this.audio=new Audio(e),this.audio.loop=!0,this.loadAudioState(),this.audio.addEventListener("timeupdate",this.throttledTimeUpdate.bind(this)),window.addEventListener("beforeunload",this.saveAudioState.bind(this)))}set hass(e){const t=this._hass;this._hass=e,this.hassChanged(t)}set entity(e){this._entity=e}hassChanged(e){if(this._hass&&this._entity)if(e&&e.themes===this._hass.themes&&e.language===this._hass.language){if(e.states[this._entity].state!==this._hass.states[this._entity].state||e.states[this._entity].attributes.delay!==this._hass.states[this._entity].attributes.delay){const t=e.states[this._entity].state,i=this._hass.states[this._entity].state;Je.includes(i)?this.playSound():Je.includes(t)&&this.stopSound(),this.updateAudio()}}else this.updateAudio()}updateAudio(){if(this._hass&&this._entity){const e=this._hass.states[this._entity].state;Je.includes(e)&&this.playSound()}}loadAudioState(){if(!this.hasSoundUrl||!this.audio)return;const e=localStorage.getItem(this.storageKey),t="true"===localStorage.getItem(this.isPlayingKey);e&&(this.audioPosition=parseFloat(e),this.audio.currentTime=this.audioPosition),t&&this.playSound()}saveAudioState(){this.hasSoundUrl&&this.audio&&(localStorage.setItem(this.storageKey,this.audioPosition.toString()),localStorage.setItem(this.isPlayingKey,this.audio.paused?"false":"true"))}throttledTimeUpdate(){if(!this.hasSoundUrl||!this.audio)return;const e=Date.now();e-this.lastUpdateTime>1e3&&(this.lastUpdateTime=e,this.audioPosition=this.audio.currentTime,this.saveAudioState())}async playSound(){if(this.hasSoundUrl&&this.audio){this.audio.currentTime=this.audioPosition;try{await this.audio.play()}catch(e){console.error("Error playing audio:",e)}}}pauseSound(){this.hasSoundUrl&&this.audio&&(this.audio.pause(),this.saveAudioState())}stopSound(){this.hasSoundUrl&&this.audio&&(this.audio.pause(),this.audioPosition=0,this.saveAudioState())}}const wi=["1","2","3","4","5","6","7","8","9","","0","clear"];return e.AlarmoCard=class extends(mi(Le)){constructor(){super(...arguments),this._input="",this.warning="",this.area_id=void 0,this.armOptions=Object.assign({},Xe),this.readyForArmModes=null,this.backendConnection=null,this.showBypassedSensors=!1,this._menuOpen=!1,this.subscribedEntities=[],this._codeClearTimer=0,this._boundCloseMenu=this._closeMenu.bind(this)}static async getConfigElement(){return await Promise.resolve().then((function(){return ui})),document.createElement("alarmo-card-editor")}static async getStubConfig(e){let t=Object.keys(e.states).find((e=>"alarm_control_panel"==ei(e)));return await si(e).then((e=>{const i=e.sort(((e,t)=>Number(e.area_id)-Number(t.area_id)));i.length&&(t=i[0].entity_id)})),{type:"custom:alarmo-card",entity:t}}async getCardSize(){var e;if(!this._config||!this.hass)return 9;const t=this.hass.states[this._config.entity];return t&&(null===(e=this._alarmoConfig)||void 0===e?void 0:e.code_format)===Be?!oi(t)&&!this._config.keep_keypad_visible||this._config.use_code_dialog?4:9:4}setConfig(e){!(null==e?void 0:e.button_scale_actions)&&(null==e?void 0:e.button_scale)&&(e=Object.assign(Object.assign({},e),{button_scale_actions:null==e?void 0:e.button_scale})),!(null==e?void 0:e.button_scale_keypad)&&(null==e?void 0:e.button_scale)&&(e=Object.assign(Object.assign({},e),{button_scale_keypad:null==e?void 0:e.button_scale})),(e=>{if(!e||!e.entity||"alarm_control_panel"!==ei(e.entity))throw new Error("Invalid configuration provided for entity");if(Qt(e.button_scale_keypad)&&("number"!=typeof e.button_scale_keypad||e.button_scale_keypad<1||e.button_scale_keypad>Qe))throw new Error("Invalid configuration provided for button_scale_keypad");if(Qt(e.button_scale_actions)&&("number"!=typeof e.button_scale_actions||e.button_scale_actions<1||e.button_scale_actions>Qe))throw new Error("Invalid configuration provided for button_scale_actions")})(e),this._config=Object.assign(Object.assign({},Ye),e)}hassSubscribe(){return[this.hass.connection.subscribeMessage((e=>this._fetchData(e)),{type:Ke})]}initPendingSound(){this._config&&this.hass&&(this.pendingSound=new ki(this._config.pending_sound))}async firstUpdated(){const e=await window.loadCardHelpers(),t=await e.createCardElement({type:"entities",entities:[]});await t.constructor.getConfigElement(),await this.loadBackendConfig(),this.initPendingSound()}async loadBackendConfig(){this.backendConnection||si(this.hass).then((e=>{const t=e.find((e=>e.entity_id==this._config.entity));t&&(this.area_id=t.area_id?t.area_id:null)})).then((()=>ri(this.hass))).then((e=>{this._alarmoConfig=e,this.backendConnection=!0})).then((()=>{return e=this.hass,t=this._config.entity,e.callWS({type:"alarmo/ready_to_arm_modes",entity_id:t});var e,t})).then((e=>{this.readyForArmModes=e.modes})).catch((e=>{this.backendConnection=!1}))}async _fetchData(e){if(e.data.area_id===this.area_id)switch(e.data.event){case Ge.Arm:this._clearCode();break;case Ge.Trigger:break;case Ge.InvalidCodeProvided:case Ge.NoCodeProvided:this._showCodeError(),this.subscribedEntities=[];break;case Ge.FailedToArm:this.warning="blocking_sensors",this._last_command=e.data.command,this._last_code=this._input,this._clearCode();break;case Ge.CommandNotAllowed:this._clearCode();break;case Ge.TriggerTimeExpired:break;case Ge.ReadyToArmModesChanged:this.readyForArmModes=e.data.modes}}shouldUpdate(e){if(e.has("_config"))return!0;const t=e.get("hass");if(!t||t.themes!==this.hass.themes||t.language!==this.hass.language||t.config.state!==this.hass.config.state)return!0;if(t.states[this._config.entity]!==this.hass.states[this._config.entity]){const e=t.states[this._config.entity],i=this.hass.states[this._config.entity];return!1===this.backendConnection&&(async()=>{await this.loadBackendConfig()})(),this.processStateUpdate(e,i),!0}return!(!this.subscribedEntities.length||!this.subscribedEntities.some((e=>t.states[e]!==this.hass.states[e])))}processStateUpdate(e,t){var i,a;t.state!=e.state&&(this.subscribedEntities=[],null===(i=this.pendingSound)||void 0===i||i.stopSound()),(t.state==Ve.Disarmed||t.last_changed!==e.last_changed)&&this._clearCode(),t.state!=Ve.Pending&&t.state!=Ve.Arming||null===(a=this.pendingSound)||void 0===a||a.playSound()}render(){var e,t;if(!this._config||!this.hass||null===this.backendConnection)return fe``;const i=this.hass.states[this._config.entity];return i?!1===this.backendConnection?fe`
        <hui-warning>
          Could not establish a connection with the alarmo integration. Please check if it is installed and the correct
          entity is selected in the card settings.
        </hui-warning>
      `:fe`
      <ha-card>
        ${i.state!==Ve.Disarmed||this._config.hide_arm_options?"":fe`
              <div class="corner-menu" @click=${e=>e.stopPropagation()}>
                <ha-icon-button
                  .path=${"M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"}
                  .label=${this.hass.localize("ui.common.menu")}
                  @click=${this._toggleMenu}
                ></ha-icon-button>
                ${this._menuOpen?fe`
                  <div class="menu-overlay">
                    <span class="menu-title">
                      ${Yt("arm_options.heading",this.hass.language)}
                    </span>
                    <div class="menu-item" @click=${e=>this._toggleArmOptions(e,"skip_delay")}>
                      <ha-icon
                        icon="mdi:check"
                        style="${this.armOptions.skip_delay?"":"visibility: hidden"}"
                      ></ha-icon>
                      ${Yt("arm_options.skip_delay",this.hass.language)}
                    </div>
                    <div class="menu-item" @click=${e=>this._toggleArmOptions(e,"force")}>
                      <ha-icon
                        icon="mdi:check"
                        style="${this.armOptions.force?"":"visibility: hidden"}"
                      ></ha-icon>
                      ${Yt("arm_options.force",this.hass.language)}
                    </div>
                  </div>
                `:""}
              </div>
            `}

        <div class="header">
          <div class="icon">
            <alarmo-state-badge
              .hass=${this.hass}
              .entity=${this._config.entity}
              style="--alarm-state-color: ${ni(i,this._config)}"
            >
            </alarmo-state-badge>
          </div>
          <div class="summary">
            <div class="name">
              ${((e,t)=>Xt(t.name)?e.attributes.friendly_name:t.name)(i,this._config)}
            </div>
            <div class="state">
              ${ai(i,this.hass.localize,this._config)}
            </div>
          </div>
        </div>

        ${this._renderWarning()}

        <div id="actions" class="actions">
          ${this._renderActions()}
        </div>

        ${!oi(i)&&!this._config.keep_keypad_visible||this._config.use_code_dialog?fe``:fe`
              <ha-textfield
                .value=${this._input}
                .label=${this.hass.localize("ui.card.alarm_control_panel.code")}
                ?disabled=${!oi(i)}
                @input=${e=>{this._clearCodeError(),this._input=e.target.value,this._setCodeClearTimer()}}
                @focus=${this._clearCodeError}
                type="password"
                id="code_input"
                .inputMode=${(null===(e=this._alarmoConfig)||void 0===e?void 0:e.code_format)===Be?"numeric":"text"}
              ></ha-textfield>
            `}
        ${!oi(i)&&!this._config.keep_keypad_visible||(null===(t=this._alarmoConfig)||void 0===t?void 0:t.code_format)!==Be||this._config.use_code_dialog||this._config.hide_keypad?fe``:fe`
          <div id="keypad" class="keypad" style="max-width: ${300*this._config.button_scale_keypad}px">
            ${wi.map((e=>""===e?fe`
              <alarmo-button
                disabled
                style="--content-scale: ${this._config.button_scale_keypad}"
                ?scaled=${1!=this._config.button_scale_keypad}
                class="placeholder"
              ></alarmo-button>
            `:fe`
              <alarmo-button
                .value="${e}"
                @click=${this._handlePadClick}
                ?disabled=${!oi(i)||"clear"===e&&!this._input.length}
                class="${"clear"!==e?"numberKey":"clear"}"
                style="--content-scale: ${this._config.button_scale_keypad}"
                ?scaled=${1!=this._config.button_scale_keypad}
              >
                ${"clear"===e?fe`<ha-icon icon="mdi:close" style="--mdc-icon-size: calc(${this._config.button_scale_keypad} * 24px)"></ha-icon>`:fe` <span>${e}</span>`}
              </alarmo-button>
            `))}
          </div>
        `}
      </ha-card>
    `:fe`
        <hui-warning>
          ${"NOT_RUNNING"!==this.hass.config.state?this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity||"[empty]"):this.hass.localize("ui.panel.lovelace.warning.starting")}
        </hui-warning>
      `}_renderActions(){if(!this.hass||!this._config)return fe``;const e=this.hass.states[this._config.entity],t=this._config.show_ready_indicator;return fe`
      <alarmo-actions-bar
        @button-clicked=${e=>this._handleActionClick(e,e.detail.action)}
        .hass=${this.hass}
        .config=${this._config}
        .readyForArmModes=${t?this.readyForArmModes:void 0}
        style="--alarm-state-color: ${ni(e,this._config,!0)}; --content-scale: ${this._config.button_scale_actions}"
      ></alarmo-actions-bar>
    `}_renderWarning(){var e;if(!this.hass||!this._config||!this._config.show_messages)return fe``;const t=this.hass.states[this._config.entity];return t.attributes.open_sensors&&t.state==Ve.Triggered||"blocking_sensors"==this.warning&&t.attributes.open_sensors?fe`
        <div class="messagebox">
          <div class="messagebox-left"></div>
          <div class="messagebox-inner">
            <div class="description">
              <div class="description-filler"></div>
              <span>
                <ha-icon icon="hass:alert"></ha-icon>
                ${"blocking_sensors"==this.warning?Yt("errors.blocking_sensors",this.hass.language):Yt("errors.triggered_sensors",this.hass.language)}
              </span>
              <div class="description-filler"></div>
            </div>
            <div class="content">
              ${Object.entries(t.attributes.open_sensors).map((([e])=>(this.subscribedEntities.includes(e)||this.subscribedEntities.push(e),fe`
                  <div class="badge">
                    <alarmo-sensor-badge .hass=${this.hass} .entity=${e}> </alarmo-sensor-badge>
                  </div>
                `)))}
            </div>
          ${"blocking_sensors"==this.warning&&t.attributes.open_sensors?fe`
            <alarmo-button
              @click=${this._forceRetryClick}
              style="--content-scale: ${this._config.button_scale_actions}"
              ?scaled=${1!=this._config.button_scale_actions}
            >
              <span>${Yt("arm_options.force",this.hass.language)}</span>
            </alarmo-button>
          `:""}
          </div>
          <div class="messagebox-right"></div>
        </div>
      `:t.state.startsWith("armed_")&&(null===(e=t.attributes.bypassed_sensors)||void 0===e?void 0:e.length)&&this._config.show_bypassed_sensors?fe`
        <div class="messagebox warning">
          <div class="messagebox-left"></div>
          <div class="messagebox-inner">
            <div class="description">
              <div class="description-filler"></div>
              <span>
                <ha-icon icon="hass:alert"></ha-icon>
                ${Yt("errors.bypassed_sensors",this.hass.language)}
              </span>
              <div class="description-filler"></div>
            </div>
            <div class="content">
              ${t.attributes.bypassed_sensors.map((e=>(this.subscribedEntities.includes(e)||this.subscribedEntities.push(e),fe`
                  <div class="badge">
                    <alarmo-sensor-badge .hass=${this.hass} .entity=${e}> </alarmo-sensor-badge>
                  </div>
                `)))}
            </div>
          </div>
          <div class="messagebox-right"></div>
        </div>
      `:fe``}_handlePadClick(e){const t=e.currentTarget.value;this._clearCodeError(),this._input="clear"===t?"":this._input+t}async _handleActionClick(e,t){var i;e.target.blur(),this._clearCodeError();const a=this.hass.states[this._config.entity];if((null===(i=this._config)||void 0===i?void 0:i.use_code_dialog)&&!this._config.hide_keypad&&oi(a)){const i=await new Promise((i=>{const a=e.target,o={code_format:this._alarmoConfig.code_format,area_id:this.area_id,entity_id:this._config.entity,action:t,armOptions:this.armOptions,cancel:()=>{i(null)},confirm:e=>{i(e)}};li(a,"show-dialog",{dialogTag:"alarmo-code-dialog",dialogImport:()=>Promise.resolve().then((function(){return bi})),dialogParams:o})}));i!=Ge.Arm&&i!=Ge.Disarm||(this.warning="",this.armOptions=Object.assign({},Xe))}else t==qe.Disarm?this.hass.callService("alarmo","disarm",{entity_id:this._config.entity,code:this._input}):this.hass.callService("alarmo","arm",Object.assign(Object.assign({},this.armOptions),{entity_id:this._config.entity,mode:We[t],code:this._input})),this.warning="",this.armOptions=Object.assign({},Xe)}_showCodeError(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#code_input");t&&(t.classList.remove("error"),t.classList.add("error"),t.invalid=!0)}_clearCodeError(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#code_input");t&&t.classList.contains("error")&&(t.classList.remove("error"),t.invalid=!1,this._input="",this._cancelCodeClearTimer())}_clearCode(){this._input="",this._clearCodeError(),this._cancelCodeClearTimer()}_setCodeClearTimer(){this._cancelCodeClearTimer(),this._input.length&&(this._codeClearTimer=window.setTimeout((()=>{this._clearCode()}),12e4))}_cancelCodeClearTimer(){this._codeClearTimer&&clearTimeout(this._codeClearTimer)}_toggleArmOptions(e,t){e.stopImmediatePropagation(),e.target.blur(),"skip_delay"==t?this.armOptions=Object.assign(Object.assign({},this.armOptions),{skip_delay:!this.armOptions.skip_delay}):"force"==t&&(this.armOptions=Object.assign(Object.assign({},this.armOptions),{force:!this.armOptions.force}))}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._boundCloseMenu)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._boundCloseMenu)}_toggleMenu(e){e.stopPropagation(),this._menuOpen=!this._menuOpen}_closeMenu(){this._menuOpen&&(this._menuOpen=!1)}_forceRetryClick(){if(!this.hass||!this._config||!this._last_command)return;let e=this._last_command;this.hass.callService("alarmo","arm",{entity_id:this._config.entity,mode:We[e],code:this._last_code,force:!0}),this._last_command=void 0,this._last_code=void 0}static get styles(){return M`
      ha-card {
        padding-bottom: 16px;
        position: relative;
        height: 100%;
        box-sizing: border-box;
      }
      .header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin: 0px auto;
        padding: 20px 0px;
        box-sizing: border-box;
        gap: 20px;
        margin: 0px 50px;
      }
      .header .icon {
        display: flex;
      }
      .header .summary {
        display: flex;
        flex-direction: column;
      }
      .header .name {
        font-size: 24px;
        display: flex;
      }
      .header .state {
        font-size: 14px;
        display: flex;
      }
      .actions {
        margin: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
      .actions alarmo-button {
        margin: 0 8px 8px;
      }
      ha-textfield {
        margin: 15px auto;
        max-width: 200px;
        text-align: center;
        margin-left: calc(50% - 200px / 2);
        margin-right: calc(50% - 200px / 2);
      }
      ha-textfield.error {
        animation: shake 0.2s ease-in-out 0s 2;
      }
      #keypad {
        justify-content: center;
        flex-wrap: wrap;
        margin: auto;
        direction: ltr;
        display: grid;
        grid-template-columns: repeat(3, auto);
        grid-auto-rows: auto;
        grid-gap: var(--ha-space-4, 16px);
      }
      #keypad alarmo-button {
        width: calc(var(--content-scale, 1) * 56px);
        height: calc(var(--content-scale, 1) * 56px);
        --alarmo-button-font-size: 24px;
        --alarmo-button-background-color: var(--primary-text-color);
        --alarmo-button-background-opacity: 0.05;
        --alarmo-button-border-radius: 50%;
        --alarmo-button-border-color: none;
        --alarmo-button-color: var(--primary-text-color);
        font-weight: 500;
      }
      #keypad alarmo-button.clear:not([disabled]) {
        --alarmo-button-background-color: var(--red-color);
        --alarmo-button-color: var(--red-color);
        --alarmo-button-background-opacity: 0.10;
      }
      #keypad alarmo-button.placeholder {
        visibility: hidden;
      }
      @keyframes shake {
        0% {
          margin-left: calc(50% - 200px / 2);
        }
        25% {
          margin-left: calc(50% - 200px / 2 + 10px);
        }
        75% {
          margin-left: calc(50% - 200px / 2 - 10px);
        }
        100% {
          margin-left: calc(50% - 200px / 2);
        }
      }
      div.messagebox {
        width: 90%;
        margin: 0px auto 20px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: stretch;
        --border-color: var(--label-badge-red);
      }
      div.messagebox.warning {
        --border-color: var(--label-badge-yellow);
      }
      div.messagebox.warning alarmo-sensor-badge {
        --label-badge-red: var(--label-badge-yellow);
      }
      div.messagebox-left {
        display: flex;
        width: 10px;
        border: 1px solid var(--border-color);
        border-width: 1px 0px 1px 1px;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }
      div.messagebox-right {
        display: flex;
        width: 10px;
        border: 1px solid var(--border-color);
        border-width: 1px 1px 1px 0px;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }
      div.messagebox-inner {
        flex-direction: column;
        border-bottom: 1px solid var(--border-color);
        flex: 1 1;
      }
      div.messagebox .description {
        display: flex;
        flex-direction: row;
      }
      div.messagebox .description span {
        color: var(--label-badge-red);
        font-weight: 500;
        display: flex;
        margin-top: -10px;
        padding: 0px 5px;
        flex-shrink: 2;
      }
      div.messagebox.warning .description span {
        color: #d0863d;
      }
      div.messagebox .description-filler {
        flex: 1;
        border-top: 1px solid var(--border-color);
        min-width: 5px;
      }
      div.messagebox .description ha-icon {
        --mdc-icon-size: 24px;
        margin: 0px 4px 0px 0px;
      }
      div.messagebox .content {
        display: flex;
        flex-basis: 100%;
        padding: 5px;
        justify-content: space-around;
        align-items: center;
        flex: 1;
        flex-direction: row;
        flex-wrap: wrap;
        color: var(--primary-text-color);
      }
      div.messagebox .content .badge {
        width: 64px;
        margin: 5px 0px;
        justify-content: center;
        align-items: center;
      }
      div.messagebox alarmo-button {
        display: flex;
        justify-self: center;
        margin-bottom: 10px;
      }
      .corner-menu {
        position: absolute;
        right: 4px;
        top: 4px;
        z-index: 1;
      }
      .menu-overlay {
        position: absolute;
        right: 0;
        top: 100%;
        background: var(--card-background-color, #fff);
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        min-width: 200px;
        padding: 8px 0;
        z-index: 2;
      }
      .menu-title {
        font-weight: bold;
        display: flex;
        height: 32px;
        align-items: center;
        padding: 0 12px;
      }
      .menu-item {
        display: flex;
        align-items: center;
        padding: 8px 12px;
        cursor: pointer;
        gap: 8px;
      }
      .menu-item:hover {
        background: var(--secondary-background-color, #f5f5f5);
      }
      .menu-item ha-icon {
        --mdc-icon-size: 20px;
      }
      @media all and (max-width: 250px) {
        .corner-menu {
          display: none;
        }
      }
    `}},t([Re({attribute:!1})],e.AlarmoCard.prototype,"hass",void 0),t([Ie()],e.AlarmoCard.prototype,"_config",void 0),t([Ie()],e.AlarmoCard.prototype,"_alarmoConfig",void 0),t([Ie()],e.AlarmoCard.prototype,"_input",void 0),t([Ie()],e.AlarmoCard.prototype,"warning",void 0),t([Ie()],e.AlarmoCard.prototype,"area_id",void 0),t([Ie()],e.AlarmoCard.prototype,"armOptions",void 0),t([Ie()],e.AlarmoCard.prototype,"readyForArmModes",void 0),t([Ie()],e.AlarmoCard.prototype,"backendConnection",void 0),t([Ie()],e.AlarmoCard.prototype,"showBypassedSensors",void 0),t([Ie()],e.AlarmoCard.prototype,"_menuOpen",void 0),e.AlarmoCard=t([Ne("alarmo-card")],e.AlarmoCard),window.customCards=window.customCards||[],window.customCards.push({type:"alarmo-card",name:"Alarmo Card",description:"Card for operating Alarmo through Lovelace.",preview:!0}),console.info(`%c  ALARMO-CARD  \n%c  Version: ${"v1.6.7".padEnd(7," ")}`,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),e}({});
