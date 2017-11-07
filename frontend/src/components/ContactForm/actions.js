
export const actions = {
  FIELD_CHANGE: 'FIELD_CHANGE',
  CLEAR_FORM: 'CLEAR_FORM',
  CONTACT_FORM_SUCCESS: 'CONTACT_FORM.SUCCESS',
}

export const fieldChange = (id, value) => ({
  type: actions.FIELD_CHANGE,
  id,
  value,
});

export const clearForm = () => ({
  type: actions.CLEAR_FORM,
});

export const contactFormSuccess = (message) => ({
  type: actions.CONTACT_FORM_SUCCESS,
  message,
})


export const submitContactForm = (values) => (dispatch, getStore, { api }) => {
  api.post(`/contact-reqest`, values).then(res => {
    const { message } = res.data;

    dispatch(contactFormSuccess(message))
    dispatch(clearForm());
  });

  // api('products').then(res => {
  //   const { products } = res.data;
  //   dispatch(productListSuccess(products));
  // }).catch(error => {
  //   dispatch(productListFailure(error));
  // });
};
