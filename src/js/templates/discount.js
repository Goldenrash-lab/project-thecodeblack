import { ProductDiscountAPI } from '../products/API_discount';
import iconsPath from '/src/images/icons.svg';

const refs = {
  buttonEl: document.querySelector('.hero-icon'),
  listDiscountProductsEl: document.querySelector('.discount__list'),
  spanCasa: document.querySelector('.css-span-casa'),
};
const productDiscountAPI = new ProductDiscountAPI();

// document.addEventListener('DOMContentLoaded', getDiscountProduct);

export function getDiscountProduct() {
  productDiscountAPI
    .getDiscount()
    .then(products => {
      refs.listDiscountProductsEl.classList.remove('load-discount');
      createPopularList(products);
    })
    .catch(error => {
      console.error('Error fetching discount products:', error);
    });
}
// 1 продукт
function discountProduct(product) {
  const { _id, img, name, price } = product;

  const cartId = loadToLS('cartIds');

  let use = '';
  if (Object.keys(cartId).includes(_id)) {
    use = `<svg class="discount__item-cartsvg checked" width="18" height="18"><use href="${iconsPath}#icon-check"></use></svg>`;
  } else {
    use = `<svg class="discount__item-cartsvg" width="18" height="18"><use href="${iconsPath}#icon-cart-icon"></use></svg>`;
  }

  const productLi = `<li class="discount__item" data-id=${_id}>
            <div class="discount__item-wrapper">
              <img
                src="${img}"
                alt="${name}"
                width="304"
                height="150"
                class="discount__item-img"
                loading="lazy"
              />
            </div>
            <svg class="discount__item-svg" width="60" height="60">
              <use href="${iconsPath}#icon-discount"></use>
            </svg>
            <div class="discount__item-buy">
              <h4 class="discount__item-label">${name}</h4>
              <div class="discount__item-box">
                <p class="discount__item-price">$${price}</p>
                <button type="button" aria-label="cart button" class="discount__item-link">
                ${use}
                </button>
                </div>
                </div>
                </li>`;

  return productLi;
}

// всі продукти
function discountProducts(products) {
  const productUl = products
    .map(product => {
      return discountProduct(product);
    })
    .join('');
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
  svg.innerHTML = `<use href="${iconsPath}#icon-check"></use>`;
  svg.classList.add('checked');

  const localStorageItem = loadToLS('cartIds');
  if (Object.keys(localStorageItem).includes(id)) {
    return;
  } else {
    localStorageItem[id] = 1;
    saveToLS('cartIds', localStorageItem);
    refs.spanCasa.textContent = `Cart (${Object.keys(localStorageItem).length})`;
  }
}

function saveToLS(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error.message);
  }
}
function loadToLS(key) {
  try {
    return JSON.parse(localStorage.getItem(key)) || {};
  } catch (error) {
    console.log(error.message);
    return localStorage.getItem(key);
  }
}
