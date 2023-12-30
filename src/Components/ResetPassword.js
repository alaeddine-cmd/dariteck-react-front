import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ResetSuccess from './ResetSuccess';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import logo from './assets/images/dariteck_logo.png';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [obscurePassword, setObscurePassword] = useState(true);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get('token');
  const [resetSuccess, setResetSuccess] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false); // New loading state


  useEffect(() => {
    // You can console.log(token) to ensure the token is correctly captured
    // This token can be used in your reset logic
  }, [token]);

  const togglePasswordVisibility = () => {
    setObscurePassword(!obscurePassword);
  };

  const resetNewPassword = async () => {
    try {
      setIsLoading(true); // Set loading to true when the button is clicked
      // Your reset password logic here using the token and newPassword state
      // Example: You might make an API call to your backend to reset the password
      console.log(token); // Use this token for the password reset logic
      console.log(newPassword); // Use this newPassword for the updated password

      const pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!*@$%^&+=])[a-zA-Z\d!*@$%^&+=]{8,}$/;
      if (!pwdRegex.test(newPassword)) {
        setError('Password must contain at least 8 characters with at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character');
        return;
      }

      if (newPassword !== confirmNewPassword) {
        setError("Passwords don't match");
        return;
      }

      // Make an API call to reset the password
      const response = await fetch(`/api/reset-password/${token}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password: newPassword }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data); // Handle success message or redirect to a success page
        setResetSuccess(true);
      } else {
        const errorText = await response.text(); // Fetch the error as text
        console.error('Error:', errorText); // Log the error
        setError('An error occurred. Please try again.'); // Set a generic error message
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again.'); // Set a generic error message
    } finally {
      setIsLoading(false);
    }
  };
  const handleClick = () => {
    try {
      resetNewPassword();
    } catch (error) {
      console.error('Error in handleClick:', error);
      setError('An error occurred. Please try again.');
      setIsLoading(false);
    }
  };
  return resetSuccess ? (
    <ResetSuccess />
  ) : (
    <Container component="main" maxWidth="xs" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <img src={logo} alt="Dariteck Logo" style={{ height: '60px', width: '200px', marginBottom: '50px' }} />

        {error && (
          <div style={{ color: 'red', marginBottom: '16px' }}>
            {error}
          </div>
        )}
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
            onClick={isLoading ? null : handleClick}
            >
            {isLoading ? 'Loading...' : 'Reset Password'}
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default ResetPassword;

