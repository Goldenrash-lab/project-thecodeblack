import { ProductDiscountAPI } from "../products/API_discount";
const refs = {
   buttonEl: document.querySelector('.hero-icon'), 
}
console.log(refs.buttonEl);

refs.buttonEl.addEventListener('click', getDiscountProduct)

function getDiscountProduct() {
    console.log('hello');   
}



