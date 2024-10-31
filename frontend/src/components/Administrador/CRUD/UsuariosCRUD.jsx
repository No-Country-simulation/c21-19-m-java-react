import { useEffect, useState } from "react";
import { deleteDatos, getDatos, putDatos } from "../../../utils/apiHandler";
import { urlUsuario } from "../../../utils/urls";

const UsuariosCRUD = () => {
  const [usuarios, setUsuarios] = useState([]);

  const [dni, setDni] = useState(0);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [clave, setClave] = useState("");
  const [estado, setEstado] = useState(false);

  const cargarDatosUsuario = (usuario) => {
    setDni(usuario.dni);
    setNombre(usuario.nombre);
    setCorreo(usuario.correo);
    setClave(usuario.clave);
    setEstado(usuario.estado === true);
  };

  useEffect(() => {
    const datosUsuarios = async () => {
      try {
        const datos = await getDatos(urlUsuario);
        setUsuarios(datos);
      } catch (error) {
        console.error(error);
      }
    };
    datosUsuarios();
  }, []);

  const editarUsuario = async (event) => {
    event.preventDefault();

    try {
      await putDatos(`${urlUsuario}/${dni}`, {
        nombre,
        correo,
        clave,
        estado,
      });

      const actulizar = await getDatos(urlUsuario);

      setDni(0);
      setNombre("");
      setCorreo("");
      setClave("");
      setEstado(false);

      setUsuarios(actulizar);
    } catch (error) {
      console.error(error);
    }
  };

  const eliminarUsuario = async (documento) => {
    try {
      await deleteDatos(`${urlUsuario}/${documento}`);
      setUsuarios(usuarios.filter((usuario) => usuario.dni !== documento));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="grid-1-2">
      {/* Formulario editar usuarios */}
      <div>
        <form className="admin-form">
          <label>
            DNI
            <input
              type="text"
              value={dni}
              onChange={(e) => setDni(e.target.value)}
              disabled
            />
          </label>
          <label>
            Nombre
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </label>
          <label>
            Correo
            <input
              type="text"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
          </label>
          <label>
            Estado
            <select
              value={estado}
              onChange={(e) => setEstado(e.target.value === "true")}
            >
              <option value={true}>Activo</option>
              <option value={false}>Inactivo</option>
            </select>
          </label>
          <button className="admin-btn" onClick={editarUsuario}>
            Actualizar usuario
          </button>
        </form>
      </div>

      <table className="admin-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>DNI</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{usuario.dni}</td>
              <td>{usuario.nombre}</td>
              <td>{usuario.correo}</td>
              <td>{usuario.estado}</td>
              <td>
                <button
                  className="admin-btn"
                  onClick={() => cargarDatosUsuario(usuario)}
                >
                  Editar
                </button>
                <button
                  className="admin-btn"
                  onClick={() => eliminarUsuario(usuario.dni)}
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

export default UsuariosCRUD;
