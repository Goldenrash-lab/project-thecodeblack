import axios from 'axios';

axios.defaults.baseURL = 'https://food-boutique.b.goit.study/api/';

export class ProductPopularAPI {
  constructor() {}

  async getPopular() {
    const res = await axios.get('products/popular');
    return res.data;
  }
}
