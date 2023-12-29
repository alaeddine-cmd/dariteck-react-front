import React from 'react';
import logo from './assets/images/dariteck_logo.png'

const AccountActivated = () => {
  return (
    <div style={{ textAlign: 'center', margin: 'auto', maxWidth: '400px', paddingTop: '50px' }}>
      <h1 style={{ color: '#ED2647' }}>Account Activated Successfully!</h1>
      <img
        src={logo}
        alt="Dariteck Logo"
        style={{ height: '60px', width: '200px' }}
      />
      <p>Your account has been activated. You can now login.</p>
      {/* You can add a button or a link to the login page */}
    </div>
  );
};

export default AccountActivated;
