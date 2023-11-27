import axios from 'axios';
import '../../node_modules/modern-normalize/modern-normalize.css';
import './templates/footer-validation';
import './templates/footer-postApi';

// CART VALUE

const spanCasa = document.querySelector('.css-span-casa');
const loaderEl = `<div class="loader"></div>`;

function onDocumentLoad() {
  const obj = loadToLS('cartIds');
  if (!obj.length) {
    spanCasa.innerHTML = `CART(0)`;
  } else {
    spanCasa.innerHTML = `CART(${obj.length})`;
  }
}

// Связываем элементы и переменные
const refs = {
  cartHeading: document.querySelector('#cart-heading'),
  productList: document.querySelector('#cart-product-list'),
  warningContainer: document.querySelector('#warning-container'),
  baseContainer: document.querySelector('#cart-base-container'),
  closeButton: document.querySelector('.close-button'),
  deleteAllBtn: document.querySelector('#button-wrapper'),
  totalWrapper: document.querySelector('#total-wrapper'),
};

//достаём данные из local storage
const cartIdsData = localStorage.getItem('cartIds');
const cartIdsArray = JSON.parse(cartIdsData) || [];
getCartProducts(cartIdsArray);

//функция запроса данных
function getCartProducts(cartIds) {
  const BASE_URL = 'https://food-boutique.b.goit.study/api/products';
  refs.productList.innerHTML = loaderEl;
  refs.productList.classList.add('load-discount');
  refs.totalWrapper.innerHTML = loaderEl;
  refs.totalWrapper.classList.add('load-total');
  Promise.all(
    cartIds.map(productId => {
      return axios
        .get(`${BASE_URL}/${productId}`)
        .then(response => {
          if (!response.data) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
          }
          return response.data;
        })
        .catch(error => {
          console.error('Ошибка при выполнении запроса:', error);
          throw error;
        });
    })
  )
    .then(productsData => {
      scrollAdding(productsData.length);
      cartLargeNumber(productsData.length);
      renderProductsCart(productsData);
      countTotalPrice(productsData);
      refs.productList.classList.remove('load-discount');
    })
    .catch(error => {
      console.error('Ошибка при выполнении запросов:', error);
    });
}

// Создаем шаблон элемента и выводим его на страницу
function renderProductsCart(products) {
  const markup = products
    .map(el => {
      const { category, img, name, price, size, _id } = el;

      return `<li class="product-item" data-productId="${_id}">
            <div class="product-img-wrapper">
              <img
              class="product-item-img"
              src="${img}"
              alt="${name}"
              loading="lazy"
            />
            </div>

            <div class="product-item-content">
              <div class="characteristic-wrapper">
                <h3 class="product-item-heading product-bold">${name}</h3>
                <div class="charactetistic-text-container">
                  <span class="product-item-text">
                    <span class="key-span">Category:</span>
                    ${category}
                  </span>
                  <span class="product-item-text">
                    <span class="key-span">Size:</span>
                    ${size}
                  </span>
                </div>
              </div>

              <p class="product-price">&#36;${price}</p>
            </div>
            <button type="button" class="close-button product-bold">
                <svg xmlns="http://www.w3.org/2000/svg" class="close-icon" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M11.0625 2.11488L9.88512 0.9375L6 4.82262L2.11488 0.9375L0.9375 2.11488L4.82262 6L0.9375 9.88512L2.11488 11.0625L6 7.17738L9.88512 11.0625L11.0625 9.88512L7.17738 6L11.0625 2.11488Z" fill="#010101"/>
                </svg>
              </button>

            <div class="counter__wrapper">
              <button class="counter__btn" type="button" data-action="decrement"> - </button>
              <span class="counter__value">1</span>
              <button class="counter__btn" type="button" data-action="increment"> + </button>
            </div>

          </li>`;
    })
    .join('');

  return (refs.productList.innerHTML = markup);
}

