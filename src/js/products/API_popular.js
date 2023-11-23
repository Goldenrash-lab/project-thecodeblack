import axios from 'axios';

axios.defaults.baseURL = 'https://food-boutique.b.goit.study/api/';

export class ProductPopularAPI {
  constructor() {}

  getPopular() {
    return axios.get('products/popular').then(res => res.data);
  }
}
