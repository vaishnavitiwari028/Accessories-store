import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers";

const middleWares = [];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleWares))
);


export default store;
