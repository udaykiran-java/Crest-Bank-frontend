import React, { useState } from 'react';
import axios from 'axios';
import './CheckBalance.css';

const CheckBalance = () => {
  const [formData, setFormData] = useState({
    accountNumber: '',
    mobileNumber: '',
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMessage(''); // Clear any previous messages

    try {
      const response = await axios.post('http://localhost:9000/checkbalance', formData);
      setResponseMessage(response.data); // Display the server response
    } catch (error) {
      setResponseMessage(
        error.response?.data || 'An error occurred while checking the balance.'
      );
    }
  };

  return (
    <div className="balance-enquiry-container">
      <div className="balance-enquiry-content">
        <h1>Balance Enquiry</h1>
        <form onSubmit={handleSubmit} className="balance-enquiry-form">
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
            <label>Mobile Number:</label>
            <input
              type="number"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
              placeholder="Enter Mobile Number"
            />
          </div>
          <button type="submit" className="check-balance-btn" onClick={handleSubmit} >
            Check Balance
          </button>
        </form>
        {responseMessage && <p className="balance-message">{responseMessage}</p>}
      </div>
    </div>
  );
};

export default CheckBalance;
