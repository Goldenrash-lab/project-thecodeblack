import throttle from 'lodash.throttle';
import Notiflix, { Notify } from 'notiflix';
import { makeSubscription } from './footer-postApi';

const form = document.querySelector('.footer-form');

const STORAGE_KEY = 'email';
let value = '';

form.addEventListener('input', throttle(onDataInput, 400));

const userData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

function onDataInput(e) {
  userData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
  value = e.target.value;
}

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (value === '') {
    return Notify.info('Please write your email :)');
  }
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  makeSubscription(savedData);
}

function populateTextarea() {
  form.email.value = userData.email || '';
}
populateTextarea();
