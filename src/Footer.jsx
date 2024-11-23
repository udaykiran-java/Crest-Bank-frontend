import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="home-footer">
        <p>&copy; {new Date().getFullYear()} Crest Bank. All Rights Reserved.</p>
        <div className="footer-links">
          <button onClick={() => navigate("/privacy")} className="footer-btn">
            Privacy Policy
          </button>
          <button onClick={() => navigate("/terms")} className="footer-btn">
            Terms of Service
          </button>
        </div>
      </footer>
  );
};

export default Footer;
