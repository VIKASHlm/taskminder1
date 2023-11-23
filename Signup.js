import React, { useState } from 'react';
import { TextField, Button, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const usercreated='User created successfully' 
  const userexits='User Already exists'   
 const navigate= useNavigate();
  const [signupData, setSignupData] = useState({ username: '', password: '' });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:5000/signup', signupData);
      console.log(response.data.message);
      if(response.data.message=== usercreated) { 
      setSnackbarMessage('Signup successful!');
      setSnackbarOpen(true);
      navigate('/Home')
      }
      if(response.data.message=== userexits) { 
        setSnackbarMessage("User Exists");
        setSnackbarOpen(true);
        }
    } catch (error) {
      console.error('Signup error:', error.message);
      setSnackbarMessage('Signup failed. Please try again.');
      setSnackbarOpen(true);
    }
  };
  const handlegotolog=()=>
  {
    navigate('/')
  }
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <TextField
        label="Username"
        variant="outlined"
        value={signupData.username}
        onChange={(e) => setSignupData({ ...signupData, username: e.target.value })}
        fullWidth
        margin="normal"
      />
      <TextField
        type="password"
        label="Password"
        variant="outlined"
        value={signupData.password}
        onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleSignup}>
        Sign Up
      </Button>
      <Button variant="contained" color="primary" onClick={handlegotolog}>
        Wanna Login
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

export default Signup;
