import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import {NavBar} from "./components/NavBar/NavBar.js"
import {Nosotros} from "./components/Nosotros/Nosotros.js"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <Link to="/Nosotros">A</Link>
          <Routes>
            <Route path="/Nosotros" element={<Nosotros/>}></Route>

          </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
