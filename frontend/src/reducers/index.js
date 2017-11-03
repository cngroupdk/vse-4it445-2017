import { combineReducers } from 'redux';

import { shoppingCartReducer } from '../components/ShoppingCart/reducer';
import productListReducer from '../components/ProductList/reducer';

export const rootReducer = combineReducers({
  shoppingCart: shoppingCartReducer,
  productList: productListReducer,
});
