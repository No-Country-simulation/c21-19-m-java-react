import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getDatos } from "../utils/apiHandler";
import { urlAdmin, urlUsuario } from "../utils/urls";

const Login = ({ingreso}) => {
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
				adoptante: usuario.find(
					(usuario) =>
						usuario.correo === correo && usuario.clave === clave
				),
				administrador: administrador.find(
					(admin) => admin.correo === correo && admin.clave === clave
				),
			};

			if (registro.adoptante) {
				ingreso("adoptante", correo, clave,  registro.adoptante);
				navigate("/inicio");
			}
			else if(registro.administrador){
				ingreso("administrador",correo, clave,  registro.administrador);
				navigate("/admin");
			}
			else{
				alert("Credenciales incorrectas");
			} 
		},
		[usuario, administrador, ingreso, navigate]
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
					<button className="btn btn-lg btn-success">Ingresar</button>
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
