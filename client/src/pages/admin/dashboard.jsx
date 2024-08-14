import React, { useEffect, useState } from "react";
import { Box, Container, Grid } from "@mui/material";
import AdminFilterSection from "../../components/admin/filterSection";
import { useNavigate } from "react-router-dom";
import BlogCard from "../../components/blogCard";
import axios from "axios";
import useTokenValidation from "../../auth/tokenValidtioin";

const Dashboard = () => {
  const validToken = useTokenValidation();
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    if (!validToken) {
      navigate("/admin/login");
      // console.log("Token is not valid");
    } else {
      try {
        axios
          .get("http://localhost:5000/api/admin/filter-blogs", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            params: {
              reviewed: false,
            },
          })
          .then((res) => {
            console.log(res.data);
            setBlogs(res.data);
          });
      } catch (error) {
        alert(error.message);
      }
      // console.log("Token is valid");
    }
  }, []);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AdminFilterSection />
        <Container sx={{ flexGrow: 1, P: 3, ml: 2, mr: 2, mt: 1 }}>
          <Grid container spacing={2}>
            {blogs.map((blog) => (
              <Grid item key={blog._id} xs={12} sm={6} md={4}>
                <BlogCard
                  id={blog._id}
                  title={blog.title}
                  author={blog.author}
                  description={blog.description}
                  admin={
                    blog.accepted ? 1 : !blog.accepted && blog.reviewed ? 2 : 3
                  }
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Dashboard;
