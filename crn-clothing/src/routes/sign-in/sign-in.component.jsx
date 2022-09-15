import React from "react";
import {
  signInWithGooblePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up/sign-up.component";

const SignIn = () => {

  const logGoogleUser = async () => {
    const { user } = await signInWithGooblePopup();
    const userDocRef = createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In </h1>
      <button onClick={logGoogleUser}>Sing In With Google Acount</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
