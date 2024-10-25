import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getDatos } from "../utils/apiHandler";
import { urlAdmin, urlUsuario } from "../utils/urls";

const Login = () => {
	const navigate = useNavigate();

	const [correo, setCorreo] = useState("");
	const [clave, setClave] = useState("");

	const [usuario, setUsuario] = useState([]);
	const [administrador, setAdministrador] = useState([]);

	useEffect(() => {
		const cargarDatos = async () => {
			try {
				const datosUsuarios = await getDatos(urlUsuario);
				setUsuario(datosUsuarios);
				const datosAdmins = await getDatos(urlAdmin);
				setAdministrador(datosAdmins);
			} catch (error) {
				console.log("Error al cargar datos:", error);
			}
		};
		cargarDatos();
	}, []);

	const validacionCredenciales = useCallback(
		(correo, clave) => {
			const registro = {
				adoptante: usuario.some(
					(usuario) =>
						usuario.correo === correo && usuario.clave === clave
				),
				administrador: administrador.some(
					(admin) => admin.correo === correo && admin.clave === clave
				),
			};
			/**En app
       * useEffect(() => {
        const isAuthenticated = localStorage.getItem("isAuthenticated");
        if (isAuthenticated !== "true") {
            navigate("/login"); // Redirigir al login si no está autenticado
        }
    }, [navigate]);
       */
			//Pendiente vistas admin y usuario agregar localStorage.setItem("isAuthenticated", "true");
			if (registro.adoptante) navigate("/mascotas");
			if (registro.administrador) navigate("/nosotros");
		},
		[usuario, administrador, navigate]
	);

	const handleSubmit = (event) => {
		event.preventDefault();
		validacionCredenciales(correo, clave);
		setCorreo("");
		setClave("");
	};

	return (
		<div className="pt-5">
			<div className="container">
				<form onSubmit={handleSubmit}>
					<h2 className="mb-3">Iniciar Sesión</h2>
					<div className="mb-3">
						<label className="form-label" htmlFor="correo">
							Correo Electrónico
						</label>
						<input
							onChange={(e) => setCorreo(e.target.value)}
							className="form-control"
							type="email"
							id="correo"
							value={correo}
							required
						/>
					</div>
					<div className="mb-3">
						<label className="form-label" htmlFor="clave">
							Contraseña
						</label>
						<input
							onChange={(e) => setClave(e.target.value)}
							className="form-control"
							type="password"
							id="clave"
							value={clave}
							required
						/>
					</div>
					<input className="btn btn-lg btn-success" type="submit" />
					<br />
					<p className="mt-3">
						¿No estás registrado? <a href="/registro">Registrate</a>
					</p>
				</form>
			</div>
		</div>
	);
};

export default Login;
