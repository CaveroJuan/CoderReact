import React from "react";
import { Link } from "react-router-dom";
import cart from "../../png/cart.png";
import "./styles/CartWidget.css";

function CartWidget() {
  return (
    <div className="cart">
      <Link to={"/Carrito"}>
        <img src={cart} alt="carrito" />
      </Link>
    </div>
  );
}

export default CartWidget;
