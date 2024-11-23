import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Statement.css";

const Statement = () => {
  const [formData, setFormData] = useState({
    accountNumber: "",
  });

  const [statements, setStatements] = useState([]);
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
    setStatements([]);

    try {
      const response = await axios.post(
        "http://localhost:9000/statement",
        formData
      );
      setStatements("Your Statement Is Successfully send in Your Mail"); 
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    }
  };

  // Handle clearing the form
  const handleClear = () => {
    setFormData({
      accountNumber: "",
    });
    setStatements([]);
    setErrorMessage("");
  };

  // Handle navigation to the previous page
  const handleBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <div className="statement-container">
      <div className="statement-content">
        <h1>Account Statement</h1>
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
          <div className="button-group">
            <button type="button" className="back-btn" onClick={handleBack}>
              Back
            </button>
            <button type="button" className="clear-btn" onClick={handleClear}>
              Clear
            </button>
            <button type="submit" className="submit-btn" onClick={handleSubmit}>
              Get Statement
            </button>
          </div>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {statements && <p className="response-message">{statements}</p>}
      </div>
    </div>
  );
};

export default Statement;
