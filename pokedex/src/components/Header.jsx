import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/poke-logo.jpg";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-div">
        <img className="poke-logo" src={logo} alt="app-logo" />
      </div>
      <div className="links">
        <Link to="/">Search</Link>
        <Link to="/favourite">Favourites</Link>
        <Link to="/compare">Compare</Link>
      </div>
    </div>
  );
};

export default Header;
