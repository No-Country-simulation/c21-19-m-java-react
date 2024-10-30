import { useEffect, useState } from "react";
import { urlAdmin } from "../../../utils/urls";
import { deleteDatos, getDatos, postDatos, putDatos } from "../../../utils/apiHandler";

const AdministradoresCRUD = () => {

    const  [administradores, setAdministradores] = useState([]);
    
    const  [alias, setAlias] = useState("");
    const  [correo, setCorreo] = useState("");
    const  [nombre, setNombre] = useState("");
    const  [estado, setEstado] = useState(false);
    const  [clave, setClave] = useState("");

    const cargarDatosAdmin = (admin) => {
        setAlias(admin.alias);
        setCorreo(admin.correo);
        setNombre(admin.nombre);
        setEstado(admin.estado === true);
        setClave(admin.clave);
    }

    useEffect(()=> {
        const  datosAdministradores = async () => {
            try {
                const datos = await getDatos(urlAdmin);
                setAdministradores(datos)
            } catch (error) {
                console.error(error);
            }
        }
        datosAdministradores();
    },[])

    const agregarAdmin = async (event) => {
        event.preventDefault();
        try {
            await postDatos(urlAdmin, {
                alias,
                correo,
                nombre,
                clave
            });

            const agregacion = await getDatos(urlAdmin);

            setAlias("");
            setCorreo("");
            setNombre("");
            setClave("");

            setAdministradores(agregacion);
        } catch (error) {
            console.error(error)
        }
    }

    const editarAdmin = async(event) => {
        event.preventDefault();
        try {
            await putDatos(`${urlAdmin}/${alias}`, {
                alias,
                correo,
                nombre,
                clave,
                estado
            });

            const actualizacion = await getDatos(urlAdmin);

            setAlias("");
            setCorreo("");
            setNombre("");
            setClave("");
            setEstado(false);

            setAdministradores(actualizacion);
        } catch (error) {
            console.error(error);
        }
    }

    const eliminarAdmin = async (alias) => {
		try {
			await deleteDatos(`${urlAdmin}/${alias}`);
			setAdministradores(
				administradores.filter((admin) => admin.alias !== alias)
			);
		} catch (error) {
			console.error(error);
		}
	};


	return (
		<div>
            <table border="1">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Usuario</th>
                        <th>Correo</th>
                        <th>Nombre</th>
                        <th>Estado</th>
                        <th>Clave</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {administradores.map((admin,index) => (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{admin.alias}</td>
                            <td>{admin.correo}</td>
                            <td>{admin.nombre}</td>
                            <td>{admin.estado}</td>
                            <td>{admin.clave}</td>
                            <td>
                                <button onClick={() => cargarDatosAdmin(admin)}>Editar</button>
                                <button onClick={() => eliminarAdmin(admin.alias)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Formulario editar admin*/}
            <div>
                <h3>Editar admin</h3>
                <form>
                    <label>Alias
                        <input type="text" value={alias} onChange={(e)=> setAlias(e.target.value)} disabled/>
                    </label>
                    <label>Correo
                        <input type="text" value={correo} onChange={(e)=> setCorreo(e.target.value)} disabled/>
                    </label>
                    <label>Nombre
                        <input type="text" value={nombre} onChange={(e)=> setNombre(e.target.value)}/>
                    </label>
                    <label>Estado
                        <select value={estado} onChange={(e) => setEstado(e.target.value === "true")}>
                            <option value={true}>Activo</option>
                            <option value={false}>Inactivo</option>
                        </select>
                    </label>
                    <button onClick={editarAdmin}>
						Actualizar administrador
					</button>
                </form>
            </div>

            {/* Formulario agregar admin*/}
            <div>
                <h3>agregar admin</h3>
                <form>
                    <label>Alias
                        <input type="text" value={alias} onChange={(e)=> setAlias(e.target.value)}/>
                    </label>
                    <label>Correo
                        <input type="text" value={correo} onChange={(e)=> setCorreo(e.target.value)}/>
                    </label>
                    <label>Nombre
                        <input type="text" value={nombre} onChange={(e)=> setNombre(e.target.value)}/>
                    </label>
                    <label>Contraseña
                        <input type="text" value={clave} onChange={(e)=> setClave(e.target.value)}/>
                    </label>
                    <label>Estado
                        <select value={estado} onChange={(e) => setEstado(e.target.value === "true")}>
                            <option value={true}>Activo</option>
                            <option value={false}>Inactivo</option>
                        </select>
                    </label>
                    <button onClick={agregarAdmin}>
						Agregar administrador
					</button>
                </form>
            </div>

		</div>
	);
};

export default AdministradoresCRUD;
