// src/components/Footer.js
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        <b>HandFont Project</b>
      </p>
      <p>
        Created by{" "}
        <a
          href="https://github.com/devvratsaini"
          target="_blank"
          rel="noopener noreferrer"
        >
          Devratt Saini
        </a>
        <a
          href="https://github.com/divyanshpanwar03"
          target="_blank"
          rel="noopener noreferrer"
        >
          Divyansh Panwar
        </a>
        <a
          href="https://github.com/pranav-suri"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pranav Suri
        </a>
        <a
          href="https://github.com/priyanshibhargava2005"
          target="_blank"
          rel="noopener noreferrer"
        >
          Priyanshi Bhargava
        </a>
      </p>
    </footer>
  );
};

export default Footer;
