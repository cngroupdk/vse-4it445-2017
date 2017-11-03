import { actions } from './actions';

const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actions.PRODUCT_LIST_FETCH:
      return {
        ...state,
        isLoading: true,
      };

    case actions.PRODUCT_LIST_SUCCESS: {
      const { products } = action;

      return {
        ...state,
        isLoading: false,
        products,
        error: null,
      };
    }

    case actions.PRODUCT_LIST_FAILURE: {
      const { error } = action;

      return {
        ...state,
        isLoading: false,
        error,
      };
    }

    default:
      return state;
  }
};

export default reducer;
