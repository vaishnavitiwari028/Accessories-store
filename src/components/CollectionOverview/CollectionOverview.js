import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShop } from "../../selectors/shopSelector";
import PreviewCollection from "../Previewcollection/PreviewCollection";
import "./CollectionOverview.scss";

const CollectionOverview = ({ shopData }) => {
  return shopData ? (
    <div className="collection_overview">
      {shopData.map(({ id, ...otherProps }) => {
        return <PreviewCollection key={id} {...otherProps} />;
      })}
    </div>
  ) : null;
};

const mapStateToProps = createStructuredSelector({
  shopData: selectShop,
});

export default connect(mapStateToProps)(CollectionOverview);
