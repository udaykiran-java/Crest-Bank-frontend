import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./BalanceEnquireATM.css";

const BalanceEnquireATM = () => {
  const [formData, setFormData] = useState({
    atmNumber: "",
    pin: "",
  });

  const [balance, setBalance] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate(); // For navigation

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setBalance("");

    try {
      const response = await axios.post(
        "http://localhost:9000/balanceATM",
        formData
      );
      setBalance(response.data); // Set the balance result
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    }
  };

  // Handle clearing the form
  const handleClear = () => {
    setFormData({
      atmNumber: "",
      pin: "",
    });
    setBalance("");
    setErrorMessage("");
  };

  // Handle navigation to the previous page
  const handleBack = () => {
    navigate(-1); // Navigates to the previous page
  };

  return (
    <div className="balance-enquire-atm-container">
      <div className="balance-enquire-atm-content">
           <h1>Balance Enquiry</h1>
          <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="atmNumber">ATM Number:</label>
            <input
              type="number"
              id="atmNumber"
              name="atmNumber"
              value={formData.atmNumber}
              onChange={handleChange}
              placeholder="Enter ATM Number"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="pin">PIN:</label>
            <input
              type="password"
              id="pin"
              name="pin"
              value={formData.pin}
              onChange={handleChange}
              placeholder="Enter PIN"
              required
            />
          </div>
          <button type="submit" className="atm-mini-statement-btn" onClick={handleSubmit}>
            Show Balance
          </button>
        </form>
        <div className="button-group">
          <button
            type="button"
            className="back-btn"
            onClick={() => navigate(-1)} 
          >
            Back
          </button>
          <button type="button" className="clear-btn" onClick={handleClear}>
            Clear
          </button>
         
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {balance && (
          <div className="balance-result">
            <h3>Your Available Balance:</h3>
            <p>Rs. {balance}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BalanceEnquireATM;
