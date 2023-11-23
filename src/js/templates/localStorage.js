const productsListCart = document.querySelector('.products__list');
console.log(productsListCart);
productsListCart .addEventListener('click', onProductsListCartClick);
function onProductsListCartClick(e) {
    console.log(e.target.parentNode.parentNode.getAttribute('[data-id]'));
    // console.log(e.target.parentNode);
    // localStorage.setItem();
}