import productList from './productList';

export const productsController = async (req, res) => {
  res.json(productList);
};
