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
    const { keyword, category, page, limit } = obj;
    return axios
      .get(
        `products?keyword=${keyword}&category=${category}&page=${page}&limit=${limit}`
      )
      .then(res => res.data);
  }
  async getProducts(params) {
    try {
      const response = await axios.get(
        'https://food-boutique.b.goit.study/api/products',
        { params }
      );
      return response.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}
