import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./CancelDebitCard.css";

const CancelDebitCard = () => {
  const [formData, setFormData] = useState({
    accountNumber: "",
    name: "",
    mobileNumber: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
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
    setSuccessMessage("");

    try {
      const response = await axios.post(
        "http://localhost:9000/cancelatm",
        formData
      );
      setSuccessMessage("Your ATM card has been successfully canceled.");
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message ||
          "An error occurred while processing your request. Please try again."
      );
    }
  };

  // Handle clearing the form
  const handleClear = () => {
    setFormData({
      accountNumber: "",
      name: "",
      mobileNumber: "",
    });
    setSuccessMessage("");
    setErrorMessage("");
  };

  // Handle navigation to the previous page
  const handleBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <div className="cancel-debit-card-container">
      <div className="cancel-debit-card-content">
        <h1>Cancel Debit Card</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="accountNumber">Account Number:</label>
            <input
              type="number"
              id="accountNumber"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleChange}
              placeholder="Enter Account Number"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Full Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobileNumber">Mobile Number:</label>
            <input
              type="number"
              id="mobileNumber"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              placeholder="Enter Mobile Number"
              required
            />
          </div>
          <div className="button-group">
            <button type="button" className="back-btn" onClick={handleBack}>
              Back
            </button>
            <button type="button" className="clear-btn" onClick={handleClear}>
              Clear
            </button>
            <button type="submit" className="submit-btn" onClick={handleSubmit}>
              Cancel ATM Card
            </button>
          </div>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
      </div>
    </div>
  );
};

export default CancelDebitCard;
