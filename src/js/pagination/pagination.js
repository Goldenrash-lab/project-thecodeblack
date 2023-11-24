import Pagination from 'tui-pagination';
import icon from '../../images/icons.svg';
import { getProducts } from './pagination_Api';

const container = document.querySelector('#tui-pagination-container');
const products = document.querySelector(".products__list")








const instance = new Pagination(container, {
    totalItems: 100,
    itemsPerPage: 5,
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

const refreshPage = async () => {
  products.innerHTML = "";
  
  
  const product = await getProducts(params)
  instance.totalItems = 20,
  instance.itemsPerPage = 5,
  
  console.log(instance);
  console.log(product);
}
let params = loadToLS("PARAMS");


instance.on('afterMove', (event) => {
  params = loadToLS('PARAMS')
  params.page = event.page
  console.log(params)
  saveToLS("PARAMS",params)
  
  refreshPage()
});


window.addEventListener("DOMContentLoaded", refreshPage);

// const pagination = new Pagination(container, {
  //   totalItems: 0,
  //   page: 1,
//   centerAlign: true,
//   visiblePages: 10,
// });








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
