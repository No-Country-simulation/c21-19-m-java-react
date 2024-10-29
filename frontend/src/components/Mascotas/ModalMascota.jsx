import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalMascota({ mascota, onClose }) {
  return (
    <Modal
      className="mascota-modal"
      show
      onHide={onClose}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {mascota?.nombre || "Información de la Mascota"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="py-0">
        <div className="modal-body-img">
          <img
            className="modal-img"
            src={mascota?.imagen}
            alt={`Foto de ${mascota?.nombre}`}
            /*   style={{ width: "50%", maxHeight: "auto", borderRadius: "8px" }} */
          />
        </div>
        <h6 className="mt-2 fw-bold">
          Raza: <span className="fw-light">{mascota?.raza}</span>
        </h6>
        <h6 className="mt-2 fw-bold">
          Edad: <span className="fw-light">{mascota?.edad}</span>
        </h6>
        <h6 className="mt-2 fw-bold">
          Tamaño: <span className="fw-light">{mascota?.medida}</span>
        </h6>
        <p className="mt-2 fw-bold">
          Descripción:{" "}
          <span className="fw-light">
            {mascota?.descripcion || "Sin descripción disponible"}
          </span>
        </p>
        <Button className="btn btn-lg btn-success mb-5">Adoptar</Button>
      </Modal.Body>
    </Modal>
  );
}

export default ModalMascota;
