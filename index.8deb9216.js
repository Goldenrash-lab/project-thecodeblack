!function(){function t(t,e,n,s){Object.defineProperty(t,e,{get:n,set:s,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},o={},i=n.parcelRequirec1c0;null==i&&((i=function(t){if(t in s)return s[t].exports;if(t in o){var e=o[t];delete o[t];var n={id:t,exports:{}};return s[t]=n,e.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){o[t]=e},n.parcelRequirec1c0=i),i.register("iE7OH",(function(e,n){var s,o;t(e.exports,"register",(function(){return s}),(function(t){return s=t})),t(e.exports,"resolve",(function(){return o}),(function(t){return o=t}));var i={};s=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)i[e[n]]=t[e[n]]},o=function(t){var e=i[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),i.register("aNJCr",(function(e,n){var s;t(e.exports,"getBundleURL",(function(){return s}),(function(t){return s=t}));var o={};function i(t){return(""+t).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}s=function(t){var e=o[t];return e||(e=function(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(t)return i(t[2])}return"/"}(),o[t]=e),e}})),i("iE7OH").register(JSON.parse('{"9p9yL":"index.8deb9216.js","410VS":"icons.2919280f.svg","de1dt":"index.05908b93.js"}'));var r,a={};
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */window,r=function(){return function(t){var e={};function n(s){if(e[s])return e[s].exports;var o=e[s]={i:s,l:!1,exports:{}};return t[s].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(s,o,function(e){return t[e]}.bind(null,o));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist",n(n.s=10)}([function(t,e,n){"use strict";t.exports=function(t,e){var n,s,o,i,r=Object.prototype.hasOwnProperty;for(o=1,i=arguments.length;o<i;o+=1)for(s in n=arguments[o])r.call(n,s)&&(t[s]=n[s]);return t}},function(t,e,n){"use strict";t.exports=function(t){return void 0===t}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Array}},function(t,e,n){"use strict";var s=n(2),o=n(17),i=n(6);t.exports=function(t,e,n){s(t)?o(t,e,n):i(t,e,n)}},function(t,e,n){"use strict";t.exports=function(t){return"string"==typeof t||t instanceof String}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Function}},function(t,e,n){"use strict";t.exports=function(t,e,n){var s;for(s in n=n||null,t)if(t.hasOwnProperty(s)&&!1===e.call(n,t[s],s,t))break}},function(t,e,n){"use strict";var s=n(18),o=n(0);t.exports=function(t,e){var n;return e||(e=t,t=null),n=e.init||function(){},t&&s(n,t),e.hasOwnProperty("static")&&(o(n,e.static),delete e.static),o(n.prototype,e),n}},function(t,e,n){"use strict";var s=n(2);t.exports=function(t,e,n){var o,i;if(n=n||0,!s(e))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(e,t,n);for(i=e.length,o=n;n>=0&&o<i;o+=1)if(e[o]===t)return o;return-1}},function(t,e,n){"use strict";var s=n(29),o=n(30),i=n(5),r={capitalizeFirstLetter:function(t){return t.substring(0,1).toUpperCase()+t.substring(1,t.length)},isContained:function(t,e){return!!e&&(t===e||e.contains(t))},createElementByTemplate:function(t,e){var n=document.createElement("div"),o=i(t)?t(e):s(t,e);return n.innerHTML=o,n.firstChild},bind:function(t,e){var n,s=Array.prototype.slice;return t.bind?t.bind.apply(t,s.call(arguments,1)):(n=s.call(arguments,2),function(){return t.apply(e,n.length?n.concat(s.call(arguments)):arguments)})},sendHostName:function(){o("pagination","UA-129987462-1")}};t.exports=r},function(t,e,n){"use strict";n(11),t.exports=n(12)},function(t,e,n){},function(t,e,n){"use strict";var s=n(13),o=n(7),i=n(0),r=n(1),a=n(20),c=n(9),u={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},l=o({init:function(t,e){this._options=i({},u,e),this._currentPage=0,this._view=new a(t,this._options,c.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&c.sendHostName()},_setCurrentPage:function(t){this._currentPage=t||this._options.page},_getLastPage:function(){var t=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return t||1},_getPageIndex:function(t){var e;return this._options.centerAlign?(e=t-Math.floor(this._options.visiblePages/2),e=Math.max(e,1),e=Math.min(e,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(t/this._options.visiblePages)},_getRelativePage:function(t){var e="prev"===t,n=this.getCurrentPage();return e?n-1:n+1},_getMorePageIndex:function(t){var e=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,s="prev"===t;return this._options.centerAlign?s?e-1:e+n:s?(e-1)*n:e*n+1},_convertToValidPage:function(t){var e=this._getLastPage();return t=Math.max(t,1),t=Math.min(t,e)},_paginate:function(t){var e=this._makeViewData(t||this._options.page);this._setCurrentPage(t),this._view.update(e)},_makeViewData:function(t){var e={},n=this._getLastPage(),s=this._getPageIndex(t),o=this._getPageIndex(n),i=this._getEdge(t);return e.leftPageNumber=i.left,e.rightPageNumber=i.right,e.prevMore=s>1,e.nextMore=s<o,e.page=t,e.currentPageIndex=t,e.lastPage=n,e.lastPageListIndex=n,e},_getEdge:function(t){var e,n,s,o=this._getLastPage(),i=this._options.visiblePages,r=this._getPageIndex(t);return this._options.centerAlign?(s=Math.floor(i/2),(n=(e=Math.max(t-s,1))+i-1)>o&&(e=Math.max(o-i+1,1),n=o)):(e=(r-1)*i+1,n=r*i,n=Math.min(n,o)),{left:e,right:n}},_onClickHandler:function(t,e){switch(t){case"first":e=1;break;case"prev":e=this._getRelativePage("prev");break;case"next":e=this._getRelativePage("next");break;case"prevMore":e=this._getMorePageIndex("prev");break;case"nextMore":e=this._getMorePageIndex("next");break;case"last":e=this._getLastPage();break;default:if(!e)return}this.movePageTo(e)},reset:function(t){r(t)&&(t=this._options.totalItems),this._options.totalItems=t,this._paginate(1)},movePageTo:function(t){t=this._convertToValidPage(t),this.invoke("beforeMove",{page:t})&&(this._paginate(t),this.fire("afterMove",{page:t}))},setTotalItems:function(t){this._options.totalItems=t},setItemsPerPage:function(t){this._options.itemsPerPage=t},getCurrentPage:function(){return this._currentPage||this._options.page}});s.mixin(l),t.exports=l},function(t,e,n){"use strict";var s=n(0),o=n(14),i=n(4),r=n(16),a=n(2),c=n(5),u=n(3),l=/\s+/g;function p(){this.events=null,this.contexts=null}p.mixin=function(t){s(t.prototype,p.prototype)},p.prototype._getHandlerItem=function(t,e){var n={handler:t};return e&&(n.context=e),n},p.prototype._safeEvent=function(t){var e,n=this.events;return n||(n=this.events={}),t&&((e=n[t])||(e=[],n[t]=e),n=e),n},p.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},p.prototype._indexOfContext=function(t){for(var e=this._safeContext(),n=0;e[n];){if(t===e[n][0])return n;n+=1}return-1},p.prototype._memorizeContext=function(t){var e,n;o(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1?e[n][1]+=1:e.push([t,1]))},p.prototype._forgetContext=function(t){var e,n;o(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1&&(e[n][1]-=1,e[n][1]<=0&&e.splice(n,1)))},p.prototype._bindEvent=function(t,e,n){var s=this._safeEvent(t);this._memorizeContext(n),s.push(this._getHandlerItem(e,n))},p.prototype.on=function(t,e,n){var s=this;i(t)?(t=t.split(l),u(t,(function(t){s._bindEvent(t,e,n)}))):r(t)&&(n=e,u(t,(function(t,e){s.on(e,t,n)})))},p.prototype.once=function(t,e,n){var s=this;if(r(t))return n=e,void u(t,(function(t,e){s.once(e,t,n)}));this.on(t,(function o(){e.apply(n,arguments),s.off(t,o,n)}),n)},p.prototype._spliceMatches=function(t,e){var n,s=0;if(a(t))for(n=t.length;s<n;s+=1)!0===e(t[s])&&(t.splice(s,1),n-=1,s-=1)},p.prototype._matchHandler=function(t){var e=this;return function(n){var s=t===n.handler;return s&&e._forgetContext(n.context),s}},p.prototype._matchContext=function(t){var e=this;return function(n){var s=t===n.context;return s&&e._forgetContext(n.context),s}},p.prototype._matchHandlerAndContext=function(t,e){var n=this;return function(s){var o=t===s.handler,i=e===s.context,r=o&&i;return r&&n._forgetContext(s.context),r}},p.prototype._offByEventName=function(t,e){var n=this,s=c(e),o=n._matchHandler(e);t=t.split(l),u(t,(function(t){var e=n._safeEvent(t);s?n._spliceMatches(e,o):(u(e,(function(t){n._forgetContext(t.context)})),n.events[t]=[])}))},p.prototype._offByHandler=function(t){var e=this,n=this._matchHandler(t);u(this._safeEvent(),(function(t){e._spliceMatches(t,n)}))},p.prototype._offByObject=function(t,e){var n,s=this;this._indexOfContext(t)<0?u(t,(function(t,e){s.off(e,t)})):i(e)?(n=this._matchContext(t),s._spliceMatches(this._safeEvent(e),n)):c(e)?(n=this._matchHandlerAndContext(e,t),u(this._safeEvent(),(function(t){s._spliceMatches(t,n)}))):(n=this._matchContext(t),u(this._safeEvent(),(function(t){s._spliceMatches(t,n)})))},p.prototype.off=function(t,e){i(t)?this._offByEventName(t,e):arguments.length?c(t)?this._offByHandler(t):r(t)&&this._offByObject(t,e):(this.events={},this.contexts=[])},p.prototype.fire=function(t){this.invoke.apply(this,arguments)},p.prototype.invoke=function(t){var e,n,s,o;if(!this.hasListener(t))return!0;for(e=this._safeEvent(t),n=Array.prototype.slice.call(arguments,1),s=0;e[s];){if(!1===(o=e[s]).handler.apply(o.context,n))return!1;s+=1}return!0},p.prototype.hasListener=function(t){return this.getListenerLength(t)>0},p.prototype.getListenerLength=function(t){return this._safeEvent(t).length},t.exports=p},function(t,e,n){"use strict";var s=n(1),o=n(15);t.exports=function(t){return!s(t)&&!o(t)}},function(t,e,n){"use strict";t.exports=function(t){return null===t}},function(t,e,n){"use strict";t.exports=function(t){return t===Object(t)}},function(t,e,n){"use strict";t.exports=function(t,e,n){var s=0,o=t.length;for(n=n||null;s<o&&!1!==e.call(n,t[s],s,t);s+=1);}},function(t,e,n){"use strict";var s=n(19);t.exports=function(t,e){var n=s(e.prototype);n.constructor=t,t.prototype=n}},function(t,e,n){"use strict";t.exports=function(t){function e(){}return e.prototype=t,new e}},function(t,e,n){"use strict";var s=n(3),o=n(7),i=n(21),r=n(22),a=n(24),c=n(25),u=n(0),l=n(4),p=n(28),d=n(9),f={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},_=["first","prev","next","last"],g=["prev","next"],h=o({init:function(t,e,n){this._containerElement=null,this._firstItemClassName=e.firstItemClassName,this._lastItemClassName=e.lastItemClassName,this._template=u({},f,e.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(t),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(t){if(l(t)?t=document.getElementById(t)||document.querySelector(t):t.jquery&&(t=t[0]),!p(t))throw new Error("The container element is invalid.");this._containerElement=t},_setMoveButtons:function(){s(_,(function(t){this._buttons[t]=d.createElementByTemplate(this._template.moveButton,{type:t})}),this)},_setDisabledMoveButtons:function(){s(_,(function(t){var e="disabled"+d.capitalizeFirstLetter(t);this._buttons[e]=d.createElementByTemplate(this._template.disabledMoveButton,{type:t})}),this)},_setMoreButtons:function(){s(g,(function(t){var e=t+"More";this._buttons[e]=d.createElementByTemplate(this._template.moreButton,{type:t})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(t){var e;e=t.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(e)},_appendPrevButton:function(t){var e;e=t.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(e)},_appendNextButton:function(t){var e;e=t.currentPageIndex<t.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(e)},_appendLastButton:function(t){var e;e=t.page<t.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(e)},_appendPrevMoreButton:function(t){var e;t.prevMore&&(e=this._buttons.prevMore,c(e,this._firstItemClassName),this._getContainerElement().appendChild(e))},_appendNextMoreButton:function(t){var e;t.nextMore&&(e=this._buttons.nextMore,c(e,this._lastItemClassName),this._getContainerElement().appendChild(e))},_appendPages:function(t){var e,n,s=t.leftPageNumber,o=t.rightPageNumber;for(n=s;n<=o;n+=1)n===t.page?e=d.createElementByTemplate(this._template.currentPage,{page:n}):(e=d.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(e)),n!==s||t.prevMore||c(e,this._firstItemClassName),n!==o||t.nextMore||c(e,this._lastItemClassName),this._getContainerElement().appendChild(e)},_attachClickEvent:function(t){var e=this._getContainerElement();r(e,"click",(function(e){var n,s,o=i(e);a(e),(s=this._getButtonType(o))||(n=this._getPageNumber(o)),t(s,n)}),this)},_getButtonType:function(t){var e,n=this._buttons;return s(n,(function(n,s){return!d.isContained(t,n)||(e=s,!1)}),this),e},_getPageNumber:function(t){var e,n=this._findPageElement(t);return n&&(e=parseInt(n.innerText,10)),e},_findPageElement:function(t){for(var e,n=0,s=this._enabledPageElements.length;n<s;n+=1)if(e=this._enabledPageElements[n],d.isContained(t,e))return e;return null},_empty:function(){this._enabledPageElements=[],s(this._buttons,(function(t,e){this._buttons[e]=t.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(t){this._empty(),this._appendFirstButton(t),this._appendPrevButton(t),this._appendPrevMoreButton(t),this._appendPages(t),this._appendNextMoreButton(t),this._appendNextButton(t),this._appendLastButton(t)}});t.exports=h},function(t,e,n){"use strict";t.exports=function(t){return t.target||t.srcElement}},function(t,e,n){"use strict";var s=n(4),o=n(3),i=n(23);function r(t,e,n,s){function r(e){n.call(s||t,e||window.event)}"addEventListener"in t?t.addEventListener(e,r):"attachEvent"in t&&t.attachEvent("on"+e,r),function(t,e,n,s){var r=i(t,e),a=!1;o(r,(function(t){return t.handler!==n||(a=!0,!1)})),a||r.push({handler:n,wrappedHandler:s})}(t,e,n,r)}t.exports=function(t,e,n,i){s(e)?o(e.split(/\s+/g),(function(e){r(t,e,n,i)})):o(e,(function(e,s){r(t,s,e,n)}))}},function(t,e,n){"use strict";var s="_feEventKey";t.exports=function(t,e){var n,o=t[s];return o||(o=t[s]={}),(n=o[e])||(n=o[e]=[]),n}},function(t,e,n){"use strict";t.exports=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1}},function(t,e,n){"use strict";var s=n(3),o=n(8),i=n(26),r=n(27);t.exports=function(t){var e,n=Array.prototype.slice.call(arguments,1),a=t.classList,c=[];a?s(n,(function(e){t.classList.add(e)})):((e=i(t))&&(n=[].concat(e.split(/\s+/),n)),s(n,(function(t){o(t,c)<0&&c.push(t)})),r(t,c))}},function(t,e,n){"use strict";var s=n(1);t.exports=function(t){return t&&t.className?s(t.className.baseVal)?t.className:t.className.baseVal:""}},function(t,e,n){"use strict";var s=n(2),o=n(1);t.exports=function(t,e){e=(e=s(e)?e.join(" "):e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),o(t.className.baseVal)?t.className=e:t.className.baseVal=e}},function(t,e,n){"use strict";t.exports=function(t){return"object"==typeof HTMLElement?t&&(t instanceof HTMLElement||!!t.nodeType):!(!t||!t.nodeType)}},function(t,e,n){"use strict";var s=n(8),o=n(3),i=n(2),r=n(4),a=n(0),c=/{{\s?|\s?}}/g,u=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,l=/\[\s?|\s?\]/,p=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,d=/\./,f=/^["']\w+["']$/,_=/"|'/g,g=/^-?\d+\.?\d*$/,h={if:function(t,e,n){var s=function(t,e){var n=[t],s=[],i=0,r=0;return o(e,(function(t,o){0===t.indexOf("if")?i+=1:"/if"===t?i-=1:i||0!==t.indexOf("elseif")&&"else"!==t||(n.push("else"===t?["true"]:t.split(" ").slice(1)),s.push(e.slice(r,o)),r=o+1)})),s.push(e.slice(r)),{exps:n,sourcesInsideIf:s}}(t,e),i=!1,r="";return o(s.exps,(function(t,e){return(i=b(t,n))&&(r=x(s.sourcesInsideIf[e],n)),!i})),r},each:function(t,e,n){var s=b(t,n),r=i(s)?"@index":"@key",c={},u="";return o(s,(function(t,s){c[r]=s,c["@this"]=t,a(n,c),u+=x(e.slice(),n)})),u},with:function(t,e,n){var o=s("as",t),i=t[o+1],r=b(t.slice(0,o),n),c={};return c[i]=r,x(e,a(n,c))||""}},m=3==="a".split(/a/).length?function(t,e){return t.split(e)}:function(t,e){var n,s,o=[],i=0;for(e.global||(e=new RegExp(e,"g")),n=e.exec(t);null!==n;)s=n.index,o.push(t.slice(i,s)),i=s+n[0].length,n=e.exec(t);return o.push(t.slice(i)),o};function v(t,e){var n,s=e[t];return"true"===t?s=!0:"false"===t?s=!1:f.test(t)?s=t.replace(_,""):u.test(t)?s=v((n=t.split(l))[0],e)[v(n[1],e)]:p.test(t)?s=v((n=t.split(d))[0],e)[n[1]]:g.test(t)&&(s=parseFloat(t)),s}function y(t,e,n){for(var s,o,i,a,c=h[t],u=1,l=2,p=e[l];u&&r(p);)0===p.indexOf(t)?u+=1:0===p.indexOf("/"+t)&&(u-=1,s=l),p=e[l+=2];if(u)throw Error(t+" needs {{/"+t+"}} expression.");return e[0]=c(e[0].split(" ").slice(1),(o=0,i=s,(a=e.splice(o+1,i-o)).pop(),a),n),e}function b(t,e){var n=v(t[0],e);return n instanceof Function?function(t,e,n){var s=[];return o(e,(function(t){s.push(v(t,n))})),t.apply(null,s)}(n,t.slice(1),e):n}function x(t,e){for(var n,s,o,i=1,a=t[i];r(a);)s=(n=a.split(" "))[0],h[s]?(o=y(s,t.splice(i,t.length-i),e),t=t.concat(o)):t[i]=b(n,e),a=t[i+=2];return t.join("")}t.exports=function(t,e){return x(m(t,c),e)}},function(t,e,n){"use strict";var s=n(1),o=n(31);t.exports=function(t,e){var n=location.hostname,i="TOAST UI "+t+" for "+n+": Statistics",r=window.localStorage.getItem(i);(s(window.tui)||!1!==window.tui.usageStatistics)&&(r&&!function(t){return(new Date).getTime()-t>6048e5}(r)||(window.localStorage.setItem(i,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||o("https://www.google-analytics.com/collect",{v:1,t:"event",tid:e,cid:n,dp:n,dh:t,el:t,ec:"use"})}),1e3)))}},function(t,e,n){"use strict";var s=n(6);t.exports=function(t,e){var n=document.createElement("img"),o="";return s(e,(function(t,e){o+="&"+e+"="+t})),o=o.substring(1),n.src=t+"?"+o,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])},a=r();var c;c=i("aNJCr").getBundleURL("9p9yL")+i("iE7OH").resolve("410VS");var u=i("dIxxU");const l=async t=>{try{const{keyword:e,category:n,page:s,limit:o,sort:i}=t;return(await u.default.get(`https://food-boutique.b.goit.study/api/products?keyword=${e}&category=${n}&page=${s}&limit=${o}&${i}`)).data}catch(t){throw console.error(t),t}};(u=i("dIxxU")).default.defaults.baseURL="https://food-boutique.b.goit.study/api/";const p={selectEl:document.querySelector(".category-choice"),productListEl:document.querySelector(".products__list"),formEl:document.querySelector(".filters__form"),sortEl:document.querySelector(".sort-by")};document.addEventListener("DOMContentLoaded",(function(){const t={keyword:"",category:"",page:1,limit:9,sort:"ByABC=true"};g("PARAMS",t),f.getProductsByCat(t).then((t=>{_(t.results)})),f.getCategories().then((t=>{!function(t){const e=function(t){return t.map((t=>`\n        <option value="${t}">${t}</option>\n        `))}(t).join("");p.selectEl.insertAdjacentHTML("afterbegin",e)}(t)}))})),p.selectEl.addEventListener("change",(function(){const t=p.selectEl.value,e=h("PARAMS");e.category=t,e.page=1,g("PARAMS",e),f.getProductsByCat(e).then((t=>{_(t.results),P(t.totalPages)}))})),p.formEl.addEventListener("submit",(function(t){t.preventDefault();const e=t.target.elements["search-input"].value,n=h("PARAMS");n.keyword=e,n.page=1,g("PARAMS",n),f.getProductsByCat(n).then((t=>{d.classList.remove("visually-hidden"),_(t.results),P(t.totalPages),1!==t.totalPages&&0!==t.totalPages||d.classList.add("visually-hidden"),t.totalPages||(p.productListEl.innerHTML="<h2>Products not found!</h2>")}))})),p.sortEl.addEventListener("change",(function(t){const e=t.target.value;console.log(e);let n="";switch(e){case"atoz":n="byABC=true";break;case"ztoa":n="byABC=false";break;case"priceup":n="byPrice=true";break;case"pricedown":n="byPrice=false";break;case"popularityup":n="byPopularity=true";break;case"popularitydown":n="byPopularity=false"}const s=h("PARAMS");s.sort=n,s.page=1,g("PARAMS",s),f.getProductsByCat(s).then((t=>{_(t.results),P(t.totalPages)}))}));const d=document.querySelector("#tui-pagination-container"),f=new class{constructor(){this.totalPages=1}getCategories(){return u.default.get("products/categories").then((t=>t.data))}getProductsByCat(t){const{keyword:e,category:n,page:s,limit:o,sort:i}=t;return u.default.get(`products?keyword=${e}&category=${n}&page=${s}&limit=${o}&${i}`).then((t=>t.data))}};function _(t){const n=function(t){return t.map((t=>{const{category:n,img:s,name:o,popularity:i,price:r,size:a,_id:u}=t;return`\n    <li class="products__item" data-id="${u}">\n        <div class="products__item-inner">\n          <img\n            class="products__item-img"\n            src="${s}"\n            alt="${o}"\n            width="295"\n          />\n          </div>\n          <h4 class="products__item-title">${o}</h4>\n          <div class="products__item-info">\n            <div class="products__item-wrapper">\n              <h5 class="products__item-label">Category:</h5>\n              <p class="products__item-text">${n}</p>\n              <h5 class="products__item-label">Size:</h5>\n              <p class="products__item-text">${a}</p>\n            </div>\n            <h5 class="products__item-label">Popularity:</h5>\n            <p class="products__item-text">${i}</p>\n          </div>\n          <div class="products__item-buy">\n            <p class="products__item-price">$${r}</p>\n            <button type="button" class="products__item-link">\n              <svg class="products__item-svg" width="18" heigth="18">\n                <use href="${e(c)}#icon-cart-icon">\n                </use>\n              </svg>\n            </button>\n          </div>\n        </li>\n    `}))}(t).join("");p.productListEl.innerHTML=n}function g(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch(t){console.log(t.message)}}function h(t){try{return JSON.parse(localStorage.getItem(t))||{}}catch(e){return console.log(e.message),localStorage.getItem(t)}}const m=document.querySelector("#tui-pagination-container"),v=document.querySelector(".products__list");async function y(){v.innerHTML="";_((await l(b)).results)}window.addEventListener("DOMContentLoaded",y);let b=E("PARAMS");console.log(b);const x=new(e(a))(m,{itemsPerPage:9,visiblePages:4,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="icon tui-page-btn tui-{{type}}">\n      <span class="tui-ico-{{type}}">{{type}}>\n      </span> \n      </a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}">\n      <span class="tui-ico-{{type}}">{{type}}>\n      </span>\n      </span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}});function P(t){x.reset(t)}function E(t){try{return JSON.parse(localStorage.getItem(t))||{}}catch(e){return console.log(e.message),localStorage.getItem(t)}}l(b).then((t=>{x.reset(t.totalPages),x.setTotalItems(9*t.totalPages)})),x.on("afterMove",(t=>{b=E("PARAMS"),b.page=t.page,function(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch(t){console.log(t.message)}}("PARAMS",b),y()}));u=i("dIxxU");const C=document.querySelector(".modal");function w(){C.classList.remove("open"),window.removeEventListener("keydown",M),document.body.classList.remove("modal-open")}function M(t){"Escape"===t.code&&w()}document.querySelectorAll(".products__list, .discount__list, .popular__list").forEach((t=>{t.addEventListener("click",(async t=>{const n=t.target.closest(".products__item-link"),s=t.target.closest(".discount__item-link"),o=t.target.closest(".popular__item-link");if(n||s||o)return;const i=t.target.closest(".products__item, .discount__item, .popular__item");if(i){t.preventDefault();try{const t=i.dataset.id;!function(t){C.innerHTML="",C.classList.add("open"),window.addEventListener("keydown",M),document.body.classList.add("modal-open");const n=function(t){const{img:n,name:s,category:o,size:i,popularity:r,desc:a,price:u}=t,l=-1!==JSON.parse(localStorage.getItem("cartItems"))?.indexOf(t.id)?"Remove from":"Add to";return`\n        <div class="modal__inner">\n            <button class="modal__close">\n                <svg class="modal__close-icon" width="13" height="13">\n                    <use href="${e(c)}#icon-close"></use>\n                </svg>\n            </button>\n\n            <div class="modal__product-info">\n                 <div class="modal__img-box"><img class="modal__product-img" src="${n}" alt="${s}" width="295"/></div>\n                  <div class="modal__product-content">\n                    <h4 class="modal__product-title">${s}</h4>\n                     <ul class="modal__product-list">\n                         <li class="modal__product-item">\n                             <h5 class="modal__product-label">Category:</h5>\n                             <p class="modal__product-text">${o}</p>\n                         </li>\n                        <li class="modal__product-item">\n                            <h5 class="modal__product-label">Size:</h5>\n                            <p class="modal__product-text">${i}</p>\n                         </li>\n                        <li class="modal__product-item">\n                            <h5 class="modal__product-label">Popularity:</h5>\n                            <p class="modal__product-text">${r}</p>\n                         </li>\n                     </ul>\n                         \n                    <p class="modal__product-descr">${a}</p>           \n                  </div>\n            </div>\n\n            <div class="modal__product-buy">\n                <p class="modal__product-price"><span>&#36;</span>${u}</p>\n                <button class="modal__buy-btn" type="button">\n                    <p class="modal__buy-btn-text">${l}</p>\n                    <svg class="modal__cart-icon" width="18" height="18">\n                        <use href="${e(c)}#icon-cart-icon"></use>\n                    </svg>\n                </button>\n                </div>\n    `}(t);C.insertAdjacentHTML("beforeend",n),function(){const t=document.querySelector(".modal__product-descr"),e=54;t.scrollHeight>e&&t.classList.add("scroll-adding")}();const s=document.querySelector(".modal__buy-btn"),o=t.id;let i=JSON.parse(localStorage.getItem("cartItems"))||[];const r=i.includes(o);s.querySelector(".modal__buy-btn-text").textContent=r?"Remove from":"Add to",s.addEventListener("click",(()=>{const t=i.indexOf(o);-1===t?(i.push(o),s.querySelector(".modal__buy-btn-text").textContent="Remove from"):(i.splice(t,1),s.querySelector(".modal__buy-btn-text").textContent="Add to"),localStorage.setItem("cartItems",JSON.stringify(i))}))}(await async function(t){try{return(await u.default.get(`https://food-boutique.b.goit.study/api/products/${t}`)).data}catch(t){throw console.error("Error fetching product by ID:",t),t}}(t))}catch(t){console.error("Error getting product data:",t)}}}))})),C.addEventListener("click",(t=>{(t.target===C||t.target.closest(".modal__close"))&&w()})),i("iu0Ja"),(u=i("dIxxU")).default.defaults.baseURL="https://food-boutique.b.goit.study/api/";const S={buttonEl:document.querySelector(".hero-icon"),listDiscountProductsEl:document.querySelector(".discount__list")},L=new class{constructor(){}getDiscount(){return u.default.get("products/discount").then((t=>t.data))}};document.addEventListener("DOMContentLoaded",(function(){L.getDiscount().then((t=>{!function(t){const n=function(t){return t.map((t=>function(t){const{_id:n,img:s,name:o,price:i}=t;return`<li class="discount__item" data-id=${n}>\n            <div class="discount__item-wrapper">\n              <img\n                src="${s}"\n                alt="${o}"\n                width="304"\n                height="150"\n                class="discount__item-img"\n              />\n            </div>\n            <svg class="discount__item-svg" width="60" height="60">\n              <use href="${e(c)}#icon-discount"></use>\n            </svg>\n            <div class="discount__item-buy">\n              <h4 class="discount__item-label">${o}</h4>\n              <div class="discount__item-box">\n                <p class="discount__item-price">$${i}</p>\n                <button type="button" class="discount__item-link">\n                  <svg class="discount__item-cartsvg" width="18" height="18">\n                    <use href="${e(c)}#icon-cart-icon"></use>\n                  </svg>\n                </button>\n              </div>\n            </div>\n          </li>`}(t))).join("")}(t);S.listDiscountProductsEl.innerHTML=n}(t)})).catch((t=>{console.error("Error fetching discount products:",t)}))})),S.listDiscountProductsEl.addEventListener("click",(function(t){if("use"!==t.target.nodeName&&"svg"!==t.target.nodeName&&"BUTTON"!==t.target.nodeName)return;const n=t.target.closest(".discount__item").dataset.id;let s=null;s="BUTTON"===t.target.nodeName?t.target.querySelector(".discount__item-cartsvg"):t.target.closest(".discount__item-cartsvg");const o=JSON.parse(localStorage.getItem("cartIds"));if(console.log(o),console.log(o.length),s.innerHTML=`<use href="${e(c)}#icon-check"></use>`,o.includes(n))return;{const t=JSON.parse(localStorage.getItem("cartIds"));t.push(n),localStorage.setItem("cartIds",JSON.stringify(t))}})),i("4fCfA"),i("534RT"),(u=i("dIxxU")).default.defaults.baseURL="https://food-boutique.b.goit.study/api/";const I={formPopularEl:document.querySelector(".popular__list")};document.addEventListener("DOMContentLoaded",(function(){$.getPopular().then((function(t){!function(t){const n=function(t){return t.map((t=>{const{category:n,img:s,name:o,popularity:i,size:r,_id:a}=t;return`<li class="popular__item" data-id="${a}">\n              <div class="popular__item-inner">\n                <img src="${s}" width="74" alt="${o}" class="popular__item-img" />\n              </div>\n              <div class="popular__item-box">\n                <div class="popular__item-buy">\n                  <h4 class="popular__item-title">${o}</h4>\n\n                  <button type="button" class="popular__item-link">\n                    <svg class="popular__item-svg" width="12" height="12">\n                      <use href="${e(c)}#icon-shopping-cart"></use>\n                    </svg>\n                  </button>\n\n                </div>\n                <div class="popular__item-info">\n                  <div class="popular__item-info-top">\n                    <h5 class="popular__item-label">Category:</h5>\n                    <p class="popular__item-text">${n}</p>\n                  </div>\n                  <div class="popular__item-info-bottom">\n                    <h5 class="popular__item-label">Size:</h5>\n                    <p class="popular__item-text">${r}</p>\n                    <h5 class="popular__item-label">Popularity:</h5>\n                    <p class="popular__item-text">${i}</p>\n                  </div>\n                </div>\n              </div>\n            </li>`}))}(t).join("");I.formPopularEl.innerHTML=n}(t)}))}));const $=new class{constructor(){}getPopular(){return u.default.get("products/popular").then((t=>t.data))}};$.getPopular().then((t=>{console.log(t)})).catch((t=>{console.error("Error fetching popular products:",t)}))}();
//# sourceMappingURL=index.8deb9216.js.map
