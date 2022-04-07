import {
  Box,
  Container,
  Typography,
  TextField,
  Paper,
  Button,
} from "@mui/material";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import logo from "../imgs/ClassifyLogo.png";

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
  const navigate = useNavigate();

  return (
    <Container
      sx={{
        ml: "auto",
        mr: "auto",
        height: 600,
        width: 400,
        position: "absolute",
        left: 0,
        right: 0,
        top: 75,
      }}
    >
      <Box
        sx={{
          border: "1px solid black",
          boxShadow: "5px 5px 5px black",
          justifyContent: "space-between",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h4">Classify</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "60%",
            margin: "auto",
            height: "60%",
          }}
        >
          <TextField sx={{ mt: 5 }} variant="outlined" label="E-Mail Address" />
          <TextField sx={{ mt: 5 }} variant="outlined" label="Password" />
          <Button
            sx={{ mt: 5, mb: 5 }}
            variant="contained"
            onClick={() => navigate("/home")}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;
