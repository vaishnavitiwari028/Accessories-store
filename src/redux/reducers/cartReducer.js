import { addToCartHelper, removeFromCartHelper } from "../../utils/cartUtils";
import {
  ADD_TO_CART,
  CLEAR_FROM_CART,
  REMOVE_ITEM,
  SET_CART,
  TOGGLE_CART_DROPDOWN,
} from "../actionTypes";

const initState = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SET_CART: {
      return { ...state, cartItems: payload };
    }
    case TOGGLE_CART_DROPDOWN: {
      return { ...state, hidden: !state.hidden };
    }
    case ADD_TO_CART:
      return { ...state, cartItems: addToCartHelper(state, payload) };
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeFromCartHelper(state, payload),
      };
    case CLEAR_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== payload.id
        ),
      };

    default:
      return state;
  }
};

export default cartReducer;
