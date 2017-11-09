import { actions } from './actions';

const initialValues = {
  name: '',
  email: '',
  message: '',
};

const initialState = {
  values: initialValues,
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actions.FORM_INPUT_CHANGE: {
      const { id, value } = action;
      const { values } = state;

      return {
        ...state,
        values: {
          ...values,
          [id]: value,
        }
      };
    }

    case actions.FORM_RESET:
      return {
        ...state,
        values: initialValues,
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
