!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},r=t.parcelRequirec1c0;null==r&&((r=function(t){if(t in e)return e[t].exports;if(t in n){var r=n[t];delete n[t];var a={id:t,exports:{}};return e[t]=a,r.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){n[t]=e},t.parcelRequirec1c0=r);var a=r("dIxxU");r("4fCfA"),r("534RT");const o=document.querySelector(".css-span-casa");const c={cartHeading:document.querySelector("#cart-heading"),productList:document.querySelector("#cart-product-list"),warningContainer:document.querySelector("#warning-container"),baseContainer:document.querySelector("#cart-base-container"),closeButton:document.querySelector(".close-button"),deleteAllBtn:document.querySelector("#button-wrapper"),totalWrapper:document.querySelector("#total-wrapper")},s=localStorage.getItem("cartIds");function i(t){Promise.all(t.map((t=>a.default.get(`https://food-boutique.b.goit.study/api/products/${t}`).then((t=>{if(!t.data)throw new Error(`Ошибка HTTP: ${t.status}`);return t.data})).catch((t=>{throw console.error("Ошибка при выполнении запроса:",t),t}))))).then((t=>{t.length>3&&window.innerWidth>=768&&c.productList.classList.add("scroll-adding"),l(t.length),function(t){const e=t.map((t=>{const{category:e,img:n,name:r,price:a,size:o,_id:c}=t;return`<li class="product-item" data-productId="${c}">\n            <div class="product-img-wrapper">\n              <img\n              class="product-item-img"\n              src="${n}"\n              alt=""\n            />\n            </div>\n\n            <div class="product-item-content">\n              <div class="characteristic-wrapper">\n                <h3 class="product-item-heading product-bold">${r}</h3>\n                <div class="charactetistic-text-container">\n                  <span class="product-item-text">\n                    <span class="key-span">Category:</span>\n                    ${e}\n                  </span>\n                  <span class="product-item-text">\n                    <span class="key-span">Size:</span>\n                    ${o}\n                  </span>\n                </div>\n              </div>\n\n              <p class="product-price">&#36;${a}</p>\n            </div>\n            <button type="button" class="close-button product-bold">\n                <svg xmlns="http://www.w3.org/2000/svg" class="close-icon" width="12" height="12" viewBox="0 0 12 12" fill="none">\n                    <path d="M11.0625 2.11488L9.88512 0.9375L6 4.82262L2.11488 0.9375L0.9375 2.11488L4.82262 6L0.9375 9.88512L2.11488 11.0625L6 7.17738L9.88512 11.0625L11.0625 9.88512L7.17738 6L11.0625 2.11488Z" fill="#010101"/>\n                </svg>\n              </button>\n          </li>`})).join("");c.productList.innerHTML=e}(t),function(t){let e=0;t.forEach((t=>e+=t.price)),c.totalWrapper.innerHTML=`\n        <span class="key-span">Sum:</span>\n        <span class="price-text">&#36;${e.toFixed(2)}</span>\n    `}(t)})).catch((t=>{console.error("Ошибка при выполнении запросов:",t)}))}function l(t){0===t&&(c.warningContainer.classList.remove("visually-hidden"),c.baseContainer.classList.add("visually-hidden")),c.cartHeading.innerHTML=`CART (${t})`}function d(t){try{return JSON.parse(localStorage.getItem(t))||{}}catch(e){return console.log(e.message),localStorage.getItem(t)}}i(JSON.parse(s)||[]),document.addEventListener("DOMContentLoaded",(function(){const t=d("cartIds");t.length?o.innerHTML=`CART(${t.length})`:o.innerHTML="CART(0)"})),c.productList.addEventListener("click",(function(t){const e=t.target.closest(".close-button");if(!e)return;const n=e.parentElement.getAttribute("data-productid");e.parentElement.remove(),function(t){const e=localStorage.getItem("cartIds"),n=JSON.parse(e).filter((e=>e!==t));localStorage.setItem("cartIds",JSON.stringify(n)),l(n.length),i(n)}(n);const r=d("cartIds");o.innerHTML=`CART(${r.length})`})),c.deleteAllBtn.addEventListener("click",(function(){c.cartHeading.innerHTML="CART (0)",c.warningContainer.classList.remove("visually-hidden"),c.baseContainer.innerHTML="",localStorage.setItem("cartIds",JSON.stringify([]));const t=d("cartIds");o.innerHTML=`CART(${t.length})`}))}();
//# sourceMappingURL=cart.58dbf125.js.map