import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Stepper, Step, StepLabel, Typography } from "@mui/material";
import TemplateDownload from "../components/TemplateDownload";
import { SERVER_URL } from "../src/config";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const steps = ["Download Template", "Upload Template", "Font Created"];

const MainPage = ({ setFontIconResponse }) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div
      className="main-page"
      style={{
        minHeight: "100vh",
        padding: "0 20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"white"
      }}
    >
      <NavBar />
      <div style={{ flexGrow: 1, marginBottom: "68px", marginLeft: "10px" }}>
        <h1 style={{ marginLeft: "370px" ,color:"black"}}> Handwriting to Font Converter</h1>
        <TemplateDownload setFontIconResponse={setFontIconResponse}/>
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
