import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { SERVER_URL } from "../src/config";

const TemplateDownload = ({ setFontIconResponse }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [filePreview, setFilePreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // TemplateDownload.jsx

  const handleUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    setIsUploading(true);
    const response = await fetch(`${SERVER_URL}/filledTemplate`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFontIconResponse(data);
        navigate("/grid");
      })
      .catch((error) => {
        console.error("An error occurred during file upload:", error);
        setIsUploading(false);
      });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const previewURL = URL.createObjectURL(file);
      setFilePreview(previewURL);
      setSelectedFile(file);
    }
  };

  const handleButtonClick = () => {
    if (selectedFile) {
      handleUpload(selectedFile);
    } else {
      alert("Please select a file to upload.");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        marginTop: 2,
        padding: isMobile ? 2 : 0,
        paddingBottom: isMobile ? 10 : 0,
        backgroundColor:"white"
      }}
    >
      <Card
        sx={{
          maxWidth: 400,
          width: isMobile ? "100%" : "auto",
          backgroundColor: "rgba(0,0,0,0.1)",
        }}
      >
        <CardMedia
          component="img"
          height="253px"
          image="./src/template.jpeg"
          alt="Template preview"
          style={{
            objectFit: "contain",
            paddingTop: "20px",
            backgroundColor: "rgba(0,0,0,0)",
          }}
        />
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Download Handwriting Template
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Print this template and fill out all of the little squares, just
            like shown above. Don't use a ballpoint pen, use a marker. Stay in
            the gray boxes. Scan it at 300 dpi in grayscale, not color, using an
            actual scanner.
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

      <Card
        sx={{
          maxWidth: 400,
          width: isMobile ? "100%" : "auto",
          marginTop: isMobile ? 2 : 0,
          marginLeft: isMobile ? 0 : "50px",
          backgroundColor: "rgba(0,0,0,0.1)",
        }}
      >
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
              backgroundColor: "#ffffff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 294,
              border: "2px dashed #aaa",
              borderRadius: 4,
              marginTop: 2,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <input
              type="file"
              accept=".png, .jpg, .jpeg, .pdf"
              onChange={handleFileChange}
              style={{
                position: "absolute",
                opacity: 0,
                cursor: "pointer",
                height: "100%",
                width: "100%",
                zIndex: 1,
              }}
            />
            {filePreview ? (
              <CardMedia
                component="img"
                image={filePreview}
                alt="File preview"
                style={{
                  maxHeight: "100%",
                  maxWidth: "100%",
                  objectFit: "contain",
                }}
              />
            ) : (
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ zIndex: 0, pointerEvents: "none" }}
              >
                Drag & Drop or Click to Upload
              </Typography>
            )}
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: 2,
              position: "relative",
            }}
          >
            <Button
              variant="contained"
              onClick={handleButtonClick}
              sx={{
                backgroundColor: "#213547",
                color: "white",
                "&:hover": { backgroundColor: "#3a5a6f" },
                position: "relative",
                overflow: "hidden",
              }}
            >
              Upload Template
            </Button>
            {isUploading && (
              <Typography sx={{ marginLeft: 2 }}>Uploading...</Typography>
            )}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TemplateDownload;
