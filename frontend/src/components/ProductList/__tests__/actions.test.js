import {
  productListFetch,
  productListSuccess,
  productListFailure,
  startProductListFetch,
} from '../actions';

const SOME_PRODUCT = { id: 123 };
const SOME_PRODUCT_LIST = [ SOME_PRODUCT ];

describe('ProductList actions', () => {
  describe('startProductListFetch', () => {
    it('starts fetching and finishes with success', () => {
      const dispatch = jest.fn();
      const getState = jest.fn();
      const api = jest.fn();

      const apiPromise = Promise.resolve({ data: { products: SOME_PRODUCT_LIST } })
      api.mockReturnValueOnce(apiPromise);

      startProductListFetch()(dispatch, getState, { api });

      expect(dispatch.mock.calls).toEqual([
        [ productListFetch() ],
      ]);

      expect(api.mock.calls).toEqual([
        [ 'products' ],
      ])

      return apiPromise.then(() => {
        expect(dispatch.mock.calls).toEqual([
          [ productListFetch() ],
          [ productListSuccess(SOME_PRODUCT_LIST) ],
        ]);
      });
    });
  });
});
