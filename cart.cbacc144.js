!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},r=t.parcelRequirec1c0;null==r&&((r=function(t){if(t in e)return e[t].exports;if(t in n){var r=n[t];delete n[t];var o={id:t,exports:{}};return e[t]=o,r.call(o.exports,o,o.exports),o.exports}var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(t,e){n[t]=e},t.parcelRequirec1c0=r),r("4fCfA"),r("534RT");const o=document.querySelector(".css-span-casa");document.addEventListener("DOMContentLoaded",(function(){const t=l("cartIds");t.length||(o.innerHTML="CART(0)");o.innerHTML=`CART(${t.length})`}));const c={cartHeading:document.querySelector("#cart-heading"),productList:document.querySelector("#cart-product-list"),warningContainer:document.querySelector("#warning-container"),baseContainer:document.querySelector("#cart-base-container"),closeButton:document.querySelector(".close-button"),deleteAllBtn:document.querySelector("#button-wrapper"),totalWrapper:document.querySelector("#total-wrapper")},a=localStorage.getItem("cartIds");function s(t){Promise.all(t.map((t=>fetch(`https://food-boutique.b.goit.study/api/products/${t}`).then((t=>{if(!t.ok)throw new Error(`Ошибка HTTP: ${t.status}`);return t.json()})).catch((t=>{throw console.error("Ошибка при выполнении запроса:",t),t}))))).then((t=>{t.length>3&&window.innerWidth>=768&&c.productList.classList.add("scroll-adding"),i(t.length),function(t){const e=t.map((t=>{const{category:e,img:n,name:r,price:o,size:c,_id:a}=t;return`<li class="product-item" data-productId="${a}">\n            <img\n              class="product-item-img"\n              src="${n}"\n              alt=""\n            />\n\n            <div class="product-item-content">\n              <div class="characteristic-wrapper">\n                <h3 class="product-item-heading product-bold">${r}</h3>\n                <div class="charactetistic-text-container">\n                  <span class="product-item-text">\n                    <span class="key-span">Category:</span>\n                    ${e}\n                  </span>\n                  <span class="product-item-text">\n                    <span class="key-span">Size:</span>\n                    ${c}\n                  </span>\n                </div>\n              </div>\n\n              <p class="product-price">&#36;${o}</p>\n            </div>\n            <button type="button" class="close-button product-bold">\n                <svg xmlns="http://www.w3.org/2000/svg" class="close-icon" width="16" height="16" viewBox="0 0 12 12" fill="none">\n                    <path d="M11.0625 2.11488L9.88512 0.9375L6 4.82262L2.11488 0.9375L0.9375 2.11488L4.82262 6L0.9375 9.88512L2.11488 11.0625L6 7.17738L9.88512 11.0625L11.0625 9.88512L7.17738 6L11.0625 2.11488Z" fill="#010101"/>\n                </svg>\n              </button>\n          </li>`})).join("");c.productList.innerHTML=e}(t),function(t){let e=0;t.map((t=>e+=t.price)),c.totalWrapper.innerHTML=`\n        <span class="key-span">Sum:</span>\n        <span class="price-text">&#36;${e.toFixed(2)}</span>\n    `}(t),console.log(t)})).catch((t=>{console.error("Ошибка при выполнении запросов:",t)}))}function i(t){0===t&&(c.warningContainer.classList.remove("visually-hidden"),c.baseContainer.classList.add("visually-hidden")),c.cartHeading.innerHTML=`CART (${t})`}function l(t){try{return JSON.parse(localStorage.getItem(t))||{}}catch(e){return console.log(e.message),localStorage.getItem(t)}}s(JSON.parse(a)),c.productList.addEventListener("click",(function(t){const e=t.target.closest(".close-button");if(!e)return;const n=e.parentElement.getAttribute("data-productid");e.parentElement.remove(),function(t){const e=localStorage.getItem("cartIds"),n=JSON.parse(e);console.log(n);const r=n.filter((e=>e!==t));localStorage.setItem("cartIds",JSON.stringify(r)),i(r.length),s(r)}(n);const r=l("cartIds");o.innerHTML=`CART(${r.length})`})),c.deleteAllBtn.addEventListener("click",(function(){c.cartHeading.innerHTML="CART (0)",c.warningContainer.classList.remove("visually-hidden"),c.baseContainer.innerHTML="",localStorage.setItem("cartIds",JSON.stringify([]));const t=l("cartIds");o.innerHTML=`CART(${t.length})`}))}();
//# sourceMappingURL=cart.cbacc144.js.map
