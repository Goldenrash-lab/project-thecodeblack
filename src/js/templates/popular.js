import { ProductPopularAPI } from '../products/API_popular';
import iconsPath from '/src/images/icons.svg';

const refs = {
  formPopularEl: document.querySelector('.popular__list'),
  spanCasa: document.querySelector('.css-span-casa'),
};

document.addEventListener('DOMContentLoaded', onformPopularElLoaded);

const productPopularAPI = new ProductPopularAPI();

productPopularAPI
  .getPopular()
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching popular products:', error);
  });

function onformPopularElLoaded() {
  productPopularAPI.getPopular().then(function (response) {
    renderPopularProducts(response);
  });
}
function createPopular(arr) {
  return arr.map(el => {
    const { category, img, name, popularity, size, _id } = el;
    return `<li class="popular__item" data-id="${_id}">
              <div class="popular__item-inner">
                <img src="${img}" width="74" alt="${name}" class="popular__item-img" />
              </div>
              <div class="popular__item-box">
                <div class="popular__item-buy">
                  <h4 class="popular__item-title">${name}</h4>

                  <button type="button" aria-label="button-buy" class="popular__item-link">
                    <svg class="popular__item-svg" width="12" height="12">
                      <use href="${iconsPath}#icon-shopping-cart"></use>
                    </svg>
                  </button>

                </div>
                <div class="popular__item-info">
                  <div class="popular__item-info-top">
                    <h4 class="popular__item-label">Category:</h4>
                    <p class="popular__item-text">${category}</p>
                  </div>
                  <div class="popular__item-info-bottom">
                    <h4 class="popular__item-label">Size:</h4>
                    <p class="popular__item-text">${size}</p>
                    <h4 class="popular__item-label">Popularity:</h4>
                    <p class="popular__item-text">${popularity}</p>
                  </div>
                </div>
              </div>
            </li>`;
  });
}
function renderPopularProducts(arr) {
  const markap = createPopular(arr).join('');
  refs.formPopularEl.innerHTML = markap;
}

// LS
refs.formPopularEl.addEventListener('click', onFormPopularElClick);

function onFormPopularElClick(el) {
  if (
    el.target.nodeName !== 'use' &&
    el.target.nodeName !== 'svg' &&
    el.target.nodeName !== 'BUTTON'
  ) {
    return;
  }

  const id = el.target.closest('.popular__item').dataset.id;
  let svg = null;

  if (el.target.nodeName === 'BUTTON') {
    svg = el.target.querySelector('.popular__item-svg');
  } else {
    svg = el.target.closest('.popular__item-svg');
  }

  const localStorageItem = JSON.parse(localStorage.getItem('cartIds'));
  // console.log(localStorageItem);
  // console.log(localStorageItem.length);

  svg.innerHTML = `<use href="${iconsPath}#icon-check"></use>`;
  svg.classList.add('checked-popular');

  if (localStorageItem.includes(id)) {
    return;
  } else {
    const ids = JSON.parse(localStorage.getItem('cartIds'));
    ids.push(id);
    localStorage.setItem('cartIds', JSON.stringify(ids));
    refs.spanCasa.textContent = `Cart (${ids.length})`;
  }
}
