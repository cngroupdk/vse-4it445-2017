import { SHOPPING_CART_ADD_PRODUCT } from './actions';

const initialState = {
  items: [],
};

export const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOPPING_CART_ADD_PRODUCT: {
      const { product } = action.payload;

      return {
        ...state,
        items: [
          ...state.items,
          {
            product,
            count: 1, // TODO: update count if already exists
          },
        ],
      };
    }

    default:
      return state;
  }
};
