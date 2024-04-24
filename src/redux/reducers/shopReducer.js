// import SHOP_DATA from "../../pages/Shoppage/shopdata";
import { UPDATE_COLLECTION } from "../actionTypes";

const shopReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case UPDATE_COLLECTION:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default shopReducer;
