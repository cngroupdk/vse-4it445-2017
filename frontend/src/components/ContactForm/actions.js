
export const actions = {
  FORM_INPUT_CHANGE: 'FORM_INPUT_CHANGE',
  FORM_RESET: 'FORM_RESET',
};

export const formInputChange = (id, value) => ({
  type: actions.FORM_INPUT_CHANGE,
  id,
  value,
});

export const formReset = () => ({
  type: actions.FORM_RESET,
});
