import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import Header from "./Header";
import { useState, useRef } from "react";
import { AVATAR_URL, BACKGROUND_MAIN_URL } from "../utils/constant";

const Login = () => {
  const dispatch = useDispatch();
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
    const userNameValue = isLogin ? null : username.current.value;

    if (!isLogin && (userNameValue == null || userNameValue.length === 0)) {
      setErrorMessage("User name is not defined.");
      return;
    }
    const result = checkValidData(emailValue, passwordValue);
    setErrorMessage(result);
    if (!isLogin && result === null) {
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: userNameValue,
            photoURL: AVATAR_URL,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + "-" + errorMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
    if (isLogin && result === null) {
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          const { uid, email, displayName, photoURL } = user;
          dispatch(
            addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
            })
          );
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img alt="This is background img" src={BACKGROUND_MAIN_URL} />
      </div>
      <div
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
      </div>
    </div>
  );
};
export default Login;
