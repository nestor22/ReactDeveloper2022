import React, { useEffect } from "react";
import {getRedirectResult }from 'firestore/auth'
import {
  auth,
  signInWithGooblePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
useEffect(async()=>{
  const response = await getRedirectResult(auth);
  if(response){
    const userDocRef = await creationUserDocumentFromAuth(response.user)
  }
}, [])



  const logGoogleUser = async () => {
    const { user } = await signInWithGooblePopup();
    const userDocRef = createUserDocumentFromAuth(user);
  };

  const logGoogleRedirectUser = async () => {
    const { user } = await signInWithGooblePopup();
    const userDocRef = signInWithGoogleRedirect(user);
  };


  return (
    <div>
      <h1>Sign In </h1>
      <button onClick={logGoogleUser}>Sing In With Google Acount</button>
      <button onClick={logGoogleRedirectUser}>Sing In With Google redirect Acount</button>
    </div>
  );
};

export default SignIn;
