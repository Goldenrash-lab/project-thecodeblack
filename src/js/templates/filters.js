import { ProductAPI } from '../products/API';
import iconPath from '/src/images/icons.svg';
import { refreshPage } from '../pagination/pagination';
import { resetTotalPage } from '../pagination/pagination';

const refs = {
  selectEl: document.querySelector('.category-choice'),
  productListEl: document.querySelector('.products__list'),
  formEl: document.querySelector('.filters__form'),
  sortEl: document.querySelector('.sort-by'),
};

document.addEventListener('DOMContentLoaded', onDocumentLoad);
refs.selectEl.addEventListener('change', onSelectElChange);
refs.formEl.addEventListener('submit', onFormElSubmit);
refs.sortEl.addEventListener('change', onSortElChange);
const container = document.querySelector('#tui-pagination-container');

const productAPI = new ProductAPI();

function onSortElChange(e) {
  const value = e.target.value;
  console.log(value);
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
  productAPI.getProductsByCat(obj).then(res => {
    renderProducts(res.results);
    resetTotalPage(res.totalPages);
  });
}

function onFormElSubmit(e) {
  e.preventDefault();

  const keyword = e.target.elements['search-input'].value;

  const obj = loadToLS('PARAMS');
  obj.keyword = keyword;
  obj.page = 1;
  saveToLS('PARAMS', obj);

  productAPI.getProductsByCat(obj).then(res => {
    container.classList.remove('visually-hidden');
    renderProducts(res.results);
    resetTotalPage(res.totalPages);
    if (res.totalPages === 1) {
      container.classList.add('visually-hidden');
    }
  });
}

function onDocumentLoad() {
  // DEFAULT LStorage

  const localStorage = {
    keyword: '',
    category: '',
    page: 1,
    limit: 9,
    sort: 'ByABC=true',
  };

  saveToLS('PARAMS', localStorage);

  // _______

  productAPI.getProductsByCat(localStorage).then(res => {
    renderProducts(res.results);
  });

  productAPI.getCategories().then(res => {
    renderOption(res);
  });
}

function createOption(arr) {
  return arr.map(el => {
    return `
        <option value="${el}">${el}</option>
        `;
  });
}

function renderOption(arr) {
  const markup = createOption(arr).join('');
  refs.selectEl.insertAdjacentHTML('afterbegin', markup);
}

function onSelectElChange() {
  const value = refs.selectEl.value;

  const obj = loadToLS('PARAMS');
  obj.category = value;
  obj.page = 1;
  saveToLS('PARAMS', obj);

  productAPI.getProductsByCat(obj).then(res => {
    renderProducts(res.results);
    resetTotalPage(res.totalPages);
  });
}

export function createProducts(arr) {
  return arr.map(el => {
    const { category, img, name, popularity, price, size, _id } = el;
    return `
    <li class="products__item" data-id="${_id}">
        <div class="products__item-inner">
          <img
            class="products__item-img"
            src="${img}"
            alt="${name}"
            width="295"
          />
          </div>
          <h4 class="products__item-title">${name}</h4>
          <div class="products__item-info">
            <div class="products__item-wrapper">
              <h5 class="products__item-label">Category:</h5>
              <p class="products__item-text">${category}</p>
              <h5 class="products__item-label">Size:</h5>
              <p class="products__item-text">${size}</p>
            </div>
            <h5 class="products__item-label">Popularity:</h5>
            <p class="products__item-text">${popularity}</p>
          </div>
          <div class="products__item-buy">
            <p class="products__item-price">$${price}</p>
            <button type="button" class="products__item-link">
              <svg class="products__item-svg" width="18" heigth="18">
                <use href="${iconPath}#icon-cart-icon">
                </use>
              </svg>
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
