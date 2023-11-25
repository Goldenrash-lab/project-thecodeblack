import axios from 'axios';
import Notiflix, { Notify } from 'notiflix';

axios.defaults.baseURL = 'https://food-boutique.b.goit.study/api';
// contenttype apl json

// axios.post(url[, data[, config]])

const makeSubscription = savedData => {
  return axios
    .post('/subscription', savedData)
    .then(response => {
      Notiflix.Notify.success(
        'Thanks for subscription. Welcome to the Food Boutique! 🥦🍓 '
      );
    })
    .catch(err => {
      if (err.response.status === 409) {
        Notiflix.Notify.warning('Sorry, this email already subscribed');
      }
      if (err.response.status === 400) {
        Notify.info('Please enter your email :)');
      }
    });
};

export { makeSubscription };
