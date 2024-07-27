// src/components/Footer.js
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 HandFont Project. All rights reserved.</p>
      <p>
        Created by{" "}
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          Your Name
        </a>
      </p>
    </footer>
  );
};

export default Footer;
