const productsListCart = document.querySelector('.products__list');

productsListCart .addEventListener('click', onProductsListCartClick);

function onProductsListCartClick(e) {
    
    if(e.target.nodeName !== "path" && e.target.nodeName !== "svg" && e.target.nodeName !== "BUTTON"){
        return
    }
    const id = e.target.closest('.products__item').dataset.id;
    const btn = e.target.closest('.products__item-link');

    const localStorageItem = localStorage.getItem("cartIds");
    if (!localStorageItem) {
        localStorage.setItem("cartIds", JSON.stringify([id]));
    } else if (JSON.parse(localStorage.getItem("cartIds")).includes(id)) {
btn.innerHTML = '<p>yes</p>'
    } else {
        const ids = JSON.parse(localStorage.getItem("cartIds"));
        ids.push(id);
        localStorage.setItem("cartIds", JSON.stringify(ids));
    }
    
}