import React from "react";
import { Link,Routes,Route } from "react-router-dom"; // For navigation links
import "./Header.css";
import OpenAccount from "./components/OpenAccount";
const Header = () => {
  return (
    <header className="header">
      <div className="container">
          <div className="logo1">
          <img src='./images/logo.webp' alt="CrestBank Logo" />
          <h1>CrestBank</h1>
        </div>
        <nav className="nav-links">
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        {/* Assuming OpenAccount is a separate page or component */}
        <Link to="/accounts">
          <button className="cta-button">Open an Account</button>
        </Link>
        
      </div>
    </header>
  );
};

export default Header;
