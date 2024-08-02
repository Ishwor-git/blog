import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
} from "@mui/material";
import React from "react";

const NavDrawer = ({ navList }) => {
  return (
    <>
      <Drawer open={1}>
        <Box sx={{ minWidth: "15rem" }}>
          <List>
            <ListItem>
              <ListItemButton>
                <ListItemText>Hello</ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default NavDrawer;
