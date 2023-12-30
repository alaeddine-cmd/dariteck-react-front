import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import logo from './assets/images/dariteck_logo.png';
import { useLocation } from 'react-router-dom';


const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [obscurePassword, setObscurePassword] = useState(true);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get('token');
  
  useEffect(() => {
    // You can console.log(token) to ensure the token is correctly captured
    // This token can be used in your reset logic
  }, [token]);

  const togglePasswordVisibility = () => {
    setObscurePassword(!obscurePassword);
  };

  const resetNewPassword = async () => {
    // Your reset password logic here using the token and newPassword state
    // Example: You might make an API call to your backend to reset the password
    console.log(token); // Use this token for the password reset logic
    console.log(newPassword); // Use this newPassword for the updated password
  };

  return (
    <Container component="main" maxWidth="xs" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <img src={logo} alt="Dariteck Logo" style={{ height: '60px', width: '200px', marginBottom: '50px' }} />
        <Typography component="h1" variant="h5" style={{ marginTop: '8px' }}>
          Reset Password
        </Typography>
        <form style={{ width: '100%', marginTop: '8px' }} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="New Password"
            type={obscurePassword ? 'password' : 'text'}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <IconButton onClick={togglePasswordVisibility}>
                  {obscurePassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              ),
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Confirm New Password"
            type="password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            style={{ margin: '24px 0 16px', backgroundColor: '#ED2647' }}
            onClick={resetNewPassword}
          >
            Reset Password
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default ResetPassword;
