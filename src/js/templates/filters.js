import { ProductAPI } from '../products/API';
import iconPath from '/src/images/icons.svg';
import { resetTotalPage } from '../pagination/pagination';
import { onformPopularElLoaded } from './popular';
import { getDiscountProduct } from './discount';

const refs = {
  selectEl: document.querySelector('.category-choice'),
  productListEl: document.querySelector('.products__list'),
  formEl: document.querySelector('.filters__form'),
  sortEl: document.querySelector('.sort-by'),
  formPopularEl: document.querySelector('.popular__list'),
  listDiscountProductsEl: document.querySelector('.discount__list'),
};

document.addEventListener('DOMContentLoaded', onDocumentLoad);
refs.selectEl.addEventListener('change', onSelectElChange);
refs.formEl.addEventListener('submit', onFormElSubmit);
refs.sortEl.addEventListener('change', onSortElChange);
const container = document.querySelector('#tui-pagination-container');

// loader

const loaderEl = `<div class="loader"></div>`;

// __________

const productAPI = new ProductAPI();

async function onSortElChange(e) {
  const value = e.target.value;
  let sortType = '';
  switch (value) {
    case 'atoz':
      sortType = 'byABC=true';
      break;
    case 'ztoa':
      sortType = 'byABC=false';
      break;
    case 'priceup':
      sortType = 'byPrice=true';
      break;
    case 'pricedown':
      sortType = 'byPrice=false';
      break;
    case 'popularityup':
      sortType = 'byPopularity=true';
      break;
    case 'popularitydown':
      sortType = 'byPopularity=false';
      break;
  }
  const obj = loadToLS('PARAMS');
  obj.sort = sortType;
  obj.page = 1;
  saveToLS('PARAMS', obj);
  refs.productListEl.innerHTML = loaderEl;
  refs.productListEl.classList.add('load');

  try {
    const res = await productAPI.getProductsByCat(obj);
    refs.productListEl.classList.remove('load');
    renderProducts(res.results);
    resetTotalPage(res.totalPages);
  } catch (error) {
    console.log(error);
  }
}

export async function loadProducts(params) {
  refs.productListEl.innerHTML = loaderEl;
  refs.productListEl.classList.add('load');

  try {
    const res = await productAPI.getProductsByCat(params);
    refs.productListEl.classList.remove('load');
    renderProducts(res.results);
    resetTotalPage(res.totalPages);
  } catch (error) {
    console.log(error);
  }
}

async function onFormElSubmit(e) {
  e.preventDefault();

  const keyword = e.target.elements['search-input'].value;

  const obj = loadToLS('PARAMS');
  obj.keyword = keyword;
  obj.page = 1;
  saveToLS('PARAMS', obj);
  refs.productListEl.innerHTML = loaderEl;
  refs.productListEl.classList.add('load');

  try {
    const res = await productAPI.getProductsByCat(obj);

    refs.productListEl.classList.remove('load');
    container.classList.remove('visually-hidden');
    renderProducts(res.results);
    resetTotalPage(res.totalPages);
    if (res.totalPages === 1 || res.totalPages === 0) {
      container.classList.add('visually-hidden');
    }
    if (!res.totalPages) {
      refs.productListEl.innerHTML = '<h2>Products not found!</h2>';
    }
  } catch (error) {
    console.log(error);
  }
}

