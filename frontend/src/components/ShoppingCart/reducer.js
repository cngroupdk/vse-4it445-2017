import {
  SHOPPING_CART_ADD_PRODUCT,
  SHOPPING_CART_REMOVE_PRODUCT,
} from './actions';

const initialState = {
  items: [],
};

export const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOPPING_CART_ADD_PRODUCT: {
      const { product } = action.payload;

      if (state.items.some(i => i.product.id === product.id)) {
        return {
          ...state,
          items: state.items.map(item => {
            if (item.product.id !== product.id) {
              return item;
            }

            return {
              ...item,
              count: item.count + 1,
            };
          }),
        };
      }

      return {
        ...state,
        items: [
          ...state.items,
          {
            product,
            count: 1,
          },
        ],
      };
    }

    case SHOPPING_CART_REMOVE_PRODUCT:
      return {
        ...state,
        items: state.items.filter(i => i.product.id !== action.payload.id),
      };

    default:
      return state;
  }
};
