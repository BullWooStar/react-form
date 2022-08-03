import { useState } from "react";

const useForm = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [valueValid, setValueValid] = useState(null);
  const [valueFocused, setValueFocused] = useState(null);

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    setValueValid(validateValue(enteredValue));
  };

  const valueFocusHandler = () => {
    setValueFocused(true);
  };

  const valueBlurHandelr = () => {
    setValueFocused(false);
  };

  const reset = () => {
    setEnteredValue("");
    setValueValid(null);
    setValueFocused(null);
  };

  return {
    value: enteredValue,
    valid: valueValid,
    focused: valueFocused,
    valueChangeHandler,
    valueFocusHandler,
    valueBlurHandelr,
    reset,
  };
};

export default useForm;
