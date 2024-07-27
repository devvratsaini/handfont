// src/pages/MainPage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import TemplateDownload from "../components/TemplateDownload";

const MainPage = ({ setUploadedImage }) => {
  const navigate = useNavigate();

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      // Upload the file to the server
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/files/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.filePath) {
        setUploadedImage(data.filePath);
        navigate("/grid");
      }
    }
  };

  return (
    <div>
      <h1>Handwriting Font Converter</h1>
      <TemplateDownload handleFileUpload={handleFileUpload} />
    </div>
  );
};

export default MainPage;
