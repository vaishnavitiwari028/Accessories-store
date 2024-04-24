import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { ReactComponent as Logo } from "../../assets/headphones.svg";
import { auth } from "../../firebase/firebaseUtils";
import { toggleCartAction } from "../../redux/actions";
import {
  selectCartCount,
  selectCartHidden,
} from "../../selectors/cartSelectors";
import { userSelector } from "../../selectors/userSelectors";
import CartDropdown from "../CartDropdown/CartDropdown";
import CartIcon from "../CartIcon/CartIcon";
import "./Header.scss";

const Header = ({ currentUser, hidden, totalCartItems, toggleCartAction }) => {
  return (
    <header className="header">
      <Link className="logo-container" to="/">
        <Logo />
      </Link>
      <nav className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div
            className="option"
            onClick={() => {
              auth.signOut();
            }}
          >
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
      </nav>
      <div className="logo-container" onClick={toggleCartAction}>
        <CartIcon number={totalCartItems} />
      </div>
      {hidden ? null : <CartDropdown />}
    </header>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: userSelector,
  hidden: selectCartHidden,
  totalCartItems: selectCartCount,
});
export default connect(mapStateToProps, { toggleCartAction })(Header);
