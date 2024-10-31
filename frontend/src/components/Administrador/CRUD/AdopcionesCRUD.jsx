import { useEffect, useState } from "react";
import { deleteDatos, getDatos, putDatos } from "../../../utils/apiHandler";
import { urlAdopcion } from "../../../utils/urls";
import Button from "react-bootstrap/esm/Button";

const AdopcionesCRUD = () => {

	const [adopciones, setAdopciones] = useState([]);

	useEffect(() => {
		const datosAdopciones = async () => {
			const datos = await getDatos(urlAdopcion);
			setAdopciones(datos);
		};
		datosAdopciones();
	}, []);

	const estadoAdopciones = async (estado) => {
		const datos = await getDatos(`${urlAdopcion}/${estado}`);
		setAdopciones(datos);
	};

	const editarAdopcion = async(usuario, mascota, solicitud) => {
		try {
			await putDatos(`${urlAdopcion}/${usuario}/${mascota}/${solicitud}`,{
				dniUsuario: usuario,
				mascotasId:  mascota,
				solicitud
			})
			const actualizacion = await getDatos(urlAdopcion);
			setAdopciones(actualizacion);
		} catch (error) {
			console.error(error);
		}
	}

	const eliminarAdopcion = async (usuario, mascota) => {
		try {
			await deleteDatos(`${urlAdopcion}/${usuario}/${mascota}`);
			setAdopciones(
				adopciones.filter(
					(adopcion) => adopcion.id_mascotas !== mascota || adopcion.dni !== usuario
				)
			);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="vh-100">
			<select className=" m-4" onChange={(e) => estadoAdopciones(e.target.value)}>
				<option value="T">Mascotas registradas y no adoptadas</option>
				<option value="F">Mascotas registradas y adoptadas</option>
			</select>

			<table className="grid-1 admin-table">
				<thead>
					<tr>
						<th>No.</th>
						<th>Adoptante</th>
						<th>Correo adoptante</th>
						<th>Mascota</th>
						<th>Medida</th>
						<th>Edad</th>
						<th>Adopción</th>
						<th>Solicitud</th>
						<th>Fecha solicitud</th>
						<th>Acciones</th>
					</tr>
				</thead>
				<tbody>
					{adopciones.map((adopcion, index) => (
						<tr key={index}>
							<td>{index + 1}</td>
							<td>{adopcion.usuario}</td>
							<td>{adopcion.correo}</td>
							<td>{adopcion.nombre}</td>
							<td>{adopcion.medida}</td>
							<td>{adopcion.edad}</td>
							<td>{adopcion.estado === "T" ? "Disponible" : "Adoptado"}</td>
							<td>{adopcion.solicitud}</td>
							<td>{adopcion.fecha_adopcion}</td>
							<td>
								<Button variant="info" size="sm"
									onClick={() => editarAdopcion(adopcion.dni,adopcion.id_mascotas, "aceptado")}>
									Aceptar
								</Button>
								<Button variant="warning" size="sm"
									onClick={() => editarAdopcion(adopcion.dni,adopcion.id_mascotas, "rechazado")}>
									Rechazar
								</Button>
								<Button variant="danger" size="sm"
									onClick={() => eliminarAdopcion(adopcion.dni,adopcion.id_mascotas)}>
									Eliminar
								</Button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default AdopcionesCRUD;
