import throttle from 'lodash.throttle';
import { ProductAPI } from '../products/API';
import { loadProducts } from './filters';

window.addEventListener('resize', throttle(onResizeDocument, 500));
const loaderEl = `<div class="loader"></div>`;

const refs = {
  productListEl: document.querySelector('.products__list'),
};

const productAPI = new ProductAPI();

function onResizeDocument(e) {
  console.log(e.target.innerHeight);
  console.log(e.target.innerWidth);
  const height = e.target.innerHeight;
  const width = e.target.innerWidth;
  const params = loadToLS('PARAMS');
  if (width <= 1272 && width >= 768) {
    params.limit = 8;
  } else if (width < 768) {
    params.limit = 6;
  } else {
    params.limit = 9;
  }
  saveToLS('PARAMS', params);
  loadProducts(params);
}

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
