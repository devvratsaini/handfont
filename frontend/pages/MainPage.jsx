import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Stepper, Step, StepLabel, Typography } from "@mui/material";
import TemplateDownload from "../components/TemplateDownload";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const steps = ["Download Template", "Upload Template", "Font Created"];

const MainPage = ({ setUploadedImage }) => {
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();

  const handleFileUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/files/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        if (data.filePath) {
          setUploadedImage(data.filePath);
          setActiveStep(2); // Set to 'Font Created' step
          navigate("/grid");
        } else {
          console.error("File upload failed.");
        }
      } else {
        console.error("File upload failed.");
      }
    } catch (error) {
      console.error("An error occurred during file upload:", error);
    }
  };

  const handleDownloadTemplate = () => {
    setActiveStep(1); // Set to 'Upload Template' step
  };

  return (
    <div
      className="main-page"
      style={{
        minHeight: "100vh",
        padding: "0 20px",
        backgroundColor: "white"
      }}
    >
      <NavBar />
      <div style={{ flexGrow: 1, marginBottom: "68px",marginLeft:"10px" }}>
        <h1 style={{marginLeft:"370px",color:"black"}}>  Handwriting to Font Converter</h1>
        <TemplateDownload
          handleFileUpload={handleFileUpload}
          handleDownloadTemplate={handleDownloadTemplate}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
        <Box sx={{ width: "100%", marginTop: 4 }}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel>
                  <Typography variant="caption" display="block" gutterBottom>
                    Step {index + 1}
                  </Typography>
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
