import React, { useState } from "react";
import axios from "axios";
import "./AtmDeposit.css";

const AtmDeposit = () => {
  const [formData, setFormData] = useState({
    atmNumber: "",
    pin: "",
    amount: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

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
    try {
      const response = await axios.post("http://localhost:9000/depositATM", formData);
      setResponseMessage(response.data); // Display response message
    } catch (error) {
      setResponseMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="deposit-container">
      <div className="deposit-content">
        <h1>ATM Deposit</h1>
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
          <div className="form-group">
            <label htmlFor="amount">Amount:</label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="Enter Amount"
              required
            />
          </div>
          <button type="submit" className="deposit-btn" onClick={handleSubmit}>
            Deposit
          </button>
        </form>
        {responseMessage && <p className="response-message">{responseMessage}</p>}
      </div>
    </div>
  );
};

export default AtmDeposit;
