var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},o=t.parcelRequirec1c0;null==o&&((o=function(t){if(t in e)return e[t].exports;if(t in n){var o=n[t];delete n[t];var c={id:t,exports:{}};return e[t]=c,o.call(c.exports,c,c.exports),c.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){n[t]=e},t.parcelRequirec1c0=o);var c=o("2shzp");o("cA7Rk"),o("grsAz");const r=document.querySelector(".css-span-casa");const s={cartHeading:document.querySelector("#cart-heading"),productList:document.querySelector("#cart-product-list"),warningContainer:document.querySelector("#warning-container"),baseContainer:document.querySelector("#cart-base-container"),closeButton:document.querySelector(".close-button"),deleteAllBtn:document.querySelector("#button-wrapper"),totalWrapper:document.querySelector("#total-wrapper")};function a(t){s.productList.innerHTML='<div class="loader"></div>',s.productList.classList.add("load-discount"),s.totalWrapper.innerHTML='<div class="loader"></div>',s.totalWrapper.classList.add("load-total"),Promise.all(Object.keys(t).map((t=>c.default.get(`https://food-boutique.b.goit.study/api/products/${t}`).then((t=>{if(!t.data)throw new Error(`Ошибка HTTP: ${t.status}`);return t.data})).catch((t=>{throw console.error("Ошибка при выполнении запроса:",t),t}))))).then((t=>{t.length>3&&s.productList.classList.add("scroll-adding"),i(t.length),function(t){const e=t.map((t=>{const{category:e,img:n,name:o,price:c,size:r,_id:s}=t;return`<li class="product-item" data-productId="${s}">\n            <div class="product-img-wrapper">\n              <img\n              class="product-item-img"\n              src="${n}"\n              alt="${o}"\n              loading="lazy"\n            />\n            </div>\n\n            <div class="product-item-content">\n              <div class="characteristic-wrapper">\n                <h3 class="product-item-heading product-bold">${o}</h3>\n                <div class="charactetistic-text-container">\n                  <span class="product-item-text">\n                    <span class="key-span">Category:</span>\n                    ${e}\n                  </span>\n                  <span class="product-item-text">\n                    <span class="key-span">Size:</span>\n                    ${r}\n                  </span>\n                </div>\n              </div>\n\n              <p class="product-price">&#36;${c}</p>\n            </div>\n            <button type="button" class="close-button product-bold">\n                <svg xmlns="http://www.w3.org/2000/svg" class="close-icon" width="12" height="12" viewBox="0 0 12 12" fill="none">\n                    <path d="M11.0625 2.11488L9.88512 0.9375L6 4.82262L2.11488 0.9375L0.9375 2.11488L4.82262 6L0.9375 9.88512L2.11488 11.0625L6 7.17738L9.88512 11.0625L11.0625 9.88512L7.17738 6L11.0625 2.11488Z" fill="#010101"/>\n                </svg>\n              </button>\n\n            <div class="counter__wrapper">\n              <button class="counter__btn" type="button" data-action="decrement"> - </button>\n              <span class="counter__value">1</span>\n              <button class="counter__btn" type="button" data-action="increment"> + </button>\n            </div>\n\n          </li>`})).join("");s.productList.innerHTML=e}(t),function(t){let e=0;t.forEach((t=>e+=t.price)),s.totalWrapper.innerHTML=`\n        <span class="key-span">Sum:</span>\n        <span class="price-text">&#36;${e.toFixed(2)}</span>\n    `}(t),s.productList.classList.remove("load-discount")})).catch((t=>{console.error("Ошибка при выполнении запросов:",t)}))}function i(t){0===t&&(s.warningContainer.classList.remove("visually-hidden"),s.baseContainer.classList.add("visually-hidden")),s.cartHeading.innerHTML=`CART (${t})`}function l(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch(t){console.log(t.message)}}function d(t){try{return JSON.parse(localStorage.getItem(t))||{}}catch(e){return console.log(e.message),localStorage.getItem(t)}}a(d("cartIds")),document.addEventListener("DOMContentLoaded",(function(){const t=d("cartIds");Object.keys(t).length?r.innerHTML=`CART(${Object.keys(t).length})`:r.innerHTML="CART(0)"})),s.productList.addEventListener("click",(function(t){const e=t.target.closest(".close-button");if(!e)return;const n=e.parentElement.getAttribute("data-productid");e.parentElement.remove(),function(t){const e=d("cartIds");delete e[t],l("cartIds",e),i(Object.keys(e).length),a(e)}(n);const o=d("cartIds");r.innerHTML=`CART(${Object.keys(o).length})`})),s.deleteAllBtn.addEventListener("click",(function(){s.cartHeading.innerHTML="CART (0)",s.warningContainer.classList.remove("visually-hidden"),s.baseContainer.innerHTML="",localStorage.setItem("cartIds",JSON.stringify({}));const t=d("cartIds");console.log(Object.keys(t).length),r.innerHTML=`CART(${Object.keys(t).length})`})),s.productList.addEventListener("click",(t=>{const e=t.target;if(e.classList.contains("counter__btn")){const t=e.closest(".product-item");console.dir(t);const n=t.querySelector(".counter__value"),o=e.getAttribute("data-action"),c=t.dataset.productid;console.log(c);const r=d("cartIds");let a=parseInt(n.textContent);"increment"===o?a+=1:"decrement"===o&&a>1&&(a-=1),n.textContent=a,Object.keys(r).includes(c)&&(console.log(r),r[c]=a,console.log(r),l("cartIds",r)),function(){const t=Array.from(s.productList.querySelectorAll(".product-item"));let e=0,n=0;t.forEach((t=>{const o=parseInt(t.querySelector(".counter__value").textContent),c=parseFloat(t.querySelector(".product-price").textContent.replace("$",""));e+=c*o,n+=o})),s.totalWrapper.innerHTML=`\n        <span class="key-span">Sum:</span>\n        <span class="price-text">&#36;${e.toFixed(2)}</span>\n    `}()}}));
//# sourceMappingURL=cart.6d279542.js.map
