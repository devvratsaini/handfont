// TemplateDownload.js
import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

const TemplateDownload = () => (
  <Card style={{ maxWidth: 600, margin: "20px auto" }}>
    <CardMedia
      component="img"
      height="140"
      image="./src/template.jpeg"
      alt="Template preview"
      sx={{
        objectFit: "cover", // Ensure the image covers the card area
        width: "100%", // Make sure the image takes the full width of the card
        height: "auto", // Keep the aspect ratio of the image
      }}
    />
    <CardContent>
      <Typography variant="h5" component="div" gutterBottom>
        Download Handwriting Template
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Print this template and fill out all of the little squares. Don't use a
        ballpoint pen, use a marker. Stay in the gray boxes. Scan it at 300 dpi
        in grayscale, not color, using an actual scanner.
      </Typography>
      <Button
        variant="contained"
        href="/path-to-template/template.pdf"
        download
        sx={{
          marginTop: 2,
          backgroundColor: "#213547",
          color: "white",
          "&:hover": {
            backgroundColor: "#3a5a6f",
          },
        }}
      >
        Download Template
      </Button>
    </CardContent>
  </Card>
);

export default TemplateDownload;
