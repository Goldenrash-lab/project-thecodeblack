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
                  <button type="button" class="products__item-link-popular">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 10 10"
                fill="none"
              >
                <path
                  <path d="M1.8002 0.599976C1.64107 0.599976 1.48845 0.66319 1.37593 0.775711C1.26341 0.888233 1.2002 1.04085 1.2002 1.19998C1.2002 1.35911 1.26341 1.51172 1.37593 1.62424C1.48845 1.73676 1.64107 1.79998 1.8002 1.79998H2.53219L2.7152 2.53318C2.71701 2.54162 2.71901 2.55002 2.72119 2.55838L3.536 5.81637L3.0002 6.35157C2.2442 7.10757 2.7794 8.39997 3.84859 8.39997H9.00019C9.15932 8.39997 9.31194 8.33676 9.42446 8.22424C9.53698 8.11172 9.60019 7.9591 9.60019 7.79997C9.60019 7.64084 9.53698 7.48823 9.42446 7.37571C9.31194 7.26319 9.15932 7.19997 9.00019 7.19997H3.84859L4.44859 6.59997H8.40019C8.51159 6.59992 8.62077 6.56884 8.71551 6.51024C8.81025 6.45164 8.8868 6.36782 8.93659 6.26817L10.7366 2.66818C10.7823 2.57672 10.8039 2.47511 10.7993 2.37298C10.7947 2.27085 10.764 2.17159 10.7103 2.08461C10.6566 1.99764 10.5815 1.92584 10.4922 1.87602C10.403 1.82621 10.3024 1.80003 10.2002 1.79998H3.76819L3.58219 1.05418C3.54969 0.924428 3.47477 0.809261 3.36932 0.726969C3.26387 0.644677 3.13395 0.599979 3.0002 0.599976H1.8002ZM9.60019 9.89997C9.60019 10.1387 9.50537 10.3676 9.33659 10.5364C9.16781 10.7052 8.93889 10.8 8.70019 10.8C8.4615 10.8 8.23258 10.7052 8.0638 10.5364C7.89502 10.3676 7.80019 10.1387 7.80019 9.89997C7.80019 9.66128 7.89502 9.43236 8.0638 9.26358C8.23258 9.0948 8.4615 8.99997 8.70019 8.99997C8.93889 8.99997 9.16781 9.0948 9.33659 9.26358C9.50537 9.43236 9.60019 9.66128 9.60019 9.89997ZM3.90019 10.8C4.13889 10.8 4.36781 10.7052 4.53659 10.5364C4.70537 10.3676 4.80019 10.1387 4.80019 9.89997C4.80019 9.66128 4.70537 9.43236 4.53659 9.26358C4.36781 9.0948 4.13889 8.99997 3.90019 8.99997C3.6615 8.99997 3.43258 9.0948 3.2638 9.26358C3.09502 9.43236 3.0002 9.66128 3.0002 9.89997C3.0002 10.1387 3.09502 10.3676 3.2638 10.5364C3.43258 10.7052 3.6615 10.8 3.90019 10.8Z" fill="#6D8434"/>

                  fill="#6D8434"
                />
              </svg>
            </button>
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
