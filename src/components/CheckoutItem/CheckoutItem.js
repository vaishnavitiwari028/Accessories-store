import React from "react";
import { connect } from "react-redux";
import addToCartAction from "../../redux/actions/addToCartAction";
import clearFromCartAction from "../../redux/actions/clearFromCartAction";
import removeItemAction from "../../redux/actions/removeItemAction";
import "./CheckoutItem.scss";
const CheckoutItem = ({ cartItem, removeItem, addToCart, clearItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  return (
    <div className="checkout_item_container">
      <div className="image_container">
        <img src={imageUrl} alt="product_image" />
      </div>
      <div className="checkout_item">
        <span>{name}</span>
      </div>
      <div className="checkout_item">
        <span
          onClick={() => {
            removeItem(cartItem);
          }}
          className="increase_decrease"
        >
          &#10094;
        </span>
        <span>{quantity}</span>
        <span
          onClick={() => {
            addToCart(cartItem);
          }}
          className="increase_decrease"
        >
          &#10095;
        </span>
      </div>
      <div className="checkout_item">
        <span>{price}</span>
      </div>
      <div onClick={() => clearItem(cartItem)} className="checkout_item">
        <span>&#10005;</span>
      </div>
    </div>
  );
};

export default connect(null, {
  addToCart: addToCartAction,
  removeItem: removeItemAction,
  clearItem: clearFromCartAction,
})(CheckoutItem);
