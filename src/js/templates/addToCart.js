import iconsPath from '/src/images/icons.svg';

const productsListCart = document.querySelector('.products__list');
const spanCasa = document.querySelector('.css-span-casa');

document.addEventListener('DOMContentLoaded', onDocumentLoad);

productsListCart.addEventListener('click', onProductsListCartClick);

function onDocumentLoad(e) {
  const localStorageItemParse = loadToLS('cartIds');
  spanCasa.textContent = `Cart (${Object.keys(localStorageItemParse).length})`;
}

function onProductsListCartClick(e) {

  if (
    e.target.nodeName !== 'use' &&
    e.target.nodeName !== 'svg' &&
    e.target.nodeName !== 'BUTTON'
  ) {
    return;
  }
  const id = e.target.closest('.products__item').dataset.id;
  console.dir(e.target.closest('.products__item'));

  let svg = null;
  if (e.target.nodeName === "BUTTON") {
    svg = e.target.querySelector('.products__item-svg')
  } else { svg = e.target.closest('.products__item-svg') }

  const localStorageItemParse = loadToLS('cartIds');

  if (Object.keys(localStorageItemParse).includes(id)) {
    console.log(localStorageItemParse);
    // localStorageItemParse[id] += 1;
    // console.log(localStorageItemParse);
    // saveToLS('cartIds', localStorageItemParse);
    return;
  } else {
    localStorageItemParse[id] = 1;
    saveToLS('cartIds', localStorageItemParse);
    svg.innerHTML = `<use href="${iconsPath}#icon-check"></use>`;
    svg.classList.add('checked');
    spanCasa.textContent = `Cart (${Object.keys(localStorageItemParse).length})`;
  }
}

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

//  setTimeout(() => {
//     const localStorageItemParse = loadToLS('cartIds');
//   console.log(localStorageItemParse);
//   if (!localStorageItemParse) {
//     return;
//   }
//   localStorageItemParse.forEach(element => {
//     console.log(element);
//     const productItem = document.querySelector(`[data-id="${element}"]`);
//     console.log(productItem);
//     const svg = productItem.querySelector('.products__item-svg');
//     svg.innerHTML = `<use href="${iconsPath}#icon-check"></use>`;
//     svg.classList.add('checked');
//   });
//   spanCasa.textContent = `Cart (${localStorageItemParse.length})`;
// }, 5000);


