(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,r){"use strict";(function(t){r.d(e,"b",function(){return d}),r.d(e,"a",function(){return v});var n=r(3),o=r(14),a=r(4),i=r(11);function c(){c=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(N){u=function(t,e,r){return t[e]=r}}function l(t,e,r,o){var a=e&&e.prototype instanceof p?e:p,i=Object.create(a.prototype),c=new k(o||[]);return n(i,"_invoke",{value:E(t,r,c)}),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(N){return{type:"throw",arg:N}}}t.wrap=l;var f={};function p(){}function d(){}function v(){}var y={};u(y,a,function(){return this});var g=Object.getPrototypeOf,m=g&&g(g(_([])));m&&m!==e&&r.call(m,a)&&(y=m);var w=v.prototype=p.prototype=Object.create(y);function b(t){["next","throw","return"].forEach(function(e){u(t,e,function(t){return this._invoke(e,t)})})}function x(t,e){var o;n(this,"_invoke",{value:function(n,a){function i(){return new e(function(o,i){!function n(o,a,i,c){var s=h(t[o],t,a);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(l).then(function(t){u.value=t,i(u)},function(t){return n("throw",t,i,c)})}c(s.arg)}(n,a,o,i)})}return o=o?o.then(i,i):i()}})}function E(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return S()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=h(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function _(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return d.prototype=v,n(w,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:d,configurable:!0}),d.displayName=u(v,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,s,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(x.prototype),u(x.prototype,i,function(){return this}),t.AsyncIterator=x,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new x(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},b(w),u(w,s,"Generator"),u(w,a,function(){return this}),u(w,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=_,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}var s="https://cardano-mainnet.blockfrost.io/api/v0",u="mainnet0NnL1ah5PTxMw6JsRYaxZn70w4i9RP6h",l=function(t,e,r){var n=function(t){for(var e="",r=0;r<t.length;r+=2)e+=String.fromCharCode(parseInt(t.substr(r,2),16));return e}(t.slice(52)).match(/\d+$/);if(n){var o={assetid:t,id:n[0]};r.push(o)}else console.warn("Failed to extract ID from asset: ".concat(t))},h=function(){var t=Object(a.a)(c().mark(function t(e,r,n){var s,u,f,p,d,v,y,g=arguments;return c().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return u=g.length>3&&void 0!==g[3]?g[3]:1,f=g.length>4&&void 0!==g[4]?g[4]:{ghosts:[],plots:[],watches:[]},console.log("fetchAllAssetsByStakeAddress called with stakeAddress:",e),p=function(){var t=Object(a.a)(c().mark(function t(o){var a;return c().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("".concat(n,"/accounts/").concat(e,"/addresses/assets?count=100&page=").concat(o),{headers:{project_id:r}});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),t.next=6,Promise.all(Array(10).fill(0).map(function(t,e){return p(u+e)}));case 6:if(d=t.sent,0!==(v=(s=[]).concat.apply(s,Object(o.a)(d))).length){t.next=12;break}return t.abrupt("return",f);case 12:return v.forEach(function(t){var e=t.unit;e.startsWith("b000e9f3994de3226577b4d61280994e53c07948c8839d628f4a425a")?l(e,0,f.ghosts):e.startsWith("b00041d7dc086d33e0f7777c4fccaf3ef06720543d4ff4e750d8f123")?l(e,0,f.plots):e.startsWith("b000e43ed65c89e305bdb5920001558d9f642f3488154b2552a3ad63")&&l(e,0,f.watches)}),y={ghosts:f.ghosts.sort(function(t,e){return parseInt(t.id)-parseInt(e.id)}),plots:f.plots.sort(function(t,e){return parseInt(t.id)-parseInt(e.id)}),watches:f.watches.sort(function(t,e){return parseInt(t.id)-parseInt(e.id)})},t.abrupt("return",h(e,r,n,u+10,y));case 15:case 16:case"end":return t.stop()}},t)}));return function(e,r,n){return t.apply(this,arguments)}}(),f=function(){var t=Object(a.a)(c().mark(function t(e,r,n,o){var l,f,p,d=arguments;return c().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return l=d.length>4&&void 0!==d[4]?d[4]:{ghosts:[],plots:[],watches:[]},f=function(){var t=Object(a.a)(c().mark(function t(){var o;return c().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.get("".concat(n,"/addresses/").concat(e),{headers:{project_id:r}});case 3:return o=t.sent,t.abrupt("return",o.data);case 7:if(t.prev=7,t.t0=t.catch(0),!t.t0.response||404!==t.t0.response.status){t.next=14;break}return console.error("Address not found or has no transactions associated with it."),t.abrupt("return",{notFound:!0});case 14:return console.error("Error fetching assets:",t.t0.response?t.t0.response.data:t.t0.message),t.abrupt("return",{amount:[]});case 16:case"end":return t.stop()}},t,null,[[0,7]])}));return function(){return t.apply(this,arguments)}}(),t.next=4,f();case 4:if(!(p=t.sent).notFound){t.next=8;break}return o(),t.abrupt("return",l);case 8:return t.abrupt("return",h(p.stake_address,u,s));case 9:case"end":return t.stop()}},t)}));return function(e,r,n,o){return t.apply(this,arguments)}}(),p=function(){var e=Object(a.a)(c().mark(function e(r,o,a){var l,h,p,d,v,y,g;return c().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(l="f0ff48bbb7bbe9d59a40f1ce90e9e9d0ff5002ec48f232b49ca0fb9a",0!==r.length){e.next=3;break}throw new Error("Invalid handle name.");case 3:return h=r.substring(1),p=t.from(h).toString("hex"),e.next=7,i.a.get("".concat(a,"/assets/").concat(l).concat(p,"/addresses"),{headers:{project_id:o,"Content-Type":"application/json"}});case 7:if(d=e.sent,!(v=d.data)||!v.error){e.next=11;break}throw new Error(v.error);case 11:return y=Object(n.a)(v,1),g=y[0].address,e.abrupt("return",f(g,u,s));case 13:case"end":return e.stop()}},e)}));return function(t,r,n){return e.apply(this,arguments)}}(),d={fetchAllAssetsByPaymentAddress:f,fetchAllAssetsByStakeAddress:h,fetchAssetsByHandle:p},v=function(){var t=Object(a.a)(c().mark(function t(e){var r,n,o,a=arguments;return c().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=a.length>1&&void 0!==a[1]?a[1]:"payment",n=a.length>2?a[2]:void 0,a.length>3?a[3]:void 0,t.prev=3,"stake"!==r){t.next=10;break}return t.next=7,h(e,u,s);case 7:o=t.sent,t.next=23;break;case 10:if("payment"!==r){t.next=16;break}return t.next=13,f(e,u,s,n);case 13:o=t.sent,t.next=23;break;case 16:if("handle"!==r){t.next=22;break}return t.next=19,p(e,u,s);case 19:o=t.sent,t.next=23;break;case 22:throw new Error("Invalid address type.");case 23:return console.log("Ghosts:",o.ghosts),console.log("Plots:",o.plots),console.log("Watches:",o.watches),0===o.ghosts.length&&0===o.plots.length&&0===o.watches.length&&console.error("No NFTs found"),t.abrupt("return",o);case 30:throw t.prev=30,t.t0=t.catch(3),console.error("Error fetching NFTs:",t.t0),t.t0.message,t.t0;case 35:case"end":return t.stop()}},t,null,[[3,30]])}));return function(e){return t.apply(this,arguments)}}()}).call(this,r(12).Buffer)},16:function(t,e,r){t.exports=r(33)},25:function(t,e,r){},26:function(t,e,r){},33:function(t,e,r){"use strict";r.r(e);var n=r(1),o=r.n(n),a=r(13),i=r.n(a),c=(r(25),r(4)),s=r(3),u=(r(26),r(10)),l=r(11);function h(){h=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(N){s=function(t,e,r){return t[e]=r}}function u(t,e,r,o){var a=e&&e.prototype instanceof p?e:p,i=Object.create(a.prototype),c=new k(o||[]);return n(i,"_invoke",{value:E(t,r,c)}),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(N){return{type:"throw",arg:N}}}t.wrap=u;var f={};function p(){}function d(){}function v(){}var y={};s(y,a,function(){return this});var g=Object.getPrototypeOf,m=g&&g(g(_([])));m&&m!==e&&r.call(m,a)&&(y=m);var w=v.prototype=p.prototype=Object.create(y);function b(t){["next","throw","return"].forEach(function(e){s(t,e,function(t){return this._invoke(e,t)})})}function x(t,e){var o;n(this,"_invoke",{value:function(n,a){function i(){return new e(function(o,i){!function n(o,a,i,c){var s=l(t[o],t,a);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(h).then(function(t){u.value=t,i(u)},function(t){return n("throw",t,i,c)})}c(s.arg)}(n,a,o,i)})}return o=o?o.then(i,i):i()}})}function E(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return S()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=l(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function _(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return d.prototype=v,n(w,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:d,configurable:!0}),d.displayName=s(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(x.prototype),s(x.prototype,i,function(){return this}),t.AsyncIterator=x,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new x(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},b(w),s(w,c,"Generator"),s(w,a,function(){return this}),s(w,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=_,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}var f=function(t){var e=t.ghosts,r=Object(n.useState)([]),a=Object(s.a)(r,2),i=a[0],u=a[1],f=Object(n.useState)(null),p=Object(s.a)(f,2),d=p[0],v=p[1],y=Object(n.useState)(null),g=Object(s.a)(y,2),m=g[0],w=g[1],b=Object(n.useState)(!1),x=Object(s.a)(b,2),E=x[0],L=x[1];Object(n.useEffect)(function(){if(e&&e.length>0){var t=e.map(function(t){var e=t.id;return"".concat("/clumsyview","/ghostSVGs/cg").concat(e,".svg")});u(t)}},[e]),Object(n.useEffect)(function(){d&&j(d)},[d]);var j=function(){var t=Object(c.a)(h().mark(function t(e){var r;return h().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.a.get("".concat("https://protected-everglades-83276.herokuapp.com/api/ghosts/").concat(e));case 3:r=t.sent,w(r.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}},t,null,[[0,7]])}));return function(e){return t.apply(this,arguments)}}(),O=function(){L(!1)};return o.a.createElement("div",null,o.a.createElement("div",{className:"ghost-grid".concat(i.length>1?" multiple":"")},i.map(function(t,r){return o.a.createElement("img",{key:r,src:t,style:{width:"100%",height:"100%"},onClick:function(){v(e[r].id),L(!0)}})})),E&&o.a.createElement("div",{className:"modal",onClick:O},o.a.createElement("div",{className:"modal-content",onClick:function(t){return t.stopPropagation()}},o.a.createElement("div",{className:"exit-button",onClick:O},"\xd7"),m&&o.a.createElement("div",{className:"modal-items"},o.a.createElement("object",{type:"image/svg+xml",data:"".concat("/clumsyview","/ghostSVGs/cg").concat(d,".svg"),className:"modal-svg"}),o.a.createElement("pre",null,JSON.stringify(m,null,2))))))},p=function(t){var e=t.url;return o.a.createElement("object",{type:"image/svg+xml",data:e,style:{width:"100%",height:"100%"}})},d=function(t){var e=t.plots,r=Object(n.useState)([]),a=Object(s.a)(r,2),i=a[0],c=a[1];return Object(n.useEffect)(function(){if(e&&e.length>0){var t=e.map(function(t){var e=t.id;return"".concat("/clumsyview","/plotSVGs/ClumsyValleyLandPlot").concat(e,"_ipfs.svg")});c(t)}},[e]),o.a.createElement("div",{className:"plot-grid".concat(i.length>1?" multiple":"")},i.map(function(t,e){return o.a.createElement(p,{key:e,url:t})}))},v=function(t){var e=t.url;return o.a.createElement("object",{type:"image/svg+xml",data:e,style:{width:"100%",height:"100%"}})},y=function(t){var e=t.watches,r=Object(n.useState)([]),a=Object(s.a)(r,2),i=a[0],c=a[1];return Object(n.useEffect)(function(){if(e&&e.length>0){var t=e.map(function(t){var e=t.id;return"".concat("/clumsyview","/watchSVGs/Ghostwatch").concat(e,".svg")});c(t)}},[e]),o.a.createElement("div",{className:"watch-grid".concat(i.length>1?" multiple":"")},i.map(function(t,e){return o.a.createElement(v,{key:e,url:t})}))},g=function(t){var e=t.onSelectCategory,r=t.ghostsCount,n=t.plotsCount,a=t.watchesCount;return o.a.createElement("div",{className:"category-buttons"},o.a.createElement("button",{className:"category-button",onClick:function(){return e("ghosts")}},"Ghosts (",r,")"),o.a.createElement("button",{className:"category-button",onClick:function(){return e("plots")}},"Plots (",n,")"),o.a.createElement("button",{className:"category-button",onClick:function(){return e("watches")}},"Watches (",a,")"))};function m(){m=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(N){s=function(t,e,r){return t[e]=r}}function u(t,e,r,o){var a=e&&e.prototype instanceof f?e:f,i=Object.create(a.prototype),c=new k(o||[]);return n(i,"_invoke",{value:E(t,r,c)}),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(N){return{type:"throw",arg:N}}}t.wrap=u;var h={};function f(){}function p(){}function d(){}var v={};s(v,a,function(){return this});var y=Object.getPrototypeOf,g=y&&y(y(_([])));g&&g!==e&&r.call(g,a)&&(v=g);var w=d.prototype=f.prototype=Object.create(v);function b(t){["next","throw","return"].forEach(function(e){s(t,e,function(t){return this._invoke(e,t)})})}function x(t,e){var o;n(this,"_invoke",{value:function(n,a){function i(){return new e(function(o,i){!function n(o,a,i,c){var s=l(t[o],t,a);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(h).then(function(t){u.value=t,i(u)},function(t){return n("throw",t,i,c)})}c(s.arg)}(n,a,o,i)})}return o=o?o.then(i,i):i()}})}function E(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return S()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=l(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===h)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function _(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return p.prototype=d,n(w,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:p,configurable:!0}),p.displayName=s(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,s(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(x.prototype),s(x.prototype,i,function(){return this}),t.AsyncIterator=x,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new x(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},b(w),s(w,c,"Generator"),s(w,a,function(){return this}),s(w,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=_,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}var w=function(){var t=Object(n.useState)(""),e=Object(s.a)(t,2),r=e[0],a=e[1],i=Object(n.useState)(null),l=Object(s.a)(i,2),h=l[0],p=l[1],v=Object(n.useState)(!1),w=Object(s.a)(v,2),b=w[0],x=(w[1],Object(n.useState)("")),E=Object(s.a)(x,2),L=E[0],j=E[1],O=Object(n.useState)("ghosts"),k=Object(s.a)(O,2),_=k[0],S=k[1],N=function(){j("404 ERROR: Address either a) does not exist or b) has no transactions associated with it. If using Eternl, select 'Show used/additional addresses' on the 'Receive' page and select a used address")},P=function(){var t=Object(c.a)(m().mark(function t(e){var n,o;return m().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),p(null),j(""),!r){t.next=29;break}if(t.prev=4,!r.startsWith("stake")){t.next=9;break}n="stake",t.next=18;break;case 9:if(!r.startsWith("addr")){t.next=13;break}n="payment",t.next=18;break;case 13:if(!r.startsWith("$")){t.next=17;break}n="handle",t.next=18;break;case 17:throw new Error("Invalid address format.");case 18:return t.next=20,Object(u.a)(r,n,N,u.b);case 20:o=t.sent,p(o),t.next=27;break;case 24:t.prev=24,t.t0=t.catch(4),console.error("Error fetching NFTs:",t.t0);case 27:t.next=30;break;case 29:console.error("Please enter a valid address");case 30:case"end":return t.stop()}},t,null,[[4,24]])}));return function(e){return t.apply(this,arguments)}}();return o.a.createElement("div",null,o.a.createElement("h1",null,"Clumsy View"),o.a.createElement("form",{onSubmit:P},o.a.createElement("input",{type:"text",placeholder:"Enter wallet address, ADA Handle, or stake key",value:r,onChange:function(t){return a(t.target.value)}}),o.a.createElement("button",{type:"submit"},"Search")),b,L&&o.a.createElement("div",{className:"alert"},L),o.a.createElement("div",null,h&&o.a.createElement(o.a.Fragment,null,o.a.createElement(g,{onSelectCategory:function(t){S(t)},ghostsCount:h.ghosts.length,plotsCount:h.plots.length,watchesCount:h.watches.length}),"ghosts"===_&&o.a.createElement(f,{ghosts:h.ghosts}),"plots"===_&&o.a.createElement(d,{plots:h.plots}),"watches"===_&&o.a.createElement(y,{watches:h.watches}))))},b=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,34)).then(function(e){var r=e.getCLS,n=e.getFID,o=e.getFCP,a=e.getLCP,i=e.getTTFB;r(t),n(t),o(t),a(t),i(t)})};r(30);i.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(w,null))),b()}},[[16,1,2]]]);
//# sourceMappingURL=main.015ec4d7.chunk.js.map