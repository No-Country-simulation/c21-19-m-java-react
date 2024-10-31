import { useEffect, useState } from "react";

import { urlMascota, urlRegistro } from "../../../utils/urls";
import {
  deleteDatos,
  getDatos,
  postDatos,
  putDatos,
} from "../../../utils/apiHandler";

import axios from "axios";
import dayjs from "dayjs";
import "dayjs/locale/es";

const MascotasCRUD = ({registrador}) => {

  dayjs.locale('es');
  const [mascotas, setMascotas] = useState([]);
  const [registrante, setRegistrante] = useState(null);

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

  useEffect(()=> {
    setRegistrante(registrador);
  },[registrador]);

  const admin = registrante?.datos?.alias;
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
      const response = await postDatos(urlMascota, {
        nombre,
        edad,
        descripcion,
        medida,
        especie,
        raza,
        imagen,
      });

      const idMascota = response.data.idMascotas;
      const fechaRegistro = dayjs().format("MMMM D, YYYY HH:mm:ss A");
      
      await axios.post(urlRegistro, {
        alias: admin,
        idMascota,
        fechaRegistro,
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
        estado,
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
      setMascotas(mascotas.filter((mascota) => mascota.id_mascotas !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="grid-1-2">
        {/* Formulario editar mascota*/}
        <div>
          <h3>Formulario de Editar Mascota</h3>
          <form className="admin-form">
            <label>
              Nombre
              <input type="text" value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </label>
            <label>
              Edad
              <input type="text" value={edad}
                onChange={(e) => setEdad(e.target.value)}
              />
            </label>
            <label>
              Descripcion
              <input type="text" value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              />
            </label>
            <label>
              Medida
              <input type="text" value={medida}
                onChange={(e) => setMedida(e.target.value)}
              />
            </label>
            <label>
              Especie
              <input type="text" value={especie}
                onChange={(e) => setEspecie(e.target.value)}
              />
            </label>
            <label>
              Raza
              <input type="text" value={raza}
                onChange={(e) => setRaza(e.target.value)}
              />
            </label>
            <div>
              Imagen
              <input type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
              <img src={imagen} alt=""/>
            </div>
            <label>
              Estado
              <select value={estado} onChange={(e) => setEstado(e.target.value === "true")}>
                <option value={true}>Activo</option>
                <option value={false}>Adoptado</option>
              </select>
            </label>
            <button className="admin-btn" onClick={actualizarMascota}>
              Actualizar mascota
            </button>
          </form>
        </div>
        {/* Formulario agregar mascota*/}
        <div>
          <h2>Formulario de Agregar Mascota</h2>
          <form className="admin-form">
            <label>
              Nombre
              <input type="text" value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </label>
            <label>
              Edad
              <input type="text" value={edad}
                onChange={(e) => setEdad(e.target.value)}
              />
            </label>
            <label>
              Descripcion
              <input type="text" value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              />
            </label>
            <label>
              Medida
              <input type="text" value={medida}
                onChange={(e) => setMedida(e.target.value)}
              />
            </label>
            <label>
              Especie
              <input type="text" value={especie}
                onChange={(e) => setEspecie(e.target.value)}
              />
            </label>
            <label>
              Raza
              <input type="text" value={raza}
                onChange={(e) => setRaza(e.target.value)}
              />
            </label>
            <div>
              Imagen
              <input type="file"
                accept="image/*" 
                onChange={handleImageChange}
              />
              <img src={imagen} alt=""/>
            </div>
            <button className="admin-btn" onClick={agregarMascota}>
              Agregar mascota
            </button>
          </form>
        </div>
      </div>
      {/* CRUD */}
      <table className="admin-table grid-1">
        <thead>
          <tr>
            <th>Registro</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Descripcion</th>
            <th>Medida</th>
            <th>Especie</th>
            <th>Raza</th>
            <th>Imagen</th>
            <th>Estado</th>
            <th>Acción</th>
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
                <td>{mascota.estado === "T" ? "Disponible" : "Adoptado"}</td>
                <td>
                  <button
                    className="admin-btn"
                    onClick={() => cargarDatosMascota(mascota)}
                  >
                    Editar
                  </button>
                  <button
                    className="admin-btn"
                    onClick={() => eliminarMascota(mascota.id_mascotas)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MascotasCRUD;
