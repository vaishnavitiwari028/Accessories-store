import { CLEAR_FROM_CART } from "../actionTypes";
const clearFromCartAction = (item) => ({
  type: CLEAR_FROM_CART,
  payload: item,
});
export default clearFromCartAction;
