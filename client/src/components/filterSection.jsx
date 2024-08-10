import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Typography,
  Box,
  TextField,
  Checkbox,
  Button,
  Paper,
} from "@mui/material";
import { Search } from "@mui/icons-material";

const FilterSection = () => {
  const categories = ["Technology", "Health", "Finance", "Lifestyle"];
  const tags = ["React", "JavaScript", "CSS", "HTML"];

  return (
    <Paper
      anchor="left"
      elevation={3}
      sx={{
        width: 350,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 350, boxSizing: "border-box" },
      }}
    >
      <Box sx={{ width: 300, p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Filter Blogs
        </Typography>
        <Divider />

        <Box mt={2}>
          <Typography variant="subtitle1" gutterBottom>
            Search
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search blogs..."
            InputProps={{
              startAdornment: <Search />,
            }}
          />
        </Box>

        <Box mt={2}>
          <Typography variant="subtitle1" gutterBottom>
            Categories
          </Typography>
          <List>
            {categories.map((category) => (
              <ListItem key={category} dense>
                <ListItemIcon>
                  <Checkbox edge="start" />
                </ListItemIcon>
                <ListItemText primary={category} />
              </ListItem>
            ))}
          </List>
        </Box>

        <Box mt={2}>
          <Typography variant="subtitle1" gutterBottom>
            Tags
          </Typography>
          <List>
            {tags.map((tag) => (
              <ListItem key={tag} dense>
                <ListItemIcon>
                  <Checkbox edge="start" />
                </ListItemIcon>
                <ListItemText primary={tag} />
              </ListItem>
            ))}
          </List>
        </Box>

        <Box mt={2}>
          <Typography variant="subtitle1" gutterBottom>
            Date Range
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            type="date"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            fullWidth
            variant="outlined"
            type="date"
            InputLabelProps={{ shrink: true }}
            sx={{ mt: 1 }}
          />
        </Box>

        <Box mt={3} textAlign="center">
          <Button variant="contained" color="primary">
            Apply Filters
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default FilterSection;
