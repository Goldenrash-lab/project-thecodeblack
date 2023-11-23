!function(){var t,n={cartHeading:document.querySelector("#cart-heading"),productList:document.querySelector("#cart-product-list"),warningContainer:document.querySelector("#warning-container"),baseContainer:document.querySelector("#cart-base-container"),closeButton:document.querySelector(".close-button"),deleteAllBtn:document.querySelector("#button-wrapper"),totalWrapper:document.querySelector("#total-wrapper")};function e(t){0===t&&(n.warningContainer.classList.remove("visually-hidden"),n.baseContainer.classList.add("visually-hidden")),n.cartHeading.innerHTML="CART (".concat(t,")")}(t="".concat("https://food-boutique.b.goit.study/api/products").concat("?keyword=Ac&page=1&limit=100"),fetch(t,{headers:{"content-type":"application/json"}}).then((function(t){if(!t.ok)throw new Error("HTTP error! Status: ".concat(t.status));return t.json()})).catch((function(t){throw console.error("Error fetching products:",t),t}))).then((function(t){var c,r,o,a;t.results.length>3&&window.innerWidth>=768&&n.productList.classList.add("scroll-adding"),e(t.results.length),c=t.results,r=c.map((function(t){var n=t.category,e=t.img,c=t.name,r=t.price,o=t.size;return t._id,'<li class="product-item">\n            <img\n              class="product-item-img"\n              src="'.concat(e,'"\n              alt=""\n            />\n\n            <div class="product-item-content">\n              <div class="characteristic-wrapper">\n                <h3 class="product-item-heading product-bold">').concat(c,'</h3>\n                <div class="charactetistic-text-container">\n                  <span class="product-item-text">\n                    <span class="key-span">Category:</span>\n                    ').concat(n,'\n                  </span>\n                  <span class="product-item-text">\n                    <span class="key-span">Size:</span>\n                    ').concat(o,'\n                  </span>\n                </div>\n              </div>\n\n              <p class="product-price">&#36;').concat(r,'</p>\n            </div>\n            <button type="button" class="close-button product-bold">\n                <svg xmlns="http://www.w3.org/2000/svg" class="close-icon" width="16" height="16" viewBox="0 0 12 12" fill="none">\n                    <path d="M11.0625 2.11488L9.88512 0.9375L6 4.82262L2.11488 0.9375L0.9375 2.11488L4.82262 6L0.9375 9.88512L2.11488 11.0625L6 7.17738L9.88512 11.0625L11.0625 9.88512L7.17738 6L11.0625 2.11488Z" fill="#010101"/>\n                </svg>\n              </button>\n          </li>')})).join(""),n.productList.innerHTML=r,o=t.results,a=0,o.map((function(t){return a+=t.price})),n.totalWrapper.innerHTML='\n        <span class="key-span">Sum:</span>\n        <span class="price-text">&#36;'.concat(a.toFixed(2),"</span>\n    ")})).catch((function(t){console.error("Error fetching products:",t)})),n.productList.addEventListener("click",(function(t){var n=t.target.closest(".close-button");n&&(e(),n.parentElement.remove())})),n.deleteAllBtn.addEventListener("click",(function(){n.cartHeading.innerHTML="CART (0)",n.warningContainer.classList.remove("visually-hidden"),n.baseContainer.innerHTML=""}))}();
//# sourceMappingURL=cart.bd8466f9.js.map
