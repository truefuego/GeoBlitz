import React from "react";
import './App.css'
import GameWindow from "./GameWindow";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/h" element={<GameWindow />} />
          <Route path="/home" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
