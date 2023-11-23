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
        "Welcome to the Food Boutique! 🥦🍓 With Food Boutique, you're not just subscribing to food, you're signing up for a fresher, fitter, and happier you. Get ready to elevate your wellness journey, one bite at a time!"
      );
      // "
    })
    .catch(err => {
      console.log(err);
    });
};

export { makeSubscription };
