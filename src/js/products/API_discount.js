import axios from 'axios';

axios.defaults.baseURL = 'https://food-boutique.b.goit.study/api/';

export class ProductDiscountAPI {
  constructor() {}

  async getDiscount() {
    const res = await axios.get('products/discount');
    return res.data;
  }
}
