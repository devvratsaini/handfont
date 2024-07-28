// src/components/GridPage.jsx
import React, { useState } from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";

const GridPage = ({ fontIconResponse, setFontIconResponse }) => {
  const sampleGeneratedFont = fontIconResponse;
  const [images, setImages] = useState(
    sampleGeneratedFont.characters.reduce((acc, charObj) => {
      acc[charObj.char] = `data:image/svg+xml;utf8,${encodeURIComponent(
        charObj.svgString
      )}`;
      return acc;
    }, {})
  );

  const handleImageUpload = (event, char) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64Image = reader.result;

        // Send the new image to the server to process it into an SVG string
        const response = await fetch("/api/update-svg", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ char, base64Image }),
        });

        if (response.ok) {
          const { svgString } = await response.json();
          setImages((prevImages) => ({
            ...prevImages,
            [char]: `data:image/svg+xml;utf8,${encodeURIComponent(svgString)}`,
          }));
        } else {
          console.error("Failed to update SVG on the server.");
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Handwriting Comparison
      </Typography>
      <Grid container spacing={2}>
        {sampleGeneratedFont.characters.map((charObj) => (
          <Grid item xs={6} sm={3} md={2} lg={1} key={charObj.char}>
            <Paper
              elevation={3}
              sx={{
                padding: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                cursor: "pointer",
              }}
              onClick={() =>
                document.getElementById(`file-input-${charObj.char}`).click()
              }
            >
              <Typography variant="h5" gutterBottom>
                {charObj.char}
              </Typography>
              <img
                src={images[charObj.char]}
                alt={`Character ${charObj.char}`}
                style={{
                  width: "auto",
                  height: "auto",
                  maxWidth: "100%",
                  maxHeight: "100%",
                  margin: "10px 0",
                }}
              />
              <input
                type="file"
                id={`file-input-${charObj.char}`}
                style={{ display: "none" }}
                accept="image/*"
                onChange={(event) => handleImageUpload(event, charObj.char)}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GridPage;
