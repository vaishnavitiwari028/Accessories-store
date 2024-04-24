import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { toggleCartAction } from "../../redux/actions";
import {
  selectCartHidden,
  selectCartItems,
} from "../../selectors/cartSelectors";
import Button from "../Button/Button";
import CartItems from "../CartItems/CartItems";
import "./CartDropdown.scss";

const CartDropdown = ({ cartItems, isHidden, toggleCartAction }) => {
  const history = useHistory();
  // const cartRef = useOutsideClick(toggleCartAction);
  const cartRef = useRef();
  useEffect(() => {
    const onBodyClick = (e) => {
      if (cartRef.current.contains(e.target)) return;
      toggleCartAction();
      e.stopPropagation();
    };
    document.addEventListener("click", onBodyClick);
    return () => {
      document.removeEventListener("click", onBodyClick);
    };
  }, []);
  const goToCheckout = () => {
    history.push("/checkout");
    toggleCartAction();
  };
  return (
    <div ref={cartRef} className="cart-dropdown">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItems key={cartItem.id} details={cartItem} />
        ))
      ) : (
        <span className="empty-message">YOUR CART IS EMPTY</span>
      )}
      <Button onClick={goToCheckout}>GO TO CHECKOUT</Button>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  isHidden: selectCartHidden,
});

export default connect(mapStateToProps, { toggleCartAction })(CartDropdown);
