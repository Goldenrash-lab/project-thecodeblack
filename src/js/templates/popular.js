import { ProductPopularAPI } from '../products/API_popular';

const refs = {
  formPopularEl: document.querySelector('.popular__list'),
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
                  <a href="#" class="popular__item-link">
                    <svg class="popular__item-svg" width="12" height="12">
                      <use href="./images/icons.svg#icon-cart-icon"></use>
                    </svg>
                  </a>
                </div>
                <div class="popular__item-info">
                  <div class="popular__item-info-top">
                    <h5 class="popular__item-label">Category:</h5>
                    <p class="popular__item-text">${category}</p>
                  </div>
                  <div class="popular__item-info-bottom">
                    <h5 class="popular__item-label">Size:</h5>
                    <p class="popular__item-text">${size}</p>
                    <h5 class="popular__item-label">Popularity:</h5>
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