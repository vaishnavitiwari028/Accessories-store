import React from "react";
import "./FormInput.scss";

const FormInput = ({ handleChange, label, id, ...otherProps }) => {
  return (
    <div className="form-field">
      {label ? (
        <label
          htmlFor={id}
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
      <input className="form-input" onChange={handleChange} {...otherProps} />
    </div>
  );
};

export default FormInput;
