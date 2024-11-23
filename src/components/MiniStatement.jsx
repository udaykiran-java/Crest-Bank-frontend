import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./MiniStatement.css";

const MiniStatement = () => {
  const [formData, setFormData] = useState({
    accountNumber: "",
  });

  const [miniStatement, setMiniStatement] = useState([]);
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
    setMiniStatement([]);

    try {
      const response = await axios.post(
        "http://localhost:9000/ministatement",
        formData
      );
      setMiniStatement("Your Mini Statement Is Successfully send in Your Mail"); 
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
    setMiniStatement([]);
    setErrorMessage("");
  };

  // Handle navigation to the previous page
  const handleBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <div className="mini-statement-container">
      <div className="mini-statement-content">
        <h1>Mini Statement</h1>
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
              Get Mini Statement
            </button>
          </div>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {miniStatement && <p className="response-message">{miniStatement}</p>}
      </div>
    </div>
  );
};

export default MiniStatement;
