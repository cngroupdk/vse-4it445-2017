import { logoutUser } from './actions';

export const addLogoutInterceptor = (api, store) => {
  api.interceptors.response.use(
    response => response,
    error => {
      if (error.response.status === 401) {
        store.dispatch(logoutUser());
      }

      return Promise.reject(error);
    }
  );
};
