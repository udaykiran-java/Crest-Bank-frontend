import React, { useState } from "react";
import axios from "axios";
import './SetPinATM.css'; 

const SetPin = () => {
  const [atmNumber, setAtmNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [otpSent, setOtpSent] = useState(false); 
  const [isPinSet, setIsPinSet] = useState(false);  

  const BASE_URL = "http://localhost:9000"; 

  // Handle OTP request
  const handleSendOtp = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (!atmNumber) {
      setError("Please enter ATM number.");
      return;
    }

    try {
      const response = await axios.post(`${BASE_URL}/send-otp`, {
        atmNumber: parseInt(atmNumber),
      });

      setMessage(response.data);
      setOtpSent(true); 
    } catch (err) {
      setError(err.response?.data || "Failed to send OTP. Try again.");
    }
  };

  // Handle PIN set request
  const handleSetPin = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (!otp || !pin || !atmNumber) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post(`${BASE_URL}/set-pin`, {
        atmNumber: parseInt(atmNumber),
        otp: parseInt(otp),
        pin: parseInt(pin),
      });

      setMessage("PIN set successfully.");
      setIsPinSet(true);  
      setOtpSent(false);  
      setOtp(""); 
      setPin(""); 
      setAtmNumber(""); 
    } catch (err) {
      setError(err.response?.data || "Failed to set PIN. Try again.");
    }
  };

  return (
    <div className="set-pin-container">
      <div className="set-pin-content">
        <h3>Set ATM PIN</h3>
        {error && <div className="error-message">{error}</div>}
        {message && <div className="success-message">{message}</div>}

        {/* OTP Form */}
        {!otpSent && !isPinSet ? (
          <form onSubmit={handleSendOtp} className="form">
            <div className="form-group">
              <label>ATM Number:</label>
              <input
                type="text"
                value={atmNumber}
                onChange={(e) => setAtmNumber(e.target.value)}
                required
                className="input-field"
              />
            </div>
            <button type="submit" className="btn">Send OTP</button>
          </form>
        ) : (
          // PIN and OTP form after OTP is sent
          !isPinSet && (
            <form onSubmit={handleSetPin} className="form">
              <div className="form-group">
                <label>OTP:</label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                  className="input-field"
                />
              </div>
              <div className="form-group">
                <label>New PIN:</label>
                <input
                  type="password"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  required
                  className="input-field"
                />
              </div>
              <button type="submit" className="btn">Set PIN</button>
            </form>
          )
        )}

        
      </div>
    </div>
  );
};

export default SetPin;
