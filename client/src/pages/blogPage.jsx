import { React, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Container, Box, Typography, Avatar, Paper } from "@mui/material";

const BlogPage = () => {
  const [blog, setBlog] = useState({});
  const { id } = useParams();
  const getBlog = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/blogs/id/${id}`
      );
      let data = response.data;

      if (Array.isArray(data)) {
        data = data[0];
      }

      setBlog(data);
    } catch (error) {
      console.error("Error fetching blog:", error);
    }
  };

  useEffect(() => {
    getBlog();
    console.log(blog);
  }, [id]);
  if (!blog) return <Typography>Loading...</Typography>;

  return (
    <>
      <Box>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: 350,
            backgroundImage: "url(/static/images/motherboard.jpg)", // Replace with your image path
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <Paper
            elevation={3}
            sx={{
              position: "absolute",
              bottom: -24,
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "white",
              padding: "1rem 2rem",
              borderRadius: 1,
              boxShadow: 3,
            }}
          >
            <Typography variant="h4" component="h1">
              {blog.title}
            </Typography>
          </Paper>
        </Box>
      </Box>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Box sx={{ mt: 6, px: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
            <Avatar alt="Author Name" src="/images/author.jpg" sx={{ mr: 2 }} />
            <Typography variant="subtitle1" color="text.secondary">
              By {blog.author}
            </Typography>
          </Box>

          {blog.content ? (
            blog.content.split("\n").map((para, index) => (
              <Typography
                key={index}
                variant="body1"
                color="text.primary"
                paragraph
                sx={{ mb: 2 }}
              >
                {para}
              </Typography>
            ))
          ) : (
            <Typography variant="body1">Content not available</Typography>
          )}
        </Box>
      </Container>
    </>
  );
};

export default BlogPage;
