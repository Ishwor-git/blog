import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ title, author, description }) => {
  const navigate = useNavigate();
  return (
    <>
      <Card sx={{ maxWidth: "28rem" }} onClick={navigate()}>
        <CardMedia
          component="img"
          alt="motherboard"
          height="150"
          image="/static/images/motherboard.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ut
            suscipit quaerat quia minima.
          </Typography>
          <CardActions>
            <Button size="small" color="primary">
              Read More
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </>
  );
};

export default BlogCard;
