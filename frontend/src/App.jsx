// src/App.jsx (or App.js, depending on your setup)
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage.jsx";
import GridPage from "../components/GridPage.jsx";

function App() {
  const [uploadedImage, setUploadedImage] = useState("");

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<MainPage setUploadedImage={setUploadedImage} />}
        />
        <Route
          path="/grid"
          element={<GridPage uploadedImage={uploadedImage} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
