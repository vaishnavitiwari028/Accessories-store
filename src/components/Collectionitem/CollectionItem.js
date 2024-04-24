import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import useMediaMatch from "../../custom-hooks/useMediaMatch";
import { addToCartAction } from "../../redux/actions";
import {  getItemInCartById } from "../../selectors/cartSelectors";
import Button from "../Button/Button";
import ItemInfoFooter from "../ItemInfoFooter/ItemInfoFooter";
import "./CollectionItem.scss";

const CollectionItem = ({ addToCart, forPage, item, category, inCart }) => {
  const { name, imageUrl, price, id } = item;
  const isHoverAvailable = useMediaMatch("(hover:hover)");
  return (
    <div className={`collection-item`}>
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundColor: "#f1f1f1",
        }}
      />
      <Link to={`/shop/${category}/${name}_${id}`} className="link"></Link>
      <ItemInfoFooter
        isHoverAvailable={isHoverAvailable}
        forPage={forPage}
        name={name}
        price={price}
      />

      {isHoverAvailable ? (
      inCart ? (
          <Button inverted onClick={() => addToCart(item)}>
            { inCart} IN CART
            <br /> ADD MORE
          </Button>
        ) : (
          <Button inverted onClick={() => addToCart(item)}>
            ADD TO CART
          </Button>
        )
      ) : (
        <div className="mobile-add_To_cart">
          { inCart ? (
            <>
              { inCart} In Cart <span className="seperator">|</span>
            </>
          ) : null}
          <div onClick={() => addToCart(item)}>
            { inCart? <>Add more</> : <>Add To Cart</>}
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state, {item})=>({
  inCart: getItemInCartById(item.id)(state),
});

export default connect(mapStateToProps, { addToCart: addToCartAction })(
  CollectionItem
);
