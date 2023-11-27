function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=e.parcelRequirec1c0;null==o&&((o=function(t){if(t in n)return n[t].exports;if(t in r){var e=r[t];delete r[t];var o={id:t,exports:{}};return n[t]=o,e.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){r[t]=e},e.parcelRequirec1c0=o);var a=o("2shzp");o("cA7Rk"),o("grsAz");a=o("2shzp");var s=o("7Y9D8");a.default.defaults.baseURL="https://food-boutique.b.goit.study/api";const c=e=>a.default.post("/orders",e).then((e=>{if(400===e.status)throw e.data.message;t(s).Notify.success("Order Success! Thank you for shopping at Food Boutique. Your order has been received and is now being freshly prepared just for you! Get ready to indulge in nourishing goodness, delivered right to your doorstep. We re thrilled to be part of your journey to better health and happiness. 🌿🍎")}));var i=o("9OeKo");s=o("7Y9D8");const d=document.querySelector(".form-wrapper");let l={email:"",products:[]};let u="";d.addEventListener("input",t(i)((function(t){p[t.target.name]=t.target.value,u=t.target.value,l.email=u,localStorage.setItem("order",JSON.stringify(l))}),400));const p=JSON.parse(localStorage.getItem("order"))||{};d.addEventListener("submit",(function(e){e.preventDefault(),l=(()=>{const t=JSON.parse(localStorage.getItem("cartIds")),e=Object.keys(t);for(const t of e){const e=document.querySelector(`[data-productid="${t}"] .counter__value`).textContent;l.products.push({productId:t,amount:+e})}return l})(),localStorage.setItem("order",JSON.stringify(l));const n=JSON.parse(localStorage.getItem("order"));c(n).then((t=>{d.reset(),localStorage.removeItem("order"),h()})).catch((e=>{t(s).Notify.failure(e.response.data.message)}))}));const g=document.querySelector(".css-span-casa");const m={cartHeading:document.querySelector("#cart-heading"),productList:document.querySelector("#cart-product-list"),warningContainer:document.querySelector("#warning-container"),baseContainer:document.querySelector("#cart-base-container"),closeButton:document.querySelector(".close-button"),deleteAllBtn:document.querySelector("#button-wrapper"),totalWrapper:document.querySelector("#total-wrapper")};function f(t){m.productList.innerHTML='<div class="loader"></div>',m.productList.classList.add("load-discount"),m.totalWrapper.innerHTML='<div class="loader"></div>',m.totalWrapper.classList.add("load-total"),Promise.all(Object.keys(t).map((t=>a.default.get(`https://food-boutique.b.goit.study/api/products/${t}`).then((t=>{if(!t.data)throw new Error(`Ошибка HTTP: ${t.status}`);return t.data})).catch((t=>{throw console.error("Ошибка при выполнении запроса:",t),t}))))).then((t=>{t.length>3&&m.productList.classList.add("scroll-adding"),y(t.length),function(t){const e=t.map((t=>{const{category:e,img:n,name:r,price:o,size:a,_id:s}=t;return`<li class="product-item" data-productId="${s}">\n            <div class="product-img-wrapper">\n              <img\n              class="product-item-img"\n              src="${n}"\n              alt="${r}"\n              loading="lazy"\n            />\n            </div>\n\n            <div class="product-item-content">\n              <div class="characteristic-wrapper">\n                <h3 class="product-item-heading product-bold">${r}</h3>\n                <div class="charactetistic-text-container">\n                  <span class="product-item-text">\n                    <span class="key-span">Category:</span>\n                    ${e}\n                  </span>\n                  <span class="product-item-text">\n                    <span class="key-span">Size:</span>\n                    ${a}\n                  </span>\n                </div>\n              </div>\n\n              <p class="product-price">&#36;${o}</p>\n            </div>\n            <button type="button" class="close-button product-bold">\n                <svg xmlns="http://www.w3.org/2000/svg" class="close-icon" width="12" height="12" viewBox="0 0 12 12" fill="none">\n                    <path d="M11.0625 2.11488L9.88512 0.9375L6 4.82262L2.11488 0.9375L0.9375 2.11488L4.82262 6L0.9375 9.88512L2.11488 11.0625L6 7.17738L9.88512 11.0625L11.0625 9.88512L7.17738 6L11.0625 2.11488Z" fill="#010101"/>\n                </svg>\n              </button>\n\n            <div class="counter__wrapper">\n              <button class="counter__btn" type="button" data-action="decrement"> - </button>\n              <span class="counter__value">1</span>\n              <button class="counter__btn" type="button" data-action="increment"> + </button>\n            </div>\n\n          </li>`})).join("");m.productList.innerHTML=e}(t),function(t){let e=0;t.forEach((t=>e+=t.price)),m.totalWrapper.innerHTML=`\n        <span class="key-span">Sum:</span>\n        <span class="price-text">&#36;${e.toFixed(2)}</span>\n    `}(t),m.productList.classList.remove("load-discount")})).catch((t=>{console.error("Ошибка при выполнении запросов:",t)}))}function y(t){0===t&&(m.warningContainer.classList.remove("visually-hidden"),m.baseContainer.classList.add("visually-hidden")),m.cartHeading.innerHTML=`CART (${t})`}function h(){m.cartHeading.innerHTML="CART (0)",m.warningContainer.classList.remove("visually-hidden"),m.baseContainer.innerHTML="",localStorage.setItem("cartIds",JSON.stringify({}));const t=v("cartIds");g.innerHTML=`CART(${Object.keys(t).length})`}function L(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch(t){console.log(t.message)}}function v(t){try{return JSON.parse(localStorage.getItem(t))||{}}catch(e){return console.log(e.message),localStorage.getItem(t)}}f(v("cartIds")),document.addEventListener("DOMContentLoaded",(function(){const t=v("cartIds");Object.keys(t).length?g.innerHTML=`CART(${Object.keys(t).length})`:g.innerHTML="CART(0)"})),m.productList.addEventListener("click",(function(t){const e=t.target.closest(".close-button");if(!e)return;const n=e.parentElement.getAttribute("data-productid");e.parentElement.remove(),function(t){const e=v("cartIds");delete e[t],L("cartIds",e),y(Object.keys(e).length),f(e)}(n);const r=v("cartIds");g.innerHTML=`CART(${Object.keys(r).length})`})),m.deleteAllBtn.addEventListener("click",h),m.productList.addEventListener("click",(t=>{const e=t.target;if(e.classList.contains("counter__btn")){const t=e.closest(".product-item"),n=t.querySelector(".counter__value"),r=e.getAttribute("data-action"),o=t.dataset.productid,a=v("cartIds");let s=parseInt(n.textContent);"increment"===r?s+=1:"decrement"===r&&s>1&&(s-=1),n.textContent=s,Object.keys(a).includes(o)&&(a[o]=s,L("cartIds",a)),function(){const t=Array.from(m.productList.querySelectorAll(".product-item"));let e=0,n=0;t.forEach((t=>{const r=parseInt(t.querySelector(".counter__value").textContent),o=parseFloat(t.querySelector(".product-price").textContent.replace("$",""));e+=o*r,n+=r})),m.totalWrapper.innerHTML=`\n        <span class="key-span">Sum:</span>\n        <span class="price-text">&#36;${e.toFixed(2)}</span>\n    `}()}}));
//# sourceMappingURL=cart.c581d161.js.map