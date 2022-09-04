import useForm from "../hook/use-form";

const Form = () => {
  const {
    value: enteredEmail,
    valid: emailValid,
    focused: emailFocused,
    valueFocusHandler: emailFocusHandler,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandelr: emailBlurHandler,
    reset: resetEmail,
  } = useForm((value) => {
    const emailReg =
      /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/; //일단 내가 알아야함 아니면 주석이라도   // yup 같은거 쓰자
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
  } = useForm((value) => {
    const passwordReg =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/; // 1차 8자리인가 에러 throw, 2차 뭘 포함하는가 에러 throw 일단 내가 알아야함 아니면 주석이라도
    if (passwordReg.test(value)) {
      return true;
    } else {
      return false;
    }
  });

  let formIsValid = false; //const로 쓰자 아래 if랑 합치자

  if (emailValid && passwordValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (e) => {
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
          type="text" //email type
          id="email"
          onChange={emailChangeHandler}
          onFocus={emailFocusHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailFocused && (
          <span>{emailValid ? "올바른 형식입니다" : "틀린형식입니다"}</span> //p태그
        )}
      </div>

      <div>
        <label>Your Password</label>
        <input
          type="text" //password로
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
