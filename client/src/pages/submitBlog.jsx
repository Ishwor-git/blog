import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Box,
  Typography,
  Paper,
  Grid,
  MenuItem,
  Autocomplete,
  Chip,
} from "@mui/material";

const categories = ["Technology", "Health", "Travel", "Finance", "Education"];
const predefinedTags = [
  "React",
  "JavaScript",
  "Web Development",
  "Health Tips",
  "Travel Guides",
  "Investment",
  "Learning",
];

const SubmitBlog = () => {
  const [form, setForm] = useState({
    title: "",
    category: "",
    tags: [],
    description: "",
    blog: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: name === "image" ? files[0] : value,
    });
  };

  const handleAutocompleteChange = (event, value) => {
    setForm({
      ...form,
      tags: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted", form);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        mt: -6,
        bgcolor: "#f5f5f5",
        overflowY: "hidden",
      }}
    >
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ padding: 4 }}>
          <Typography variant="h4" gutterBottom align="center">
            Submit Blog
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="title"
                  label="Title"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  select
                  required
                  fullWidth
                  id="category"
                  label="Category"
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                >
                  {categories.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <Autocomplete
                  multiple
                  freeSolo
                  id="tags"
                  options={predefinedTags}
                  value={form.tags}
                  onChange={handleAutocompleteChange}
                  renderTags={(value, getTagProps) =>
                    value.map((option, index) => (
                      <Chip
                        key={option}
                        label={option}
                        {...getTagProps({ index })}
                      />
                    ))
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      label="Tags"
                      placeholder="Select or add multiple tags"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="description"
                  label="Description (less than 50 words)"
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  multiline
                  rows={2}
                  inputProps={{ maxLength: 50 }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="blog"
                  label="Blog Content"
                  name="blog"
                  multiline
                  rows={10}
                  value={form.blog}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="outlined" component="label" fullWidth>
                  Upload Image
                  <input
                    type="file"
                    hidden
                    name="image"
                    onChange={handleChange}
                  />
                </Button>
                {form.image && (
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {form.image.name}
                  </Typography>
                )}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3 }}
            >
              Submit Blog
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default SubmitBlog;
