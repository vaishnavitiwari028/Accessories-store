import { createSelector } from "reselect";

export const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  selectCart,
  (cart) => cart.cartItems
);

export const selectCartCount = createSelector(selectCartItems, (cartItems) =>
  cartItems.reduce((acc, cur) => acc + cur.quantity, 0)
);

export const selectCartTotal = createSelector(selectCartItems, (cartItems) =>
  cartItems.reduce((acc, cur) => acc + cur.quantity * cur.price, 0)
);

export const selectCartHidden = createSelector(
  selectCart,
  (cart) => cart.hidden
);

export const getItemInCartById=(itemId)=> createSelector(selectCartItems, (cartItems) =>
  cartItems.find(({id})=> id===itemId)?.quantity);
