import React from "react";
import { Link } from "react-router-dom";
import CollectionItem from "../Collectionitem/CollectionItem";
import "./PreviewCollection.scss";

const PreviewCollection = ({ title, items, routeName }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem
              key={item.id}
              forPage="preview"
              category={title}
              item={item}
            />
          ))}
      </div>
      <Link to={`/shop/${routeName}`} className="view_all_link">
        VIEW ALL <i className="fas fa-arrow-right"></i>
      </Link>
    </div>
  );
};

export default PreviewCollection;
