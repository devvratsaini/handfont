// src/pages/MainPage.js
import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import TemplateDownload from "../components/TemplateDownload";

const MainPage = () => {
  return (
    <div
      className="main-page"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        minHeight: "100vh",
        padding: "0 20px",
      }}
    >
     
      <NavBar />
      <TemplateDownload />
      <Footer />
    </div>
  );
};

export default MainPage;