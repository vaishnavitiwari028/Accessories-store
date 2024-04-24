import { SET_CURRENT_USER } from "../actionTypes/index";
let initState = {
  currentUser: null,
};

const userReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    default:
      return state;
  }
};
export default userReducer;
