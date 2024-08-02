import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
  Typography,
} from "@mui/material";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import React from "react";
const NavDrawer = ({ navList = ["Tab1", "Tab2"] }) => {
  return (
    <>
      <Drawer open={1}>
        <Box
          sx={{
            width: 250,
          }}
          role="presentation"
        >
          <Box
            sx={{
              display: "flex",
              alignSelf: "center",
              my: "1rem",
              ml: "1.7rem",
            }}
          >
            <Typography sx={{ mx: "0.2rem" }}>
              <BookOutlinedIcon />
            </Typography>
            <Typography variant="h5" component="div" sx={{}}>
              B1tB0tByte
            </Typography>
          </Box>
          <List>
            {navList.map((text) => {
              return (
                <ListItem key={text}>
                  <ListItemButton>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default NavDrawer;
