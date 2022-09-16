import React from "react";
import {
  signInWithGooblePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up/sign-up.component";
import SignInForm from "../../components/sign-in/sign-in.component";

const Autentication = () => {

  
  return (
    <div>
      <h1>Sign In </h1>
      
      <SignUpForm />
      <SignInForm />
    </div>
  );
};

export default Autentication;