// функция для вывода данных в счетчик в заголовке страницы
function cartLargeNumber(cartLargeNumber) {
  if (cartLargeNumber === 0) {
    refs.warningContainer.classList.remove('visually-hidden');
    refs.baseContainer.classList.add('visually-hidden');
  }

  refs.cartHeading.innerHTML = `CART (${cartLargeNumber})`;
}

// подсчет общей суммы
function countTotalPrice(priceArray) {
  let totalPrice = 0;

  priceArray.forEach(product => {
    return (totalPrice += product.price);
  });

  return (refs.totalWrapper.innerHTML = `
        <span class="key-span">Sum:</span>
        <span class="price-text">&#36;${totalPrice.toFixed(2)}</span>
    `);
}

// функция для удаления одного элемента
function clickDeleteElBtn(event) {
  const btn = event.target.closest('.close-button');
  if (!btn) {
    return;
  }
  const element = btn.parentElement;
  const productId = element.getAttribute('data-productid');

  btn.parentElement.remove();

  updateLocalStorage(productId);
  const obj = loadToLS('cartIds');
  spanCasa.innerHTML = `CART(${obj.length})`;
}

//Удаляем все элементы списка по нажатию на кнопку Delete All
function clickDeleteAllBtn() {
  refs.cartHeading.innerHTML = 'CART (0)';
  refs.warningContainer.classList.remove('visually-hidden');
  refs.baseContainer.innerHTML = '';
  localStorage.setItem('cartIds', JSON.stringify([]));
  const obj = loadToLS('cartIds');
  spanCasa.innerHTML = `CART(${obj.length})`;
}

// дополнительная функция для обновления local storage после удаления элемента
function updateLocalStorage(elementToRemove) {
  const cartIdsData = localStorage.getItem('cartIds');
  const cartIdsArray = JSON.parse(cartIdsData);

  const updatedCartIds = cartIdsArray.filter(id => id !== elementToRemove);
  localStorage.setItem('cartIds', JSON.stringify(updatedCartIds));
  cartLargeNumber(updatedCartIds.length);

  getCartProducts(updatedCartIds);
}

// Добавляем скролл, когда 3 элемента и больше
function scrollAdding(listLength) {
  if (listLength > 3) {
    refs.productList.classList.add('scroll-adding');
  }
}

// Добавляем слушателей событий на список и на кнопку полного удаления

document.addEventListener('DOMContentLoaded', onDocumentLoad);
refs.productList.addEventListener('click', clickDeleteElBtn);
refs.deleteAllBtn.addEventListener('click', clickDeleteAllBtn);

// экспорт функций
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






















































/**
  |============================
  | COUNTER
  |============================
*/

refs.productList.addEventListener('click', e => {
  const target = e.target;

  if (target.classList.contains('counter__btn')) {
    const cartItem = target.closest('.product-item');
    const counterValue = cartItem.querySelector('.counter__value');
    const counterAction = target.getAttribute('data-action');
    let counter = parseInt(counterValue.textContent);

    if (counterAction === 'increment') {
      counter += 1;
    } else if (counterAction === 'decrement' && counter > 1) {
      counter -= 1;
    }

    counterValue.textContent = counter;

    recalculateTotalPrice();
  }
});

function recalculateTotalPrice() {
  const productsInCart = Array.from(refs.productList.querySelectorAll('.product-item'));

  let totalPrice = 0;
  let totalCartQuantity = 0;

  productsInCart.forEach(productEl => {
    const quantity = parseInt(productEl.querySelector('.counter__value').textContent);
    const price = parseFloat(productEl.querySelector('.product-price').textContent.replace('$', ''));
    totalPrice += price * quantity;

    totalCartQuantity += quantity;
    spanCasa.textContent = `Cart(${totalCartQuantity})`;
    refs.cartHeading.innerHTML = `Cart(${totalCartQuantity})`;
  });

  refs.totalWrapper.innerHTML = `
        <span class="key-span">Sum:</span>
        <span class="price-text">&#36;${totalPrice.toFixed(2)}</span>
    `;
};






