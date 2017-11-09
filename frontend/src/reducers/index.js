import { combineReducers } from 'redux';

import { shoppingCartReducer } from '../components/ShoppingCart/reducer';
import productListReducer from '../components/ProductList/reducer';
import contactFormReducer from '../components/ContactForm/reducer';

export const rootReducer = combineReducers({
  shoppingCart: shoppingCartReducer,
  productList: productListReducer,
  contactForm: contactFormReducer,
});
