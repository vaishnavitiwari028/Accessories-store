import React, { useState } from "react";
import { auth, createUserProfile } from "../../firebase/firebaseUtils";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";
import "./Signup.scss";

const SignUp = () => {
  const [fields, setFields] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const handleChange = (e) => {
    if (error) {
      setError("");
    }
    let { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let { displayName, email, password, confirmPassword } = fields;
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    try {
      console.log({ displayName });
      let user = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfile(user, { displayName });
    } catch (err) {
      setError(err.message);
    }

    setFields({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-error">{error}</div>
      <FormInput
        type="text"
        name="displayName"
        id="displayName"
        label="Display Name"
        value={fields.displayName}
        handleChange={handleChange}
      />
      <FormInput
        type="email"
        name="email"
        id="email"
        label="Email"
        value={fields.email}
        handleChange={handleChange}
      />
      <FormInput
        type="text"
        name="password"
        id="password"
        label="Password"
        value={fields.password}
        handleChange={handleChange}
      />
      <FormInput
        type="text"
        name="confirmPassword"
        id="confirmPassword"
        label="Confirm Password"
        value={fields.confirmPassword}
        handleChange={handleChange}
      />
      <Button type="submit">SIGN UP</Button>
    </form>
  );
};

export default SignUp;
