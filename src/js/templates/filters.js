import { ProductAPI } from '../products/API';

document.addEventListener('DOMContentLoaded', onDocumentLoad);
const refs = {
  selectEl: document.querySelector('.category-choice'),
};

const productAPI = new ProductAPI();
console.log(productAPI.getProducts());
function onDocumentLoad() {
  productAPI.getProducts().then(res => {
    renderOption(res);
  });
}

function createOption(arr) {
  return arr.map(el => {
    return `
        <option value="${el}">${el}</option>
        `;
  });
}
function renderOption(arr) {
  const markup = createOption(arr).join('');
  refs.selectEl.innerHTML = markup;
}
