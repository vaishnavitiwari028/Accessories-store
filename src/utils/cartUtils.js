export const addToCartHelper = (state, item) => {
  const isInCart = state.cartItems.some((cartItem) => cartItem.id === item.id);
  if (isInCart) {
    return state.cartItems.map((cartItem) => {
      if (cartItem.id === item.id)
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      return cartItem;
    });
  }
  return [...state.cartItems, { ...item, quantity: 1 }];
};

export const removeFromCartHelper = (state, item) => {
  const isMultipleCart = state.cartItems.some(
    (cartItem) => cartItem.id === item.id && cartItem.quantity > 1
  );
  const isOneInCart = state.cartItems.some(
    (cartItem) => cartItem.id === item.id && cartItem.quantity === 1
  );
 
  if (isMultipleCart) {
    return state.cartItems.map((cartItem) => {
      if (cartItem.id === item.id)
        return { ...cartItem, quantity: cartItem.quantity - 1 };
      return cartItem;
    });
  } else if (isOneInCart)
    return state.cartItems.filter((cartItem) => cartItem.id !== item.id);
  else return state;
};
