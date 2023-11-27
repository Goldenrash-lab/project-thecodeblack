import axios from 'axios';

axios.defaults.baseURL = 'https://food-boutique.b.goit.study/api/';

export class ProductAPI {
  constructor() {
    this.totalPages = 1;
  }

  async getCategories() {
    const res = await axios.get('products/categories');
    return res.data;
  }
  async getProductsByCat(obj) {
    const { keyword, category, page, limit, sort } = obj;
    const res = await axios.get(
      `products?keyword=${keyword}&category=${category}&page=${page}&limit=${limit}&${sort}`
    );
    return res.data;
  }
}
