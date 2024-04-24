import React from "react";
import { connect } from "react-redux";
import Button from "../../components/Button/Button";
import { addToCartAction } from "../../redux/actions";
import { selectItem, shopSelector } from "../../selectors/shopSelector";
import { getItemInCartById } from "../../selectors/cartSelectors";
import "./Itempage.scss";

const ItemPage = ({ item, category, addToCart, shop, inCart }) => {
  if (!item) return null;

  const { imageUrl, price, name } = item;
  return (
    <div className="global-container">
      <div className="item_page reveal">
        <div className="item_img_container">
          <img src={imageUrl} alt="" />
        </div>
        <div className="item_details">
          <p>{category}</p>
          <h3>{name}</h3>
          <p>30-Day Guarantee | 1-Year Warranty</p>
          <h5>Rs {price}</h5>
           {inCart ?  <Button onClick={() => addToCart(item)}>
            {inCart} IN CART
            <br /> ADD MORE
          </Button>
         : 
          <Button onClick={() => addToCart(item)}>
            ADD TO CART
          </Button>}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state, { category, nameId } ) => {
  if (!category || !nameId) {
    return state;
  }
  let id = +nameId.slice(nameId.lastIndexOf("_") + 1);
  return {
    category,
    item: selectItem(category, id)(state),
    shop: shopSelector(state),
    inCart :getItemInCartById(id)(state)
  };
};
export default connect(mapStateToProps, { addToCart: addToCartAction })(
  ItemPage
);
