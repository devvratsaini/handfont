// src/components/GridPage.jsx
import React, { useState } from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { SERVER_URL } from "../src/config";
function convertToSvgURI(svgString) {
  return `data:image/svg+xml;utf8,${encodeURIComponent(svgString)}`;
}

const GridPage = ({ fontIconResponse, setFontIconResponse }) => {
  const handleImageUpload = async (event, char) => {
    const file = event.target.files[0];
    if (!file) return;

    // Upload the image to the server and get the SVG string
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(`${SERVER_URL}/characterImage`, {
        method: "POST",
        body: formData,
      }).then((response) => response.json());

      // Assuming the response contains the SVG string
      const newSvgString = response.svgString;

      setFontIconResponse({
        ...fontIconResponse,
        characters: fontIconResponse.characters.map((charObj) =>
          charObj.char === char
            ? { ...charObj, svgString: newSvgString }
            : charObj
        ),
      });
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Handwriting Comparison
      </Typography>
      <Grid container spacing={2}>
        {fontIconResponse.characters.map((charObj) => (
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
                src={convertToSvgURI(charObj.svgString)}
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
