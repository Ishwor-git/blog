import React from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  Paper,
} from "@mui/material";

const Login = () => {
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
        >
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            required
            sx={{ mb: 3, backgroundColor: "#ffffff" }}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            required
            sx={{ mb: 3, backgroundColor: "#ffffff" }}
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
          <Typography variant="body2" sx={{ color: "#b71c1c" }}>
            Forgot your password?
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
