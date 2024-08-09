import React from "react";
import Carousel from "react-material-ui-carousel";
import { Box, Typography, Container, Button, Grid } from "@mui/material";
import BlogCard from "../components/blogCard";

const carouselItems = [
  {
    image: "/static/images/motherboard.jpg",
    title: "Title 1",
    description: "Description 1",
  },
  {
    image: "/static/images/motherboard.jpg",
    title: "Title 2",
    description: "Description 2",
  },
];

const Home = () => {
  return (
    <>
      <Carousel
        indicators={true}
        autoPlay={true}
        animation="fade"
        duration={500}
        sx={{ mt: 1 }}
      >
        {carouselItems.map((item, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              height: "47vh",
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Container
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "#fff",
                textAlign: "center",
                bgcolor: "rgba(0, 0, 0, 0.5)",
                p: 3,
                borderRadius: 2,
              }}
            >
              <Typography variant="h3" component="div">
                {item.title}
              </Typography>
              <Typography variant="h6" component="div">
                {item.description}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                href={item.link}
                sx={{ mt: 2 }}
              >
                Read More
              </Button>
            </Container>
          </Box>
        ))}
      </Carousel>
      <Box
        sx={{
          bgcolor: "",
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={4} key={0}>
            <BlogCard />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
