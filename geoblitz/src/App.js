import React from "react";
import './App.css'
import GameWindow from "./GameWindow";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import NotFoundPage from "./Pages/NotFoundPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<GameWindow />} />
          <Route path="/home" element={<Dashboard />} />
          <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
