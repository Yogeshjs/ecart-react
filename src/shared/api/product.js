import { productClient } from './clients';

const endPoints = {
  products: '/products'
};

export const getProducts = () =>
  productClient
    .get(endPoints.products)
    .then((res) => res.data)
    .catch((err) => {
      console.log(`error from getProducts ::`, err);
      throw new Error(err.message);
    });
