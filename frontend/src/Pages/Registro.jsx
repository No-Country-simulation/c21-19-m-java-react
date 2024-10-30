import { useState } from "react";
/* import Modal from "../components/Modal"; */
import { useModal } from "../hooks/useModal";
import { postDatos } from "../utils/apiHandler";
import { urlUsuario } from "../utils/urls";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Registro = () => {
  const [dni, setDni] = useState(0);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [clave, setClave] = useState("");

  /*  const [isOpen, openModal, closeModal] = useModal(false); */
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      dni,
      nombre,
      correo,
      clave,
    };

    try {
      await postDatos(urlUsuario, data);
      openModal();

      setDni(0);
      setNombre("");
      setCorreo("");
      setClave("");
    } catch (error) {
      console.error("Error al enviar datos", error);
    }
  };

  return (
    <div className="pt-5">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h2 className="mb-3">Completa tu información</h2>
          <div className="mb-3">
            <label className="form-label" htmlFor="nombre">
              Nombre Completo
            </label>
            <input
              onChange={(e) => setNombre(e.target.value)}
              className="form-control"
              type="text"
              id="nombre"
              value={nombre}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="dni">
              Documento de Identificación
            </label>
            <input
              onChange={(e) => setDni(e.target.value)}
              className="form-control"
              type="number"
              id="dni"
              value={dni ? dni : ""}
            />
          </div>
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
            />
          </div>
          <button
            className="btn btn-lg btn-success mb-5"
            href="/mascotas"
            onClick={handleShow}
          >
            <b>Enviar</b>
          </button>
        </form>
      </div>
      {/*     <Modal isOpen={isOpen} closeModal={closeModal}>
        <h3>Modal 1</h3>
        <p>Hola Modal 1</p>
      </Modal> */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Registro</Modal.Title>
        </Modal.Header>
        <Modal.Body>Te has registrado con éxito</Modal.Body>
        <Modal.Footer>
          <Button
            className="btn btn-lg btn-success mb-5 my-0"
            href="/"
            onClick={handleClose}
          >
            Iniciar Sesión
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Registro;
