import React from "react";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";

const AdminNavbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          color="primary"
          sx={{ boxSizing: "border-box", backgroundColor: "#87413b" }}
        >
          <Toolbar sx={{}}>
            <Typography
              sx={{ mx: "0.2rem", cursor: "pointer" }}
              onClick={() => {
                navigate("/admin");
              }}
            >
              <BookOutlinedIcon />
            </Typography>
            <Typography
              variant="h5"
              component="div"
              sx={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/admin");
              }}
            >
              B1tB0tByte Admin
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Button
              variant="contained"
              color="primary"
              sx={{ marginX: "0.25rem" }}
              onClick={() => {
                navigate("/");
              }}
              startIcon={<BookOutlinedIcon />}
            >
              Visit Blog
            </Button>

            <Button
              variant="contained"
              color="error"
              sx={{ marginX: "0.25rem" }}
              startIcon={<LogoutIcon />}
            >
              Log Out
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default AdminNavbar;
