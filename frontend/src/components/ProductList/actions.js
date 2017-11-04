
export const actions = {
  PRODUCT_LIST_FETCH: 'PRODUCT_LIST_FETCH',
  PRODUCT_LIST_SUCCESS: 'PRODUCT_LIST_SUCCESS',
  PRODUCT_LIST_FAILURE: 'PRODUCT_LIST_FAILURE',
}

export const productListFetch = () => ({
  type: actions.PRODUCT_LIST_FETCH,
});

export const productListSuccess = (products) => ({
  type: actions.PRODUCT_LIST_SUCCESS,
  products,
});

export const productListFailure = (error) => ({
  type: actions.PRODUCT_LIST_FAILURE,
  error,
});

export const startProductListFetch = () => (dispatch, getStore, { api }) => {
  dispatch(productListFetch());

  api('products').then(res => {
    const { products } = res.data;
    dispatch(productListSuccess(products));
  }).catch(error => {
    dispatch(productListFailure(error));
  });
};
