import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../assets/poke-logo.jpg";
const Header = () => {
  return (
    <div className="header-div">
      <div className="header-left">
        <img className="logo" src={logo} />
      </div>
      <div className="header-links">
        <Link to="/">Search</Link>
        <Link to="/favourite">Favourites</Link>
        <Link to="/compare">Compare</Link>
      </div>
    </div>
  );
};

export default Header;
