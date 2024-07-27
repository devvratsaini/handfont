// src/components/Layout.js
import React from "react";
// import Header from "./Header";
import Footer from "./Footer";
import TemplateDownload from "./TemplateDownload";

// The Layout component serves as a wrapper that includes the header, main content, and footer.
const Layout = () => {
  return (
    <div className="layout">
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
        <h2>Handwriting Font Converter</h2>
        <TemplateDownload />
      </div>
      {/* Include the Header component */}
      {/* <Header /> */}

      {/* Main content area where child components will be rendered */}

      {/* Include the Footer component */}
      <Footer />
    </div>
  );
};

export default Layout;
