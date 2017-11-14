import R from 'ramda';

const isRequired = (value, id, values) =>
  value ? null :  'This field is required';

const isEmail = (value) =>
  (value || '').indexOf('@') !== -1 ? null : 'Please enter valid email address';

const isLongerThen = minLength =>
  (value) =>
    (value || '').length >= minLength  ? null :  `Minimum length is ${minLength}`

const isSameAs = (otherId, errorMessage) =>
  (value, _, values) =>
    value === values[otherId]  ? null :  errorMessage


const validationRules = {
  email: [
    isRequired,
    isEmail,
  ],
  pass: [
    isRequired,
    isLongerThen(10),
    isSameAs('passConfirmation', 'Password and password confirmation are different'),
  ],
  passConfirmation: [
    isRequired,
  ]
};

const vals = {
  email: "abc#example.com",
  pass: "234567890",
  passConfirmation: "1234567890",
};

const validateForm = (vals, validationRules) => {
  let isValid = true;

  const errors = R.mapObjIndexed((rules, id) => {
    const fieldErrors = R.pipe(
      R.map((rule) => rule(vals[id], id, vals)),
      R.reject(R.isNil)
    )(rules);

    if (fieldErrors.length > 0) {
      isValid = false;
    }
    return fieldErrors;
  }, validationRules);

  return {
    errors,
    isValid,
  }
}

validateForm(vals, validationRules);
