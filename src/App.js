import { useState, useEffect } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Intro from "./components/Intro";
import Game from "./components/Game";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/header" element={<Header />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
