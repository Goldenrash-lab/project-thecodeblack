import '../../node_modules/modern-normalize/modern-normalize.css';
import './templates/footer-validation';
import './templates/footer-postApi';

const BASE_URL = `https://food-boutique.b.goit.study/api/products`;

const refs = {
  cartHeading: document.querySelector('#cart-heading'),
  productList: document.querySelector('#cart-product-list'),
  warningContainer: document.querySelector('#warning-container'),
  baseContainer: document.querySelector('#cart-base-container'),
  closeButton: document.querySelector('.close-button'),
  deleteAllBtn: document.querySelector('#button-wrapper'),
  totalWrapper: document.querySelector('#total-wrapper'),
};

function fetchProducts() {
  const END_POINT = `?keyword=Ac&page=1&limit=100`;
  const url = `${BASE_URL}${END_POINT}`;

  const options = {
    headers: {
      'content-type': 'application/json',
    },
  };

  return fetch(url, options)
    .then(res => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      // console.log(res.json())
      return res.json();
    })
    .catch(err => {
      console.error('Error fetching products:', err);
      throw err;
    });
}

fetchProducts()
  .then(results => {
    // console.log(results)
    // results.results = [];
    scrollAdding(results.results.length);
    cartLargeNumber(results.results.length);
    renderProductsCart(results.results);
    countTotalPrice(results.results);
  })
  .catch(error => {
    console.error('Error fetching products:', error);
  });

function renderProductsCart(products) {
  const markup = products
    .map(el => {
      const { category, img, name, price, size, _id } = el;

      return `<li class="product-item">
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

function cartLargeNumber(number) {
  if (number === 0) {
    refs.warningContainer.classList.remove('visually-hidden');
    refs.baseContainer.classList.add('visually-hidden');
  }

  refs.cartHeading.innerHTML = `CART (${number})`;
}

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

function clickDeleteElBtn(event) {
  const btn = event.target.closest('.close-button');
  if (!btn) {
    return;
  }

  cartLargeNumber();

  btn.parentElement.remove();
}

function clickDeleteAllBtn() {
  // refs.productList.classList.add('visually-hidden');

  refs.cartHeading.innerHTML = 'CART (0)';
  refs.warningContainer.classList.remove('visually-hidden');
  refs.baseContainer.innerHTML = '';
}

function scrollAdding(listLength) {
  if (listLength > 3 && window.innerWidth >= 768) {
    refs.productList.classList.add('scroll-adding');
  }
}

// function

refs.productList.addEventListener('click', clickDeleteElBtn);
refs.deleteAllBtn.addEventListener('click', clickDeleteAllBtn);
