import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Box,
} from "@mui/material";
const NavDrawer = ({ open, setOpen, navList }) => {
  return (
    <>
      <Drawer
        open={open}
        onClose={setOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: "#153e7e",
            color: "#c6c6c6",
          },
        }}
      >
        <Box
          sx={{
            width: 250,
          }}
          role="presentation"
        >
          <List>
            {navList.map((text) => {
              return (
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText
                      color="inherit"
                      sx={{ color: "#c6c6c6" }}
                      primary={text}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
          <Divider sx={{ borderColor: "#828282" }} />
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText
                  color="inherit"
                  sx={{ color: "#c6c6c6" }}
                  primary="Source Code"
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText
                  color="inherit"
                  sx={{ color: "#c6c6c6" }}
                  primary="Github"
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default NavDrawer;
