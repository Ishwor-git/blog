import { React, useState } from "react";
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Box,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import CodeIcon from "@mui/icons-material/Code";
import GitHubIcon from "@mui/icons-material/GitHub";
import NavDrawer from "./navDrawer";
import MenuIcon from "@mui/icons-material/Menu";
const Navbar = () => {
  const navbarTabs = ["Blogs", "Post", "Contact Us", "About Us"];
  const [indicatorValve, setIndicatorValve] = useState();
  const navigate = useNavigate();

  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpenDrawer(newOpen);
  };

  const theme = useTheme();
  const breakpointMatchMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          color="primary"
          sx={{ boxSizing: "border-box", backgroundColor: "#182e54" }}
        >
          <Toolbar sx={{}}>
            {breakpointMatchMD ? (
              <>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  onClick={toggleDrawer(!openDrawer)}
                >
                  <MenuIcon />
                </IconButton>
                <Typography sx={{ mx: "0.2rem", ml: "auto" }}>
                  <BookOutlinedIcon />
                </Typography>
                <Typography variant="h5" component="div" sx={{}}>
                  B1tB0tByte
                </Typography>

                <NavDrawer
                  open={openDrawer}
                  setOpen={toggleDrawer}
                  navList={navbarTabs}
                />
              </>
            ) : (
              <>
                <Typography
                  sx={{ mx: "0.2rem", cursor: "pointer" }}
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  <BookOutlinedIcon />
                </Typography>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  B1tB0tByte
                </Typography>
                <Tabs
                  sx={{ marginLeft: "1rem", flexGrow: 1 }}
                  textColor="inherit"
                  value={indicatorValve}
                  indicatorColor="primary"
                  onChange={(e, value) => setIndicatorValve(value)}
                >
                  {navbarTabs.map((text) => {
                    const slug = text.toLowerCase().replace(/\s+/g, "-");
                    return (
                      <Tab
                        key={text}
                        label={text}
                        onClick={() => {
                          navigate(`/${slug}`);
                        }}
                      />
                    );
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
                  sx={{ marginX: "0.1rem" }}
                  startIcon={<GitHubIcon />}
                >
                  Github
                </Button>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
