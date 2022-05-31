import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import {NavBar} from "./components/NavBar/NavBar.jsx"
import {Nosotros} from "./components/Nosotros/Nosotros.js"
import { Footer } from './components/Footer/Footer';
import { Contacto } from './components/Contacto/Contacto';
import { Tecnologias } from './components/Tecnologias/Tecnnologias';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <Link to="/Nosotros">A</Link>
          <Routes>
            <Route path="/Nosotros" element={<Nosotros/>}></Route>
            <Route path="/Contacto" element={<Contacto/>}></Route>
            <Route path="/Tecnologias" element={<Tecnologias/>}></Route>
          </Routes>
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
