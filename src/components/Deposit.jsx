import React, { useState } from "react";
import axios from "axios";
import "./Deposit.css";

const Deposit = () => {
  const [formData, setFormData] = useState({
    accountNumber: "",
    amount: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:9000/deposit", formData);
      setMessage(response.data.message || "Deposit successful!");
    } catch (error) {
      setMessage(error.response?.data?.message || "Deposit failed. Please try again.");
    }
  };

  return (
    <div className="deposit-container">
      <div className="deposit-content">
        <h1>Deposit Amount</h1>
        <form onSubmit={handleSubmit} className="deposit-form">
          <div className="form-group">
            <label>Account Number:</label>
            <input
              type="number"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleChange}
              required
              placeholder="Enter Account Number"
            />
          </div>
          <div className="form-group">
            <label>Amount:</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              required
              placeholder="Enter Deposit Amount"
            />
          </div>
          <button type="submit" className="deposit-btn" onClick={handleSubmit}>
            Deposit
          </button>
        </form>
        {message && <p className="deposit-message">{message}</p>}
      </div>
    </div>
  );
};

export default Deposit;
