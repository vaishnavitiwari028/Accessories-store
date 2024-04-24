import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer class="footer-row">
      <div className="footer-column">
        <h3>shop</h3>
        <ul>
          <li>
            <Link to="/shop/earphones">Earphones</Link>
          </li>
          <li>
            <Link to="/shop/headphones">Headphones</Link>
          </li>
          <li>
            <Link to="/shop/speakers">Speakers</Link>
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>about</h3>
        <ul>
          <li>
            <Link to="/home/vision">Vision</Link>
          </li>
          <li>
            <Link to="/home/products">Products</Link>
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>contact</h3>
        <ul>
          <li>
            <Link to="/contact/faq">Faq</Link>
          </li>
          <li>
            <Link to="/contact/info">Info</Link>
          </li>
          <li>
            <Link to="/contact/talk-to-us">Talk To Us</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
