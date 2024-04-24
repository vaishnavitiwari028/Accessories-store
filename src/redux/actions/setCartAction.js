import { SET_CART } from "../actionTypes";

const setCartAction = (storedData) => ({
  type: SET_CART,
  payload: storedData,
});

export default setCartAction;
