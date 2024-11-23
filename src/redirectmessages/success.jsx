import React from 'react';
import { Link } from 'react-router-dom';
import './success.css'
const Success = () => {
  return (
    <>
   <div className="success-container">
      <div className="success-content">
        <h1>Account Created Successfully!</h1>
        <p>Your account has been opened successfully. You will receive confirmation soon.</p>
        <Link to="/">
          <button className="success-btn">Go Back Home</button>
        </Link>
      </div>
    </div>
    </>
  );
};

export default Success;
