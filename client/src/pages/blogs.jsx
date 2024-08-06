import React from "react";
import BlogCard from "../components/blogCard";
import { Box, Container, Grid, Typography } from "@mui/material";
import FilterSection from "../components/filterSection";

const Blogs = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <FilterSection />
        <Container sx={{ flexGrow: 1, P: 3, ml: 8, mr: 8 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4} key={0}>
              <BlogCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4} key={0}>
              <BlogCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4} key={0}>
              <BlogCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4} key={0}>
              <BlogCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4} key={0}>
              <BlogCard />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Blogs;
