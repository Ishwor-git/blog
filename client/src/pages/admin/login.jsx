import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/admin/dashboard");
    }
  }, []);

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/login",
        credentials
      );
      console.log(data);
      if (data.success) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", data.username);
        navigate("/admin/dashboard");
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <Container maxWidth="sm">
      <Paper
        elevation={3}
        sx={{ padding: 4, mt: 10, backgroundColor: "#ffebee" }}
      >
        <Typography
          variant="h4"
          sx={{ textAlign: "center", color: "#b71c1c", mb: 2 }}
        >
          Login
        </Typography>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            label="username"
            variant="outlined"
            fullWidth
            required
            sx={{ mb: 3, backgroundColor: "#ffffff" }}
            name="username"
            onChange={handleChange}
          />
          <TextField
            label="password"
            variant="outlined"
            type="password"
            fullWidth
            required
            sx={{ mb: 3, backgroundColor: "#ffffff" }}
            name="password"
            onChange={handleChange}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            sx={{
              backgroundColor: "#b71c1c",
              "&:hover": { backgroundColor: "#d32f2f" },
              mb: 2,
            }}
          >
            Login
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
