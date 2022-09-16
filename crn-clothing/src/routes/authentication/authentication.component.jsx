import React from "react";
import SignUpForm from "../../components/sign-up/sign-up.component";
import SignInForm from "../../components/sign-in/sign-in.component";
import './authentication.style.scss'

const Autentication = () => {
  return (
    <div className='autentication-container'>
      <SignUpForm />
      <SignInForm />
    </div>
  );
};

export default Autentication;
