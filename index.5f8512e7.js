!function(){function t(t,e,n,s){Object.defineProperty(t,e,{get:n,set:s,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},o={},i=n.parcelRequirec1c0;null==i&&((i=function(t){if(t in s)return s[t].exports;if(t in o){var e=o[t];delete o[t];var n={id:t,exports:{}};return s[t]=n,e.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){o[t]=e},n.parcelRequirec1c0=i),i.register("iE7OH",(function(e,n){var s,o;t(e.exports,"register",(function(){return s}),(function(t){return s=t})),t(e.exports,"resolve",(function(){return o}),(function(t){return o=t}));var i={};s=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)i[e[n]]=t[e[n]]},o=function(t){var e=i[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),i.register("aNJCr",(function(e,n){var s;t(e.exports,"getBundleURL",(function(){return s}),(function(t){return s=t}));var o={};function i(t){return(""+t).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}s=function(t){var e=o[t];return e||(e=function(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(t)return i(t[2])}return"/"}(),o[t]=e),e}})),i("iE7OH").register(JSON.parse('{"9p9yL":"index.5f8512e7.js","410VS":"icons.97a4be49.svg","de1dt":"index.47d16b75.js"}'));var r,a={};
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */window,r=function(){return function(t){var e={};function n(s){if(e[s])return e[s].exports;var o=e[s]={i:s,l:!1,exports:{}};return t[s].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(s,o,function(e){return t[e]}.bind(null,o));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist",n(n.s=10)}([function(t,e,n){"use strict";t.exports=function(t,e){var n,s,o,i,r=Object.prototype.hasOwnProperty;for(o=1,i=arguments.length;o<i;o+=1)for(s in n=arguments[o])r.call(n,s)&&(t[s]=n[s]);return t}},function(t,e,n){"use strict";t.exports=function(t){return void 0===t}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Array}},function(t,e,n){"use strict";var s=n(2),o=n(17),i=n(6);t.exports=function(t,e,n){s(t)?o(t,e,n):i(t,e,n)}},function(t,e,n){"use strict";t.exports=function(t){return"string"==typeof t||t instanceof String}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Function}},function(t,e,n){"use strict";t.exports=function(t,e,n){var s;for(s in n=n||null,t)if(t.hasOwnProperty(s)&&!1===e.call(n,t[s],s,t))break}},function(t,e,n){"use strict";var s=n(18),o=n(0);t.exports=function(t,e){var n;return e||(e=t,t=null),n=e.init||function(){},t&&s(n,t),e.hasOwnProperty("static")&&(o(n,e.static),delete e.static),o(n.prototype,e),n}},function(t,e,n){"use strict";var s=n(2);t.exports=function(t,e,n){var o,i;if(n=n||0,!s(e))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(e,t,n);for(i=e.length,o=n;n>=0&&o<i;o+=1)if(e[o]===t)return o;return-1}},function(t,e,n){"use strict";var s=n(29),o=n(30),i=n(5),r={capitalizeFirstLetter:function(t){return t.substring(0,1).toUpperCase()+t.substring(1,t.length)},isContained:function(t,e){return!!e&&(t===e||e.contains(t))},createElementByTemplate:function(t,e){var n=document.createElement("div"),o=i(t)?t(e):s(t,e);return n.innerHTML=o,n.firstChild},bind:function(t,e){var n,s=Array.prototype.slice;return t.bind?t.bind.apply(t,s.call(arguments,1)):(n=s.call(arguments,2),function(){return t.apply(e,n.length?n.concat(s.call(arguments)):arguments)})},sendHostName:function(){o("pagination","UA-129987462-1")}};t.exports=r},function(t,e,n){"use strict";n(11),t.exports=n(12)},function(t,e,n){},function(t,e,n){"use strict";var s=n(13),o=n(7),i=n(0),r=n(1),a=n(20),c=n(9),l={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},u=o({init:function(t,e){this._options=i({},l,e),this._currentPage=0,this._view=new a(t,this._options,c.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&c.sendHostName()},_setCurrentPage:function(t){this._currentPage=t||this._options.page},_getLastPage:function(){var t=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return t||1},_getPageIndex:function(t){var e;return this._options.centerAlign?(e=t-Math.floor(this._options.visiblePages/2),e=Math.max(e,1),e=Math.min(e,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(t/this._options.visiblePages)},_getRelativePage:function(t){var e="prev"===t,n=this.getCurrentPage();return e?n-1:n+1},_getMorePageIndex:function(t){var e=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,s="prev"===t;return this._options.centerAlign?s?e-1:e+n:s?(e-1)*n:e*n+1},_convertToValidPage:function(t){var e=this._getLastPage();return t=Math.max(t,1),t=Math.min(t,e)},_paginate:function(t){var e=this._makeViewData(t||this._options.page);this._setCurrentPage(t),this._view.update(e)},_makeViewData:function(t){var e={},n=this._getLastPage(),s=this._getPageIndex(t),o=this._getPageIndex(n),i=this._getEdge(t);return e.leftPageNumber=i.left,e.rightPageNumber=i.right,e.prevMore=s>1,e.nextMore=s<o,e.page=t,e.currentPageIndex=t,e.lastPage=n,e.lastPageListIndex=n,e},_getEdge:function(t){var e,n,s,o=this._getLastPage(),i=this._options.visiblePages,r=this._getPageIndex(t);return this._options.centerAlign?(s=Math.floor(i/2),(n=(e=Math.max(t-s,1))+i-1)>o&&(e=Math.max(o-i+1,1),n=o)):(e=(r-1)*i+1,n=r*i,n=Math.min(n,o)),{left:e,right:n}},_onClickHandler:function(t,e){switch(t){case"first":e=1;break;case"prev":e=this._getRelativePage("prev");break;case"next":e=this._getRelativePage("next");break;case"prevMore":e=this._getMorePageIndex("prev");break;case"nextMore":e=this._getMorePageIndex("next");break;case"last":e=this._getLastPage();break;default:if(!e)return}this.movePageTo(e)},reset:function(t){r(t)&&(t=this._options.totalItems),this._options.totalItems=t,this._paginate(1)},movePageTo:function(t){t=this._convertToValidPage(t),this.invoke("beforeMove",{page:t})&&(this._paginate(t),this.fire("afterMove",{page:t}))},setTotalItems:function(t){this._options.totalItems=t},setItemsPerPage:function(t){this._options.itemsPerPage=t},getCurrentPage:function(){return this._currentPage||this._options.page}});s.mixin(u),t.exports=u},function(t,e,n){"use strict";var s=n(0),o=n(14),i=n(4),r=n(16),a=n(2),c=n(5),l=n(3),u=/\s+/g;function d(){this.events=null,this.contexts=null}d.mixin=function(t){s(t.prototype,d.prototype)},d.prototype._getHandlerItem=function(t,e){var n={handler:t};return e&&(n.context=e),n},d.prototype._safeEvent=function(t){var e,n=this.events;return n||(n=this.events={}),t&&((e=n[t])||(e=[],n[t]=e),n=e),n},d.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},d.prototype._indexOfContext=function(t){for(var e=this._safeContext(),n=0;e[n];){if(t===e[n][0])return n;n+=1}return-1},d.prototype._memorizeContext=function(t){var e,n;o(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1?e[n][1]+=1:e.push([t,1]))},d.prototype._forgetContext=function(t){var e,n;o(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1&&(e[n][1]-=1,e[n][1]<=0&&e.splice(n,1)))},d.prototype._bindEvent=function(t,e,n){var s=this._safeEvent(t);this._memorizeContext(n),s.push(this._getHandlerItem(e,n))},d.prototype.on=function(t,e,n){var s=this;i(t)?(t=t.split(u),l(t,(function(t){s._bindEvent(t,e,n)}))):r(t)&&(n=e,l(t,(function(t,e){s.on(e,t,n)})))},d.prototype.once=function(t,e,n){var s=this;if(r(t))return n=e,void l(t,(function(t,e){s.once(e,t,n)}));this.on(t,(function o(){e.apply(n,arguments),s.off(t,o,n)}),n)},d.prototype._spliceMatches=function(t,e){var n,s=0;if(a(t))for(n=t.length;s<n;s+=1)!0===e(t[s])&&(t.splice(s,1),n-=1,s-=1)},d.prototype._matchHandler=function(t){var e=this;return function(n){var s=t===n.handler;return s&&e._forgetContext(n.context),s}},d.prototype._matchContext=function(t){var e=this;return function(n){var s=t===n.context;return s&&e._forgetContext(n.context),s}},d.prototype._matchHandlerAndContext=function(t,e){var n=this;return function(s){var o=t===s.handler,i=e===s.context,r=o&&i;return r&&n._forgetContext(s.context),r}},d.prototype._offByEventName=function(t,e){var n=this,s=c(e),o=n._matchHandler(e);t=t.split(u),l(t,(function(t){var e=n._safeEvent(t);s?n._spliceMatches(e,o):(l(e,(function(t){n._forgetContext(t.context)})),n.events[t]=[])}))},d.prototype._offByHandler=function(t){var e=this,n=this._matchHandler(t);l(this._safeEvent(),(function(t){e._spliceMatches(t,n)}))},d.prototype._offByObject=function(t,e){var n,s=this;this._indexOfContext(t)<0?l(t,(function(t,e){s.off(e,t)})):i(e)?(n=this._matchContext(t),s._spliceMatches(this._safeEvent(e),n)):c(e)?(n=this._matchHandlerAndContext(e,t),l(this._safeEvent(),(function(t){s._spliceMatches(t,n)}))):(n=this._matchContext(t),l(this._safeEvent(),(function(t){s._spliceMatches(t,n)})))},d.prototype.off=function(t,e){i(t)?this._offByEventName(t,e):arguments.length?c(t)?this._offByHandler(t):r(t)&&this._offByObject(t,e):(this.events={},this.contexts=[])},d.prototype.fire=function(t){this.invoke.apply(this,arguments)},d.prototype.invoke=function(t){var e,n,s,o;if(!this.hasListener(t))return!0;for(e=this._safeEvent(t),n=Array.prototype.slice.call(arguments,1),s=0;e[s];){if(!1===(o=e[s]).handler.apply(o.context,n))return!1;s+=1}return!0},d.prototype.hasListener=function(t){return this.getListenerLength(t)>0},d.prototype.getListenerLength=function(t){return this._safeEvent(t).length},t.exports=d},function(t,e,n){"use strict";var s=n(1),o=n(15);t.exports=function(t){return!s(t)&&!o(t)}},function(t,e,n){"use strict";t.exports=function(t){return null===t}},function(t,e,n){"use strict";t.exports=function(t){return t===Object(t)}},function(t,e,n){"use strict";t.exports=function(t,e,n){var s=0,o=t.length;for(n=n||null;s<o&&!1!==e.call(n,t[s],s,t);s+=1);}},function(t,e,n){"use strict";var s=n(19);t.exports=function(t,e){var n=s(e.prototype);n.constructor=t,t.prototype=n}},function(t,e,n){"use strict";t.exports=function(t){function e(){}return e.prototype=t,new e}},function(t,e,n){"use strict";var s=n(3),o=n(7),i=n(21),r=n(22),a=n(24),c=n(25),l=n(0),u=n(4),d=n(28),p=n(9),f={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},g=["first","prev","next","last"],h=["prev","next"],_=o({init:function(t,e,n){this._containerElement=null,this._firstItemClassName=e.firstItemClassName,this._lastItemClassName=e.lastItemClassName,this._template=l({},f,e.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(t),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(t){if(u(t)?t=document.getElementById(t)||document.querySelector(t):t.jquery&&(t=t[0]),!d(t))throw new Error("The container element is invalid.");this._containerElement=t},_setMoveButtons:function(){s(g,(function(t){this._buttons[t]=p.createElementByTemplate(this._template.moveButton,{type:t})}),this)},_setDisabledMoveButtons:function(){s(g,(function(t){var e="disabled"+p.capitalizeFirstLetter(t);this._buttons[e]=p.createElementByTemplate(this._template.disabledMoveButton,{type:t})}),this)},_setMoreButtons:function(){s(h,(function(t){var e=t+"More";this._buttons[e]=p.createElementByTemplate(this._template.moreButton,{type:t})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(t){var e;e=t.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(e)},_appendPrevButton:function(t){var e;e=t.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(e)},_appendNextButton:function(t){var e;e=t.currentPageIndex<t.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(e)},_appendLastButton:function(t){var e;e=t.page<t.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(e)},_appendPrevMoreButton:function(t){var e;t.prevMore&&(e=this._buttons.prevMore,c(e,this._firstItemClassName),this._getContainerElement().appendChild(e))},_appendNextMoreButton:function(t){var e;t.nextMore&&(e=this._buttons.nextMore,c(e,this._lastItemClassName),this._getContainerElement().appendChild(e))},_appendPages:function(t){var e,n,s=t.leftPageNumber,o=t.rightPageNumber;for(n=s;n<=o;n+=1)n===t.page?e=p.createElementByTemplate(this._template.currentPage,{page:n}):(e=p.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(e)),n!==s||t.prevMore||c(e,this._firstItemClassName),n!==o||t.nextMore||c(e,this._lastItemClassName),this._getContainerElement().appendChild(e)},_attachClickEvent:function(t){var e=this._getContainerElement();r(e,"click",(function(e){var n,s,o=i(e);a(e),(s=this._getButtonType(o))||(n=this._getPageNumber(o)),t(s,n)}),this)},_getButtonType:function(t){var e,n=this._buttons;return s(n,(function(n,s){return!p.isContained(t,n)||(e=s,!1)}),this),e},_getPageNumber:function(t){var e,n=this._findPageElement(t);return n&&(e=parseInt(n.innerText,10)),e},_findPageElement:function(t){for(var e,n=0,s=this._enabledPageElements.length;n<s;n+=1)if(e=this._enabledPageElements[n],p.isContained(t,e))return e;return null},_empty:function(){this._enabledPageElements=[],s(this._buttons,(function(t,e){this._buttons[e]=t.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(t){this._empty(),this._appendFirstButton(t),this._appendPrevButton(t),this._appendPrevMoreButton(t),this._appendPages(t),this._appendNextMoreButton(t),this._appendNextButton(t),this._appendLastButton(t)}});t.exports=_},function(t,e,n){"use strict";t.exports=function(t){return t.target||t.srcElement}},function(t,e,n){"use strict";var s=n(4),o=n(3),i=n(23);function r(t,e,n,s){function r(e){n.call(s||t,e||window.event)}"addEventListener"in t?t.addEventListener(e,r):"attachEvent"in t&&t.attachEvent("on"+e,r),function(t,e,n,s){var r=i(t,e),a=!1;o(r,(function(t){return t.handler!==n||(a=!0,!1)})),a||r.push({handler:n,wrappedHandler:s})}(t,e,n,r)}t.exports=function(t,e,n,i){s(e)?o(e.split(/\s+/g),(function(e){r(t,e,n,i)})):o(e,(function(e,s){r(t,s,e,n)}))}},function(t,e,n){"use strict";var s="_feEventKey";t.exports=function(t,e){var n,o=t[s];return o||(o=t[s]={}),(n=o[e])||(n=o[e]=[]),n}},function(t,e,n){"use strict";t.exports=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1}},function(t,e,n){"use strict";var s=n(3),o=n(8),i=n(26),r=n(27);t.exports=function(t){var e,n=Array.prototype.slice.call(arguments,1),a=t.classList,c=[];a?s(n,(function(e){t.classList.add(e)})):((e=i(t))&&(n=[].concat(e.split(/\s+/),n)),s(n,(function(t){o(t,c)<0&&c.push(t)})),r(t,c))}},function(t,e,n){"use strict";var s=n(1);t.exports=function(t){return t&&t.className?s(t.className.baseVal)?t.className:t.className.baseVal:""}},function(t,e,n){"use strict";var s=n(2),o=n(1);t.exports=function(t,e){e=(e=s(e)?e.join(" "):e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),o(t.className.baseVal)?t.className=e:t.className.baseVal=e}},function(t,e,n){"use strict";t.exports=function(t){return"object"==typeof HTMLElement?t&&(t instanceof HTMLElement||!!t.nodeType):!(!t||!t.nodeType)}},function(t,e,n){"use strict";var s=n(8),o=n(3),i=n(2),r=n(4),a=n(0),c=/{{\s?|\s?}}/g,l=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,u=/\[\s?|\s?\]/,d=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,p=/\./,f=/^["']\w+["']$/,g=/"|'/g,h=/^-?\d+\.?\d*$/,_={if:function(t,e,n){var s=function(t,e){var n=[t],s=[],i=0,r=0;return o(e,(function(t,o){0===t.indexOf("if")?i+=1:"/if"===t?i-=1:i||0!==t.indexOf("elseif")&&"else"!==t||(n.push("else"===t?["true"]:t.split(" ").slice(1)),s.push(e.slice(r,o)),r=o+1)})),s.push(e.slice(r)),{exps:n,sourcesInsideIf:s}}(t,e),i=!1,r="";return o(s.exps,(function(t,e){return(i=b(t,n))&&(r=x(s.sourcesInsideIf[e],n)),!i})),r},each:function(t,e,n){var s=b(t,n),r=i(s)?"@index":"@key",c={},l="";return o(s,(function(t,s){c[r]=s,c["@this"]=t,a(n,c),l+=x(e.slice(),n)})),l},with:function(t,e,n){var o=s("as",t),i=t[o+1],r=b(t.slice(0,o),n),c={};return c[i]=r,x(e,a(n,c))||""}},m=3==="a".split(/a/).length?function(t,e){return t.split(e)}:function(t,e){var n,s,o=[],i=0;for(e.global||(e=new RegExp(e,"g")),n=e.exec(t);null!==n;)s=n.index,o.push(t.slice(i,s)),i=s+n[0].length,n=e.exec(t);return o.push(t.slice(i)),o};function v(t,e){var n,s=e[t];return"true"===t?s=!0:"false"===t?s=!1:f.test(t)?s=t.replace(g,""):l.test(t)?s=v((n=t.split(u))[0],e)[v(n[1],e)]:d.test(t)?s=v((n=t.split(p))[0],e)[n[1]]:h.test(t)&&(s=parseFloat(t)),s}function y(t,e,n){for(var s,o,i,a,c=_[t],l=1,u=2,d=e[u];l&&r(d);)0===d.indexOf(t)?l+=1:0===d.indexOf("/"+t)&&(l-=1,s=u),d=e[u+=2];if(l)throw Error(t+" needs {{/"+t+"}} expression.");return e[0]=c(e[0].split(" ").slice(1),(o=0,i=s,(a=e.splice(o+1,i-o)).pop(),a),n),e}function b(t,e){var n=v(t[0],e);return n instanceof Function?function(t,e,n){var s=[];return o(e,(function(t){s.push(v(t,n))})),t.apply(null,s)}(n,t.slice(1),e):n}function x(t,e){for(var n,s,o,i=1,a=t[i];r(a);)s=(n=a.split(" "))[0],_[s]?(o=y(s,t.splice(i,t.length-i),e),t=t.concat(o)):t[i]=b(n,e),a=t[i+=2];return t.join("")}t.exports=function(t,e){return x(m(t,c),e)}},function(t,e,n){"use strict";var s=n(1),o=n(31);t.exports=function(t,e){var n=location.hostname,i="TOAST UI "+t+" for "+n+": Statistics",r=window.localStorage.getItem(i);(s(window.tui)||!1!==window.tui.usageStatistics)&&(r&&!function(t){return(new Date).getTime()-t>6048e5}(r)||(window.localStorage.setItem(i,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||o("https://www.google-analytics.com/collect",{v:1,t:"event",tid:e,cid:n,dp:n,dh:t,el:t,ec:"use"})}),1e3)))}},function(t,e,n){"use strict";var s=n(6);t.exports=function(t,e){var n=document.createElement("img"),o="";return s(e,(function(t,e){o+="&"+e+"="+t})),o=o.substring(1),n.src=t+"?"+o,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])},a=r();var c;c=i("aNJCr").getBundleURL("9p9yL")+i("iE7OH").resolve("410VS");var l=i("dIxxU");const u=async t=>{try{const{keyword:e,category:n,page:s,limit:o,sort:i}=t;return(await l.default.get(`https://food-boutique.b.goit.study/api/products?keyword=${e}&category=${n}&page=${s}&limit=${o}&${i}`)).data}catch(t){throw console.error(t),t}};(l=i("dIxxU")).default.defaults.baseURL="https://food-boutique.b.goit.study/api/";class d{constructor(){this.totalPages=1}getCategories(){return l.default.get("products/categories").then((t=>t.data))}getProductsByCat(t){const{keyword:e,category:n,page:s,limit:o,sort:i}=t;return l.default.get(`products?keyword=${e}&category=${n}&page=${s}&limit=${o}&${i}`).then((t=>t.data))}}(l=i("dIxxU")).default.defaults.baseURL="https://food-boutique.b.goit.study/api/";const p={formPopularEl:document.querySelector(".popular__list"),spanCasa:document.querySelector(".css-span-casa")},f=new class{constructor(){}getPopular(){return l.default.get("products/popular").then((t=>t.data))}};function g(){return p.formPopularEl.classList.remove("load"),f.getPopular().then((function(t){!function(t){const n=function(t){return t.map((t=>{const{category:n,img:s,name:o,popularity:i,size:r,_id:a}=t;return`<li class="popular__item" data-id="${a}">\n              <div class="popular__item-inner">\n                <img src="${s}" width="74" alt="${o}" class="popular__item-img" loading="lazy"/>\n              </div>\n              <div class="popular__item-box">\n                <div class="popular__item-buy">\n                  <h4 class="popular__item-title">${o}</h4>\n\n                  <button type="button" aria-label="button-buy" class="popular__item-link">\n                    <svg class="popular__item-svg" width="12" height="12">\n                      <use href="${e(c)}#icon-shopping-cart"></use>\n                    </svg>\n                  </button>\n\n                </div>\n                <div class="popular__item-info">\n                  <div class="popular__item-info-top">\n                    <h4 class="popular__item-label">Category:</h4>\n                    <p class="popular__item-text">${n}</p>\n                  </div>\n                  <div class="popular__item-info-bottom">\n                    <h4 class="popular__item-label">Size:</h4>\n                    <p class="popular__item-text">${r}</p>\n                    <h4 class="popular__item-label">Popularity:</h4>\n                    <p class="popular__item-text">${i}</p>\n                  </div>\n                </div>\n              </div>\n            </li>`}))}(t).join("");p.formPopularEl.innerHTML=n}(t)}))}p.formPopularEl.addEventListener("click",(function(t){if("use"!==t.target.nodeName&&"svg"!==t.target.nodeName&&"BUTTON"!==t.target.nodeName)return;const n=t.target.closest(".popular__item").dataset.id;let s=null;s="BUTTON"===t.target.nodeName?t.target.querySelector(".popular__item-svg"):t.target.closest(".popular__item-svg");const o=JSON.parse(localStorage.getItem("cartIds"));if(s.innerHTML=`<use href="${e(c)}#icon-check"></use>`,s.classList.add("checked-popular"),o.includes(n))return;{const t=JSON.parse(localStorage.getItem("cartIds"));t.push(n),localStorage.setItem("cartIds",JSON.stringify(t)),p.spanCasa.textContent=`Cart (${t.length})`}})),(l=i("dIxxU")).default.defaults.baseURL="https://food-boutique.b.goit.study/api/";const h={buttonEl:document.querySelector(".hero-icon"),listDiscountProductsEl:document.querySelector(".discount__list"),spanCasa:document.querySelector(".css-span-casa")},_=new class{constructor(){}getDiscount(){return l.default.get("products/discount").then((t=>t.data))}};function m(){_.getDiscount().then((t=>{h.listDiscountProductsEl.classList.remove("load-discount"),function(t){const n=function(t){return t.map((t=>function(t){const{_id:n,img:s,name:o,price:i}=t,r=v("cartIds");let a="";a=r.includes(n)?`<svg class="discount__item-cartsvg checked" width="18" height="18"><use href="${e(c)}#icon-check"></use></svg>`:`<svg class="discount__item-cartsvg" width="18" height="18"><use href="${e(c)}#icon-cart-icon"></use></svg>`;return`<li class="discount__item" data-id=${n}>\n            <div class="discount__item-wrapper">\n              <img\n                src="${s}"\n                alt="${o}"\n                width="304"\n                height="150"\n                class="discount__item-img"\n                loading="lazy"\n              />\n            </div>\n            <svg class="discount__item-svg" width="60" height="60">\n              <use href="${e(c)}#icon-discount"></use>\n            </svg>\n            <div class="discount__item-buy">\n              <h4 class="discount__item-label">${o}</h4>\n              <div class="discount__item-box">\n                <p class="discount__item-price">$${i}</p>\n                <button type="button" aria-label="cart button" class="discount__item-link">\n                ${a}\n                </button>\n                </div>\n                </div>\n                </li>`}(t))).join("")}(t);h.listDiscountProductsEl.innerHTML=n}(t)})).catch((t=>{console.error("Error fetching discount products:",t)}))}function v(t){try{return JSON.parse(localStorage.getItem(t))||[]}catch(e){return console.log(e.message),localStorage.getItem(t)}}h.listDiscountProductsEl.addEventListener("click",(function(t){if("use"!==t.target.nodeName&&"svg"!==t.target.nodeName&&"BUTTON"!==t.target.nodeName)return;const n=t.target.closest(".discount__item").dataset.id;let s=null;s="BUTTON"===t.target.nodeName?t.target.querySelector(".discount__item-cartsvg"):t.target.closest(".discount__item-cartsvg");s.innerHTML=`<use href="${e(c)}#icon-check"></use>`,s.classList.add("checked");const o=v("cartIds");if(o.includes(n))return;o.push(n),function(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch(t){console.log(t.message)}}("cartIds",o),h.spanCasa.textContent=`Cart (${o.length})`}));const y={selectEl:document.querySelector(".category-choice"),productListEl:document.querySelector(".products__list"),formEl:document.querySelector(".filters__form"),sortEl:document.querySelector(".sort-by"),formPopularEl:document.querySelector(".popular__list"),listDiscountProductsEl:document.querySelector(".discount__list")};document.addEventListener("DOMContentLoaded",(function(){const t={keyword:"",category:"",page:1,limit:9,sort:"ByABC=true"},e=window.innerWidth;t.limit=e<=1272&&e>=768?8:e<768?6:9;C("PARAMS",t),y.formPopularEl.classList.add("load"),y.productListEl.classList.add("load"),y.listDiscountProductsEl.classList.add("load-discount"),y.productListEl.innerHTML=x,y.listDiscountProductsEl.innerHTML=x,y.formPopularEl.innerHTML=x,P.getProductsByCat(t).then((t=>{m(),g(),y.productListEl.classList.remove("load"),y.listDiscountProductsEl.classList.remove("load-discount"),T(t.totalPages),L(t.results)})),P.getCategories().then((t=>{!function(t){const e=function(t){return t.map((t=>{const e=t.replace("%26","&");return`\n        <option value="${t}">${e}</option>\n        `}))}(t).join("");y.selectEl.insertAdjacentHTML("afterbegin",e)}(t.map((t=>t.replace("&","%26"))))}))})),y.selectEl.addEventListener("change",(function(){const t=y.selectEl.value,e=S("PARAMS");e.category=t,e.page=1,C("PARAMS",e),y.productListEl.innerHTML=x,y.productListEl.classList.add("load"),P.getProductsByCat(e).then((t=>{y.productListEl.innerHTML=x,y.productListEl.classList.remove("load"),b.classList.remove("visually-hidden"),L(t.results),T(t.totalPages),1!==t.totalPages&&0!==t.totalPages||b.classList.add("visually-hidden"),t.totalPages||(y.productListEl.innerHTML="<h2>Products not found!</h2>")}))})),y.formEl.addEventListener("submit",(function(t){t.preventDefault();const e=t.target.elements["search-input"].value,n=S("PARAMS");n.keyword=e,n.page=1,C("PARAMS",n),y.productListEl.innerHTML=x,y.productListEl.classList.add("load"),P.getProductsByCat(n).then((t=>{y.productListEl.classList.remove("load"),b.classList.remove("visually-hidden"),L(t.results),T(t.totalPages),1!==t.totalPages&&0!==t.totalPages||b.classList.add("visually-hidden"),t.totalPages||(y.productListEl.innerHTML="<h2>Products not found!</h2>")}))})),y.sortEl.addEventListener("change",(function(t){const e=t.target.value;let n="";switch(e){case"atoz":n="byABC=true";break;case"ztoa":n="byABC=false";break;case"priceup":n="byPrice=true";break;case"pricedown":n="byPrice=false";break;case"popularityup":n="byPopularity=true";break;case"popularitydown":n="byPopularity=false"}const s=S("PARAMS");s.sort=n,s.page=1,C("PARAMS",s),y.productListEl.innerHTML=x,y.productListEl.classList.add("load"),P.getProductsByCat(s).then((t=>{y.productListEl.classList.remove("load"),L(t.results),T(t.totalPages)}))}));const b=document.querySelector("#tui-pagination-container"),x='<div class="loader"></div>',P=new d;function E(t){y.productListEl.innerHTML=x,y.productListEl.classList.add("load"),P.getProductsByCat(t).then((t=>{y.productListEl.classList.remove("load"),L(t.results),T(t.totalPages)}))}function L(t){const n=function(t){return t.map((t=>{const{category:n,img:s,name:o,popularity:i,price:r,size:a,_id:l}=t;return`\n    <li class="products__item" data-id="${l}">\n        <div class="products__item-inner">\n          <img\n            class="products__item-img"\n            src="${s}"\n            alt="${o}"\n            width="295"\n            loading="lazy"\n          />\n          </div>\n          <h3 class="products__item-title">${o}</h3>\n          <div class="products__item-info">\n            <div class="products__item-wrapper">\n              <h4 class="products__item-label">Category:</h4>\n              <p class="products__item-text">${n}</p>\n              <h4 class="products__item-label">Size:</h4>\n              <p class="products__item-text">${a}</p>\n            </div>\n            <h5 class="products__item-label">Popularity:</h5>\n            <p class="products__item-text">${i}</p>\n          </div>\n          <div class="products__item-buy">\n            <p class="products__item-price">$${r}</p>\n            <button type="button" aria-label="button-buy" class="products__item-link">\n              <svg class="products__item-svg" width="18" heigth="18">\n                <use href="${e(c)}#icon-cart-icon">\n                </use>\n              </svg>\n            </button>\n          </div>\n        </li>\n    `}))}(t).join("");y.productListEl.innerHTML=n}function C(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch(t){console.log(t.message)}}function S(t){try{return JSON.parse(localStorage.getItem(t))||{}}catch(e){return console.log(e.message),localStorage.getItem(t)}}const w=document.querySelector("#tui-pagination-container"),M=document.querySelector(".products__list");async function I(){M.innerHTML='<div class="loader"></div>',M.classList.add("load");const t=await u(N);M.classList.remove("load"),L(t.results)}let N=B("PARAMS");const $=new(e(a))(w,{itemsPerPage:1,visiblePages:4,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" aria-label="pagination-page link" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" aria-label="pagination-move link" class="icon tui-page-btn tui-{{type}}">\n      <span class="tui-ico-{{type}}">{{type}}>\n      </span>\n      </a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}">\n      <span class="tui-ico-{{type}}">{{type}}>\n      </span>\n      </span>',moreButton:'<a href="#" aria-label="pagination-more link" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}});function T(t){$.setTotalItems(9*t),$.reset(t)}function B(t){try{return JSON.parse(localStorage.getItem(t))||{}}catch(e){return console.log(e.message),localStorage.getItem(t)}}$.on("afterMove",(t=>{N=B("PARAMS"),N.page=t.page,function(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch(t){console.log(t.message)}}("PARAMS",N),I()}));l=i("dIxxU");const k=document.querySelector(".modal");function A(){k.classList.remove("open"),window.removeEventListener("keydown",O),document.body.classList.remove("modal-open")}function O(t){"Escape"===t.code&&A()}document.querySelectorAll(".products__list, .discount__list, .popular__list").forEach((t=>{t.addEventListener("click",(async t=>{const n=t.target.closest(".products__item-link"),s=t.target.closest(".discount__item-link"),o=t.target.closest(".popular__item-link");if(n||s||o)return;const i=t.target.closest(".products__item, .discount__item, .popular__item");if(i){t.preventDefault();try{const t=i.dataset.id;!function(t){k.innerHTML="",k.classList.add("open"),window.addEventListener("keydown",O),document.body.classList.add("modal-open");const n=function({img:t,name:n,category:s,size:o,popularity:i,desc:r,price:a,_id:l}){return`\n        <div class="modal__inner" data-product-id='${l}'>\n            <button class="modal__close" aria-label="button close">\n                <svg class="modal__close-icon" width="13" height="13">\n                    <use href="${e(c)}#icon-close"></use>\n                </svg>\n            </button>\n\n            <div class="modal__product-info">\n                 <div class="modal__img-box"><img class="modal__product-img" src="${t}" alt="${n}" width="295"/></div>\n                  <div class="modal__product-content">\n                    <h4 class="modal__product-title">${n}</h4>\n                     <ul class="modal__product-list">\n                         <li class="modal__product-item">\n                             <h5 class="modal__product-label">Category:</h5>\n                             <p class="modal__product-text">${s}</p>\n                         </li>\n                        <li class="modal__product-item">\n                            <h5 class="modal__product-label">Size:</h5>\n                            <p class="modal__product-text">${o}</p>\n                         </li>\n                        <li class="modal__product-item">\n                            <h5 class="modal__product-label">Popularity:</h5>\n                            <p class="modal__product-text">${i}</p>\n                         </li>\n                     </ul>\n                         \n                    <p class="modal__product-descr">${r}</p>           \n                  </div>\n            </div>\n\n            <div class="modal__product-buy">\n                <p class="modal__product-price"><span>&#36;</span>${a}</p>\n                <button class="modal__buy-btn" type="button" aria-label="buy" data-state='add'>\n                    <p class="modal__buy-btn-text">Add to</p>\n                    <svg class="modal__cart-icon" width="18" height="18">\n                        <use href="${e(c)}#icon-cart-icon"></use>\n                    </svg>\n                </button>\n                </div>\n    `}(t);k.insertAdjacentHTML("beforeend",n),function(){const t=document.querySelector(".modal__product-descr"),e=54;t.scrollHeight>e&&t.classList.add("scroll-adding")}();const s=t._id;k.setAttribute("data-product-id",s);const o=document.querySelector(".modal__buy-btn");let i=JSON.parse(localStorage.getItem("cartIds"))||[];const r=i.includes(s);o.querySelector(".modal__buy-btn-text").textContent=r?"Remove from":"Add to";const a=document.querySelector(".css-span-casa");o.addEventListener("click",(()=>{const t=i.indexOf(s);-1===t?(i.push(s),o.querySelector(".modal__buy-btn-text").textContent="Remove from"):(i.splice(t,1),o.querySelector(".modal__buy-btn-text").textContent="Add to"),localStorage.setItem("cartIds",JSON.stringify(i)),a.textContent=`Cart(${i.length})`}))}(await async function(t){try{return(await l.default.get(`https://food-boutique.b.goit.study/api/products/${t}`)).data}catch(t){throw console.error("Error fetching product by ID:",t),t}}(t))}catch(t){console.error("Error getting product data:",t)}}}))})),k.addEventListener("click",(t=>{(t.target===k||t.target.closest(".modal__close"))&&A()}));const H=document.querySelector(".products__list"),q=document.querySelector(".css-span-casa");function R(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch(t){console.log(t.message)}}function j(t){try{return JSON.parse(localStorage.getItem(t))||[]}catch(e){return console.log(e.message),localStorage.getItem(t)}}document.addEventListener("DOMContentLoaded",(function(t){const e=j("cartIds");q.textContent=`Cart (${e.length})`})),H.addEventListener("click",(function(t){if("use"!==t.target.nodeName&&"svg"!==t.target.nodeName&&"BUTTON"!==t.target.nodeName)return;const n=t.target.closest(".products__item").dataset.id;let s=null;s="BUTTON"===t.target.nodeName?t.target.querySelector(".products__item-svg"):t.target.closest(".products__item-svg");const o=j("cartIds");if(o){if(j("cartIds").includes(n))return;o.push(n),R("cartIds",o),s.innerHTML=`<use href="${e(c)}#icon-check"></use>`,s.classList.add("checked"),q.textContent=`Cart (${o.length})`}else R("cartIds",o),s.innerHTML=`<use href="${e(c)}#icon-check"></use>`,s.classList.add("checked"),q.textContent=`Cart (${o.length})`})),i("4fCfA"),i("534RT"),window.addEventListener("scroll",(function(){let t=document.getElementById("scrollBtn");window.scrollY>window.innerHeight/2?t.style.display="block":t.style.display="none"})),document.getElementById("scrollBtn").addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})}));var D=i("dCfNN");window.addEventListener("resize",e(D)((function(t){console.log(t.target.innerHeight),console.log(t.target.innerWidth);t.target.innerHeight;const e=t.target.innerWidth,n=function(t){try{return JSON.parse(localStorage.getItem(t))||{}}catch(e){return console.log(e.message),localStorage.getItem(t)}}("PARAMS");n.limit=e<=1272&&e>=768?8:e<768?6:9;(function(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch(t){console.log(t.message)}})("PARAMS",n),E(n)}),500));document.querySelector(".products__list"),new d}();
//# sourceMappingURL=index.5f8512e7.js.map
