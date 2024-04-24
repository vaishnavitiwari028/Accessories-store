import React from "react";
import SignIn from "../../components/Signin/SignIn";
import SignUp from "../../components/Signup/SignUp";
import "./SigninAndSignup.scss";

const SigninAndSignup = () => {
  return (
    <div className="signin-signup">
      <div className="form-container">
        <h4>Already have an account</h4>
        <span>Sign in with your email and password</span>
        <SignIn />
      </div>
      <div className="form-container">
        <h4> Do Not Have An Account</h4>
        <span>Sign up with your email and password</span>
        <SignUp />
      </div>
    </div>
  );
};

export default SigninAndSignup;
