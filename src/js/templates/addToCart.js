import iconsPath from '/src/images/icons.svg'
const productsListCart = document.querySelector('.products__list');

productsListCart.addEventListener('click', onProductsListCartClick);

function onProductsListCartClick(e) {
    console.dir(e.target);
    if(e.target.nodeName !== "use" && e.target.nodeName !== "svg" && e.target.nodeName !== "BUTTON"){
        return
    }
    const id = e.target.closest('.products__item').dataset.id;
    const svg = e.target.closest('.products__item-svg');

    const localStorageItem = localStorage.getItem("cartIds");
    if (!localStorageItem) {
        localStorage.setItem("cartIds", JSON.stringify([id]));
    } else if (JSON.parse(localStorage.getItem("cartIds")).includes(id)) {
svg.innerHTML = `<use href="${iconsPath}#icon-check"></use>`
    } else {
        const ids = JSON.parse(localStorage.getItem("cartIds"));
        ids.push(id);
        localStorage.setItem("cartIds", JSON.stringify(ids));
    }
    
}
// const popularListCart = document.querySelector('.popular__list');

// popularListCart.addEventListener('click', onPopularListCartClick);

// function onPopularListCartClick(e) {
    
//     if(e.target.nodeName !== "path" && e.target.nodeName !== "svg" && e.target.nodeName !== "BUTTON"){
//         return
//     }
//     const id = e.target.closest('.popular__item').dataset.id;
//     const btn = e.target.closest('.products__item-link');

//     const localStorageItem = localStorage.getItem("cartIds");
//     if (!localStorageItem) {
//         localStorage.setItem("cartIds", JSON.stringify([id]));
//     } else if (JSON.parse(localStorage.getItem("cartIds")).includes(id)) {
// btn.innerHTML = '<p>yes</p>'
//     } else {
//         const ids = JSON.parse(localStorage.getItem("cartIds"));
//         ids.push(id);
//         localStorage.setItem("cartIds", JSON.stringify(ids));
//     }
    
// }