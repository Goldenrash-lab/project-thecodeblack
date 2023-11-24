import axios from 'axios';

export const getProducts = async (params) => {
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
};
