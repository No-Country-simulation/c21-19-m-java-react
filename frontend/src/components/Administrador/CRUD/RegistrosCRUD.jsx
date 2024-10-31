import { useEffect, useState } from "react";
import { deleteDatos, getDatos } from "../../../utils/apiHandler";
import { urlRegistro } from "../../../utils/urls";
import Button from "react-bootstrap/esm/Button";

const RegistrosCRUD = () => {

  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    const datosRegistros = async () => {
      const datos = await getDatos(urlRegistro);
      setRegistros(datos);
    };
    datosRegistros();
  }, []);

  const estadoRegistros = async (estado) => {
		const datos = await getDatos(`${urlRegistro}/${estado}`);
		setRegistros(datos);
	};

  const eliminarRegistro = async (admin, mascota) => {
    try {
      await deleteDatos(`${urlRegistro}/${admin}/${mascota}`);
      setRegistros(
        registros.filter(
          (registro) =>
            registro.id_mascotas !== mascota || registro.alias !== admin
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <select className="m-4" onChange={(e) => estadoRegistros(e.target.value)}>
        <option value="T">Mascotas registradas y activas</option>
        <option value="F">Mascotas registradas y adoptadas</option>
      </select>
      <table className="admin-table grid-1">
        <thead>
          <tr>
            <th>No.</th>
            <th>Correo admin</th>
            <th>Admin</th>
            <th>Nombre mascota</th>
            <th>Medida</th>
            <th>Edad</th>
            <th>Estado</th>
            <th>Fecha registro</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {registros.map((registro, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{registro.correo}</td>
              <td>{registro.alias}</td>
              <td>{registro.nombre}</td>
              <td>{registro.medida}</td>
              <td>{registro.edad}</td>
              <td>{registro.estado === "T" ? "Disponible" : "Adoptado"}</td>
              <td>{registro.fecha_registro}</td>
              <td>
                <Button variant="danger" size="lg"
                  onClick={() =>
                    eliminarRegistro(registro.alias, registro.id_mascotas)
                  }
                >
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

export default RegistrosCRUD;
