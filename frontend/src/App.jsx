import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Inicio from "./Pages/Inicio.jsx";
import { Footer } from "./components/Footer.jsx";
import Mascotas from "./Pages/Mascotas.jsx";
import Nosotros from "./Pages/Nosotros.jsx";
import Contacto from "./Pages/Contacto.jsx";
import BarraNav from "./components/BarraNav.jsx";
import Gracias from "./Pages/Gracias.jsx";
import Login from "./Pages/Login.jsx";
import Registro from "./Pages/Registro.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
	
	const [usuario, setUsuario] = useState(null);
  
	const login = (perfil, correo, clave, datos) => {
	  const info = { perfil, correo, clave, datos };
	  setUsuario(info);
	  localStorage.setItem("usuario", JSON.stringify(info));
	};
  
	const logout = () => {
	  setUsuario(null);
	  localStorage.removeItem("usuario");
	};
  
	useEffect(() => {
	  const registro = localStorage.getItem("usuario");
	  if (registro) setUsuario(JSON.parse(registro));
	}, []);
  
	return (
	  <BrowserRouter>
		<BarraNav ingreso={usuario} salida={logout} />
		<Routes>
		  <Route path="/" element={<Login ingreso={login} />} />
		  <Route element={<ProtectedRoute ingreso={usuario} />}>
			<Route path="/inicio" element={<Inicio />} />
			<Route path="/mascotas" element={<Mascotas />} />
			<Route path="/nosotros" element={<Nosotros />} />
			<Route path="/contacto" element={<Contacto />} />
			<Route path="/gracias" element={<Gracias />} />
		  </Route>
		  <Route path="/registro" element={<Registro />} />
		</Routes>
		<Footer />
	  </BrowserRouter>
	);
  };
  
  export default App;
