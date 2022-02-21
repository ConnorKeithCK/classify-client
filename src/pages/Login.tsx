import { Box, Container, Typography, TextField, Paper, Button } from '@mui/material';
import React from 'react';
import logo from '../imgs/ClassifyLogo.png';

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
  return (
    <Container
      sx={{
        ml: 'auto',
        mr: 'auto',
        display: 'flex',
        flexDirection: 'vertical',
        height: 400,
        width: 400
      }}>
      <Paper elevation={3} sx={{ width: 50, height: 50, position: 'absolute', left: 10, top: -30 }}>
        <img src={logo} />
      </Paper>
      <Box
        sx={{
          border: '1px solid black',
          boxShadow: '5px 5px 5px black',
          justifyContent: 'space-between'
        }}>
        <Typography variant="h5">Login to Classify</Typography>
        <Box sx={{ padding: 5 }}>
          <TextField sx={{ mt: 5 }} variant="outlined" label="E-Mail Address" />
          <TextField sx={{ mt: 5 }} variant="outlined" label="Password" />
          <Button sx={{ mt: 5 }} variant="contained">
            Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;
