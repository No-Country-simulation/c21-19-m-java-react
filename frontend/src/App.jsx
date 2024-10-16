import React from "react";
import Inicio from "./Pages/Inicio.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Menu } from "./components/Menu.jsx";
import { Footer } from "./components/Footer.jsx";
import Mascotas from "./Pages/Mascotas.jsx";
import Nosotros from "./Pages/Nosotros.jsx";
import Contacto from "./Pages/Contacto.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/mascotas" element={<Mascotas />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
