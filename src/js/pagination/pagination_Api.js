import axios from 'axios';

export const getProducts = async params => {
  try {
    const { keyword, category, page, limit, sort } = params;
    const response = await axios.get(
      `https://food-boutique.b.goit.study/api/products?keyword=${keyword}&category=${category}&page=${page}&limit=${limit}&${sort}`
    );
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
