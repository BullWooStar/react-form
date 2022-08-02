import { useState } from "react";

const useForm = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const valueIsValid = validateValue(enteredValue);

  const valueBlurHandler = () => {
    console.log(enteredValue);
    console.log(valueIsValid);
  };

  const reset = () => {
    setEnteredValue("");
  };

  return {
    value: enteredValue,
    valid: valueIsValid,
    valueChangeHandler,
    valueBlurHandler,
    reset,
  };
};

export default useForm;
