import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import logo from './assets/images/dariteck_logo.png';

const ResetSuccess = () => {
  return (
    <Container component="main" maxWidth="xs" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <img src={logo} alt="Dariteck Logo" style={{ height: '60px', width: '200px', marginBottom: '50px' }} />
        <Typography component="h1" variant="h5" style={{ marginTop: '8px' }}>
          Password Reset Successful
        </Typography>
        <Typography variant="body1" style={{ marginTop: '16px' }}>
          Your password has been successfully reset. Go back to app in order to login.
        </Typography>
      </div>
    </Container>
  );
};

export default ResetSuccess;
