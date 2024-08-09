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

const BlogCard = ({
  id = "000cc",
  title = "This is title",
  author = "John doe",
  description = "This is description of 20 words",
  admin = 0,
}) => {
  const navigate = useNavigate();
  // admin be 0 = default 1=selected or 2=rejected or 3= notreviewed
  const bgcolor =
    admin === 1
      ? "#a1e3a3"
      : admin === 2
      ? "#e3a1a1"
      : admin === 3
      ? "#f5faa0"
      : "";
  return (
    <>
      <Card
        sx={{ maxWidth: "28rem", mx: 3, bgcolor: `${bgcolor}` }}
        disablePadding
      >
        <CardMedia
          component="img"
          alt="motherboard"
          height="150"
          image="/static/images/motherboard.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            - {author}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <CardActions>
            <Button
              size="small"
              color="primary"
              onClick={() => navigate(`${id}`)}
            >
              Read More
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </>
  );
};

export default BlogCard;
