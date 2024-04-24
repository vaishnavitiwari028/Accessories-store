import React from "react";
import "./LoadingSoundbar.scss";

const LoadingSoundbar = () => {
  return (
    <div className="loader_screen">
      <div className="loader_container">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
};

export default LoadingSoundbar;
