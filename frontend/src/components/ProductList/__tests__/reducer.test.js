import reducer, {
  getProductListState,
  isLoading,
  isLoaded,
  isError,
  getError,
  getProducts,
} from '../reducer';
import {
  productListFetch,
  productListSuccess,
  productListFailure,
} from '../actions';

const INIT_ACTION = { type: 'INIT' };
const SOME_PRODUCT = { id: 123 };
const SOME_PRODUCT_LIST = [ SOME_PRODUCT ];
const SOME_ERROR = new Error();

const stateOfState = (state) => ({
  isLoading: isLoading(state),
  isLoaded: isLoaded(state),
  isError: isError(state),
  getError: getError(state),
  getProducts: getProducts(state),
});

describe('ProductList reducer', () => {
  it('initializes', () => {
    const actions = [
      INIT_ACTION,
    ];

    const reduxState = actions.reduce(reducer, undefined);

    expect(stateOfState(reduxState)).toMatchObject({
      isLoading: false,
      isLoaded: false,
      isError: false,
      getError: null,
      getProducts: [],
    });
  });

  it('starts fetching', () => {
    const actions = [
      INIT_ACTION,
      productListFetch(),
    ];

    const reduxState = actions.reduce(reducer, undefined);

    expect(stateOfState(reduxState)).toMatchObject({
      isLoading: true,
      isLoaded: false,
      isError: false,
      getError: null,
      getProducts: [],
    });
  });

  it('finishes fetching with success', () => {
    const actions = [
      INIT_ACTION,
      productListFetch(),
      productListSuccess(SOME_PRODUCT_LIST),
    ];

    const reduxState = actions.reduce(reducer, undefined);

    expect(stateOfState(reduxState)).toMatchObject({
      isLoading: false,
      isLoaded: true,
      isError: false,
      getError: null,
      getProducts: SOME_PRODUCT_LIST,
    });
  });

  it('finishes fetching with failure', () => {
    const actions = [
      INIT_ACTION,
      productListFetch(),
      productListFailure(SOME_ERROR),
    ];

    const reduxState = actions.reduce(reducer, undefined);

    expect(stateOfState(reduxState)).toMatchObject({
      isLoading: false,
      isLoaded: false,
      isError: true,
      getError: SOME_ERROR,
      getProducts: [],
    });
  });
});
