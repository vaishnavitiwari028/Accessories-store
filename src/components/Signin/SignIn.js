import React, { useState } from "react";
import { auth, siginWithGoogle } from "../../firebase/firebaseUtils";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";
import "./SignIn.scss";

const SignIn = () => {
  const [fields, setFields] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let { email, password } = fields;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setFields({ email: "", password: "" });
    } catch (err) {
      console.log("error: ", err);
      setError(err.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (error) {
      setError("");
    }
    setFields({ ...fields, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-error">{error}</div>
      <FormInput
        name="email"
        id="useremail"
        type="email"
        label="Email"
        value={fields.email}
        handleChange={handleChange}
      />

      <FormInput
        name="password"
        id="userpassword"
        type="text"
        label="Password"
        value={fields.password}
        handleChange={handleChange}
      />
      <div className="buttons">
        <Button type="submit">SIGN IN</Button>
        <div>or</div>
        <Button onClick={siginWithGoogle}>SIGN IN WITH GOOGLE</Button>
      </div>
      <div className="form_error"></div>
    </form>
  );
};

export default SignIn;
