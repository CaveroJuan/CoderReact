import React from "react";
import "./styles/Logo.css";
import logo1 from "../../../png/logo1.png";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="logo1">
      <Link to={"/"}>
        <img src={logo1} alt="logo" />
      </Link>
    </div>
  );
}

export default Logo;
