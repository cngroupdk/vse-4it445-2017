import { combineReducers } from 'redux';

import { shoppingCartReducer } from '../components/ShoppingCart/reducer';

export const rootReducer = combineReducers({
  shoppingCart: shoppingCartReducer,
});
