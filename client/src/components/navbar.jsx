import { React, useState } from "react";
import { AppBar, Toolbar, Tabs, Tab } from "@mui/material";
import { IconButton, Button } from "@mui/material";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import CodeIcon from "@mui/icons-material/Code";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";

const Navbar = () => {
  const navbarTabs = ["Blogs", "Post", "Contact Us", "About Us"];
  const [indicatorValve, setIndicatorValve] = useState();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          color="primary"
          sx={{ boxSizing: "border-box", backgroundColor: "#182e54" }}
        >
          <Toolbar sx={{}}>
            <Typography sx={{ mx: "0.2rem" }}>
              <BookOutlinedIcon />
            </Typography>
            <Typography variant="h5" component="div" sx={{}}>
              B1tB0tByte
            </Typography>
            <Tabs
              sx={{ marginLeft: "1rem", flexGrow: 1 }}
              textColor="inherit"
              value={indicatorValve}
              indicatorColor="primary"
              onChange={(e, value) => setIndicatorValve(value)}
            >
              {navbarTabs.map((link) => {
                return <Tab label={`${link}`} />;
              })}
            </Tabs>
            <Button
              variant="contained"
              color="primary"
              sx={{ marginX: "0.25rem" }}
              startIcon={<CodeIcon />}
            >
              Source Code
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{ marginX: "0.25rem" }}
              startIcon={<GitHubIcon />}
            >
              Github
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
