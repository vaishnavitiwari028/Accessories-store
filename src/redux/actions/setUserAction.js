import { SET_CURRENT_USER } from "../actionTypes";

const setUserAction = (user) => {
  return {
    type: SET_CURRENT_USER,
    payload: user,
  };
};

export default setUserAction;
