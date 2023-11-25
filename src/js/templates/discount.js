import { ProductDiscountAPI } from "../products/API_discount";
import iconsPath from '/src/images/icons.svg'
const refs = {
    buttonEl: document.querySelector('.hero-icon'),
listDiscountProductsEl: document.querySelector('.discount__list')}
const productDiscountAPI = new ProductDiscountAPI();


document.addEventListener('DOMContentLoaded', getDiscountProduct);

function getDiscountProduct() {
    // console.log('hello');
    productDiscountAPI.getDiscount().then(products => {
        // console.log(products);
        createPopularList(products);
})
      .catch(error => {
    console.error('Error fetching discount products:', error);
  });
}
// 1 продукт
function discountProduct(product) {
const {_id, img, name, price} = product
    const productLi = `<li class="discount__item" data-id=${_id}>
            <div class="discount__item-wrapper">
              <img
                src="${img}"
                alt="${name}"
                width="304"
                height="150"
                class="discount__item-img"
              />
            </div>
            <svg class="discount__item-svg" width="60" height="60">
              <use href="${iconsPath}#icon-discount"></use>
            </svg>
            <div class="discount__item-buy">
              <h4 class="discount__item-label">${name}</h4>
              <div class="discount__item-box">
                <p class="discount__item-price">$${price}</p>
                <button type="button" class="discount__item-link">
                  <svg class="discount__item-cartsvg" width="18" height="18">
                    <use href="${iconsPath}#icon-cart-icon"></use>
                  </svg>
                </button>
              </div>
            </div>
          </li>`
    // console.log(productLi);
    return productLi;
};
// всі продукти
function discountProducts(products) {
    const productUl = products.map(product => {
        return discountProduct(product);
    }
    ).join('')
    return productUl;
}
//рендеримо розмітку
function createPopularList(products) {
    const markup = discountProducts(products);
    refs.listDiscountProductsEl.innerHTML = markup;
}


// LS
refs.listDiscountProductsEl.addEventListener('click', onDiscListCartClick);

function onDiscListCartClick(el) {
  if (
    el.target.nodeName !== 'use' &&
    el.target.nodeName !== 'svg' &&
    el.target.nodeName !== 'BUTTON'
  ) {
    return;
  }

  const id = el.target.closest('.discount__item').dataset.id;
  let svg = null;
  if (el.target.nodeName === 'BUTTON') {
    svg = el.target.querySelector('.discount__item-cartsvg');
  } else {
    svg = el.target.closest('.discount__item-cartsvg');
  }
  
  const localStorageItem = JSON.parse(localStorage.getItem('cartIds'));

  svg.innerHTML = `<use href="${iconsPath}#icon-check"></use>`;
  svg.classList.add('checked');

  if (localStorageItem.includes(id)) {
    return;
  } else {
    const ids = JSON.parse(localStorage.getItem('cartIds'));
    ids.push(id);
    localStorage.setItem('cartIds', JSON.stringify(ids));
  }
}