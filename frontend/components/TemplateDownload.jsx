import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  LinearProgress,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const TemplateDownload = ({ handleFileUpload }) => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      setIsUploading(true);

      try {
        const response = await fetch("/api/files/upload", {
          method: "POST",
          body: formData,
          onUploadProgress: (progressEvent) => {
            const progress = (progressEvent.loaded / progressEvent.total) * 100;
            setUploadProgress(progress);
          },
        });

        if (response.ok) {
          const data = await response.json();
          if (data.filePath) {
            handleFileUpload(data.filePath);
            navigate("/grid");
          }
        } else {
          console.error("File upload failed.");
        }
      } catch (error) {
        console.error("An error occurred during file upload:", error);
      } finally {
        setIsUploading(false);
        setUploadProgress(0);
      }
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
        paddingBottom: isMobile ? 10 : 0, // Added padding at the bottom for mobile view
      }}
    >
      <Card sx={{ maxWidth: 400, width: isMobile ? '100%' : 'auto' }}>
        <CardMedia
          component="img"
          height="253px"
          image="./src/template.jpeg"
          alt="Template preview"
          style={{ objectFit: "contain" }}
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

      <Card sx={{ maxWidth: 400, width: isMobile ? '100%' : 'auto', marginTop: isMobile ? 2 : 0, marginLeft: isMobile ? 0 : '50px' }}>
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
              height: 273,
              border: "2px dashed #aaa",
              borderRadius: 4,
              marginTop: 2,
              position: "relative",
            }}
          >
            <input
              type="file"
              accept=".png, .jpg, .jpeg, .pdf"
              onChange={handleUpload}
              style={{
                position: "absolute",
                opacity: 0,
                cursor: "pointer",
                height: "100%",
                width: "100%",
                zIndex: 1,
              }}
            />
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ zIndex: 0, pointerEvents: "none" }}
            >
              Drag & Drop or Click to Upload
            </Typography>
          </Box>
          {isUploading && (
            <Box sx={{ width: '100%', marginTop: 2 }}>
              <LinearProgress variant="determinate" value={uploadProgress} />
            </Box>
          )}
          <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2, position: 'relative' }}>
            <Button
              variant="contained"
              component="label"
              sx={{
                backgroundColor: "#213547",
                color: "white",
                "&:hover": { backgroundColor: "#3a5a6f" },
                position: "relative",
                overflow: "hidden",
              }}
            >
              Upload Template
              <input
                type="file"
                accept=".png, .jpg, .jpeg, .pdf"
                onChange={handleUpload}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  opacity: 0,
                  cursor: "pointer",
                }}
              />
            </Button>
            {isUploading && (
              <Box sx={{ width: '100%', marginLeft: 2 }}>
                <LinearProgress variant="determinate" value={uploadProgress} />
              </Box>
            )}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TemplateDownload;
