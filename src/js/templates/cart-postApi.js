import axios from 'axios';
import Notiflix, { Notify } from 'notiflix';

axios.defaults.baseURL = 'https://food-boutique.b.goit.study/api';

const makeCheckout = savedOrder => {
  return axios.post('/orders', savedOrder).then(response => {
    if (response.status === 400) {
      throw response.data.message;
    }
    Notiflix.Notify.success(
      'Order Success! Thank you for shopping at Food Boutique. Your order has been received and is now being freshly prepared just for you! Get ready to indulge in nourishing goodness, delivered right to your doorstep. We re thrilled to be part of your journey to better health and happiness. 🌿🍎'
    );
  });
};

export { makeCheckout };
