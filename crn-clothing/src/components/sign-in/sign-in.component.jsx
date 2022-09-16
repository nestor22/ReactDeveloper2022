import React, { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  signInWithGooblePopup,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-in.style.scss";

const DefaultFormFiels = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFiels, setFormFiels] = useState(DefaultFormFiels);
  const { email, password } = formFiels;

  const logGoogleUser = async () => {
    const { user } = await signInWithGooblePopup();
    const userDocRef = createUserDocumentFromAuth(user);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormFiels({ ...formFiels, [name]: value });
  };
  const resetFormFields = () => {
    setFormFiels(DefaultFormFiels);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      

      const response = await signInAuthUserWithEmailAndPassword(email, password);

      resetFormFields();
    } catch (error) {
      if (error.code === "auth/wrong-password"  || error.code === "auth/user-not-found") {
        alert("Cannot loging user, incorrect user or password");
      }
      console.error("user creation encontered a error ", error);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account? </h2>
      <span>Sign up with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Email"}
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
          s
        />

        <FormInput
          label={"Password"}
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign up </Button>

          <Button buttonType="google" type="button" onClick={logGoogleUser}>
            Sing In With Google Acount
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
