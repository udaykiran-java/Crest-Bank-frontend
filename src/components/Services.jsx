import React from "react";
import "./Services.css";

const Services = () => {
  const services = [
    {
      title: "Account Opening",
      description: "Open savings, salary, or business accounts quickly and securely.",
      icon: "./images/open.webp",
    },
    {
      title: "ATM & Debit Cards",
      description: "Get instant access to your funds with our secure ATM and debit cards.",
      icon: "./images/atm.webp",
    },
    {
      title: "Money Transfers",
      description: "Transfer funds instantly to any bank account with ease.",
      icon: "./images/tran.webp",
    },
    {
      title: "Account Statements",
      description: "Access detailed and accurate account statements anytime.",
      icon: "./images/bgmain.webp",
    },
    {
      title: "Online Banking",
      description: "Manage your account online with our secure banking platform.",
      icon: "./images/cars.webp",
    },
  ];

  return (
    <div className="services-container">
      <div className="services-header">
        <img src="./images/logo.webp" alt="Crest Bank Logo" className="logo" />
        <h1>Our Services</h1>
        <p>
          Discover a range of banking services tailored to meet your financial
          needs.
        </p>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img
              src={service.icon}
              alt={`${service.title} Icon`}
              className="service-icon"
            />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
