import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar.jsx"
import { Nosotros } from "./components/Nosotros/Nosotros"
import { Footer } from './components/Footer/Footer';
import { Contacto } from './components/Contacto/Contacto';
import { Tecnologias } from './components/Tecnologias/Tecnnologias';
import { Carrousel } from './components/Carrousel/Carrousel';
import { dataBanner, itemsTecnologys } from './components/helpers/helpers';
import { Practicas } from './components/Practicas/Practicas';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Carrousel data={dataBanner} />}></Route>
          <Route path="/nosotros" element={<Nosotros />}></Route>
          <Route path="/practicas" element={<Practicas />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
          <Route path="/tecnologias" element={<Tecnologias items={itemsTecnologys} />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
