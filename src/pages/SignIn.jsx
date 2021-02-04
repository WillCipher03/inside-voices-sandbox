import React from "react";
import "./styles/sign-in.css";

const SignIn = () => {
  return (
    <form className="card">
      <label for="username">Username: </label>
      <input type="text" id="username" />
      <label for="password">Password: </label>
      <input type="text" id="password" />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default SignIn;
