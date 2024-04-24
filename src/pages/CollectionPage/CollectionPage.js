import React from "react";
import { connect } from "react-redux";
import CollectionItem from "../../components/Collectionitem/CollectionItem";
import { selectCollection } from "../../selectors/shopSelector";
import "./CollectionPage.scss";

const CollectionPage = ({ collection, category }) => {
  return collection ? (
    <div className="collection-page reveal">
      <div className="global-container">
        <h2 className="title">{collection.title}</h2>
        <div className="items">
          <div className="item-area">
            {collection.items.map((item) => (
              <CollectionItem
                forPage="shop"
                key={item.id}
                item={item}
                category={category}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

const mapStateToProps = (state, { category }) => {
  if (!category) return state;
  return {
    category,
    collection: selectCollection(category)(state),
  };
};

export default connect(mapStateToProps)(CollectionPage);
