import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // For navigation
import "./AtmMiniStatement.css";

const AtmMiniStatement = () => {
  const [formData, setFormData] = useState({
    atmNumber: "",
    pin: "",
  });

  const [miniStatement, setMiniStatement] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate(); 

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
        "http://localhost:9000/miniStatementATM",
        formData
      );
      setMiniStatement("Mini Statement Is Successfully send in Your Mail");
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    }
  };

  // Handle clearing the form and results
  const handleClear = () => {
    setFormData({
      atmNumber: "",
      pin: "",
    });
    setMiniStatement([]);
    setErrorMessage("");
  };

  return (
    <div className="atm-mini-statement-container">
      <div className="atm-mini-statement-content">
        <h1>Mini Statement</h1>
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
          <button type="submit" className="atm-mini-statement-btn" onClick={handleSubmit} >
            Get Mini Statement
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
        
        {miniStatement && <p className="response-message">{miniStatement}</p>}
      </div>
    </div>
  );
};

export default AtmMiniStatement;
