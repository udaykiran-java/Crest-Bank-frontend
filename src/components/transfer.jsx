import React, { useState } from "react";
import axios from "axios";
import './transfer.css'

const TransferForm = () => {
  const [formData, setFormData] = useState({
    fromAccountNumber: "",
    name: "",
    mobileNumber: "",
    toAccountNumber: "",
    amount: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

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
      const response = await axios.post("http://localhost:9000/transfer", formData);
      setResponseMessage(response.data); // Display response from backend
    } catch (error) {
      setResponseMessage("An error occurred while processing the transaction.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="transfer-container">
    <div className="transfer-content">
      <h1>Transfer Amount</h1>
      <form onSubmit={handleSubmit} className="transfer-form">
        <div className="form-group">
          <label htmlFor="fromAccountNumber">
            From Account Number
          </label>
          <input
            type="number"
            className="form-control"
            id="fromAccountNumber"
            name="fromAccountNumber"
            value={formData.fromAccountNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name" >
            Account Holder Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobileNumber" >
            Mobile Number
          </label>
          <input
            type="number"
            className="form-control"
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="toAccountNumber" >
            To Account Number
          </label>
          <input
            type="number"
            className="form-control"
            id="toAccountNumber"
            name="toAccountNumber"
            value={formData.toAccountNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount" >
            Amount
          </label>
          <input
            type="number"
            className="form-control"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="transfer-btn">
          Transfer
        </button>
      </form>

      {responseMessage && (
        <div className="transfer-message" role="alert">
          {responseMessage}
        </div>
      )}
    </div>
    </div>
  );
};

export default TransferForm;
