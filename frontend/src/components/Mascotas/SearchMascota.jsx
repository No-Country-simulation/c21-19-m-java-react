import React, { useEffect, useState } from "react";
import { urlAdopcion, urlMascota } from "../../utils/urls";
import { getDatos, postDatos } from "../../utils/apiHandler";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

import dayjs from "dayjs";
import "dayjs/locale/es";

const SearchMascota = ({usuario}) => {
  
  dayjs.locale('es');
  
  const [adoptante, setAdoptante] = useState(null);
  const [mascotas, setMascotas] = useState([]);
  
  const [especie, setEspecie] = useState("Todos");
  const [mostrarModal, setMostrarModal] = useState(false);
  const [mascotaSeleccionada, setMascotaSeleccionada] = useState(null);
  const navigate = useNavigate();

  /**Datos usuario */
  useEffect(() => {
    setAdoptante(usuario);
  }, [usuario]);

  /**Datos mascotas */
  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const datos = await getDatos(urlMascota);
        setMascotas(datos);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };
    obtenerDatos();
  }, []);
  
  /**Datos para adoptar mascota*/
  const documento = adoptante?.datos?.dni;

  const adopcionMascota = async(usuario, animal) => {
    try {
      const fechaAdopcion = dayjs().format("MMMM D, YYYY HH:mm:ss A");
      await postDatos(urlAdopcion,{
        dniUsuario: usuario,
        idMascota: animal.id_mascotas,
        fechaAdopcion
      });
    } catch (error) {
      console.error(error)
    }
  };
    

  const handleChange = (e) => {
    setEspecie(e.target.value);
  };

  const handleMascotaClick = (mascota) => {
    setMascotaSeleccionada(mascota);
    setMostrarModal(true);
  };

  const handleCloseModal = () => {
    setMostrarModal(false);
    setMascotaSeleccionada(null);
  };

  const handleAdoptarClick = (adoptante, mascota) => {
    setMostrarModal(false);
    adopcionMascota(adoptante, mascota);
    navigate("/mascotasform", { state: { mascota: mascotaSeleccionada } });
  };

  const filteredMascotas = mascotas.filter(
    (dato) => especie === "Todos" || dato.especie === especie
  );

  return (
    <div className="my-4 index-mascotas">
      <form className="mb-4">
        <span>Filtra las mascotas por especie: </span>
        <select onChange={handleChange} value={especie}>
          <option value="Todos">Todos</option>
          <option value="Perro">Perros</option>
          <option value="Gato">Gatos</option>
        </select>
      </form>
      <div className="row align-items-lg-center">
        {filteredMascotas.map((mascota, index) => (
          <div
            key={index}
            className="col-12 col-sm-6 col-lg-3 d-flex"
            onClick={() => handleMascotaClick(mascota)}
          >
            <article className="card-mascota mx-auto mb-3 d-flex flex-column">
              <header className="mascota-header">
                <img
                  className="mascota-img"
                  src={mascota.imagen}
                  alt="foto de animal"
                />
              </header>
              <div className="mascota-body">
                <h3 className="mascota-title">{mascota.nombre}</h3>
                <h5 className="mascota-especie">
                  <span>Especie: </span>
                  {mascota.especie}
                </h5>
                <h5 className="mascota-raza">
                  <span>Raza: </span>
                  {mascota.raza}
                </h5>
              </div>
            </article>
          </div>
        ))}
      </div>
      <Modal
        className="index-modal"
        show={mostrarModal}
        onHide={handleCloseModal}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {mascotaSeleccionada?.nombre || "Información de la Mascota"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="py-0">
          <div className="modal-body-img">
            <img
              className="modal-img"
              src={mascotaSeleccionada?.imagen}
              alt={`Foto de ${mascotaSeleccionada?.nombre}`}
            />
          </div>
          <h6 className="mt-2 fw-bold">
            Raza: <span className="fw-light">{mascotaSeleccionada?.raza}</span>
          </h6>
          <h6 className="mt-2 fw-bold">
            Edad: <span className="fw-light">{mascotaSeleccionada?.edad}</span>
          </h6>
          <h6 className="mt-2 fw-bold">
            Tamaño:{" "}
            <span className="fw-light">{mascotaSeleccionada?.medida}</span>
          </h6>
          <p className="mt-2 fw-bold">
            Descripción:{" "}
            <span className="fw-light">
              {mascotaSeleccionada?.descripcion || "Sin descripción disponible"}
            </span>
          </p>
          <Button
            className="btn btn-lg btn-success mb-5"
            onClick={() => handleAdoptarClick(documento, mascotaSeleccionada)}
          >
            Adoptar
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SearchMascota;
