import React, { useState } from "react";
import axios from "axios";
import "./Withdraw.css";

const Withdraw = () => {
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
      const response = await axios.post("http://localhost:9000/withdraw", formData);
      setMessage(response.data.message || "Withdrawal successful!");
    } catch (error) {
      setMessage(error.response?.data?.message || "Withdrawal failed. Please try again.");
    }
  };

  return (
    <div className="withdraw-container">
      <div className="withdraw-content">
        <h1>Withdraw Amount</h1>
        <form onSubmit={handleSubmit} className="withdraw-form">
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
              placeholder="Enter Withdrawal Amount"
            />
          </div>
          <button type="submit" className="withdraw-btn"onClick={handleSubmit}>
            Withdraw
          </button>
        </form>
        {message && <p className="withdraw-message">{message}</p>}
      </div>
    </div>
  );
};

export default Withdraw;
