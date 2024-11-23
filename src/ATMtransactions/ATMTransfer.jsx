import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./ATMTransfer.css";

const ATMTransfer = () => {
  const [step, setStep] = useState(1); // Step 1 for ATM Number & PIN, Step 2 for transfer details
  const [formData, setFormData] = useState({
    atmNumber: "",
    pin: "",
    toAccountNumber: "",
    amount: "",
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
        "http://localhost:9000/transferATM",
        formData
      );
      setSuccessMessage("Transfer successful!");
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
      toAccountNumber: "",
      amount: "",
    });
    setStep(1);
    setErrorMessage("");
    setSuccessMessage("");
  };

  // Handle navigation to the previous page
  const handleBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <div className="atm-transfer-container">
      <div className="atm-transfer-content">
        <h1>ATM Transfer</h1>
        {step === 1 && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setStep(2);
            }}
          >
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
            <div className="button-group">
              <button type="button" className="back-btn" onClick={handleBack}>
                Back
              </button>
              <button type="button" className="clear-btn" onClick={handleClear}>
                Clear
              </button>
              <button type="submit" className="next-btn" onClick={handleSubmit}>
                Next
              </button>
            </div>
          </form>
        )}
        {step === 2 && (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="toAccountNumber">To Account Number:</label>
              <input
                type="number"
                id="toAccountNumber"
                name="toAccountNumber"
                value={formData.toAccountNumber}
                onChange={handleChange}
                placeholder="Enter Recipient's Account Number"
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
            <div className="button-group">
              <button
                type="button"
                className="back-btn"
                onClick={() => setStep(1)}
              >
                Back
              </button>
              <button type="button" className="clear-btn" onClick={handleClear}>
                Clear
              </button>
              <button type="submit" className="submit-btn">
                Transfer
              </button>
            </div>
          </form>
        )}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
      </div>
    </div>
  );
};

export default ATMTransfer;
