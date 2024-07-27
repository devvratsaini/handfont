// src/pages/MainPage.js
import React, { useState } from "react";
// import TextInput from "../components/TextInput";
// import ConvertedText from "../components/ConvertedText";
import Layout from "./components/Layout";

const MainPage = () => {
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <Layout>
      <div className="main-page">
        <h1>Handwriting Font Converter</h1>
        <TextInput value={text} onChange={handleTextChange} />
        <h2>Converted Text:</h2>
        <ConvertedText text={text} />
      </div>
    </Layout>
  );
};

export default MainPage;
