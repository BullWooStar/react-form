import useForm from "../hook/use-form";

const Form = () => {
  const {
    value: enteredEmail,
    valid: emailValid,
    valueBlurHandler: emailBlurHandler,
    valueChangeHandler: emailChangeHandler,
    reset,
  } = useForm((value) => {
    const emailReg =
      /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if (emailReg.test(value)) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <form>
      <div>
        <label>Your Email</label>
        <input
          type="text"
          id="name"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailValid ? "올바른 형식입니다" : "틀린형식입니다"}
      </div>

      <div>
        <label>Your Password</label>
        <input />
      </div>
      <button>submit</button>
    </form>
  );
};

export default Form;
