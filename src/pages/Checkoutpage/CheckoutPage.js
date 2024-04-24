import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import {
  selectCartItems,
  selectCartTotal,
} from "../../selectors/cartSelectors";
import "./CheckoutPage.scss";

const CheckoutPage = ({ cartItems, cartTotal }) => {
  return (
    <div className="checkout_wrapper">
      {cartItems.length ? (
        <>
          <div className="checkout_header_container">
            <div className="checkout_header">
              <span>Product</span>
            </div>
            <div className="checkout_header">
              <span>Description</span>
            </div>
            <div className="checkout_header">
              <span>Quantity</span>
            </div>
            <div className="checkout_header">
              <span>Price</span>
            </div>
            <div className="checkout_header">
              <span>Remove</span>
            </div>
          </div>
          {cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id + "checkout"} cartItem={cartItem} />
          ))}
          <div className="total">
            <span>TOTAL: {cartTotal}</span>
          </div>
        </>
      ) : (
        <>Your Cart is Empty</>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
