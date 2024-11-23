import React from "react";
import "./ATM.css";
import { useNavigate } from "react-router-dom";

const ATM = () => {
  const navigate = useNavigate();

  // Navigate to specific routes when clicking on the cards
  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <div className="atm-container">
       <div className="logo">
        <img src='./images/logo.webp' alt="CrestBank Logo"/>
        <h1 className="atm-heading">Crest Bank ATM</h1>
        <img src='./images/logo.webp' alt="CrestBank Logo"/>
       </div>
      <div className="row g-4 atm-cards">
        <div className="col-md-6">
          <div
            className="card text-center atm-card"
            onClick={() => handleNavigation("/atmWithdraw")}
          >
            <div className="card-body">
              <h5 className="card-title">Withdraw</h5>
              <p className="card-text">Securely withdraw cash from your account.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div
            className="card text-center atm-card"
            onClick={() => handleNavigation("/atmDeposit")}
          >
            <div className="card-body">
              <h5 className="card-title">Deposit</h5>
              <p className="card-text">Deposit cash or checks to your account.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div
            className="card text-center atm-card"
            onClick={() => handleNavigation("/setpin")}
          >
            <div className="card-body">
              <h5 className="card-title">Set PIN</h5>
              <p className="card-text">Set or update your ATM card PIN.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div
            className="card text-center atm-card"
            onClick={() => handleNavigation("/atmMiniStatement")}
          >
            <div className="card-body">
              <h5 className="card-title">Mini Statement</h5>
              <p className="card-text">View your recent transactions.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div
            className="card text-center atm-card"
            onClick={() => handleNavigation("/atmtransfer")}
          >
            <div className="card-body">
              <h5 className="card-title">Transfer</h5>
              <p className="card-text">Transfer funds to another account.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div
            className="card text-center atm-card"
            onClick={() => handleNavigation("/atmBalance")}
          >
            <div className="card-body">
              <h5 className="card-title">Balance Enquiry</h5>
              <p className="card-text">Check your account balance instantly.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ATM;
