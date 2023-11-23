import axios from 'axios';

axios.defaults.baseURL = 'https://food-boutique.b.goit.study/api/';

export class ProductAPI {
  constructor() {}

  getCategories() {
    return axios.get('products/categories').then(res => res.data);
  }
  getProductsByCat(obj) {
    const { keyword, category, page, limit } = obj;
    return axios
      .get(
        `products?keyword=${keyword}&category=${category}&page=${page}&limit=${limit}`
      )
      .then(res => res.data);
  }
}
