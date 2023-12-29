import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import logo from './assets/images/dariteck_logo.png';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [obscurePassword, setObscurePassword] = useState(true);

  const togglePasswordVisibility = () => {
    setObscurePassword(!obscurePassword);
  };

  const resetNewPassword = async () => {
    // Your reset password logic here
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
