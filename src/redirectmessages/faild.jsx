import React from 'react';
import { Link } from 'react-router-dom';

const Faild = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Account Created Failed!</h1>
      <p>Your account has been opened Failed. Try Again.</p>
      <Link to="/">
        <button style={{ padding: '10px 20px', fontSize: '16px' }}>Go Back Home</button>
      </Link>
    </div>
  );
};

export default Faild;
