// src/components/GridPage.jsx
import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import sampleGeneratedFont from "../public/sampleFontStructure";

const GridPage = () => {
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
              }}
            >
              <Typography variant="h5" gutterBottom>
                {charObj.char}
              </Typography>
              <img
                src={`data:image/svg+xml;utf8,${encodeURIComponent(
                  charObj.svgString
                )}`}
                alt={`Character ${charObj.char}`}
                style={{
                  width: "auto",
                  height: "auto",
                  maxWidth: "100%",
                  maxHeight: "100%",
                  margin: "10px 0",
                }}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GridPage;
