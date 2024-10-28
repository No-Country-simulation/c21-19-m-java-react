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

  const [autenticado, setAutenticado] = useState(null);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("autenticado") === "true";
    setAutenticado(isAuthenticated);
  }, []);

	return (
		<BrowserRouter>
			<BarraNav />
			<Routes>
				<Route path="/" element={<Login setAutenticado={setAutenticado}/>} />
				<Route path="/registro" element={<Registro />} />
				<Route path="/inicio" element={<Inicio />} />
				<Route
					path="/mascotas"
					element={
						<ProtectedRoute autenticado={autenticado}>
							<Mascotas />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/nosotros"
					element={
						<ProtectedRoute autenticado={autenticado}>
							<Nosotros />
						</ProtectedRoute>
					}
				/>
				<Route path="/contacto" element={<Contacto />} />
				<Route path="/gracias" element={<Gracias />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
