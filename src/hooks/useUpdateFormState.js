const updateFormState = (field, value) => {
  setFormState((prevState) => ({
    ...prevState,
    [field]: value,
  }));
};

export default updateFormState;
