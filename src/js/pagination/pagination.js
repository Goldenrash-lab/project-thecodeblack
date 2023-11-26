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

export const instance = new Pagination(container, {
  itemsPerPage: 1,
  visiblePages: 4,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" aria-label="pagination-page" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton: `<a href="#" aria-label="pagination-move" class="icon tui-page-btn tui-{{type}}">
      <span class="tui-ico-{{type}}">{{type}}>
      </span> 
      </a>`,
    disabledMoveButton: `<span class="tui-page-btn tui-is-disabled tui-{{type}}">
      <span class="tui-ico-{{type}}">{{type}}>
      </span>
      </span>`,
    moreButton:
      '<a href="#" aria-label="pagination-more" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
});

getProducts(params).then(res => {
  instance.reset(res.totalPages);
  // instance.movePageTo(params.page);
  instance.setTotalItems(res.totalPages * 9);
});

export function resetTotalPage(totalPages) {
  instance.setTotalItems(totalPages * 9);
  instance.reset(totalPages);
  // instance.movePageTo(params.page);
}

instance.on('afterMove', event => {
  params = loadToLS('PARAMS');

  params.page = event.page;

  saveToLS('PARAMS', params);

  refreshPage();
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
