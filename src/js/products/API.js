import axios from 'axios';

axios.defaults.baseURL = 'https://food-boutique.b.goit.study/api/';

export class ProductAPI {
  constructor() {}

  getProducts() {
    return axios.get('products/categories').then(res => res.data);
  }
}
