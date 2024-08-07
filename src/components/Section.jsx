// src/components/FullWidthSection.jsx

import React from "react";
import { Container, Grid, Typography, Paper, Button, Box } from "@mui/material";

const templates = [
  {
    title: "lorem - Creative Onepage PSD Template",
    category: "waR",
    imageUrl:
      "https://th.bing.com/th/id/R.9c2fbb0877c6a46b8b29ef6093cb32ec?rik=e%2bRBHt4LS8Th7g&riu=http%3a%2f%2fscreenfish.net%2fwp-content%2fuploads%2f2015%2f10%2fsuper-collage.jpg&ehk=nNClp9oH9vH%2bgkLxNnCJ3BJOEZ9Hpm%2bkgimkG5nOcMc%3d&risl=&pid=ImgRaw&r=0",
    author: "7k4a",
    type: "Graphic",
  },
  {
    title: "cartoon - Creative Onepage PSD Template",
    category: "Web ",
    imageUrl:
      "https://lafrikileria.com/blog/wp-content/uploads/2023/02/lista-mejores-superheroes-marvel.jpg",
    author: "mb3",
    type: "lorem 1 ",
  },
  {
    title: "marvel - Creative Onepage PSD Template",
    category: "supers",
    imageUrl:
      "https://staticc.sportskeeda.com/editor/2023/03/2f578-16792998413092-1920.jpg",
    author: "Romtheme",
    type: "lorem 2 ",
  },
  {
    title: "the rock  ",
    category: "Graphic Templates",
    imageUrl:
      "https://th.bing.com/th/id/OIP.gFHxAF6AAwOnj9eOpCAsvQHaHZ?rs=1&pid=ImgDetMain",
    author: "7amda",
    type: "the rock  ",
  },
  {
    title: "deadly - Creative Onepage PSD Template",
    category: "Web Templates",
    imageUrl:
      "https://th.bing.com/th/id/OIP.v498fqWoGTE0mWfMQNR1hAHaEK?rs=1&pid=ImgDetMain",
    author: "suniljoshi",
    type: "dead pool",
  },
  {
    title: "Red - Women HTML Template",
    category: "red  women",
    imageUrl:
      "https://th.bing.com/th/id/R.32b865116bf56d0990ca589ad6893eb7?rik=X5JgqsU%2bk2s6DQ&riu=http%3a%2f%2fvignette3.wikia.nocookie.net%2fpdsh%2fimages%2fc%2fc5%2fWomaninred.jpg%2frevision%2flatest%3fcb%3d20140726015040&ehk=2DYeP0sgIlphNN8cNYwuOc736esTkyyJyjXTN6P5w7I%3d&risl=&pid=ImgRaw&r=0",
    author: "belal",
    type: "red  women",
  },
];

const FullWidthSection = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        py: 6,
        backgroundColor: "#black",
        px: { xs: 2, sm: 4, md: 6 },
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          mb: 4,
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Discover Our Templates
        </Typography>
        <Typography variant="h6" component="p" gutterBottom>
          Explore a wide range of templates with{" "}
          <a href="#" style={{ color: "#007bf" }}>
            exceptional quality
          </a>
          ,{" "}
          <a href="#" style={{ color: "#007b" }}>
            beautiful designs
          </a>
          , and{" "}
          <a href="#" style={{ color: "#007b" }}>
            amazing features
          </a>
          . All templates are crafted to meet your needs.
        </Typography>
        <Button variant="contained" sx={{ backgroundColor: "#007b", mt: 2 }}>
          View All Templates
        </Button>
      </Box>
      <Grid container spacing={4}>
        {templates.map((template, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              elevation={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: 3,
                backgroundColor: "#ffffff",
                borderRadius: 2,
                height: "100%",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
                },
              }}
            >
              <Box sx={{ mb: 2, position: "relative" }}>
                <img
                  src={template.imageUrl}
                  alt={template.title}
                  style={{ width: "100%", borderRadius: 8 }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 12,
                    left: 12,
                    backgroundColor: "#333",
                    color: "#fff",
                    padding: "4px 12px",
                    borderRadius: 4,
                    fontSize: "0.85rem",
                  }}
                >
                  {template.type}
                </Box>
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h6"
                  component="h2"
                  sx={{ mt: 2 }}
                  gutterBottom
                >
                  {template.title}
                </Typography>
                <Typography
                  variant="body2"
                  component="p"
                  color="textSecondary"
                  gutterBottom
                >
                  By {template.author} in {template.category}
                </Typography>
              </Box>
              <Button
                variant="outlined"
                sx={{
                  borderColor: "#0012b",
                  color: "#004b",
                  mt: 2,
                  "&:hover": {
                    backgroundColor: "#red",
                    color: "#red",
                  },
                }}
                fullWidth
              >
                View Details
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FullWidthSection;
