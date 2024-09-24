var AlarmoCard=function(e){"use strict";function t(e,t,i,a){var n,r=arguments.length,o=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=Array(t);i<t;i++)a[i]=e[i];return a}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function n(e,t,i,a,n,r,o){try{var s=e[r](o),l=s.value}catch(e){return void i(e)}s.done?t(l):Promise.resolve(l).then(a,n)}function r(e,t,i){return t=h(t),function(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return a(e)}(e,m()?Reflect.construct(t,i||[],h(e).constructor):t.apply(e,i))}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,k(a.key),a)}}function l(e,t,i){return t&&s(e.prototype,t),i&&s(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}function c(e,t){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!i){if(Array.isArray(e)||(i=x(e))||t){i&&(e=i);var a=0,n=function(){};return{s:n,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o=!0,s=!1;return{s:function(){i=i.call(e)},n:function(){var e=i.next();return o=e.done,e},e:function(e){s=!0,r=e},f:function(){try{o||null==i.return||i.return()}finally{if(s)throw r}}}}function d(e,t,i){return(t=k(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function u(){return u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,i){var a=function(e,t){for(;!{}.hasOwnProperty.call(e,t)&&null!==(e=h(e)););return e}(e,t);if(a){var n=Object.getOwnPropertyDescriptor(a,t);return n.get?n.get.call(arguments.length<3?e:i):n.value}},u.apply(null,arguments)}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_(e,t)}function m(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(m=function(){return!!e})()}function f(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function g(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?f(Object(i),!0).forEach((function(t){d(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):f(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function v(){v=function(){return t};var e,t={},i=Object.prototype,a=i.hasOwnProperty,n=Object.defineProperty||function(e,t,i){e[t]=i.value},r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",s=r.asyncIterator||"@@asyncIterator",l=r.toStringTag||"@@toStringTag";function c(e,t,i){return Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,i){return e[t]=i}}function d(e,t,i,a){var r=t&&t.prototype instanceof _?t:_,o=Object.create(r.prototype),s=new P(a||[]);return n(o,"_invoke",{value:C(e,i,s)}),o}function u(e,t,i){try{return{type:"normal",arg:e.call(t,i)}}catch(e){return{type:"throw",arg:e}}}t.wrap=d;var h="suspendedStart",p="suspendedYield",m="executing",f="completed",g={};function _(){}function b(){}function y(){}var w={};c(w,o,(function(){return this}));var k=Object.getPrototypeOf,$=k&&k(k(z([])));$&&$!==i&&a.call($,o)&&(w=$);var x=y.prototype=_.prototype=Object.create(w);function A(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function i(n,r,o,s){var l=u(e[n],e,r);if("throw"!==l.type){var c=l.arg,d=c.value;return d&&"object"==typeof d&&a.call(d,"__await")?t.resolve(d.__await).then((function(e){i("next",e,o,s)}),(function(e){i("throw",e,o,s)})):t.resolve(d).then((function(e){c.value=e,o(c)}),(function(e){return i("throw",e,o,s)}))}s(l.arg)}var r;n(this,"_invoke",{value:function(e,a){function n(){return new t((function(t,n){i(e,a,t,n)}))}return r=r?r.then(n,n):n()}})}function C(t,i,a){var n=h;return function(r,o){if(n===m)throw Error("Generator is already running");if(n===f){if("throw"===r)throw o;return{value:e,done:!0}}for(a.method=r,a.arg=o;;){var s=a.delegate;if(s){var l=O(s,a);if(l){if(l===g)continue;return l}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(n===h)throw n=f,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n=m;var c=u(t,i,a);if("normal"===c.type){if(n=a.done?f:p,c.arg===g)continue;return{value:c.arg,done:a.done}}"throw"===c.type&&(n=f,a.method="throw",a.arg=c.arg)}}}function O(t,i){var a=i.method,n=t.iterator[a];if(n===e)return i.delegate=null,"throw"===a&&t.iterator.return&&(i.method="return",i.arg=e,O(t,i),"throw"===i.method)||"return"!==a&&(i.method="throw",i.arg=new TypeError("The iterator does not provide a '"+a+"' method")),g;var r=u(n,t.iterator,i.arg);if("throw"===r.type)return i.method="throw",i.arg=r.arg,i.delegate=null,g;var o=r.arg;return o?o.done?(i[t.resultName]=o.value,i.next=t.nextLoc,"return"!==i.method&&(i.method="next",i.arg=e),i.delegate=null,g):o:(i.method="throw",i.arg=new TypeError("iterator result is not an object"),i.delegate=null,g)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function z(t){if(t||""===t){var i=t[o];if(i)return i.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function i(){for(;++n<t.length;)if(a.call(t,n))return i.value=t[n],i.done=!1,i;return i.value=e,i.done=!0,i};return r.next=r}}throw new TypeError(typeof t+" is not iterable")}return b.prototype=y,n(x,"constructor",{value:y,configurable:!0}),n(y,"constructor",{value:b,configurable:!0}),b.displayName=c(y,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c(e,l,"GeneratorFunction")),e.prototype=Object.create(x),e},t.awrap=function(e){return{__await:e}},A(S.prototype),c(S.prototype,s,(function(){return this})),t.AsyncIterator=S,t.async=function(e,i,a,n,r){void 0===r&&(r=Promise);var o=new S(d(e,i,a,n),r);return t.isGeneratorFunction(i)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},A(x),c(x,l,"Generator"),c(x,o,(function(){return this})),c(x,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),i=[];for(var a in t)i.push(a);return i.reverse(),function e(){for(;i.length;){var a=i.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},t.values=z,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var i in this)"t"===i.charAt(0)&&a.call(this,i)&&!isNaN(+i.slice(1))&&(this[i]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var i=this;function n(a,n){return s.type="throw",s.arg=t,i.next=a,n&&(i.method="next",i.arg=e),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],s=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var l=a.call(o,"catchLoc"),c=a.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var i=this.tryEntries.length-1;i>=0;--i){var n=this.tryEntries[i];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var r=n;break}}r&&("break"===e||"continue"===e)&&r.tryLoc<=t&&t<=r.finallyLoc&&(r=null);var o=r?r.completion:{};return o.type=e,o.arg=t,r?(this.method="next",this.next=r.finallyLoc,g):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var i=this.tryEntries[t];if(i.finallyLoc===e)return this.complete(i.completion,i.afterLoc),j(i),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var i=this.tryEntries[t];if(i.tryLoc===e){var a=i.completion;if("throw"===a.type){var n=a.arg;j(i)}return n}}throw Error("illegal catch attempt")},delegateYield:function(t,i,a){return this.delegate={iterator:z(t),resultName:i,nextLoc:a},"next"===this.method&&(this.arg=e),g}},t}function _(e,t){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},_(e,t)}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var a,n,r,o,s=[],l=!0,c=!1;try{if(r=(i=i.call(e)).next,0===t);else for(;!(l=(a=r.call(i)).done)&&(s.push(a.value),s.length!==t);l=!0);}catch(e){c=!0,n=e}finally{try{if(!l&&null!=i.return&&(o=i.return(),Object(o)!==o))return}finally{if(c)throw n}}return s}}(e,t)||x(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t,i,a){var n=u(h(e.prototype),t,i);return"function"==typeof n?function(e){return n.apply(i,e)}:n}function w(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||x(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var a=i.call(e,t||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}function $(e){return $="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$(e)}function x(e,t){if(e){if("string"==typeof e)return i(e,t);var a={}.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?i(e,t):void 0}}function A(e){var t="function"==typeof Map?new Map:void 0;return A=function(e){if(null===e||!function(e){try{return-1!==Function.toString.call(e).indexOf("[native code]")}catch(t){return"function"==typeof e}}(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,i)}function i(){return function(e,t,i){if(m())return Reflect.construct.apply(null,arguments);var a=[null];a.push.apply(a,t);var n=new(e.bind.apply(e,a));return i&&_(n,i.prototype),n}(e,arguments,h(this).constructor)}return i.prototype=Object.create(e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),_(i,e)},A(e)
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */}"function"==typeof SuppressedError&&SuppressedError;var S,C,O,E=globalThis,j=E.ShadowRoot&&(void 0===E.ShadyCSS||E.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,P=Symbol(),z=new WeakMap,T=function(){return l((function e(t,i,a){if(o(this,e),this._$cssResult$=!0,a!==P)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}),[{key:"styleSheet",get:function(){var e=this.o,t=this.t;if(j&&void 0===e){var i=void 0!==t&&1===t.length;i&&(e=z.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&z.set(t,e))}return e}},{key:"toString",value:function(){return this.cssText}}])}(),M=function(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),a=1;a<t;a++)i[a-1]=arguments[a];var n=1===e.length?e[0]:i.reduce((function(t,i,a){return t+function(e){if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")}(i)+e[a+1]}),e[0]);return new T(n,e,P)},U=j?function(e){return e}:function(e){return e instanceof CSSStyleSheet?function(e){var t,i="",a=c(e.cssRules);try{for(a.s();!(t=a.n()).done;){i+=t.value.cssText}}catch(e){a.e(e)}finally{a.f()}return function(e){return new T("string"==typeof e?e:e+"",void 0,P)}(i)}(e):e},L=Object.is,N=Object.defineProperty,R=Object.getOwnPropertyDescriptor,H=Object.getOwnPropertyNames,I=Object.getOwnPropertySymbols,D=Object.getPrototypeOf,B=globalThis,q=B.trustedTypes,F=q?q.emptyScript:"",V=B.reactiveElementPolyfillSupport,W=function(e,t){return e},K={toAttribute:function(e,t){switch(t){case Boolean:e=e?F:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute:function(e,t){var i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},Z=function(e,t){return!L(e,t)},G={attribute:!0,type:String,converter:K,reflect:!1,hasChanged:Z};null!==(S=Symbol.metadata)&&void 0!==S||(Symbol.metadata=Symbol("metadata")),null!==(C=B.litPropertyMetadata)&&void 0!==C||(B.litPropertyMetadata=new WeakMap);var J,Y=function(e){function t(){var e;return o(this,t),(e=r(this,t))._$Ep=void 0,e.isUpdatePending=!1,e.hasUpdated=!1,e._$Em=null,e._$Ev(),e}return p(t,e),l(t,[{key:"_$Ev",value:function(){var e,t=this;this._$ES=new Promise((function(e){return t.enableUpdating=e})),this._$AL=new Map,this._$E_(),this.requestUpdate(),null===(e=this.constructor.l)||void 0===e||e.forEach((function(e){return e(t)}))}},{key:"addController",value:function(e){var t,i;(null!==(t=this._$EO)&&void 0!==t?t:this._$EO=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}},{key:"removeController",value:function(e){var t;null===(t=this._$EO)||void 0===t||t.delete(e)}},{key:"_$E_",value:function(){var e,t=new Map,i=c(this.constructor.elementProperties.keys());try{for(i.s();!(e=i.n()).done;){var a=e.value;this.hasOwnProperty(a)&&(t.set(a,this[a]),delete this[a])}}catch(e){i.e(e)}finally{i.f()}t.size>0&&(this._$Ep=t)}},{key:"createRenderRoot",value:function(){var e,t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return function(e,t){if(j)e.adoptedStyleSheets=t.map((function(e){return e instanceof CSSStyleSheet?e:e.styleSheet}));else{var i,a=c(t);try{for(a.s();!(i=a.n()).done;){var n=i.value,r=document.createElement("style"),o=E.litNonce;void 0!==o&&r.setAttribute("nonce",o),r.textContent=n.cssText,e.appendChild(r)}}catch(e){a.e(e)}finally{a.f()}}}(t,this.constructor.elementStyles),t}},{key:"connectedCallback",value:function(){var e,t;null!==(e=this.renderRoot)&&void 0!==e||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$EO)||void 0===t||t.forEach((function(e){var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}},{key:"enableUpdating",value:function(e){}},{key:"disconnectedCallback",value:function(){var e;null===(e=this._$EO)||void 0===e||e.forEach((function(e){var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}},{key:"attributeChangedCallback",value:function(e,t,i){this._$AK(e,i)}},{key:"_$EC",value:function(e,t){var i=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,i);if(void 0!==a&&!0===i.reflect){var n,r=(void 0!==(null===(n=i.converter)||void 0===n?void 0:n.toAttribute)?i.converter:K).toAttribute(t,i.type);this._$Em=e,null==r?this.removeAttribute(a):this.setAttribute(a,r),this._$Em=null}}},{key:"_$AK",value:function(e,t){var i=this.constructor,a=i._$Eh.get(e);if(void 0!==a&&this._$Em!==a){var n,r=i.getPropertyOptions(a),o="function"==typeof r.converter?{fromAttribute:r.converter}:void 0!==(null===(n=r.converter)||void 0===n?void 0:n.fromAttribute)?r.converter:K;this._$Em=a,this[a]=o.fromAttribute(t,r.type),this._$Em=null}}},{key:"requestUpdate",value:function(e,t,i){if(void 0!==e){var a,n;if(null!==(a=i)&&void 0!==a||(i=this.constructor.getPropertyOptions(e)),!(null!==(n=i.hasChanged)&&void 0!==n?n:Z)(this[e],t))return;this.P(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}},{key:"P",value:function(e,t,i){var a;this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$Em!==e&&(null!==(a=this._$Ej)&&void 0!==a?a:this._$Ej=new Set).add(e)}},{key:"_$ET",value:(i=function(e){return function(){var t=this,i=arguments;return new Promise((function(a,r){var o=e.apply(t,i);function s(e){n(o,a,r,s,l,"next",e)}function l(e){n(o,a,r,s,l,"throw",e)}s(void 0)}))}}(v().mark((function e(){var t;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.isUpdatePending=!0,e.prev=1,e.next=4,this._$ES;case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),Promise.reject(e.t0);case 9:if(t=this.scheduleUpdate(),e.t1=null!=t,!e.t1){e.next=14;break}return e.next=14,t;case 14:return e.abrupt("return",!this.isUpdatePending);case 15:case"end":return e.stop()}}),e,this,[[1,6]])}))),function(){return i.apply(this,arguments)})},{key:"scheduleUpdate",value:function(){return this.performUpdate()}},{key:"performUpdate",value:function(){if(this.isUpdatePending){if(!this.hasUpdated){var e;if(null!==(e=this.renderRoot)&&void 0!==e||(this.renderRoot=this.createRenderRoot()),this._$Ep){var t,i=c(this._$Ep);try{for(i.s();!(t=i.n()).done;){var a=b(t.value,2),n=a[0],r=a[1];this[n]=r}}catch(e){i.e(e)}finally{i.f()}this._$Ep=void 0}var o=this.constructor.elementProperties;if(o.size>0){var s,l=c(o);try{for(l.s();!(s=l.n()).done;){var d=b(s.value,2),u=d[0],h=d[1];!0!==h.wrapped||this._$AL.has(u)||void 0===this[u]||this.P(u,this[u],h)}}catch(e){l.e(e)}finally{l.f()}}}var p=!1,m=this._$AL;try{var f;(p=this.shouldUpdate(m))?(this.willUpdate(m),null!==(f=this._$EO)&&void 0!==f&&f.forEach((function(e){var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(m)):this._$EU()}catch(m){throw p=!1,this._$EU(),m}p&&this._$AE(m)}}},{key:"willUpdate",value:function(e){}},{key:"_$AE",value:function(e){var t;null!==(t=this._$EO)&&void 0!==t&&t.forEach((function(e){var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}},{key:"_$EU",value:function(){this._$AL=new Map,this.isUpdatePending=!1}},{key:"updateComplete",get:function(){return this.getUpdateComplete()}},{key:"getUpdateComplete",value:function(){return this._$ES}},{key:"shouldUpdate",value:function(e){return!0}},{key:"update",value:function(e){var t=this;this._$Ej&&(this._$Ej=this._$Ej.forEach((function(e){return t._$EC(e,t[e])}))),this._$EU()}},{key:"updated",value:function(e){}},{key:"firstUpdated",value:function(e){}}],[{key:"addInitializer",value:function(e){var t;this._$Ei(),(null!==(t=this.l)&&void 0!==t?t:this.l=[]).push(e)}},{key:"observedAttributes",get:function(){return this.finalize(),this._$Eh&&w(this._$Eh.keys())}},{key:"createProperty",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:G;if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){var i=Symbol(),a=this.getPropertyDescriptor(e,i,t);void 0!==a&&N(this.prototype,e,a)}}},{key:"getPropertyDescriptor",value:function(e,t,i){var a,n=null!==(a=R(this.prototype,e))&&void 0!==a?a:{get:function(){return this[t]},set:function(e){this[t]=e}},r=n.get,o=n.set;return{get:function(){return null==r?void 0:r.call(this)},set:function(t){var a=null==r?void 0:r.call(this);o.call(this,t),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}},{key:"getPropertyOptions",value:function(e){var t;return null!==(t=this.elementProperties.get(e))&&void 0!==t?t:G}},{key:"_$Ei",value:function(){if(!this.hasOwnProperty(W("elementProperties"))){var e=D(this);e.finalize(),void 0!==e.l&&(this.l=w(e.l)),this.elementProperties=new Map(e.elementProperties)}}},{key:"finalize",value:function(){if(!this.hasOwnProperty(W("finalized"))){if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(W("properties"))){var e,t=this.properties,i=c([].concat(w(H(t)),w(I(t))));try{for(i.s();!(e=i.n()).done;){var a=e.value;this.createProperty(a,t[a])}}catch(e){i.e(e)}finally{i.f()}}var n=this[Symbol.metadata];if(null!==n){var r=litPropertyMetadata.get(n);if(void 0!==r){var o,s=c(r);try{for(s.s();!(o=s.n()).done;){var l=b(o.value,2),d=l[0],u=l[1];this.elementProperties.set(d,u)}}catch(e){s.e(e)}finally{s.f()}}}this._$Eh=new Map;var h,p=c(this.elementProperties);try{for(p.s();!(h=p.n()).done;){var m=b(h.value,2),f=m[0],g=m[1],v=this._$Eu(f,g);void 0!==v&&this._$Eh.set(v,f)}}catch(e){p.e(e)}finally{p.f()}this.elementStyles=this.finalizeStyles(this.styles)}}},{key:"finalizeStyles",value:function(e){var t=[];if(Array.isArray(e)){var i,a=c(new Set(e.flat(1/0).reverse()));try{for(a.s();!(i=a.n()).done;){var n=i.value;t.unshift(U(n))}}catch(e){a.e(e)}finally{a.f()}}else void 0!==e&&t.push(U(e));return t}},{key:"_$Eu",value:function(e,t){var i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}}]);var i}(A(HTMLElement));Y.elementStyles=[],Y.shadowRootOptions={mode:"open"},Y[W("elementProperties")]=new Map,Y[W("finalized")]=new Map,null!=V&&V({ReactiveElement:Y}),(null!==(O=B.reactiveElementVersions)&&void 0!==O?O:B.reactiveElementVersions=[]).push("2.0.4");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var Q=globalThis,X=Q.trustedTypes,ee=X?X.createPolicy("lit-html",{createHTML:function(e){return e}}):void 0,te="$lit$",ie="lit$".concat(Math.random().toFixed(9).slice(2),"$"),ae="?"+ie,ne="<".concat(ae,">"),re=document,oe=function(){return re.createComment("")},se=function(e){return null===e||"object"!=$(e)&&"function"!=typeof e},le=Array.isArray,ce="[ \t\n\f\r]",de=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ue=/-->/g,he=/>/g,pe=RegExp(">|".concat(ce,"(?:([^\\s\"'>=/]+)(").concat(ce,"*=").concat(ce,"*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"),"g"),me=/'/g,fe=/"/g,ge=/^(?:script|style|textarea|title)$/i,ve=function(e){return function(t){for(var i=arguments.length,a=new Array(i>1?i-1:0),n=1;n<i;n++)a[n-1]=arguments[n];return{_$litType$:e,strings:t,values:a}}}(1),_e=Symbol.for("lit-noChange"),be=Symbol.for("lit-nothing"),ye=new WeakMap,we=re.createTreeWalker(re,129);function ke(e,t){if(!le(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==ee?ee.createHTML(t):t}var $e=function(){return l((function e(t,i){var a,n=t.strings,r=t._$litType$;o(this,e),this.parts=[];var s=0,l=0,d=n.length-1,u=this.parts,h=function(e,t){for(var i,a=e.length-1,n=[],r=2===t?"<svg>":3===t?"<math>":"",o=de,s=0;s<a;s++){for(var l=e[s],c=void 0,d=void 0,u=-1,h=0;h<l.length&&(o.lastIndex=h,null!==(d=o.exec(l)));){var p;h=o.lastIndex,o===de?"!--"===d[1]?o=ue:void 0!==d[1]?o=he:void 0!==d[2]?(ge.test(d[2])&&(i=RegExp("</"+d[2],"g")),o=pe):void 0!==d[3]&&(o=pe):o===pe?">"===d[0]?(o=null!==(p=i)&&void 0!==p?p:de,u=-1):void 0===d[1]?u=-2:(u=o.lastIndex-d[2].length,c=d[1],o=void 0===d[3]?pe:'"'===d[3]?fe:me):o===fe||o===me?o=pe:o===ue||o===he?o=de:(o=pe,i=void 0)}var m=o===pe&&e[s+1].startsWith("/>")?" ":"";r+=o===de?l+ne:u>=0?(n.push(c),l.slice(0,u)+te+l.slice(u)+ie+m):l+ie+(-2===u?s:m)}return[ke(e,r+(e[a]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),n]}(n,r),p=b(h,2),m=p[0],f=p[1];if(this.el=e.createElement(m,i),we.currentNode=this.el.content,2===r||3===r){var g=this.el.content.firstChild;g.replaceWith.apply(g,w(g.childNodes))}for(;null!==(a=we.nextNode())&&u.length<d;){if(1===a.nodeType){if(a.hasAttributes()){var v,_=c(a.getAttributeNames());try{for(_.s();!(v=_.n()).done;){var y=v.value;if(y.endsWith(te)){var k=f[l++],$=a.getAttribute(y).split(ie),x=/([.?@])?(.*)/.exec(k);u.push({type:1,index:s,name:x[2],strings:$,ctor:"."===x[1]?Oe:"?"===x[1]?Ee:"@"===x[1]?je:Ce}),a.removeAttribute(y)}else y.startsWith(ie)&&(u.push({type:6,index:s}),a.removeAttribute(y))}}catch(e){_.e(e)}finally{_.f()}}if(ge.test(a.tagName)){var A=a.textContent.split(ie),S=A.length-1;if(S>0){a.textContent=X?X.emptyScript:"";for(var C=0;C<S;C++)a.append(A[C],oe()),we.nextNode(),u.push({type:2,index:++s});a.append(A[S],oe())}}}else if(8===a.nodeType)if(a.data===ae)u.push({type:2,index:s});else for(var O=-1;-1!==(O=a.data.indexOf(ie,O+1));)u.push({type:7,index:s}),O+=ie.length-1;s++}}),null,[{key:"createElement",value:function(e,t){var i=re.createElement("template");return i.innerHTML=e,i}}])}();function xe(e,t){var i,a,n,r,o,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e,l=arguments.length>3?arguments[3]:void 0;if(t===_e)return t;var c=void 0!==l?null===(i=s.o)||void 0===i?void 0:i[l]:s.l,d=se(t)?void 0:t._$litDirective$;return(null===(a=c)||void 0===a?void 0:a.constructor)!==d&&(null!==(n=c)&&void 0!==n&&null!==(r=n._$AO)&&void 0!==r&&r.call(n,!1),void 0===d?c=void 0:(c=new d(e))._$AT(e,s,l),void 0!==l?(null!==(o=s.o)&&void 0!==o?o:s.o=[])[l]=c:s.l=c),void 0!==c&&(t=xe(e,c._$AS(e,t.values),c,l)),t}var Ae=function(){return l((function e(t,i){o(this,e),this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}),[{key:"parentNode",get:function(){return this._$AM.parentNode}},{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"u",value:function(e){var t,i=this._$AD,a=i.el.content,n=i.parts,r=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:re).importNode(a,!0);we.currentNode=r;for(var o=we.nextNode(),s=0,l=0,c=n[0];void 0!==c;){var d;if(s===c.index){var u=void 0;2===c.type?u=new Se(o,o.nextSibling,this,e):1===c.type?u=new c.ctor(o,c.name,c.strings,this,e):6===c.type&&(u=new Pe(o,this,e)),this._$AV.push(u),c=n[++l]}s!==(null===(d=c)||void 0===d?void 0:d.index)&&(o=we.nextNode(),s++)}return we.currentNode=re,r}},{key:"p",value:function(e){var t,i=0,a=c(this._$AV);try{for(a.s();!(t=a.n()).done;){var n=t.value;void 0!==n&&(void 0!==n.strings?(n._$AI(e,n,i),i+=n.strings.length-2):n._$AI(e[i])),i++}}catch(e){a.e(e)}finally{a.f()}}}])}(),Se=function(){function e(t,i,a,n){var r;o(this,e),this.type=2,this._$AH=be,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=a,this.options=n,this.v=null===(r=null==n?void 0:n.isConnected)||void 0===r||r}return l(e,[{key:"_$AU",get:function(){var e,t;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this.v}},{key:"parentNode",get:function(){var e,t=this._$AA.parentNode,i=this._$AM;return void 0!==i&&11===(null===(e=t)||void 0===e?void 0:e.nodeType)&&(t=i.parentNode),t}},{key:"startNode",get:function(){return this._$AA}},{key:"endNode",get:function(){return this._$AB}},{key:"_$AI",value:function(e){e=xe(this,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this),se(e)?e===be||null==e||""===e?(this._$AH!==be&&this._$AR(),this._$AH=be):e!==this._$AH&&e!==_e&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):function(e){return le(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator])}(e)?this.k(e):this._(e)}},{key:"O",value:function(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}},{key:"T",value:function(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}},{key:"_",value:function(e){this._$AH!==be&&se(this._$AH)?this._$AA.nextSibling.data=e:this.T(re.createTextNode(e)),this._$AH=e}},{key:"$",value:function(e){var t,i=e.values,a=e._$litType$,n="number"==typeof a?this._$AC(e):(void 0===a.el&&(a.el=$e.createElement(ke(a.h,a.h[0]),this.options)),a);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===n)this._$AH.p(i);else{var r=new Ae(n,this),o=r.u(this.options);r.p(i),this.T(o),this._$AH=r}}},{key:"_$AC",value:function(e){var t=ye.get(e.strings);return void 0===t&&ye.set(e.strings,t=new $e(e)),t}},{key:"k",value:function(t){le(this._$AH)||(this._$AH=[],this._$AR());var i,a,n=this._$AH,r=0,o=c(t);try{for(o.s();!(a=o.n()).done;){var s=a.value;r===n.length?n.push(i=new e(this.O(oe()),this.O(oe()),this,this.options)):i=n[r],i._$AI(s),r++}}catch(e){o.e(e)}finally{o.f()}r<n.length&&(this._$AR(i&&i._$AB.nextSibling,r),n.length=r)}},{key:"_$AR",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,t=arguments.length>1?arguments[1]:void 0;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,t);e&&e!==this._$AB;){var i,a=e.nextSibling;e.remove(),e=a}}},{key:"setConnected",value:function(e){var t;void 0===this._$AM&&(this.v=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}])}(),Ce=function(){return l((function e(t,i,a,n,r){o(this,e),this.type=1,this._$AH=be,this._$AN=void 0,this.element=t,this.name=i,this._$AM=n,this.options=r,a.length>2||""!==a[0]||""!==a[1]?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=be}),[{key:"tagName",get:function(){return this.element.tagName}},{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"_$AI",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,i=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0,n=this.strings,r=!1;if(void 0===n)e=xe(this,e,t,0),(r=!se(e)||e!==this._$AH&&e!==_e)&&(this._$AH=e);else{var o,s,l=e;for(e=n[0],o=0;o<n.length-1;o++){var c;(s=xe(this,l[i+o],t,o))===_e&&(s=this._$AH[o]),r||(r=!se(s)||s!==this._$AH[o]),s===be?e=be:e!==be&&(e+=(null!==(c=s)&&void 0!==c?c:"")+n[o+1]),this._$AH[o]=s}}r&&!a&&this.j(e)}},{key:"j",value:function(e){e===be?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}])}(),Oe=function(e){function t(){var e;return o(this,t),(e=r(this,t,arguments)).type=3,e}return p(t,e),l(t,[{key:"j",value:function(e){this.element[this.name]=e===be?void 0:e}}])}(Ce),Ee=function(e){function t(){var e;return o(this,t),(e=r(this,t,arguments)).type=4,e}return p(t,e),l(t,[{key:"j",value:function(e){this.element.toggleAttribute(this.name,!!e&&e!==be)}}])}(Ce),je=function(e){function t(e,i,a,n,s){var l;return o(this,t),(l=r(this,t,[e,i,a,n,s])).type=5,l}return p(t,e),l(t,[{key:"_$AI",value:function(e){var t;if((e=null!==(t=xe(this,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,0))&&void 0!==t?t:be)!==_e){var i=this._$AH,a=e===be&&i!==be||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==be&&(i===be||a);a&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}}},{key:"handleEvent",value:function(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!==(t=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==t?t:this.element,e):this._$AH.handleEvent(e)}}])}(Ce),Pe=function(){return l((function e(t,i,a){o(this,e),this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=a}),[{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"_$AI",value:function(e){xe(this,e)}}])}(),ze=Q.litHtmlPolyfillSupport;null!=ze&&ze($e,Se),(null!==(J=Q.litHtmlVersions)&&void 0!==J?J:Q.litHtmlVersions=[]).push("3.2.0");var Te,Me,Ue=function(e){function t(){var e;return o(this,t),(e=r(this,t,arguments)).renderOptions={host:a(e)},e.o=void 0,e}return p(t,e),l(t,[{key:"createRenderRoot",value:function(){var e,i,a=y(t,"createRenderRoot",this)([]);return null!==(i=(e=this.renderOptions).renderBefore)&&void 0!==i||(e.renderBefore=a.firstChild),a}},{key:"update",value:function(e){var i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),y(t,"update",this)([e]),this.o=function(e,t,i){var a,n=null!==(a=null==i?void 0:i.renderBefore)&&void 0!==a?a:t,r=n._$litPart$;if(void 0===r){var o,s=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;n._$litPart$=r=new Se(t.insertBefore(oe(),s),s,void 0,null!=i?i:{})}return r._$AI(e),r}(i,this.renderRoot,this.renderOptions)}},{key:"connectedCallback",value:function(){var e;y(t,"connectedCallback",this)([]),null===(e=this.o)||void 0===e||e.setConnected(!0)}},{key:"disconnectedCallback",value:function(){var e;y(t,"disconnectedCallback",this)([]),null===(e=this.o)||void 0===e||e.setConnected(!1)}},{key:"render",value:function(){return _e}}])}(Y);Ue._$litElement$=!0,Ue.finalized=!0,null===(Te=globalThis.litElementHydrateSupport)||void 0===Te||Te.call(globalThis,{LitElement:Ue});var Le=globalThis.litElementPolyfillSupport;null==Le||Le({LitElement:Ue}),(null!==(Me=globalThis.litElementVersions)&&void 0!==Me?Me:globalThis.litElementVersions=[]).push("4.1.0");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var Ne,Re,He=function(e){return function(t,i){void 0!==i?i.addInitializer((function(){customElements.define(e,t)})):customElements.define(e,t)}},Ie={attribute:!0,type:String,converter:K,reflect:!1,hasChanged:Z},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0,i=arguments.length>2?arguments[2]:void 0,a=i.kind,n=i.metadata,r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),r.set(i.name,e),"accessor"===a){var o=i.name;return{set:function(i){var a=t.get.call(this);t.set.call(this,i),this.requestUpdate(o,a,e)},init:function(t){return void 0!==t&&this.P(o,void 0,e),t}}}if("setter"===a){var s=i.name;return function(i){var a=this[s];t.call(this,i),this.requestUpdate(s,a,e)}}throw Error("Unsupported decorator location: "+a)};
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function Be(e){return function(t,i){return"object"==$(i)?De(e,t,i):function(e,t,i){var a=t.hasOwnProperty(i);return t.constructor.createProperty(i,a?g(g({},e),{},{wrapped:!0}):e),a?Object.getOwnPropertyDescriptor(t,i):void 0}(e,t,i)}}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function qe(e){return Be(g(g({},e),{},{state:!0,attribute:!1}))}function Fe(e){return e.substr(0,e.indexOf("."))}!function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(Ne||(Ne={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(Re||(Re={}));var Ve=function(e,t,i,a){a=a||{},i=null==i?{}:i;var n=new Event(t,{bubbles:void 0===a.bubbles||a.bubbles,cancelable:Boolean(a.cancelable),composed:void 0===a.composed||a.composed});return n.detail=i,e.dispatchEvent(n),n},We={alert:"mdi:alert",automation:"mdi:playlist-play",calendar:"mdi:calendar",camera:"mdi:video",climate:"mdi:thermostat",configurator:"mdi:settings",conversation:"mdi:text-to-speech",device_tracker:"mdi:account",fan:"mdi:fan",group:"mdi:google-circles-communities",history_graph:"mdi:chart-line",homeassistant:"mdi:home-assistant",homekit:"mdi:home-automation",image_processing:"mdi:image-filter-frames",input_boolean:"mdi:drawing",input_datetime:"mdi:calendar-clock",input_number:"mdi:ray-vertex",input_select:"mdi:format-list-bulleted",input_text:"mdi:textbox",light:"mdi:lightbulb",mailbox:"mdi:mailbox",notify:"mdi:comment-alert",person:"mdi:account",plant:"mdi:flower",proximity:"mdi:apple-safari",remote:"mdi:remote",scene:"mdi:google-pages",script:"mdi:file-document",sensor:"mdi:eye",simple_alarm:"mdi:bell",sun:"mdi:white-balance-sunny",switch:"mdi:flash",timer:"mdi:timer",updater:"mdi:cloud-upload",vacuum:"mdi:robot-vacuum",water_heater:"mdi:thermometer",weblink:"mdi:open-in-new"};function Ke(e,t){if(e in We)return We[e];switch(e){case"alarm_control_panel":switch(t){case"armed_home":return"mdi:bell-plus";case"armed_night":return"mdi:bell-sleep";case"disarmed":return"mdi:bell-outline";case"triggered":return"mdi:bell-ring";default:return"mdi:bell"}case"binary_sensor":return t&&"off"===t?"mdi:radiobox-blank":"mdi:checkbox-marked-circle";case"cover":return"closed"===t?"mdi:window-closed":"mdi:window-open";case"lock":return t&&"unlocked"===t?"mdi:lock-open":"mdi:lock";case"media_player":return t&&"off"!==t&&"idle"!==t?"mdi:cast-connected":"mdi:cast";case"zwave":switch(t){case"dead":return"mdi:emoticon-dead";case"sleeping":return"mdi:sleep";case"initializing":return"mdi:timer-sand";default:return"mdi:z-wave"}default:return console.warn("Unable to find icon for domain "+e+" ("+t+")"),"mdi:bookmark"}}var Ze={humidity:"mdi:water-percent",illuminance:"mdi:brightness-5",temperature:"mdi:thermometer",pressure:"mdi:gauge",power:"mdi:flash",signal_strength:"mdi:wifi"},Ge={binary_sensor:function(e,t){var i="off"===e;switch(null==t?void 0:t.attributes.device_class){case"battery":return i?"mdi:battery":"mdi:battery-outline";case"battery_charging":return i?"mdi:battery":"mdi:battery-charging";case"cold":return i?"mdi:thermometer":"mdi:snowflake";case"connectivity":return i?"mdi:server-network-off":"mdi:server-network";case"door":return i?"mdi:door-closed":"mdi:door-open";case"garage_door":return i?"mdi:garage":"mdi:garage-open";case"power":case"plug":return i?"mdi:power-plug-off":"mdi:power-plug";case"gas":case"problem":case"safety":case"tamper":return i?"mdi:check-circle":"mdi:alert-circle";case"smoke":return i?"mdi:check-circle":"mdi:smoke";case"heat":return i?"mdi:thermometer":"mdi:fire";case"light":return i?"mdi:brightness-5":"mdi:brightness-7";case"lock":return i?"mdi:lock":"mdi:lock-open";case"moisture":return i?"mdi:water-off":"mdi:water";case"motion":return i?"mdi:walk":"mdi:run";case"occupancy":case"presence":return i?"mdi:home-outline":"mdi:home";case"opening":return i?"mdi:square":"mdi:square-outline";case"running":return i?"mdi:stop":"mdi:play";case"sound":return i?"mdi:music-note-off":"mdi:music-note";case"update":return i?"mdi:package":"mdi:package-up";case"vibration":return i?"mdi:crop-portrait":"mdi:vibrate";case"window":return i?"mdi:window-closed":"mdi:window-open";default:return i?"mdi:radiobox-blank":"mdi:checkbox-marked-circle"}},cover:function(e){var t="closed"!==e.state;switch(e.attributes.device_class){case"garage":return t?"mdi:garage-open":"mdi:garage";case"door":return t?"mdi:door-open":"mdi:door-closed";case"shutter":return t?"mdi:window-shutter-open":"mdi:window-shutter";case"blind":return t?"mdi:blinds-open":"mdi:blinds";case"window":return t?"mdi:window-open":"mdi:window-closed";default:return Ke("cover",e.state)}},sensor:function(e){var t=e.attributes.device_class;if(t&&t in Ze)return Ze[t];if("battery"===t){var i=Number(e.state);if(isNaN(i))return"mdi:battery-unknown";var a=10*Math.round(i/10);return a>=100?"mdi:battery":a<=0?"mdi:battery-alert":"hass:battery-"+a}var n=e.attributes.unit_of_measurement;return"°C"===n||"°F"===n?"mdi:thermometer":Ke("sensor")},input_datetime:function(e){return e.attributes.has_date?e.attributes.has_time?Ke("input_datetime"):"mdi:calendar":"mdi:clock"}};const Je=["1","2","3","4","5","6","7","8","9","","0","clear"],Ye="number";var Qe;!function(e){e.Disarmed="disarmed",e.Arming="arming",e.Pending="pending",e.Triggered="triggered",e.ArmedAway="armed_away",e.ArmedHome="armed_home",e.ArmedNight="armed_night",e.ArmedVacation="armed_vacation",e.ArmedCustomBypass="armed_custom_bypass"}(Qe||(Qe={}));const Xe={[Qe.ArmedAway]:"hass:shield-lock",[Qe.ArmedHome]:"hass:shield-home",[Qe.ArmedNight]:"hass:shield-moon",[Qe.ArmedVacation]:"hass:shield-airplane",[Qe.ArmedCustomBypass]:"hass:security",[Qe.Disarmed]:"hass:shield-off",[Qe.Arming]:"hass:shield-outline",[Qe.Pending]:"hass:shield-outline",[Qe.Triggered]:"hass:bell-ring"};var et;!function(e){e.ArmAway="arm_away",e.ArmHome="arm_home",e.ArmNight="arm_night",e.ArmVacation="arm_vacation",e.ArmCustomBypass="arm_custom_bypass",e.Disarm="disarm",e.SwitchMode="switch_mode"}(et||(et={}));const tt={[et.ArmAway]:Qe.ArmedAway,[et.ArmHome]:Qe.ArmedHome,[et.ArmNight]:Qe.ArmedNight,[et.ArmVacation]:Qe.ArmedVacation,[et.ArmCustomBypass]:Qe.ArmedCustomBypass,[et.Disarm]:Qe.Disarmed};var it;!function(e){e.Arm="arm",e.Trigger="trigger",e.FailedToArm="failed_to_arm",e.CommandNotAllowed="command_not_allowed",e.NoCodeProvided="no_code_provided",e.InvalidCodeProvided="invalid_code_provided",e.TriggerTimeExpired="trigger_time_expired",e.ReadyToArmModesChanged="ready_to_arm_modes_changed"}(it||(it={}));const at=["arming","pending"],nt={type:"",entity:"",name:"",keep_keypad_visible:!1,use_clear_icon:!1,button_scale_actions:1,button_scale_keypad:1,states:{},show_messages:!0,show_ready_indicator:!0,show_bypassed_sensors:!0,pending_sound:""},rt=2.5,ot={skip_delay:!1,force:!1};var st={heading:"Možnosti aktivace",skip_delay:"Přeskočit čas pro vystup",force:"Bypass otevřených senzorů"},lt={keep_keypad_visible:"Zachovat klávesnici vždy viditelnou, i když není vyžadován žádný kód.",button_scale_actions:"Měřítko použité pro změnu velikosti tlačítek akcí.",button_scale_keypad:"Měřítko použité pro změnu velikosti tlačítek klávesnice.",use_clear_icon:"Zobrazit ikonu (namísto textu) na klávesnici pro vymazání zadávaného kódu.",show_messages:"Zobrazit diagnostické zprávy při spuštění alarmu nebo nemožnosti aktivace.",show_ready_indicator:"Zobrazit indikátor připraveno/nepřipraveno na tlačítkách režimu aktivace.",show_bypassed_sensors:"Zobrazit varování při aktivaci alarmu s přemostěnými senzory.",available_actions:"Dostupné akce:",action_dialog:{title:"Upravit zobrazení akce '{action}'",show_button:"Zobrazit tlačítko pro tuto akci",button_label:"Přepsat popisek tlačítka",state_label:"Přepsat popisek stavu"}},ct={blocking_sensors:"Nelze aktivovat kvůli následujícím senzorům",triggered_sensors:"Alarm byl spuštěn následujícími senzory",bypassed_sensors:"Jsou tam přemostěné senzory"},dt={arm_options:st,editor:lt,errors:ct},ut={heading:"Options for arming",skip_delay:"Skip exit delay",force:"Bypass open sensors"},ht={keep_keypad_visible:"Keep the keypad always visible, also when no code input is required.",button_scale_actions:"Scaling factor to apply for resizing the action buttons.",button_scale_keypad:"Scaling factor to apply for resizing the keypad buttons.",use_clear_icon:"Show icon (instead of text) in keypad for clearing code input.",show_messages:"Display diagnostic messages when alarm is triggered or cannot be armed.",show_ready_indicator:"Show ready/not ready indicator on arm mode buttons.",show_bypassed_sensors:"Show warning message when alarm is armed with bypassed sensors.",show_alarm_buttons_top:"Show action buttons at top of keypad, otherwise at bottom.",pending_sound:"Set a url to a soundclip that should be played when alarm is pending.",available_actions:"Available actions:",action_dialog:{title:"Customize display of action '{action}'",show_button:"Show button for this action",button_label:"Override button label",state_label:"Override state label"}},pt={blocking_sensors:"Could not arm due to the following sensors",triggered_sensors:"Alarm was triggered by the following sensors",bypassed_sensors:"There are bypassed sensors"},mt={arm_options:ut,editor:ht,errors:pt},ft={heading:"Opciones de armado",skip_delay:"Omitir el retardo de salida",force:"Pasar por alto los sensores abiertos"},gt={keep_keypad_visible:"Mantener el teclado siempre visible, también cuando no se requiere ninguna entrada de código.",button_scale_actions:"Factor de escalado para cambiar el tamaño de los botones de acción.",button_scale_keypad:"Factor de escalado para cambiar el tamaño de los botones del teclado.",use_clear_icon:"Mostrar icono (en lugar de texto) en el teclado para borrar la entrada de código.",show_messages:"Mostrar mensajes de diagnóstico cuando se activa la alarma o no se puede activar.",show_ready_indicator:"Mostrar indicador listo/no listo en los botones de modo armado.",show_bypassed_sensors:"Mostrar advertencia cuando la alarma está activada con sensores omitidos.",available_actions:"Acciones disponibles:",action_dialog:{title:"Personalizar la visualización de la acción '{action}'",show_button:"mostrar botón para esta acción",button_label:"Sobrescribir el texto del botón",state_label:"Sobrescribir el texto de estado"}},vt={blocking_sensors:"No se pudo armar debido a los siguientes sensores",triggered_sensors:"La alarma fue disparada por los siguientes sensores",bypassed_sensors:"Hay sensores omitidos"},_t={arm_options:ft,editor:gt,errors:vt},bt={heading:"Options pour l'armement",skip_delay:"Ignorer le délai de sortie",force:"Bypasser les capteurs ouverts"},yt={keep_keypad_visible:"Gardez le clavier toujours visible, même lorsqu'aucune saisie de code n'est requise.",button_scale_actions:"Facteur d'échelle à appliquer pour le redimensionnement des boutons des actions.",button_scale_keypad:"Facteur d'échelle à appliquer pour le redimensionnement des boutons du clavier.",use_clear_icon:"Afficher l'icône (au lieu du texte) sur le clavier pour effacer la saisie du code.",show_messages:"Afficher les messages de diagnostic lorsque l'alarme est déclenchée ou ne peut pas être armée.",show_ready_indicator:"Afficher l'indicateur prêt/pas prêt sur les boutons de mode d'armement.",show_bypassed_sensors:"Afficher un avertissement lorsque l'alarme est armée avec des capteurs ignorés.",available_actions:"Actions disponibles:",action_dialog:{title:"Personnaliser l'affichage de l'action '{action}'",show_button:"Afficher le bouton pour cette action",button_label:"Remplacer le libellé du bouton",state_label:"Remplacer l'étiquette d'état"}},wt={blocking_sensors:"Impossible d'armer en raison du(es) capteur(s) suivant(s)",triggered_sensors:"L'alarme a été déclenchée par le(s) capteur(s) suivant(s)",bypassed_sensors:"Il y a des capteurs ignorés"},kt={arm_options:bt,editor:yt,errors:wt},$t={heading:"Opzioni di inserimento",skip_delay:"Ignorare il ritardo di uscita",force:"Ignorare i sensori aperti"},xt={keep_keypad_visible:"Mantenere la tastiera sempre visibile, anche quando nessun codice è richiesto.",button_scale_actions:"Fattore di scala da applicare per ridimensionare i pulsanti di azione.",button_scale_keypad:"Fattore di scala da applicare per ridimensionare i pulsanti della tastiera.",use_clear_icon:"Mostrare l'icona (invece del testo) sulla tastiera per cancellare il codice digitato.",show_messages:"Mostrare messaggi diagnostici quando l'allarme viene attivato o non può essere inserito.",show_ready_indicator:"Mostra l'indicatore pronto/non pronto sui pulsanti della modalità di inserimento.",show_bypassed_sensors:"Mostra avviso quando l'allarme è armato con sensori esclusi.",available_actions:"Azioni disponibili:",action_dialog:{title:"Personalizzare la visualizzazione dell'azione '{action}'",show_button:"Mostra il pulsante per questa azione",button_label:"Sovrascrivere l'etichetta del pulsante",state_label:"Sovrascrivere l'etichetta di stato"}},At={blocking_sensors:"Impossibile inserire l'allarme a causa dei seguenti sensori",triggered_sensors:"L'allarme è stato attivato dai seguenti sensori",bypassed_sensors:"Sono presenti sensori esclusi"},St={arm_options:$t,editor:xt,errors:At},Ct={heading:"Opties voor inschakelen",skip_delay:"Sla vertraging over",force:"Negeer open sensoren"},Ot={keep_keypad_visible:"Houd het keypad altijd zichtbaar, ook wanneer er geen code vereist is.",button_scale_actions:"Schaalfactor actieknoppen",button_scale_keypad:"Schaalfactor keypadknoppen",use_clear_icon:"Toon pictogram (in plaats van tekst) in keypad om code-invoer te wissen.",show_messages:"Toon diagnostische berichten wanneer het alarm wordt geactiveerd of niet kan worden ingeschakeld.",show_ready_indicator:"Toon gereed/niet gereed-indicator op inschakelmodusknoppen.",show_bypassed_sensors:"Toon melding wanneer het alarm is ingeschakeld met omzeilde sensoren.",available_actions:"Beschikbare acties:",action_dialog:{title:"Weergave van actie '{action}' aanpassen",show_button:"Toon knop voor deze actie",button_label:"Knoplabel overschrijven",state_label:"Statuslabel overschrijven"}},Et={blocking_sensors:"Kon niet inschakelen vanwege de volgende sensoren",triggered_sensors:"Alarm werd geactiveerd door de volgende sensoren",bypassed_sensors:"Er zijn omzeilde sensoren"},jt={arm_options:Ct,editor:Ot,errors:Et},Pt={heading:"Opções para armar",skip_delay:"Omitir tempo para sair",force:"Ignorar os sensores abertos"},zt={keep_keypad_visible:"Mantenha o teclado sempre visível, mesmo quando não for necessária nenhuma entrada de código.",button_scale_actions:"Fator de escala para redimensionar botões de ação.",button_scale_keypad:"Fator de escala para redimensionar os botões do teclado.",use_clear_icon:"Mostre o ícone (em vez de texto) no teclado para limpar a entrada do código.",show_messages:"Mostrar mensagens de diagnóstico quando o alarme estiver disparado ou não puder ser armado.",show_ready_indicator:"Mostrar indicador de disponível/não disponível nos botões do modo de armar.",show_bypassed_sensors:"Mostrar aviso quando o alarme for ativado com sensores ignorados.",available_actions:"Ações disponíveis:",action_dialog:{title:"Personalize a exibição da ação '{action}'",show_button:"Mostrar botão para esta ação",button_label:"Substituir texto do botão",state_label:"Substituir texto de status"}},Tt={blocking_sensors:"Não foi possível armar devido aos seguintes sensores",triggered_sensors:"O alarme foi disparado pelos seguintes sensores",bypassed_sensors:"Existem sensores ignorados"},Mt={arm_options:Pt,editor:zt,errors:Tt},Ut={heading:"警戒选项",skip_delay:"跳过离开延迟",force:"绕过开放的传感器"},Lt={keep_keypad_visible:"保持小键盘总是可见，即使不需要输入密码",button_scale_actions:"调整动作按键大小的缩放系数",button_scale_keypad:"调整小键盘按键大小的缩放系数",use_clear_icon:"在小键盘上显示图标（而不是文字），用于清除密码输入。",show_messages:"当警报被触发或无法警戒时，显示诊断信息。",show_ready_indicator:"在手臂模式按钮上显示就绪/未就绪指示器。",show_bypassed_sensors:"当警报配备旁路传感器时显示警告消息。",available_actions:"可用动作：",action_dialog:{title:"自定义动作'{action}'的显示",show_button:"显示此操作的按钮",button_label:"覆盖按钮标签",state_label:"覆盖状态标签"}},Nt={blocking_sensors:"由于以下传感器而无法警戒",triggered_sensors:"警报是由以下传感器触发的",bypassed_sensors:"有绕过的传感器"},Rt={arm_options:Ut,editor:Lt,errors:Nt},Ht={cs:Object.freeze({__proto__:null,arm_options:st,default:dt,editor:lt,errors:ct}),en:Object.freeze({__proto__:null,arm_options:ut,default:mt,editor:ht,errors:pt}),es:Object.freeze({__proto__:null,arm_options:ft,default:_t,editor:gt,errors:vt}),fr:Object.freeze({__proto__:null,arm_options:bt,default:kt,editor:yt,errors:wt}),it:Object.freeze({__proto__:null,arm_options:$t,default:St,editor:xt,errors:At}),nl:Object.freeze({__proto__:null,arm_options:Ct,default:jt,editor:Ot,errors:Et}),"pt-BR":Object.freeze({__proto__:null,arm_options:Pt,default:Mt,editor:zt,errors:Tt}),"zh-Hans":Object.freeze({__proto__:null,arm_options:Ut,default:Rt,editor:Lt,errors:Nt})};function It(e,t,i="",a=""){const n=t.replace(/['"]+/g,"").replace("-","_");var r;try{r=e.split(".").reduce(((e,t)=>e[t]),Ht[n])}catch(t){r=e.split(".").reduce(((e,t)=>e[t]),Ht.en)}if(void 0===r&&(r=e.split(".").reduce(((e,t)=>e[t]),Ht.en)),""!==i&&""!==a){Array.isArray(i)||(i=[i]),Array.isArray(a)||(a=[a]);for(let e=0;e<i.length;e++)r=r.replace(i[e],a[e])}return r}function Dt(e){return null!=e}function Bt(e){switch(typeof e){case"object":return 0==Object.keys(e).length;case"string":return 0==String(e).length;default:return!Dt(e)}}const qt=(e,t)=>{let i={hide:!1,button_label:"",state_label:""};return(t.states||{}).hasOwnProperty(e)&&(i=Object.assign(Object.assign({},i),t.states[e])),i},Ft=e=>{if(!e)return[];const t=e.attributes.supported_features||0;let i=[];return 2&t&&i.push(et.ArmAway),1&t&&i.push(et.ArmHome),4&t&&i.push(et.ArmNight),32&t&&i.push(et.ArmVacation),16&t&&i.push(et.ArmCustomBypass),i},Vt=(e,t,i)=>{const a=Fe(e.entity_id),n=e.attributes.device_class,r=e.state;if(Object.values(Qe).includes(r)&&i){const e=qt(r,i);if(!Bt(e.state_label))return e.state_label}let o="";return n&&(o=t(`component.${a}.entity_component.${n}.state.${e.state}`)),o||(o=t(`component.${a}.entity_component._.state.${e.state}`)),o},Wt=e=>null!==e.attributes.code_format,Kt=e=>e.callWS({type:"alarmo/entities"}),Zt=e=>e.callWS({type:"alarmo/config"});let Gt=class extends Ue{constructor(){super(...arguments),this._entities=null,this._editAction=null}async firstUpdated(){Kt(this.hass).then((e=>{this._entities=e.map((e=>e.entity_id))})).catch((e=>{var t;null===(t=this.hass)||void 0===t||t.callService("system_log","write",{message:`Failed to fetch entities: ${e}`,level:"error"})})),this._alarmoConfig=await Zt(this.hass)}setConfig(e){!(null==e?void 0:e.button_scale_actions)&&(null==e?void 0:e.button_scale)&&(e=Object.assign(Object.assign({},e),{button_scale_actions:null==e?void 0:e.button_scale})),!(null==e?void 0:e.button_scale_keypad)&&(null==e?void 0:e.button_scale)&&(e=Object.assign(Object.assign({},e),{button_scale_keypad:null==e?void 0:e.button_scale})),this._config=Object.assign(Object.assign({},nt),e)}render(){var e,t,i;if(!this._config||!this.hass||!this._entities)return ve``;if(!this._entities.length)return ve`
        <hui-warning>
          Could not establish a connection with the alarmo integration. Please check if it is installed and running.
        </hui-warning>
      `;const a=this._config.entity?this.hass.states[this._config.entity]:void 0,n=(null===(e=this._alarmoConfig)||void 0===e?void 0:e.code_format)===Ye&&(this._alarmoConfig.code_arm_required||this._alarmoConfig.code_disarm_required);if(null!==this._editAction){const e=qt(tt[this._editAction],this._config);return ve`
        <div class="header">
          <div class="back-title">
            <ha-icon-button
              .label=${this.hass.localize("ui.common.back")}
              .path=${"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"}
              @click=${this._goBack}
            ></ha-icon-button>
            <span slot="title"
              >${It("editor.action_dialog.title",this.hass.language,"{action}",this.hass.localize(`ui.card.alarm_control_panel.${this._editAction}`))}</span
            >
          </div>
        </div>

        <div class="checkbox-item">
          <ha-checkbox
            ?checked=${!e.hide}
            ?disabled=${!e.hide&&1==Ft(a).map((e=>tt[e])).filter((e=>!qt(e,this._config).hide)).length||this._editAction==et.Disarm}
            @change=${e=>this._updateStateConfig(tt[this._editAction],e.target.checked?{hide:void 0}:{hide:!0})}
          >
          </ha-checkbox>
          <span
            @click=${e=>{const t=e.target.previousElementSibling;t.click(),t.blur()}}
          >
            ${It("editor.action_dialog.show_button",this.hass.language)}
          </span>
        </div>

        <div class="grid">
          <ha-textfield
            label="${It("editor.action_dialog.button_label",this.hass.language)}"
            .value="${e.button_label||""}"
            placeholder="${this.hass.localize(`ui.card.alarm_control_panel.${this._editAction}`)}"
            ?disabled=${e.hide}
            @input=${e=>this._updateStateConfig(tt[this._editAction],{button_label:String(e.target.value).trim()})}
          ></ha-textfield>

          <ha-textfield
            label="${It("editor.action_dialog.state_label",this.hass.language)}"
            .value="${e.state_label||""}"
            placeholder="${this.hass.localize(`component.alarm_control_panel.entity_component._.state.${tt[this._editAction]}`)}"
            @input=${e=>this._updateStateConfig(tt[this._editAction],{state_label:String(e.target.value).trim()})}
          ></ha-textfield>
        </div>
      `}return ve`
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

        ${a?ve`
              <div class="config-item">
                <span>${It("editor.available_actions",this.hass.language)}</span>
              </div>
              <div class="config-row checkbox-list">
                ${[...Ft(a),et.Disarm].map((e=>{const t=Ft(a).map((e=>tt[e])),i=qt(tt[e],this._config).hide;return ve`
                    <div class="checkbox-item ${i?"disabled":""}">
                      <ha-checkbox
                        ?checked=${!i}
                        ?disabled=${!i&&1==t.filter((e=>!qt(e,this._config).hide)).length||e==et.Disarm}
                        @change=${t=>this._updateStateConfig(tt[e],t.target.checked?{hide:void 0}:{hide:!0})}
                      >
                      </ha-checkbox>
                      <span
                        @click=${e=>{const t=e.target.previousElementSibling;t.click(),t.blur()}}
                      >
                        ${this.hass.localize(`ui.card.alarm_control_panel.${e}`)}
                      </span>
                      <ha-icon-button
                        .path=${"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"}
                        style="color: var(--secondary-text-color); --mdc-icon-button-size: 42px"
                        ?disabled=${qt(tt[e],this._config).hide}
                        @click=${()=>this._editActionClick(e)}
                      >
                      </ha-icon-button>
                    </div>
                  `}))}
              </div>
            `:""}

        <div class="grid">
          <ha-formfield .label=${It("editor.button_scale_actions",this.hass.language)}>
            <ha-slider
              value=${this._config.button_scale_actions||1}
              @change=${e=>this._updateConfig("button_scale_actions",Number(e.target.value))}
              min="${1}"
              max="${rt}"
              step="0.1"
              pin
            ></ha-slider>
          </ha-formfield>

          <ha-formfield .label=${It("editor.button_scale_keypad",this.hass.language)}>
            <ha-slider
              value=${this._config.button_scale_keypad||1}
              @change=${e=>this._updateConfig("button_scale_keypad",Number(e.target.value))}
              min="${1}"
              max="${rt}"
              step="0.1"
              pin
              ?disabled=${!a||!n}
            ></ha-slider>
          </ha-formfield>

          <ha-formfield .label=${It("editor.use_clear_icon",this.hass.language)}>
            <ha-switch
              .checked=${this._config.use_clear_icon}
              @change=${e=>this._updateConfig("use_clear_icon",e.target.checked)}
              ?disabled=${!a||!n}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${It("editor.show_messages",this.hass.language)}>
            <ha-switch
              .checked=${this._config.show_messages||!Dt(this._config.show_messages)}
              @change=${e=>this._updateConfig("show_messages",e.target.checked)}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${It("editor.keep_keypad_visible",this.hass.language)}>
            <ha-switch
              .checked=${this._config.keep_keypad_visible}
              @change=${e=>this._updateConfig("keep_keypad_visible",e.target.checked)}
              ?disabled=${!a||!n||(null===(t=this._alarmoConfig)||void 0===t?void 0:t.code_arm_required)==(null===(i=this._alarmoConfig)||void 0===i?void 0:i.code_disarm_required)}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${It("editor.show_ready_indicator",this.hass.language)}>
            <ha-switch
              .checked=${this._config.show_ready_indicator}
              @change=${e=>this._updateConfig("show_ready_indicator",e.target.checked)}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${It("editor.show_bypassed_sensors",this.hass.language)}>
            <ha-switch
              .checked=${this._config.show_bypassed_sensors}
              @change=${e=>this._updateConfig("show_bypassed_sensors",e.target.checked)}
            ></ha-switch
          ></ha-formfield>

          <ha-textfield
            .label="${It("editor.pending_sound",this.hass.language)} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
            .value="${this._config.pending_sound||""}"
            @input=${e=>this._updateConfig("pending_sound",String(e.target.value).trim())}
          ></ha-textfield>

          <ha-formfield></ha-formfield>
        </div>
      </div>
    `}_updateConfig(e,t){if(this.hass){if(this._config=Object.assign(Object.assign({},this._config),{[e]:t}),"entity"==e){const e=this._config.entity?this.hass.states[this._config.entity]:void 0;e&&e.attributes.code_arm_required!=e.attributes.code_disarm_required||(this._config=Object.assign(Object.assign({},this._config),{keep_keypad_visible:!1}))}Ve(this,"config-changed",{config:this._config})}}_updateStateConfig(e,t){var i;const a=e=>function(e,t){return e?Object.entries(e).filter((([e])=>t.includes(e))).reduce(((e,[t,i])=>Object.assign(e,{[t]:i})),{}):{}}(e,Object.keys(e).filter((t=>!Bt(e[t]))));let n=(null===(i=this._config)||void 0===i?void 0:i.states)||{};const r=a(Object.assign(Object.assign({},n[e]),t));n=a(Object.assign(Object.assign({},n),{[e]:r})),this._updateConfig("states",n)}_editActionClick(e){this._editAction=e}_goBack(){this._editAction=null}static get styles(){return M`
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
      div.checkbox-list {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 0px 8px;
      }
      div.checkbox-item {
        display: flex;
        flex-direction: row;
        flex: 1 0 300px;
        font-size: 0.875rem;
        align-items: center;
      }
      div.checkbox-item.disabled {
        color: var(--disabled-text-color);
      }
      .checkbox-item span {
        cursor: pointer;
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
    `}};t([Be({attribute:!1})],Gt.prototype,"hass",void 0),t([qe()],Gt.prototype,"_config",void 0),t([qe()],Gt.prototype,"_alarmoConfig",void 0),t([qe()],Gt.prototype,"_entities",void 0),t([qe()],Gt.prototype,"_editAction",void 0),Gt=t([He("alarmo-card-editor")],Gt);var Jt=Object.freeze({__proto__:null,get AlarmoCardEditor(){return Gt}});class Yt extends Ue{constructor(){super(...arguments),this.duration=0,this.datetime=null,this.timer=0}shouldUpdate(e){if(!e.size)return!0;const t=e.get("hass");if(!t||t.themes!==this.hass.themes||t.language!==this.hass.language)return!0;if(t.states[this.entity].state!==this.hass.states[this.entity].state||t.states[this.entity].attributes.delay!==this.hass.states[this.entity].attributes.delay){const e=t.states[this.entity].state,i=this.hass.states[this.entity].state;return at.includes(i)?this.startTimer():at.includes(e)&&this.stopTimer(),!0}return!1}firstUpdated(){const e=this.hass.states[this.entity].state;at.includes(e)&&this.startTimer()}async startTimer(){var e,t;clearInterval(this.timer),(e=this.hass,t=this.entity,e.callWS({type:"alarmo/countdown",entity_id:t})).then((e=>{this.duration=e.delay,this.datetime=new Date((new Date).getTime()+1e3*e.remaining)})).catch((e=>{})),this.timer=window.setInterval((()=>{this.requestUpdate()}),1e3)}stopTimer(){clearInterval(this.timer),this.datetime=null,this.duration=0}getRemaining(){if(!this.datetime)return 0;const e=(this.datetime.getTime()-(new Date).getTime())/1e3;return e<0?(clearInterval(this.timer),0):e}getFraction(){return this.duration?(Math.round(this.getRemaining())-1)/this.duration:1}_stateValue(e){return this.datetime&&this.duration?ve` ${Math.max(Math.round(this.getRemaining()),0)} `:ve` <ha-icon .icon=${Xe[e]}></ha-icon> `}render(){let e=45,t=2*Math.PI*e;const i=this.hass.states[this.entity],a=this.datetime&&this.duration;return ve`
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
    `}}t([Be()],Yt.prototype,"hass",void 0),t([Be()],Yt.prototype,"entity",void 0),customElements.define("alarmo-state-badge",Yt);class Qt extends Ue{shouldUpdate(e){const t=e.get("hass");return!t||!(!this.entity||t.states[this.entity]===this.hass.states[this.entity])}render(){if(!this.hass||!this.entity)return ve``;const e=this.entity in this.hass.states;let t=Object.assign({},this.hass.states[this.entity]);void 0!==this.state&&(t=Object.assign(Object.assign({},t),{state:this.state}));const i=e?function(e){if(!e)return"mdi:bookmark";if(e.attributes.icon)return e.attributes.icon;var t=Fe(e.entity_id);return t in Ge?Ge[t](e):Ke(t,e.state)}(t):"mdi:help-circle-outline",a=e?Vt(t,this.hass.localize):this.hass.localize("state.default.unavailable",this.hass.locale||{language:this.hass.language,number_format:Ne.language}),n=e?t.attributes.friendly_name||function(e){return e.substr(e.indexOf(".")+1)}(t.entity_id):this.entity;let r=!!this.state||"on"==t.state;return ve`
      <div class="badge-container" @click=${()=>Ve(this,"hass-more-info",{entityId:this.entity})}>
        <div class="label-badge ${r?"active":""}" id="badge">
          <div class="value">
            <ha-icon .icon=${i}></ha-icon>
            <div class="label">
              <span>${a}</span>
            </div>
          </div>
        </div>
        <div class="title">${n}</div>
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
    `}}t([Be()],Qt.prototype,"hass",void 0),t([Be()],Qt.prototype,"entity",void 0),t([Be()],Qt.prototype,"state",void 0),customElements.define("alarmo-sensor-badge",Qt);class Xt extends Ue{constructor(){super(...arguments),this.disabled=!1,this.scaled=!1}render(){return ve`
      ${this.scaled?ve`
            <button ?disabled=${this.disabled}>
              <slot></slot>
            </button>
          `:ve`
            <mwc-button ?disabled=${this.disabled} ?outlined=${!this.disabled}>
              <slot></slot>
            </mwc-button>
          `}
    `}handleFocus(e){e.target.blur()}static get styles(){return M`
      button {
        width: 100%;
        border-width: calc(var(--content-scale, 1) * 1px);
        border-color: var(--mdc-button-outline-color, rgba(0, 0, 0, 0.12));
        color: var(--mdc-theme-primary, #6200ee);
        border-radius: var(--mdc-shape-small, 4px);
        padding: calc(var(--content-scale, 1) * 0.875rem);
        background-color: transparent;
        font-size: calc(var(--content-scale, 1) * 0.875rem);
        font-weight: var(--mdc-typography-button-font-weight, 500);
        letter-spacing: var(--mdc-typography-button-letter-spacing, 0.0892857em);
        text-decoration: var(--mdc-typography-button-text-decoration, none);
        text-transform: var(--mdc-typography-button-text-transform, uppercase);
        -webkit-font-smoothing: antialiased;
        font-family: var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }
      button:not(:disabled) {
        cursor: pointer;
        transition: background-color 0.1s ease;
      }
      button:disabled {
        color: var(--disabled-text-color);
        border: none;
      }
      button:not(:disabled):hover {
        background-color: rgba(var(--rgb-primary-color), 0.06);
      }
      button:not(:disabled):active {
        background-color: rgba(var(--rgb-primary-color), 0.12);
      }
      button:focus {
        outline: none;
      }
      mwc-button {
        width: 100%;
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
    `}}t([Be({type:Boolean})],Xt.prototype,"disabled",void 0),t([Be({type:Boolean})],Xt.prototype,"scaled",void 0),customElements.define("alarmo-button",Xt);class ei{constructor(e,t="alarmoPendingAudioPosition"){this.audioPosition=0,this.lastUpdateTime=0,this.hasSoundUrl=!!e,this.storageKey=t,this.isPlayingKey=`${t}_isPlaying`,this.hasSoundUrl&&(this.audio=new Audio(e),this.audio.loop=!0,this.loadAudioState(),this.audio.addEventListener("timeupdate",this.throttledTimeUpdate.bind(this)),window.addEventListener("beforeunload",this.saveAudioState.bind(this)))}set hass(e){const t=this._hass;this._hass=e,this.hassChanged(t)}set entity(e){this._entity=e}hassChanged(e){if(this._hass&&this._entity)if(e&&e.themes===this._hass.themes&&e.language===this._hass.language){if(e.states[this._entity].state!==this._hass.states[this._entity].state||e.states[this._entity].attributes.delay!==this._hass.states[this._entity].attributes.delay){const t=e.states[this._entity].state,i=this._hass.states[this._entity].state;at.includes(i)?this.playSound():at.includes(t)&&this.stopSound(),this.updateAudio()}}else this.updateAudio()}updateAudio(){if(this._hass&&this._entity){const e=this._hass.states[this._entity].state;at.includes(e)&&this.playSound()}}loadAudioState(){if(!this.hasSoundUrl||!this.audio)return;const e=localStorage.getItem(this.storageKey),t="true"===localStorage.getItem(this.isPlayingKey);e&&(this.audioPosition=parseFloat(e),this.audio.currentTime=this.audioPosition),t&&this.playSound()}saveAudioState(){this.hasSoundUrl&&this.audio&&(localStorage.setItem(this.storageKey,this.audioPosition.toString()),localStorage.setItem(this.isPlayingKey,this.audio.paused?"false":"true"))}throttledTimeUpdate(){if(!this.hasSoundUrl||!this.audio)return;const e=Date.now();e-this.lastUpdateTime>1e3&&(this.lastUpdateTime=e,this.audioPosition=this.audio.currentTime,this.saveAudioState())}async playSound(){if(this.hasSoundUrl&&this.audio){this.audio.currentTime=this.audioPosition;try{await this.audio.play()}catch(e){console.error("Error playing audio:",e)}}}pauseSound(){this.hasSoundUrl&&this.audio&&(this.audio.pause(),this.saveAudioState())}stopSound(){this.hasSoundUrl&&this.audio&&(this.audio.pause(),this.audioPosition=0,this.saveAudioState())}}const ti=e=>{class i extends e{connectedCallback(){super.connectedCallback(),this.__checkSubscribed()}disconnectedCallback(){if(super.disconnectedCallback(),this.__unsubs){for(;this.__unsubs.length;){const e=this.__unsubs.pop();e instanceof Promise?e.then((e=>e())):e()}this.__unsubs=void 0}}updated(e){super.updated(e),e.has("hass")&&this.__checkSubscribed()}hassSubscribe(){return[]}__checkSubscribed(){void 0===this.__unsubs&&this.isConnected&&void 0!==this.hass&&(this.__unsubs=this.hassSubscribe())}}return t([Be({attribute:!1})],i.prototype,"hass",void 0),i};return e.AlarmoCard=class extends(ti(Ue)){constructor(){super(...arguments),this._input="",this.warning="",this.area_id=void 0,this.armOptions=Object.assign({},ot),this.readyForArmModes=null,this.backendConnection=null,this.showBypassedSensors=!1,this.subscribedEntities=[],this._codeClearTimer=0}static async getConfigElement(){return await Promise.resolve().then((function(){return Jt})),document.createElement("alarmo-card-editor")}static async getStubConfig(e){let t=Object.keys(e.states).find((e=>"alarm_control_panel"==Fe(e)));return await Kt(e).then((e=>{const i=e.sort(((e,t)=>Number(e.area_id)-Number(t.area_id)));i.length&&(t=i[0].entity_id)})),{type:"custom:alarmo-card",entity:t}}initPendingSound(){this._config&&this.hass&&(this.pendingSound=new ei(this._config.pending_sound))}async getCardSize(){var e;if(!this._config||!this.hass)return 9;const t=this.hass.states[this._config.entity];return t&&(null===(e=this._alarmoConfig)||void 0===e?void 0:e.code_format)===Ye&&(Wt(t)||this._config.keep_keypad_visible)?9:4}setConfig(e){!(null==e?void 0:e.button_scale_actions)&&(null==e?void 0:e.button_scale)&&(e=Object.assign(Object.assign({},e),{button_scale_actions:null==e?void 0:e.button_scale})),!(null==e?void 0:e.button_scale_keypad)&&(null==e?void 0:e.button_scale)&&(e=Object.assign(Object.assign({},e),{button_scale_keypad:null==e?void 0:e.button_scale})),(e=>{if(!e||!e.entity||"alarm_control_panel"!==Fe(e.entity))throw new Error("Invalid configuration provided for entity");if(Dt(e.button_scale_keypad)&&("number"!=typeof e.button_scale_keypad||e.button_scale_keypad<1||e.button_scale_keypad>rt))throw new Error("Invalid configuration provided for button_scale_keypad");if(Dt(e.button_scale_actions)&&("number"!=typeof e.button_scale_actions||e.button_scale_actions<1||e.button_scale_actions>rt))throw new Error("Invalid configuration provided for button_scale_actions")})(e),this._config=Object.assign(Object.assign({},nt),e)}hassSubscribe(){return[this.hass.connection.subscribeMessage((e=>this._fetchData(e)),{type:"alarmo_updated"})]}async firstUpdated(){const e=await window.loadCardHelpers(),t=await e.createCardElement({type:"entities",entities:[]});await t.constructor.getConfigElement(),await this.loadBackendConfig(),this.initPendingSound()}async loadBackendConfig(){this.backendConnection||Kt(this.hass).then((e=>{const t=e.find((e=>e.entity_id==this._config.entity));t&&(this.area_id=t.area_id?t.area_id:null)})).then((()=>Zt(this.hass))).then((e=>{this._alarmoConfig=e,this.backendConnection=!0})).then((()=>{return e=this.hass,t=this._config.entity,e.callWS({type:"alarmo/ready_to_arm_modes",entity_id:t});var e,t})).then((e=>{this.readyForArmModes=e.modes})).catch((e=>{this.backendConnection=!1}))}async _fetchData(e){if(e.data.area_id===this.area_id)switch(e.data.event){case it.Arm:this._clearCode();break;case it.Trigger:break;case it.InvalidCodeProvided:case it.NoCodeProvided:this._showCodeError(),this.subscribedEntities=[];break;case it.FailedToArm:this.warning="blocking_sensors",this._clearCode();break;case it.CommandNotAllowed:this._clearCode();break;case it.TriggerTimeExpired:break;case it.ReadyToArmModesChanged:this.readyForArmModes=e.data.modes}}shouldUpdate(e){if(e.has("_config"))return!0;const t=e.get("hass");if(!t||t.themes!==this.hass.themes||t.language!==this.hass.language||t.config.state!==this.hass.config.state)return!0;if(t.states[this._config.entity]!==this.hass.states[this._config.entity]){const e=t.states[this._config.entity],i=this.hass.states[this._config.entity];return!1===this.backendConnection&&(async()=>{await this.loadBackendConfig()})(),this.processStateUpdate(e,i),!0}return!(!this.subscribedEntities.length||!this.subscribedEntities.some((e=>t.states[e]!==this.hass.states[e])))}processStateUpdate(e,t){var i,a;t.state!=e.state&&(this.subscribedEntities=[],null===(i=this.pendingSound)||void 0===i||i.stopSound()),(t.state==Qe.Disarmed||t.last_changed!==e.last_changed)&&this._clearCode(),t.state!=Qe.Pending&&t.state!=Qe.Arming||null===(a=this.pendingSound)||void 0===a||a.playSound()}render(){var e,t;if(!this._config||!this.hass||null===this.backendConnection)return ve``;const i=this.hass.states[this._config.entity];return i?!1===this.backendConnection?ve`
        <hui-warning>
          Could not establish a connection with the alarmo integration. Please check if it is installed and the correct
          entity is selected in the card settings.
        </hui-warning>
      `:ve`
      <ha-card>
        ${i.state===Qe.Disarmed?ve`
              <ha-button-menu
                corner="BOTTOM_START"
                multi
                @action=${this._toggleArmOptions}
                @click=${e=>e.preventDefault()}
              >
                <ha-icon-button slot="trigger" .label=${this.hass.localize("ui.common.menu")} .path=${"M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"}>
                </ha-icon-button>
                <mwc-list-item noninteractive>
                  <span class="title"> ${It("arm_options.heading",this.hass.language)} </span>
                </mwc-list-item>
                <mwc-list-item graphic="icon">
                  <ha-icon
                    slot="graphic"
                    icon="${this.armOptions.skip_delay?"mdi:check":""}"
                    @click=${e=>{var t;null===(t=e.target.parentElement)||void 0===t||t.click(),e.stopPropagation()}}
                  ></ha-icon>
                  ${It("arm_options.skip_delay",this.hass.language)}
                </mwc-list-item>
                <mwc-list-item graphic="icon">
                  <ha-icon
                    slot="graphic"
                    icon="${this.armOptions.force?"mdi:check":""}"
                    @click=${e=>{var t;null===(t=e.target.parentElement)||void 0===t||t.click(),e.stopPropagation()}}
                  ></ha-icon>
                  ${It("arm_options.force",this.hass.language)}
                </mwc-list-item>
              </ha-button-menu>
            `:""}

        <div class="header">
          <div class="icon">
            <alarmo-state-badge
              .hass=${this.hass}
              .entity=${this._config.entity}
              @click=${()=>Ve(this,"hass-more-info",{entityId:this._config.entity})}
              style="--alarm-state-color: ${(e=>{if(!e||!e.state)return"var(--state-unavailable-color)";const t=e.state;return t==Qe.Disarmed?"var(--state-alarm_control_panel-disarmed-color, var(--state-alarm_control_panel-inactive-color, var(--state-inactive-color)))":Object.values(Qe).includes(t)?`var(--state-alarm_control_panel-${t}-color, var(--state-alarm_control_panel-active-color, var(--state-active-color)))`:"var(--disabled-color, var(--state-inactive-color))"})(i)}"
            >
            </alarmo-state-badge>
          </div>
          <div class="summary">
            <div class="name">${((e,t)=>Bt(t.name)?e.attributes.friendly_name:t.name)(i,this._config)}</div>
            <div class="state">${Vt(i,this.hass.localize,this._config)}</div>
          </div>
        </div>

        ${this._renderWarning()}

        <div id="armActions" class="actions">${this._renderActions()}</div>
        ${Wt(i)||this._config.keep_keypad_visible?ve`
              <ha-textfield
                .value=${this._input}
                .label=${this.hass.localize("ui.card.alarm_control_panel.code")}
                ?disabled=${!Wt(i)}
                @input=${e=>{this._clearCodeError(),this._input=e.target.value,this._setCodeClearTimer()}}
                @focus=${this._clearCodeError}
                type="password"
                id="code_input"
                .inputmode=${(null===(e=this._alarmoConfig)||void 0===e?void 0:e.code_format)===Ye?"numeric":"text"}
              ></ha-textfield>
            `:ve``}
        ${!Wt(i)&&!this._config.keep_keypad_visible||(null===(t=this._alarmoConfig)||void 0===t?void 0:t.code_format)!==Ye?ve``:ve`
              <div id="keypad" style="max-width: ${300*this._config.button_scale_keypad}px">
                ${Je.map((e=>""===e?ve`
                        <alarmo-button
                          disabled
                          style="--content-scale: ${this._config.button_scale_keypad}"
                          ?scaled=${1!=this._config.button_scale_keypad}
                        ></alarmo-button>
                      `:ve`
                        <alarmo-button
                          .value="${e}"
                          @click=${this._handlePadClick}
                          ?disabled=${!Wt(i)}
                          class="${"clear"!==e?"numberKey":""}"
                          style="--content-scale: ${this._config.button_scale_keypad}"
                          ?scaled=${1!=this._config.button_scale_keypad}
                        >
                          ${"clear"===e?this._config.use_clear_icon?ve` <ha-icon icon="hass:backspace-outline"></ha-icon> `:ve` <span>${this.hass.localize("ui.card.alarm_control_panel.clear_code")}</span> `:ve` <span>${e}</span> `}
                        </alarmo-button>
                      `))}
              </div>
            `}
      </ha-card>
    `:ve`
        <hui-warning>
          ${"NOT_RUNNING"!==this.hass.config.state?this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity||"[empty]"):this.hass.localize("ui.panel.lovelace.warning.starting")}
        </hui-warning>
      `}_renderActions(){if(!this.hass||!this._config)return ve``;const e=this.hass.states[this._config.entity],t=e.state===Qe.Disarmed?Ft(e).filter((e=>!qt(tt[e],this._config).hide)):[et.Disarm],i=this._config.show_ready_indicator;return t.map((e=>{const t=qt(tt[e],this._config),a=Array.isArray(this.readyForArmModes)&&this.readyForArmModes.includes(tt[e]);return ve`
        <alarmo-button
          @click=${t=>this._handleActionClick(t,e)}
          style="--content-scale: ${this._config.button_scale_actions}"
          ?scaled=${1!=this._config.button_scale_actions}
        >
          ${i&&e!=et.Disarm?ve`
                <ha-icon
                  icon="mdi:circle-medium"
                  style="${null===this.readyForArmModes?"color: var(--label-badge-grey)":a?"color: var(--success-color)":"color: var(--error-color)"}"
                  class="leading"
                ></ha-icon>
              `:""}
          ${Bt(t.button_label)?ve` <span>${this.hass.localize(`ui.card.alarm_control_panel.${e}`)}</span> `:ve` <span>${t.button_label}</span> `}
        </alarmo-button>
      `}))}_renderWarning(){var e;if(!this.hass||!this._config||!this._config.show_messages)return ve``;const t=this.hass.states[this._config.entity];return t.attributes.open_sensors&&t.state==Qe.Triggered||"blocking_sensors"==this.warning&&t.attributes.open_sensors?ve`
        <div class="messagebox">
          <div class="messagebox-left"></div>
          <div class="messagebox-inner">
            <div class="description">
              <div class="description-filler"></div>
              <span>
                <ha-icon icon="hass:alert"></ha-icon>
                ${"blocking_sensors"==this.warning?It("errors.blocking_sensors",this.hass.language):It("errors.triggered_sensors",this.hass.language)}
              </span>
              <div class="description-filler"></div>
            </div>
            <div class="content">
              ${Object.entries(t.attributes.open_sensors).map((([e])=>(this.subscribedEntities.includes(e)||this.subscribedEntities.push(e),ve`
                  <div class="badge">
                    <alarmo-sensor-badge .hass=${this.hass} .entity=${e}> </alarmo-sensor-badge>
                  </div>
                `)))}
            </div>
          </div>
          <div class="messagebox-right"></div>
        </div>
      `:t.state.startsWith("armed_")&&(null===(e=t.attributes.bypassed_sensors)||void 0===e?void 0:e.length)&&this._config.show_bypassed_sensors?ve`
        <div class="messagebox warning">
          <div class="messagebox-left"></div>
          <div class="messagebox-inner">
            <div class="description">
              <div class="description-filler"></div>
              <span>
                <ha-icon icon="hass:alert"></ha-icon>
                ${It("errors.bypassed_sensors",this.hass.language)}
              </span>
              <div class="description-filler"></div>
            </div>
            <div class="content">
              ${t.attributes.bypassed_sensors.map((e=>(this.subscribedEntities.includes(e)||this.subscribedEntities.push(e),ve`
                  <div class="badge">
                    <alarmo-sensor-badge .hass=${this.hass} .entity=${e}> </alarmo-sensor-badge>
                  </div>
                `)))}
            </div>
          </div>
          <div class="messagebox-right"></div>
        </div>
      `:ve``}_handlePadClick(e){const t=e.currentTarget.value;this._clearCodeError(),this._input="clear"===t?"":this._input+t}_handleActionClick(e,t){e.target.blur(),this._clearCodeError(),t==et.Disarm?this.hass.callService("alarmo","disarm",{entity_id:this._config.entity,code:this._input}):this.hass.callService("alarmo","arm",Object.assign(Object.assign({},this.armOptions),{entity_id:this._config.entity,mode:tt[t],code:this._input})),this.warning="",this.armOptions=Object.assign({},ot)}_showCodeError(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#code_input");t&&(t.classList.remove("error"),t.classList.add("error"),t.invalid=!0)}_clearCodeError(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#code_input");t&&t.classList.contains("error")&&(t.classList.remove("error"),t.invalid=!1,this._input="",this._cancelCodeClearTimer())}_clearCode(){this._input="",this._clearCodeError(),this._cancelCodeClearTimer()}_setCodeClearTimer(){this._cancelCodeClearTimer(),this._input.length&&(this._codeClearTimer=window.setTimeout((()=>{this._clearCode()}),12e4))}_cancelCodeClearTimer(){this._codeClearTimer&&clearTimeout(this._codeClearTimer)}_toggleArmOptions(e){switch(e.detail.index){case 0:this.armOptions=Object.assign(Object.assign({},this.armOptions),{skip_delay:!this.armOptions.skip_delay});break;case 1:this.armOptions=Object.assign(Object.assign({},this.armOptions),{force:!this.armOptions.force})}e.preventDefault();const t=e.target;setTimeout((()=>{t.firstElementChild.blur()}),50)}static get styles(){return M`
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
      }
      .header .icon {
        display: flex;
        padding-right: 20px;
      }
      .header .summary {
        display: flex;
        flex-direction: column;
        gap: 3px;
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
        margin: 8px auto;
        max-width: 200px;
        text-align: center;
        margin-left: calc(50% - 200px / 2);
      }
      ha-textfield.error {
        animation: shake 0.2s ease-in-out 0s 2;
      }
      #keypad {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: auto;
        width: 100%;
      }
      #keypad alarmo-button {
        padding: 8px;
        width: 30%;
        box-sizing: border-box;
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
      ha-button-menu {
        position: absolute;
        right: 4px;
        top: 4px;
      }
      mwc-list-item {
        --mdc-theme-secondary: var(--primary-color);
        --mdc-list-item-graphic-margin: 16px;
      }
      mwc-list-item .title {
        font-weight: 500;
        font-size: 1.1em;
      }
    `}},t([Be({attribute:!1})],e.AlarmoCard.prototype,"hass",void 0),t([qe()],e.AlarmoCard.prototype,"_config",void 0),t([qe()],e.AlarmoCard.prototype,"_alarmoConfig",void 0),t([qe()],e.AlarmoCard.prototype,"_input",void 0),t([qe()],e.AlarmoCard.prototype,"warning",void 0),t([qe()],e.AlarmoCard.prototype,"area_id",void 0),t([qe()],e.AlarmoCard.prototype,"armOptions",void 0),t([qe()],e.AlarmoCard.prototype,"readyForArmModes",void 0),t([qe()],e.AlarmoCard.prototype,"backendConnection",void 0),t([qe()],e.AlarmoCard.prototype,"showBypassedSensors",void 0),e.AlarmoCard=t([He("alarmo-card")],e.AlarmoCard),window.customCards=window.customCards||[],window.customCards.push({type:"alarmo-card",name:"Alarmo Card",description:"Card for operating Alarmo through Lovelace.",preview:!0}),console.info(`%c  ALARMO-CARD  \n%c  Version: ${"v1.5.2".padEnd(7," ")}`,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),e}({});
