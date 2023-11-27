import throttle from 'lodash.throttle';
import { makeCheckout } from './cart-postApi';
import { clickDeleteAllBtn } from '../cart';

const cartForm = document.querySelector('.form-wrapper');

const STORAGE_KEY = 'order';
let order = {
  email: '',
  products: [
    {
      productId: '',
      amount: '',
    },
  ],
};

const makeOrder = () => {
  const cartIdsData = JSON.parse(localStorage.getItem('cartIds'));
  order.products = cartIdsData.map(id => {
    const amount = document.querySelector(
      `[data-productid="${id}"] .counter__value`
    ).textContent;
    return { productId: id, amount: +amount };
  });
  return order;
};

let value = '';

cartForm.addEventListener('input', throttle(onEmailInput, 400));

const userEmail = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

function onEmailInput(e) {
  userEmail[e.target.name] = e.target.value;
  value = e.target.value;
  order.email = value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(order));
}

cartForm.addEventListener('submit', onCheckout);

function onCheckout(e) {
  e.preventDefault();
  makeOrder();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(order));
  const savedOrder = JSON.parse(localStorage.getItem(STORAGE_KEY));
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  makeCheckout(savedOrder);
  clickDeleteAllBtn();
}
