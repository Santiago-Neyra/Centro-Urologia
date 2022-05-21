import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar.jsx"
import { Nosotros } from "./components/Nosotros/Nosotros.jsx"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/Nosotros" element={<Nosotros />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
