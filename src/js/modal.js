// import { functions } from "lodash";
import iconPath from "../images/icons.svg";
import axios from "axios";

const BASE_URL = 'https://food-boutique.b.goit.study/api/products';
const modal = document.querySelector('.modal');


async function getProductsById(id) {
    try {
        const response = await axios.get(`${BASE_URL}/${id}`);
        return response.data;
    }
    catch (error) {
        console.error('Error fetching product by ID:', error);
        throw error;
    }
};

const productsContainers = document.querySelectorAll('.products__list, .discount__list, .popular__list');

productsContainers.forEach(container => {
    container.addEventListener('click', async (e) => {
        const isBuyBtn = e.target.closest('.products__item-link');
        const isBuyBtnDisc = e.target.closest('.discount__item-link');
        const isBuyBtnPopular = e.target.closest('.popular__item-link');
        if (isBuyBtn||isBuyBtnDisc||isBuyBtnPopular) {
            return;
        }

        const targetItem = e.target.closest('.products__item, .discount__item, .popular__item');
        if (targetItem) {
            e.preventDefault();
            try {
                const productId = targetItem.dataset.id;
                const productData = await getProductsById(productId);
                onModalOpen(productData);
            } catch (error) {
                console.error('Error getting product data:', error);
            }
        }
    })
});

function onCloseModal() { 
    modal.classList.remove('open');
    window.removeEventListener('keydown', onDocumentKeyPress)
    document.body.classList.remove('modal-open');
};

function onModalOpen(productData) {
    modal.innerHTML = '';
    modal.classList.add('open');
    window.addEventListener('keydown', onDocumentKeyPress);
    document.body.classList.add('modal-open');

    const productInfoHTML = fetchProductInfo(productData);
    modal.insertAdjacentHTML('beforeend', productInfoHTML);
    handleScrolling();

    const addToCartBtn = document.querySelector('.modal__buy-btn');

    addToCartBtn.addEventListener('click', (e) => {
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        const itemIndex = cartItems.findIndex(item => item.id === productData.id);
        if (itemIndex === -1) {
            cartItems.push(productData);
            addToCartBtn.querySelector('.modal__buy-btn-text').textContent = 'Remove from';
        } else {
            cartItems.splice(itemIndex, 1);
            addToCartBtn.querySelector('.modal__buy-btn-text').textContent = 'Add to';
        }

        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    });
};

function onDocumentKeyPress(e) {
    if (e.code === 'Escape') {
        onCloseModal();
    }
};

modal.addEventListener('click', e => {
    if (e.target === modal || e.target.closest('.modal__close')) {
        onCloseModal()
    }
});

function fetchProductInfo(product) {
    const { img, name, category, size, popularity, desc, price } = product;

    const isInCart = JSON.parse(localStorage.getItem('cartItems'))?.some(item => item.id === product.id);
    const addToCartBtnText = isInCart ? 'Remove from' : 'Add to';

    return `
        <div class="modal__inner">
            <button class="modal__close">
                <svg class="modal__close-icon" width="13" height="13">
                    <use href="${iconPath}#icon-close"></use>
                </svg>
            </button>

            <div class="modal__product-info">
                <div class="modal__img-box"><img class="modal__product-img" src="${img}" alt="${name}" width="295"/></div>

                <div class="modal__product-content">
                    <h4 class="modal__product-title">${name}</h4>
                       <div class="modal__product-item-info">
                            <h5 class="modal__product-label">Category:</h5>
                            <p class="modal__product-text">${category}</p>
                            <h5 class="modal__product-label">Size:</h5>
                            <p class="modal__product-text">${size}</p>
                                <h5 class="modal__product-label">Popularity:</h5>
                                <p class="modal__product-text">${popularity}</p>
                            </div>
                            <p class="modal__product-descr">${desc}</p>                          
            </div>
            </div>
            <div class="modal__product-buy">
                <p class="modal__product-price"><span>&#36;</span>${price}</p>
                <button class="modal__buy-btn" type="button">
                    <p class="modal__buy-btn-text">${addToCartBtnText}</p>
                    <svg class="modal__cart-icon" width="18" height="18">
                        <use href="${iconPath}#icon-cart-icon"></use>
                    </svg>
                </button>
                </div>
    `;
}

function handleScrolling() {
    const productDescr = document.querySelector('.modal__product-descr');
    const maxHeight = 54;
    if (productDescr.scrollHeight > maxHeight) {
        productDescr.classList.add('scroll-adding');
    }
};