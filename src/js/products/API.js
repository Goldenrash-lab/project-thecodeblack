import axios from 'axios';

axios.defaults.baseURL = 'https://food-boutique.b.goit.study/api/';

export class ProductAPI {
  constructor() {
    this.totalPages = 1;
  }

  getCategories() {
    return axios.get('products/categories').then(res => res.data);
  }
  getProductsByCat(obj) {
    const { keyword, category, page, limit, sort } = obj;
    return axios
      .get(
        `products?keyword=${keyword}&category=${category}&page=${page}&limit=${limit}&${sort}`
      )
      .then(res => res.data);
  }
}
