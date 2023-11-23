import axios from 'axios';

axios.defaults.baseURL = 'https://food-boutique.b.goit.study/api/';

export class ProductPopularAPI {
  constructor() {}

  getCategories() {
    return axios.get('products/categories').then(res => res.data);
  }
  getProductsByCat(cat) {
    return axios
      .get(`products?keyword=Ac&category=${cat}&page=1&limit=9`)
      .then(res => res.data);
  }
}
