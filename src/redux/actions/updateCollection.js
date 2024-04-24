import { UPDATE_COLLECTION } from "../actionTypes";

const updateCollection = (collectionMap) => ({
  type: UPDATE_COLLECTION,
  payload: collectionMap,
});

export default updateCollection;
