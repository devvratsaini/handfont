// src/components/TemplateDownload.js
import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";

const TemplateDownload = ({ handleFileUpload }) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: 2,
      marginTop: 2,
    }}
  >
    <Card style={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
        height="140"
        image="./src/template.jpeg"
        alt="Template preview"
      />
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Download Handwriting Template
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Print this template and fill out all of the little squares, just like
          shown above. Don't use a ballpoint pen, use a marker. Stay in the gray
          boxes. Scan it at 300 dpi in grayscale, not color, using an actual
          scanner.
        </Typography>
        <Button
          variant="contained"
          href="./src/blank_template.pdf"
          download
          sx={{
            marginTop: 2,
            backgroundColor: "#213547",
            color: "white",
            "&:hover": { backgroundColor: "#3a5a6f" },
          }}
        >
          Download Template
        </Button>
      </CardContent>
    </Card>

    <Card style={{ maxWidth: 400 }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Upload Completed Template
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Once you've filled out and scanned your handwriting template, upload
          it here.
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 200,
            border: "2px dashed #aaa",
            borderRadius: 4,
            marginTop: 2,
            cursor: "pointer",
          }}
        >
          <input
            type="file"
            accept=".png, .jpg, .jpeg, .pdf"
            onChange={handleFileUpload}
            style={{
              position: "absolute",
              opacity: 0,
              cursor: "pointer",
              height: "100%",
              width: "100%",
            }}
          />
          <Typography variant="body2" color="text.secondary">
            Drag & Drop or Click to Upload
          </Typography>
        </Box>
      </CardContent>
    </Card>
  </Box>
);

export default TemplateDownload;
