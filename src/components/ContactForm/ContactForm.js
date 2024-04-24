import React from "react";
import Button from "../Button/Button";
import "./ContactForm.scss";
const ContactForm = () => {
  return (
    <form className="form-container">
      <h4>CONTACT FORM</h4>
      <div className="input-group">
        <input placeholder="First Name" />
        <input placeholder="Last Name" />
      </div>
      <div className="input-group">
        <input placeholder="Email" />
        <input placeholder="Mob no" />
      </div>
      <input placeholder="Message Subject" />
      <textarea placeholder="Your message to us" rows="15" />
      <Button inverted type="reset">
        submit
      </Button>
    </form>
  );
};

export default ContactForm;