async function onDocumentLoad() {
  // DEFAULT LStorage

  const localStorage = {
    keyword: '',
    category: '',
    page: 1,
    limit: 9,
    sort: 'ByABC=true',
  };
  const width = window.innerWidth;
  if (width <= 1272 && width >= 768) {
    localStorage.limit = 8;
  } else if (width < 768) {
    localStorage.limit = 6;
  } else {
    localStorage.limit = 9;
  }
  saveToLS('PARAMS', localStorage);

  // _______
  refs.formPopularEl.classList.add('load');
  refs.productListEl.classList.add('load');
  refs.listDiscountProductsEl.classList.add('load-discount');
  refs.productListEl.innerHTML = loaderEl;
  refs.listDiscountProductsEl.innerHTML = loaderEl;
  refs.formPopularEl.innerHTML = loaderEl;

  try {
    const res = await productAPI.getProductsByCat(localStorage);
    getDiscountProduct();
    onformPopularElLoaded();
    refs.productListEl.classList.remove('load');
    refs.listDiscountProductsEl.classList.remove('load-discount');
    resetTotalPage(res.totalPages);
    renderProducts(res.results);
  } catch (error) {
    console.log(error);
  }
  try {
    const res = await productAPI.getCategories();
    const newRes = res.map(el => {
      return el.replace('&', '%26');
    });
    renderOption(newRes);
  } catch (error) {
    console.log(error);
  }
}

async function onSelectElChange() {
  const value = refs.selectEl.value;

  const obj = loadToLS('PARAMS');
  obj.category = value;
  obj.page = 1;
  saveToLS('PARAMS', obj);
  refs.productListEl.innerHTML = loaderEl;
  refs.productListEl.classList.add('load');

  try {
    const res = await productAPI.getProductsByCat(obj);
    refs.productListEl.innerHTML = loaderEl;
    refs.productListEl.classList.remove('load');
    container.classList.remove('visually-hidden');
    renderProducts(res.results);
    resetTotalPage(res.totalPages);
    if (res.totalPages === 1 || res.totalPages === 0) {
      container.classList.add('visually-hidden');
    }
    if (!res.totalPages) {
      refs.productListEl.innerHTML = '<h2>Products not found!</h2>';
    }
  } catch (error) {
    console.log(error);
  }
}

function createOption(arr) {
  return arr.map(el => {
    const newRes = el.replace('%26', '&');
    return `
        <option value="${el}">${newRes}</option>
        `;
  });
}

function renderOption(arr) {
  const markup = createOption(arr).join('');
  refs.selectEl.insertAdjacentHTML('afterbegin', markup);
}

export function createProducts(arr) {
  return arr.map(el => {
    const { category, img, name, popularity, price, size, _id } = el;

    const cartId = loadToLS('cartIds');

    let use = '';
    if (Object.keys(cartId).includes(_id)) {
      use = `<svg class="discount__item-cartsvg checked" width="18" height="18"><use href="${iconPath}#icon-check"></use></svg>`;
    } else {
      use = `<svg class="products__item-svg" width="18" heigth="18">
                <use href="${iconPath}#icon-cart-icon">
                </use>
              </svg>`;
    }

    return `
    <li class="products__item" data-id="${_id}">
        <div class="products__item-inner">
          <img
            class="products__item-img"
            src="${img}"
            alt="${name}"
            width="295"
            loading="lazy"
          />
          </div>
          <h3 class="products__item-title">${name}</h3>
          <div class="products__item-info">
            <div class="products__item-wrapper">
              <h4 class="products__item-label">Category:</h4>
              <p class="products__item-text">${category}</p>
              <h4 class="products__item-label">Size:</h4>
              <p class="products__item-text">${size}</p>
            </div>
            <h5 class="products__item-label">Popularity:</h5>
            <p class="products__item-text">${popularity}</p>
          </div>
          <div class="products__item-buy">
            <p class="products__item-price">$${price}</p>
            <button type="button" aria-label="button-buy" class="products__item-link">
              ${use}
            </button>
          </div>
        </li>
    `;
  });
}

export function renderProducts(arr) {
  const markup = createProducts(arr).join('');
  refs.productListEl.innerHTML = markup;
}

// LOCALSTORAGE

export function saveToLS(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error.message);
  }
}
export function loadToLS(key) {
  try {
    return JSON.parse(localStorage.getItem(key)) || {};
  } catch (error) {
    console.log(error.message);
    return localStorage.getItem(key);
  }
}
