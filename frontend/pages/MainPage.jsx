// src/pages/MainPage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import TemplateDownload from "../components/TemplateDownload";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const MainPage = ({ setUploadedImage }) => {
  const navigate = useNavigate();

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
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
            navigate("/grid");
          }
        } else {
          console.error("File upload failed.");
        }
      } catch (error) {
        console.error("An error occurred during file upload:", error);
      }
    }
  };

  return (
    <div
      className="main-page"
      style={{
      
        minHeight: "100vh",
        padding: "0 20px",
      }}
    >
      <NavBar />
      <h1>Handwriting to Font Converter</h1>
      <TemplateDownload handleFileUpload={handleFileUpload} />
      <Footer />
    </div>
  );
};

export default MainPage;
