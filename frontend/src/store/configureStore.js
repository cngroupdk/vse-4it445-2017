import thunk from 'redux-thunk';
import { applyMiddleware, createStore, compose } from 'redux';

import api from '../api';
import { addLogoutInterceptor } from '../services/auth/apiInterceptor';
import { rootReducer } from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(thunk.withExtraArgument({ api }))
    )
  );

  addLogoutInterceptor(api, store);

  return store;
};
