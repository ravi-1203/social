import React, { useEffect } from "react";
import Page from "./Page";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page" element={<Page />} />
        </Routes>
      </Router>
    </div>
  );
}
