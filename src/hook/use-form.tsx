import React, { useState } from "react";

const useForm = (validateValue: (enteredValue: string) => boolean) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [valueValid, setValueValid] = useState(false);
  const [valueFocused, setValueFocused] = useState(false);

  const valueChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
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
    setValueValid(false);
    setValueFocused(false);
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
