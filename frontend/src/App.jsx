// src/App.jsx (or App.js, depending on your setup)
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage.jsx";
import GridPage from "../components/GridPage.jsx";

function App() {
  const [fontIconResponse, setFontIconResponse] = useState(null);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<MainPage setFontIconResponse={setFontIconResponse} />}
        />
        <Route
          path="/grid"
          element={<GridPage fontIconResponse={fontIconResponse} setFontIconResponse={setFontIconResponse } />}
        />
      </Routes>
    </Router>
  );
}

export default App;
