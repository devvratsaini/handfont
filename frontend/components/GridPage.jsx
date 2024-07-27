import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
const standardAlphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  ".",
  ",",
  "!",
  "?",
  "@",
  "#",
  "$",
  "%",
  "&",
  "*",
];

const GridPage = ({ uploadedImage }) => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Handwriting Comparison
      </Typography>
      <Grid container spacing={2}>
        {standardAlphabet.map((char) => (
          <Grid item xs={6} sm={2} md={1} key={char}>
            <Paper elevation={3} sx={{ padding: 1, textAlign: "center" }}>
              <Typography variant="h5">{char}</Typography>
              <img
                src={uploadedImage}
                alt={`Uploaded character for ${char}`}
                style={{ maxWidth: "100%" }}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GridPage;
