import throttle from 'lodash.throttle';

// ---Validation--- //
const form = document.querySelector('.footer-form');

const STORAGE_KEY = 'email';
let value = '';

form.addEventListener('input', throttle(onDataInput, 400));

const userData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
console.log('userData:', userData);

function onDataInput(e) {
  userData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
  value = e.target.value;
}

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (value === '') {
    return alert('Please fill your email!');
  }
  const savedData = localStorage.getItem(STORAGE_KEY);
  console.log(JSON.parse(savedData));
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function populateTextarea() {
  form.email.value = userData.email || '';
}
populateTextarea();

// ---Post--- //

const BASE_URL = 'https://food-boutique.b.goit.study/api';
// contenttype apl json

const makeSubscription = () => {
  return fetch(`${BASE_URL}/products/categories`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    console.log(response);
  });
};

makeSubscription()
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });
