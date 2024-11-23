import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <img src="./images/logo.webp" alt="Crest Bank Logo" className="logo" />
        <h1>About Crest Bank</h1>
        <p>Empowering Financial Growth Since 2000</p>
      </div>

      <div className="about-content">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            At Crest Bank, our mission is to provide world-class financial
            services that empower individuals, families, and businesses to
            achieve their financial goals. We prioritize customer satisfaction,
            innovation, and security in all our offerings.
          </p>
        </div>

        <div className="about-section">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Reliable and secure banking services</li>
            <li>Innovative solutions tailored to your needs</li>
            <li>24/7 customer support</li>
            <li>Extensive branch and ATM network</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Our Services</h2>
          <p>
            We offer a comprehensive range of financial services including:
          </p>
          <ul>
            <li>Savings and Current Accounts</li>
            <li>Loans and Credit Facilities</li>
            <li>Online and Mobile Banking</li>
            <li>Investment and Wealth Management</li>
          </ul>
        </div>

        <div className="about-footer">
          <p>
            Join the Crest Bank family and take the first step toward securing
            your financial future. Experience banking redefined!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
