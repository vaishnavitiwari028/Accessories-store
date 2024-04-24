import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import directoryReducer from "./directoryReducer";
import shopReducer from "./shopReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default rootReducer;
