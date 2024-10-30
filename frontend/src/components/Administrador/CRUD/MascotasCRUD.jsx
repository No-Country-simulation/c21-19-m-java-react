import { useEffect, useState } from "react";

import { urlMascota } from "../../../utils/urls";
import { deleteDatos, getDatos, postDatos, putDatos } from "../../../utils/apiHandler";

import axios from "axios";

const MascotasCRUD = () => {

	const [mascotas, setMascotas] = useState([]);

	const [registro, setRegistro] = useState(0);
	const [nombre, setNombre] = useState("");
	const [edad, setEdad] = useState("");
	const [descripcion, setDescripcion] = useState("");
	const [medida, setMedida] = useState("");
	const [especie, setEspecie] = useState("");
	const [raza, setRaza] = useState("");
	const [imagen, setImagen] = useState("");
	const [estado, setEstado] = useState(false);

	const cargarDatosMascota = (mascota) => {
		setRegistro(mascota.id_mascotas);
		setNombre(mascota.nombre);
		setEdad(mascota.edad);
		setDescripcion(mascota.descripcion);
		setMedida(mascota.medida);
		setEspecie(mascota.especie);
		setRaza(mascota.raza);
		setImagen(mascota.imagen);
		setEstado(mascota.estado === true);
	};

	const handleImageChange = async (event) => {
		const file = event.target.files[0];

		const formData = new FormData();
		formData.append("image", file);

		const key = "9c319c561f5060bcc5d9cb703c8e6ee3";
		const url = `https://api.imgbb.com/1/upload?key=${key}`;

		try {
			const response = await axios.post(url, formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});
			const imageUrl = response.data.data.url;
			setImagen(imageUrl);
		} catch (error) {
			console.error("Error al subir la imagen", error);
		}
	};

	useEffect(() => {
		const datosMascotas = async () => {
			try {
				const datos = await getDatos(urlMascota);
				setMascotas(datos);
			} catch (error) {
				console.error(error);
			}
		};
		datosMascotas();
	}, []);

	const agregarMascota = async (event) => {
		event.preventDefault();
		try {
			await postDatos(urlMascota, {
				nombre,
				edad,
				descripcion,
				medida,
				especie,
				raza,
				imagen,
			});

			const agregacion = await getDatos(urlMascota);

			setRegistro(0);
			setNombre("");
			setEdad("");
			setDescripcion("");
			setMedida("");
			setEspecie("");
			setRaza("");
			setImagen("");

			setMascotas(agregacion);
		} catch (error) {
			console.error(error);
		}
	};

	const actualizarMascota = async (event) => {
		event.preventDefault();
		try {
			await putDatos(`${urlMascota}/${registro}`, {
				nombre,
				edad,
				descripcion,
				medida,
				especie,
				raza,
				imagen,
				estado
			});

			const actualizacion = await getDatos(urlMascota);

			setRegistro(0);
			setNombre("");
			setEdad("");
			setDescripcion("");
			setMedida("");
			setEspecie("");
			setRaza("");
			setImagen("");
			setEstado(false);

			setMascotas(actualizacion);
		} catch (error) {
			console.error(error);
		}
	};

	const eliminarMascota = async (id) => {
		try {
			await deleteDatos(`${urlMascota}/${id}`);
			setMascotas(
				mascotas.filter((mascota) => mascota.id_mascotas !== id)
			);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div>
			{/* CRUD */}
			<table border="1">
				<thead>
					<tr>
						<th>registro</th>
						<th>nombre</th>
						<th>edad</th>
						<th>descripcion</th>
						<th>medida</th>
						<th>especie</th>
						<th>raza</th>
						<th>imagen</th>
						<th>estado</th>
						<th>acción</th>
					</tr>
				</thead>
				<tbody>
					{mascotas.map((mascota, index) => {
						return (
							<tr key={index}>
								<td>{index + 1}</td>
								<td>{mascota.nombre}</td>
								<td>{mascota.edad}</td>
								<td>{mascota.descripcion}</td>
								<td>{mascota.medida}</td>
								<td>{mascota.especie}</td>
								<td>{mascota.raza}</td>
								<td>{mascota.imagen}</td>
								<td>{mascota.estado}</td>
								<td>
									<button
										onClick={() =>
											cargarDatosMascota(mascota)
										}
									>
										Editar
									</button>
									<button
										onClick={() =>
											eliminarMascota(mascota.id_mascotas)
										}
									>
										Eliminar
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>

			{/* Formulario editar mascota*/}
			<div>
				<h3>Formulario de Editar Mascota</h3>
				<form>
					<label>
						Nombre
						<input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}
						/>
					</label>
					<label>
						Edad
						<input type="text" value={edad} onChange={(e) => setEdad(e.target.value)}
						/>
					</label>
					<label>
						Descripcion
						<input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}
						/>
					</label>
					<label>
						Medida
						<input type="text" value={medida} onChange={(e) => setMedida(e.target.value)}
						/>
					</label>
					<label>
						Especie
						<input type="text" value={especie} onChange={(e) => setEspecie(e.target.value)}
						/>
					</label>
					<label>
						Raza
						<input type="text" value={raza} onChange={(e) => setRaza(e.target.value)}
						/>
					</label>
					<div>
						Imagen
						<input type="file" accept="image/*" onChange={handleImageChange}
						/>
						<img src={imagen} alt="" />
					</div>
					<label>
						Estado
						<select value={estado} onChange={(e) => setEstado(e.target.value === "true")}>
							<option value={true}>Activo</option>
							<option value={false}>Adoptado</option>
						</select>
					</label>
					<button onClick={actualizarMascota}>
						Actualizar mascota
					</button>
				</form>
			</div>

			{/* Formulario agregar mascota*/}
			<div>
				<h2>Formulario de Agregar Mascota</h2>
				<form>
					<label>
						Nombre
						<input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}
						/>
					</label>
					<label>
						Edad
						<input type="text" value={edad} onChange={(e) => setEdad(e.target.value)}
						/>
					</label>
					<label>
						Descripcion
						<input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}
						/>
					</label>
					<label>
						Medida
						<input type="text" value={medida} onChange={(e) => setMedida(e.target.value)}
						/>
					</label>
					<label>
						Especie
						<input type="text" value={especie} onChange={(e) => setEspecie(e.target.value)}
						/>
					</label>
					<label>
						Raza
						<input type="text" value={raza} onChange={(e) => setRaza(e.target.value)}
						/>
					</label>
					<div>
						Imagen
						<input type="file" accept="image/*" onChange={handleImageChange}
						/>
						<img src={imagen} alt="" />
					</div>
					<button onClick={agregarMascota}>Agregar mascota</button>
				</form>
			</div>
		</div>
	);
};

export default MascotasCRUD;
