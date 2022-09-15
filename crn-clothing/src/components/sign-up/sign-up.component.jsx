import React, { useState } from "react";

const DefaultFormFiels = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFiels, setFormFiels] = useState(DefaultFormFiels);

  const { displayName, email, password, confirmPassword } = formFiels;

  const handleChange = (event) => {
    const {value, name} = event.target
    setFormFiels({...formFiels, [name]:value});
  };

  return (
    <div>
      <h1>Sign up with your email and password</h1>

      <form onSubmit={() => {}}>
        <label htmlFor="">Display Name</label>
        <input
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
        <label htmlFor="">email</label>
        <input
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
          s
        />
        <label htmlFor="">password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <label htmlFor="">confirm password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <button type="submit">Sign up </button>
      </form>
    </div>
  );
};

export default SignUpForm;
