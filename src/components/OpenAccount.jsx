import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OpenAccount.css';
import axios from 'axios';

const OpenAccount = () => {
  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    accountType: '',
    needsAtm: 'no',
    ifsc: '',
    branch: '',
    date: '',
    age: '',
    dateOfBirth: '',
    email: '',
    mobileNumber: '',
    adharnumber: '',
    address: '',
    state: '',
    district: '',
    pinCode: '',
    amount: '',
    status: 'Active',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:9000/register', formData);
      navigate('/success');
    } catch (error) {
      console.error('Error submitting form:', error);
      navigate('/failed');
    }
  };

  return (
    <>
    <div className="open-account-container">
        
      <form onSubmit={submitForm} className="open-account-form">
        <div className="logo">
        <img src='./images/logo.webp' alt="CrestBank Logo"/>
        <h1>Open New Account</h1>
        <img src='./images/logo.webp' alt="CrestBank Logo"/>
        </div>
        {/* Row 1 */}
        <div className="row">
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Father's Name:</label>
            <input
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="row">
          <div className="form-group">
            <label>Account Type:</label>
            <select
              name="accountType"
              value={formData.accountType}
              onChange={handleChange}
              placeholder="Savings, Salary, Business"
              required
            >
              <option value="Savings Account">Savings Account</option>
              <option value="Salary Account">Salary Account</option>
              <option value="Business Account">Business Account</option>
              
            </select>
          </div>
          <div className="form-group">
            <label>Needs ATM:</label>
            <select
              name="needsAtm"
              value={formData.needsAtm}
              onChange={handleChange}
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>
        </div>

        {/* Row 3 */}
        <div className="row">
          <div className="form-group">
            <label>Initial Deposit Amount:</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Branch:</label>
            <select
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select Branch
              </option>
              <option value="KukatPalli">KukatPalli</option>
              <option value="SR Nagar">SR Nagar</option>
              <option value="Madhura Nagar">Madhura Nagar</option>
              <option value="Madhapur">Madhapur</option>
              <option value="Panjagutta">Panjagutta</option>
              <option value="Ameerpet">Ameerpet</option>
            </select>
          </div>
        </div>

        {/* Row 4 */}
        <div className="row">
          <div className="form-group">
            <label>Date:</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Age:</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              min="1"
              required
            />
          </div>
        </div>

        {/* Row 5 */}
        <div className="row">
          <div className="form-group">
            <label>Date of Birth:</label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Row 6 */}
        <div className="row">
          <div className="form-group">
            <label>Mobile Number:</label>
            <input
              type="number"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Aadhar Number:</label>
            <input
              type="number"
              name="adharnumber"
              value={formData.adharnumber}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Row 7 */}
        <div className="row">
          <div className="form-group">
            <label>Address:</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            ></textarea>
          </div>
        </div>

        {/* Row 8 */}
        <div className="row">
          <div className="form-group">
            <label>State:</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>District:</label>
            <input
              type="text"
              name="district"
              value={formData.district}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Row 9 */}
        <div className="row">
          <div className="form-group">
            <label>Pin Code:</label>
            <input
              type="number"
              name="pinCode"
              value={formData.pinCode}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
          <label>Status:</label>
          <input
            type="text"
            name="status"
            value={formData.status}
            disabled
          />
        </div>
        </div>

       
        <button type="submit" className="submit-btn1" onClick={submitForm}>
          Submit
        </button>
      </form>
    </div>
    </>
  );
};

export default OpenAccount;
