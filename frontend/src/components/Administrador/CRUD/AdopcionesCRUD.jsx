import { useEffect, useState } from "react";
import { deleteDatos, getDatos } from "../../../utils/apiHandler";
import { urlAdopcion } from "../../../utils/urls";

const AdopcionesCRUD = () => {
  const [registros, setRegistros] = useState([]);
  const [estado, setEstado] = useState("T");

  useEffect(() => {
    const datosRegistros = async (estado) => {
      const datos = await getDatos(`${urlAdopcion}/${estado}`);
      setRegistros(datos);
    };
    datosRegistros(estado);
  }, [estado]);

  const eliminarRegistro = async (admin, mascota) => {
    try {
      await deleteDatos(`${urlAdopcion}/${admin}/${mascota}`);
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
    <div className="vh-100">
      <select className=" m-4" onChange={(e) => setEstado(e.target.value)}>
        <option value="T">Mascotas registradas y activas</option>
        <option value="F">Mascotas registradas y adoptadas</option>
      </select>
      <table className="grid-1 admin-table">
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
              <td>{registro.estado === "T" ? "Activo" : "Inactivo"}</td>
              <td>{registro.fecha_registro}</td>
              <td>
                <button
                  className="admin-btn"
                  onClick={() =>
                    eliminarRegistro(registro.alias, registro.id_mascotas)
                  }
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdopcionesCRUD;
