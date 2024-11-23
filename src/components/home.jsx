import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "./images/logo.webp",
    "./images/atm.webp",
    "./images/open.webp",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="home-logo">Crest Bank</h1>
        <nav className="home-nav">
          <button onClick={() => navigate("/about")} className="nav-btn">
            About Us
          </button>
          <button onClick={() => navigate("/contact")} className="nav-btn">
            Contact Us
          </button>
          <button onClick={() => navigate("/services")} className="nav-btn">
            Services
          </button>
        </nav>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <h2>Welcome to Crest Bank</h2>
          <p>Your trusted partner for a secure financial future.</p>
          <button className="cta-btn" onClick={() => navigate("/accounts")}>
            Get Started
          </button>
        </div>
        <div className="hero-image">
          <img
            src={images[currentImageIndex]}
            alt="Banking Illustration"
            className="slider-image"
          />
        </div>
      </section>

      <section className="features-section">
        <h2>Why Choose Crest Bank?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h3>Secure Banking</h3>
            <p>Advanced security protocols to safeguard your finances.</p>
          </div>
          <div className="feature-item">
            <h3>24/7 Support</h3>
            <p>Always here to assist you with your banking needs.</p>
          </div>
          <div className="feature-item">
            <h3>Innovative Services</h3>
            <p>Enjoy modern banking solutions tailored to your needs.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
