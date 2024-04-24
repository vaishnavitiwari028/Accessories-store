import { createSelector } from "reselect";

export const selectUser = (state) => state.user;
export const userSelector = createSelector(
  selectUser,
  (user) => user.currentUser
);
