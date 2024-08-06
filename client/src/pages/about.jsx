import React from "react";
import {
  Container,
  Box,
  Paper,
  Avatar,
  Typography,
  Link,
  Grid,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  GitHub,
} from "@mui/icons-material";

const About = () => {
  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 3,
        }}
      >
        <Container maxWidth="md">
          <Paper
            elevation={3}
            sx={{ p: 4, bgcolor: "rgba(255, 255, 255, 0.8)", borderRadius: 2 }}
          >
            <Box textAlign="center">
              <Avatar
                alt="Your Name"
                src="your-picture.jpg"
                sx={{ width: 150, height: 150, margin: "auto" }}
              />
              <Typography variant="h4" component="h1" mt={2} gutterBottom>
                Your Name
              </Typography>
              <Typography variant="body1" mt={2} gutterBottom>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
                reiciendis soluta atque omnis commodi autem, consectetur vitae
                repellat voluptatibus recusandae blanditiis reprehenderit. Quod
                itaque quasi reprehenderit numquam culpa consectetur esse
                doloribus velit!
              </Typography>
            </Box>
            <Box mt={5}>
              <Typography variant="h5" component="h2" gutterBottom>
                Contact Details
              </Typography>
              <Typography variant="body1" mt={1}>
                Email:{" "}
                <Link href="mailto:your-email@example.com">
                  Loremipsumdolorsit.-email@example.com
                </Link>
              </Typography>
            </Box>
            <Box mt={5}>
              <Typography variant="h5" component="h2" gutterBottom>
                Follow Me
              </Typography>
              <Grid container spacing={2} justifyContent="center" mt={1}>
                <Grid item>
                  <Link
                    href="https://www.facebook.com/yourprofile"
                    target="_blank"
                  >
                    <Facebook fontSize="large" color="primary" />
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    href="https://www.twitter.com/yourprofile"
                    target="_blank"
                  >
                    <Twitter fontSize="large" color="primary" />
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    href="https://www.linkedin.com/in/yourprofile"
                    target="_blank"
                  >
                    <LinkedIn fontSize="large" color="primary" />
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    href="https://www.instagram.com/yourprofile"
                    target="_blank"
                  >
                    <Instagram fontSize="large" color="primary" />
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    href="https://www.instagram.com/yourprofile"
                    target="_blank"
                  >
                    <GitHub fontSize="large" color="primary" />
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default About;
