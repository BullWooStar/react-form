import { useState } from "react";

const useForm = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [valueValid, setValueValid] = useState(null); //isValueValid 뭐 이렇게
  const [valueFocused, setValueFocused] = useState(null); //초깃값 false로 두자

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

export default useForm; //useForm이 아니라 useVali 뭐 이런걸로 바꾸는게 낫지 않을까
