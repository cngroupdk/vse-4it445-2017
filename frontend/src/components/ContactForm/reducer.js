import { actions } from './actions';

const initValues = {
  name: '',
  email: '',
  message: '',
};

const initialState = {
  message: null,
  values: initValues,
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actions.FIELD_CHANGE: {
      const { id, value } = action;
      const { values } = state;

      return {
        ...state,
        values: {
          ...values,
          [id]: value,
        },
      };
    }

    case actions.CLEAR_FORM:
      return {
        ...state,
        values: initValues,
      };

    case actions.CONTACT_FORM_SUCCESS: {
      const { message } = action;

      return {
        ...state,
        message,
      };
    }

    default:
      return state;
  }
};

export default reducer;

// - selectors - //

export const getContactFormState = (storeState) =>
  storeState.contactForm;

export const getValues = (state) =>
  state.values;

export const getMessage = (state) =>
  state.message;
