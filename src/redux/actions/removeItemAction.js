import { REMOVE_ITEM } from "../actionTypes";

const removeItemAction = (itemId) => ({
  type: REMOVE_ITEM,
  payload: itemId,
});

export default removeItemAction;
