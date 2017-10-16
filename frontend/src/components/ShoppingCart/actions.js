export const SHOPPING_CART_ADD_PRODUCT = 'SHOPPING_CART_ADD_PRODUCT';

export const addProductToCart = product => ({
  type: SHOPPING_CART_ADD_PRODUCT,
  payload: {
    product,
  },
});
