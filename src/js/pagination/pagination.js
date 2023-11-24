import Pagination from 'tui-pagination';
import icon from '../../images/icons.svg';
import { getProducts } from './pagination_Api';
import { createProducts, renderProducts } from '../templates/filters';

const container = document.querySelector('#tui-pagination-container');
const products = document.querySelector('.products__list');

window.addEventListener('DOMContentLoaded', refreshPage);

export async function refreshPage() {
  products.innerHTML = '';

  const product = await getProducts(params);

  renderProducts(product.results);
}

let params = loadToLS('PARAMS');
let totalPages = 0;

getProducts(params).then(res => {
  totalPages = res.totalPages;

  const instance = new Pagination(container, {
    totalItems: totalPages * 9,
    itemsPerPage: 9,
    visiblePages: 4,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage:
        '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton: `<a href="#" class="icon tui-page-btn tui-{{type}}">
      <span class="tui-ico-{{type}}">{{type}}>
      </span> 
      </a>`,
      disabledMoveButton: `<span class="tui-page-btn tui-is-disabled tui-{{type}}">
      <span class="tui-ico-{{type}}">{{type}}>
      </span>
      </span>`,
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>',
    },
  });

  instance.on('afterMove', event => {
    params = loadToLS('PARAMS');

    params.page = event.page;

    saveToLS('PARAMS', params);

    refreshPage();
  });
});

// LOCALSTORAGE

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