import { ADD_TO_CART } from "../actionTypes";

const addToCartAction = (item) => {
  return { type: ADD_TO_CART, payload: item };
};

export default addToCartAction;
