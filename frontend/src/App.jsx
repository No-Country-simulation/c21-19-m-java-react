import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

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

import Administrador from "./components/Administrador/Administrador.jsx";
import AdministradoresCRUD from "./components/Administrador/CRUD/AdministradoresCRUD.jsx";
import UsuariosCRUD from "./components/Administrador/CRUD/UsuariosCRUD.jsx";
import MascotasCRUD from "./components/Administrador/CRUD/MascotasCRUD.jsx";
import RegistrosCRUD from "./components/Administrador/CRUD/RegistrosCRUD.jsx";
import AdopcionesCRUD from "./components/Administrador/CRUD/AdopcionesCRUD.jsx";
import MascotasForm from "./Pages/MascotasForm.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import AdminDashboard from "./components/Administrador/AdminDashboard.jsx";

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
				<Route path="/registro" element={<Registro />} />
				{/* Adoptante */}
				<Route element={<ProtectedRoute ingreso={usuario} />}>
					<Route path="/inicio" element={usuario?.perfil === "adoptante" ? <Inicio /> : <Navigate to="/" />} />
					<Route
						path="/mascotas"
						element={<Mascotas adoptante={usuario} />}
					/>
					<Route path="/nosotros" element={<Nosotros />} />
					<Route path="/contacto" element={<Contacto />} />
					<Route path="/gracias" element={<Gracias />} />
					<Route
						path="/mascotasform"
						element={<MascotasForm adoptante={usuario} />}
					/>
				</Route>
				{/* Administrador */}
				<Route element={<ProtectedRoute ingreso={usuario}/>}>
					<Route path="/admin" element={usuario?.perfil === "administrador" ? <AdminDashboard /> : <Navigate to="/" />}>
						<Route path="gestion-administradores" element={<AdministradoresCRUD />} />
						<Route path="gestion-usuarios" element={<UsuariosCRUD />} />
						<Route path="gestion-mascotas" element={<MascotasCRUD registrador={usuario} />} />
						<Route path="gestion-adopciones" element={<AdopcionesCRUD />} />
						<Route path="gestion-registros" element={<RegistrosCRUD />} />
					</Route>
				</Route>
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
