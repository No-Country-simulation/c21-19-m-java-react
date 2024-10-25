import { useState } from "react";

import Modal from "../components/Modal";
import { useModal } from "../hooks/useModal";
import { postDatos } from "../utils/apiHandler";
import { urlUsuario } from "../utils/urls";

const Registro = () => {

  const[dni, setDni] = useState(0);
  const[nombre, setNombre] = useState("");
  const[correo, setCorreo] = useState("");
  const[clave, setClave] = useState("");
  
  const [isOpen, openModal, closeModal] = useModal(false);

  const handleSubmit = async (event) => {
    
    event.preventDefault();

    const data = {
      dni,
      nombre,
      correo,
      clave
    }

    try {
      await postDatos(urlUsuario,data);
      openModal();
    } catch (error) {
      console.error("Error al enviar datos", error);
    }

  }

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
            />
          </div>
          <input className="btn btn-lg btn-success" type="submit" />
        </form>
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <h3>Modal 1</h3>
        <p>Hola Modal 1</p>
      </Modal>
    </div>
  );
};

export default Registro;
