import { Box, Container, Typography, TextField, Paper, Button } from '@mui/material';
import React from 'react';
import logo from '../imgs/ClassifyLogo.png';

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
  const handleLogin = () => {
    console.log('logging in');
  };

  return (
    <Container
      sx={{
        ml: 'auto',
        mr: 'auto',
        display: 'flex',
        flexDirection: 'vertical',
        height: 400,
        width: 400,
        position: 'absolute',
        left: 0,
        right: 0,
        textAlign: 'center',
        top: 75
      }}>
      <Box
        sx={{
          border: '1px solid black',
          boxShadow: '5px 5px 5px black',
          justifyContent: 'space-between'
        }}>
        <Typography sx={{ fontFamily: 'cursive ' }} variant="h4">
          Classify
        </Typography>
        <Box sx={{ padding: 5 }}>
          <TextField sx={{ mt: 5 }} variant="outlined" label="E-Mail Address" />
          <TextField sx={{ mt: 5 }} variant="outlined" label="Password" />
          <Button sx={{ mt: 5 }} variant="contained" onClick={handleLogin}>
            Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;
