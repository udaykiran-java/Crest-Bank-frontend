import React, { useState } from "react";
import axios from "axios";
import "./AtmBalanceEnquiry.css";

const AtmBalanceEnquiry = () => {
  const [formData, setFormData] = useState({
    atmNumber: "",
    pin: "",
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
      const response = await axios.post("http://localhost:9000/atm/balance-enquiry", formData);
      setResponseMessage(response.data); // Display the response message
    } catch (error) {
      setResponseMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="balance-container">
      <div className="balance-content">
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
          <button type="submit" className="enquiry-btn">
            Check Balance
          </button>
        </form>
        {responseMessage && <p className="response-message">{responseMessage}</p>}
      </div>
    </div>
  );
};

export default AtmBalanceEnquiry;
