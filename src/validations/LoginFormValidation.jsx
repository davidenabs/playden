const loginFormValidation = (formValues) => {
  const errors = {};

  if (!formValues.email) errors.email = "Email is required";
  if (!formValues.password) errors.password = "Password is required";
  
  return errors;
};

export default loginFormValidation;
