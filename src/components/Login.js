import { checkValidData } from "../utils/validate";
import Header from "./Header";
import { useState, useRef } from "react";
const Login = () => {
  const [isLogin, setLogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const username = useRef(null);
  const SIGN_IN = "Sign In";
  const SIGN_UP = "Sign Up";

  const setLoginState = () => {
    setLogin(!isLogin);
  };

  const validateAndSubmit = () => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const userNameValue = username.current.value;
    debugger
    if (!isLogin && (userNameValue == null || userNameValue.length === 0)) {
      setErrorMessage("User name is not defined.");
      return;
    }
    const result = checkValidData(emailValue, passwordValue);
    setErrorMessage(result);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/c11340ec-4211-4482-a9a0-f0ccd4d9e940/PK-en-20240108-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="p-20 w-3/12 bg-black relative mx-auto left-0 right-0 top-10 text-white rounded-lg bg-opacity-80"
      >
        <label className="text-left block font-bold text-lg">
          {isLogin ? SIGN_IN : SIGN_UP}
        </label>
        {!isLogin && (
          <input
            ref={username}
            type="text"
            placeholder="Enter Full Name"
            className="p-4 my-4 w-full bg-gray-800 rounded"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-800 rounded"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-800 rounded"
        />
        <p className="text-orange-700 font-bold">{errorMessage}</p>
        <div>
          <button
            onClick={validateAndSubmit}
            className="p-4 my-4 bg-red-700 text-white w-full rounded"
          >
            {isLogin ? SIGN_IN : SIGN_UP}
          </button>
        </div>
        <div className="my-3">
          <p className="cursor-pointer text-left">
            {isLogin ? "New to Netflix? " : "Already Registered? "}
            <a className="underline" onClick={setLoginState}>
              {!isLogin ? SIGN_IN : SIGN_UP}
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};
export default Login;
