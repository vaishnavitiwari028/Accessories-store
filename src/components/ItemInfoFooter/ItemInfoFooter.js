import React from "react";
import "./ItemInfoFooter.scss";

const ItemInfoFooter = ({ name, price, forPage }) => {
  return (
    <div className={`collection-footer`}>
      <div className={`for-${forPage}`}>
        <div className="name">{name}</div>
        <span className="price">Rs {price}</span>
      </div>
    </div>
  );
};

export default ItemInfoFooter;
