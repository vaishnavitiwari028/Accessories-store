import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionOverview from "../../components/CollectionOverview/CollectionOverview";
import useLocalStorage from "../../custom-hooks/useLocalStorage";
import {
  convertCollectionSnapshopToMap,
  firestore,
} from "../../firebase/firebaseUtils";
import { updateCollection } from "../../redux/actions";
import { selectShop } from "../../selectors/shopSelector";
import "./ShopPage.scss";

const ShopPage = ({ updateCollection, shop }) => {
  const [storedShop, setStoredShop] = useLocalStorage("accessories_shop", shop);
  useEffect(() => {
    if (storedShop) {
      updateCollection(storedShop);
    } else {
      const collectionRef = firestore.collection("shopCollection");
      collectionRef.onSnapshot(async (snapShot) => {
        console.log("calling firebase store");
        const collectionMap = await convertCollectionSnapshopToMap(snapShot);
        setStoredShop(collectionMap);
        updateCollection(collectionMap);
      });
    }
  }, []);

  return (
    <div className="shop-page reveal">
      <div className="global-container">
        <CollectionOverview />
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({ shop: selectShop });
export default connect(mapStateToProps, { updateCollection })(ShopPage);
