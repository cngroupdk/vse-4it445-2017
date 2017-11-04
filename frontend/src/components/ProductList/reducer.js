import { actions } from './actions';

const initialState = {
  products: null,
  error: null,
  isLoading: false,
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
        products,
        error: null,
        isLoading: false,
      };
    }

    case actions.PRODUCT_LIST_FAILURE: {
      const { error } = action;

      return {
        ...state,
        error,
        isLoading: false,
      };
    }

    default:
      return state;
  }
};

export default reducer;

// - selectors - //

export const getProductListState = (storeState) => storeState.productList;

export const isLoading = (state) => state.isLoading;

export const isLoaded = (state) => state.products !== null;

export const isError = (state) => !!state.error;

export const getProducts = (state) => state.products || [];

export const getError = (state) => state.error;
