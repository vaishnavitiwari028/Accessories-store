import React, { lazy, Suspense, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LoadingSoundbar from "./components/LoadingSoundbar/LoadingSoundbar";
import useLocalStorage from "./custom-hooks/useLocalStorage";
import { auth, createUserProfile } from "./firebase/firebaseUtils";
import {
  setCartAction,
  setUserAction,
  updateCollection,
} from "./redux/actions";
import { selectCartItems } from "./selectors/cartSelectors";
import { selectUser } from "./selectors/userSelectors";

const CheckoutPage = lazy(() => import("./pages/Checkoutpage/CheckoutPage"));
const CollectionPage = lazy(() =>
  import("./pages/CollectionPage/CollectionPage")
);
const ContactPage = lazy(() => import("./pages/Contactpage/ContactPage"));
const HomePage = lazy(() => import("./pages/Homepage/HomePage"));
const ItemPage = lazy(() => import("./pages/Itempage/ItemPage"));
const ShopPage = lazy(() => import("./pages/Shoppage/ShopPage"));
const SigninAndSignup = lazy(() =>
  import("./pages/SigninAndSignuppage/SigninAndSignup")
);

const App = ({
  user,
  setCurrentUser,
  setCart,
  cartItems,
  updateCollection,
}) => {
  const [storedCart, setStoredCart] = useLocalStorage(
    "accessories_cart",
    cartItems
  );

  const [storedShop] = useLocalStorage("accessories_shop");
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    if (storedShop) updateCollection(storedShop);
    let setteledAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        try {
          let userRef = await createUserProfile(userAuth);
          userRef.onSnapshot((snapShot) => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            });
          });
        } catch (error) {
          console.log("error: ", error);
        }
      } else setCurrentUser(userAuth);
    });
    return setteledAuth;
  }, []);

  useEffect(() => {
    if (!user.currentUser) {
      setCart([]);
    }
    if (user.currentUser) {
      setCart(storedCart);
    }
    return () => {
      setFirstRender(false);
    };
  }, [user.currentUser]);

  useEffect(() => {
    if (!firstRender && user.currentUser) setStoredCart(cartItems);
  }, [cartItems]);

  return (
    <>
      <Header />
      <Switch>
        <Suspense fallback={<LoadingSoundbar />}>
          <Route exact path={["/", "/home/:homePart?"]}>
            <HomePage />
          </Route>
          <Route exact path="/signin">
            {user.currentUser ? <Redirect to="/" /> : <SigninAndSignup />}
          </Route>
          <Route path="/checkout">
            <CheckoutPage />
          </Route>
          <Route
            exact
            path="/shop"
            render={({ match }) => <ShopPage match={match} />}
          />
          <Route
            exact
            path="/shop/:category"
            render={({ match: { params } }) => <CollectionPage {...params} />}
          />
          <Route
            path="/shop/:category/:nameId"
            render={({ match: { params } }) => <ItemPage {...params} />}
          />
          <Route path="/contact/:contactPart?">
            <ContactPage />
          </Route>
        </Suspense>
      </Switch>
      <Footer />
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectUser,
  cartItems: selectCartItems,
});

export default connect(mapStateToProps, {
  setCurrentUser: setUserAction,
  setCart: setCartAction,
  updateCollection: updateCollection,
})(App);
