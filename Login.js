import React, { useState } from 'react';
import { TextField, Button, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const logins="Login successful"
    const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/login', loginData);
      console.log(response.data);
        if(response.data.message===logins)
        {
      setSnackbarMessage('Login successful!');
      setSnackbarOpen(true);
      navigate('/home')
        }
    } catch (error) {
      console.error('Login error:', error.message);
      setSnackbarMessage('Login failed. Please check your credentials.');
      setSnackbarOpen(true);
    }
  };
  const handlegotosign=()=>{
    navigate('/Signin')
  }
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <div>
      <h2>Login</h2>
      <TextField
        label="Username"
        variant="outlined"
        value={loginData.username}
        onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
        style={{ width: '100%', margin: '20px 0' }}
        margin="normal"
      />
      <TextField
        type="password"
        label="Password"
        variant="outlined"
        value={loginData.password}
        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
        style={{ width: '100%', margin: '20px 0' }}
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Login
      </Button>
      <Button variant="contained" color="primary" onClick={handlegotosign}>
        If you are a new user signup
      </Button>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <MuiAlert elevation={6} variant="filled" severity="success">
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </div>
  );
}

export default Login;
