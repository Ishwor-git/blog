import { React, useEffect, useState } from "react";
import BlogCard from "../components/blogCard";
import { Box, Container, Grid } from "@mui/material";
import FilterSection from "../components/filterSection";
import axios from "axios";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/blogs").then((res) => {
      setBlogs(res.data);
      // console.log(res.data);
    });
  }, []);
  return (
    <>
      <Box sx={{ display: "flex", mt: 1 }}>
        <FilterSection />
        <Container sx={{ flexGrow: 1, P: 3, ml: 2, mr: 2 }}>
          <Grid container spacing={2}>
            {blogs.map((blog) => (
              <Grid item key={blog._id} xs={12} sm={6} md={4}>
                <BlogCard
                  id={blog._id}
                  title={blog.title}
                  author={blog.author}
                  description={blog.description}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Blogs;
