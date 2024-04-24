import React from "react";
import { ReactComponent as CartLogo } from "../../assets/shoppingbag.svg";
import "./CartIcon.scss";

const CartIcon = ({ number }) => {
  return (
    <div className="cart-logo">
      <CartLogo />
      <span className="cart-amount">{number}</span>
    </div>
  );
};

export default CartIcon;
