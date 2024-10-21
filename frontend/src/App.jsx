import React from "react";
import Inicio from "./Pages/Inicio.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer.jsx";
import Mascotas from "./Pages/Mascotas.jsx";
import Nosotros from "./Pages/Nosotros.jsx";
import Contacto from "./Pages/Contacto.jsx";
import BarraNav from "./components/BarraNav.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Gracias from "./Pages/Gracias.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <BarraNav />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/mascotas" element={<Mascotas />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/gracias" element={<Gracias />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
