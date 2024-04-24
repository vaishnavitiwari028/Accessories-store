import React from "react";
import "./Button.scss";

const Button = ({ children, inverted, ...otherProps }) => {
  return (
    <button
      className={`custom-button ${inverted ? "inverted" : ""}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
