import '../../node_modules/modern-normalize/modern-normalize.css';
import './templates/footer-validation';
import './templates/footer-postApi';

// CART VALUE

const spanCasa = document.querySelector('.css-span-casa');

document.addEventListener('DOMContentLoaded', onDocumentLoad);

function onDocumentLoad() {
  const obj = loadToLS('cartIds');
  spanCasa.innerHTML = `CART(${obj.length})`;
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
const cartIdsArray = JSON.parse(cartIdsData);
fetchCartProducts(cartIdsArray);

//функция запроса данных
function fetchCartProducts(cartIds) {
  const BASE_URL = 'https://food-boutique.b.goit.study/api/products';

  Promise.all(
    cartIds.map(productId => {
      const url = `${BASE_URL}/${productId}`;

      return fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
          }
          return response.json();
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
      console.log(productsData);
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
            <img
              class="product-item-img"
              src="${img}"
              alt=""
            />

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
                <svg xmlns="http://www.w3.org/2000/svg" class="close-icon" width="16" height="16" viewBox="0 0 12 12" fill="none">
                    <path d="M11.0625 2.11488L9.88512 0.9375L6 4.82262L2.11488 0.9375L0.9375 2.11488L4.82262 6L0.9375 9.88512L2.11488 11.0625L6 7.17738L9.88512 11.0625L11.0625 9.88512L7.17738 6L11.0625 2.11488Z" fill="#010101"/>
                </svg>
              </button>
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

  priceArray.map(el => {
    return (totalPrice += el.price);
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
  console.log(cartIdsArray);

  const updatedCartIds = cartIdsArray.filter(id => id !== elementToRemove);
  localStorage.setItem('cartIds', JSON.stringify(updatedCartIds));
  cartLargeNumber(updatedCartIds.length);

  fetchCartProducts(updatedCartIds);
}

// Добавляем скролл, когда 3 элемента и больше
function scrollAdding(listLength) {
  if (listLength > 3 && window.innerWidth >= 768) {
    refs.productList.classList.add('scroll-adding');
  }
}

// Добавляем слушателей событий на список и на кнопку полного удаления
refs.productList.addEventListener('click', clickDeleteElBtn);
refs.deleteAllBtn.addEventListener('click', clickDeleteAllBtn);

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
