import React from "react";
import useForm from "../hook/use-form";

const Form: React.FC = () => {
  const {
    value: enteredEmail,
    valid: emailValid,
    focused: emailFocused,
    valueFocusHandler: emailFocusHandler,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandelr: emailBlurHandler,
    reset: resetEmail,
  } = useForm((value: string) => {
    const emailReg =
      /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if (emailReg.test(value)) {
      return true;
    } else {
      return false;
    }
  });

  const {
    value: enteredPassword,
    valid: passwordValid,
    focused: passwordFocused,
    valueFocusHandler: passwordFocusHandler,
    valueChangeHandler: passwordChangeHandler,
    valueBlurHandelr: passwordBlurHandler,
    reset: resetPassword,
  } = useForm((value: string) => {
    const passwordReg =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
    if (passwordReg.test(value)) {
      return true;
    } else {
      return false;
    }
  });

  let formIsValid = false;

  if (emailValid && passwordValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(enteredEmail, enteredPassword);
    resetEmail();
    resetPassword();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div>
        <label>Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onFocus={emailFocusHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailFocused && (
          <p>{emailValid ? "올바른 형식입니다" : "틀린형식입니다"}</p>
        )}
      </div>

      <div>
        <label>Your Password</label>
        <input
          type="text"
          id="password"
          onChange={passwordChangeHandler}
          onFocus={passwordFocusHandler}
          onBlur={passwordBlurHandler}
          value={enteredPassword}
        />
        {passwordFocused && (
          <span>{passwordValid ? "올바른 형식입니다" : "틀린형식입니다"}</span>
        )}
      </div>
      <button disabled={!formIsValid}>submit</button>
    </form>
  );
};

export default Form;
