// src/components/Layout.js
import React from "react";
// import Header from "./Header";
import Footer from "./Footer";

// The Layout component serves as a wrapper that includes the header, main content, and footer.
const Layout = ({ children }) => {
  return (
    <div className="layout">
      {/* Include the Header component */}
      <Header />

      {/* Main content area where child components will be rendered */}
      <main>{children}</main>

      {/* Include the Footer component */}
      <Footer />
    </div>
  );
};

export default Layout;
