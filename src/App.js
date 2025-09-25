import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hobbies from "./pages/Hobbies";
import Professional from "./pages/Profesional";
import Academic from "./pages/Academic";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hobbies" element={<Hobbies />} />
      <Route path="/professional" element={<Professional />} />
      <Route path="/academic" element={<Academic />} />
    </Routes>
  );
}

export default App;

