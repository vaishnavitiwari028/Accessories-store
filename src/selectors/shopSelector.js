import { createSelector } from "reselect";

export const shopSelector = (state) => state.shop;

export const selectShop = createSelector(shopSelector, (shop) =>
  Object.keys(shop).map((key) => shop[key])
);

export const selectCollection = (category) => {
  return createSelector(shopSelector, (shop) => shop[category]);
};

export const selectItem = (category, urlParam) =>
  createSelector(shopSelector, (shop) =>
    shop[category.toLowerCase()]?.items?.find((item) => item.id === urlParam)
  );

