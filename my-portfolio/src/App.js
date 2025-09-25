import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hobbies from "./pages/Hobbies";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hobbies" element={<Hobbies />} />

    </Routes>
  );
}

export default App;

