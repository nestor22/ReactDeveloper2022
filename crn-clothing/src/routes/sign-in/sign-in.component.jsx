import React from "react";
import {
  signInWithGooblePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooblePopup();
    const userDocRef = createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In </h1>
      <button onClick={logGoogleUser}>Sing In With Google Acount</button>
    </div>
  );
};

export default SignIn;
