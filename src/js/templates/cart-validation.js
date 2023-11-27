import throttle from 'lodash.throttle';
import { makeCheckout } from './cart-postApi';
import { clickDeleteAllBtn } from '../cart';

const cartForm = document.querySelector('.form-wrapper');

const STORAGE_KEY = 'order';
let order = {
  email: '',
  products: [],
};

const makeOrder = () => {
  const cartIdsData = JSON.parse(localStorage.getItem('cartIds'));

  const keys = Object.keys(cartIdsData);
  for (const key of keys) {
    const amount = document.querySelector(
      `[data-productid="${key}"] .counter__value`
    ).textContent;
    order.products.push({ productId: key, amount: +amount });
  }

  // const cardsIds = Object.keys(cartIdsData);
  // order.products = cardsIds.map(id => {
  //   const amount = document.querySelector(
  //     `[data-productid="${id}"] .counter__value`
  //   ).textContent;
  //   return { productId: id, amount: +amount };
  // });
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
  order = makeOrder();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(order));
  const savedOrder = JSON.parse(localStorage.getItem(STORAGE_KEY));

  makeCheckout(savedOrder).then(res => {
    cartForm.reset();
    localStorage.removeItem(STORAGE_KEY);
    clickDeleteAllBtn();
  });
}
