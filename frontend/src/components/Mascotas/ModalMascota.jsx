import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalMascota({ mascota, onClose }) {
  return (
    <Modal
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
      <Modal.Body>
        <img
          src={mascota?.imagen}
          alt={`Foto de ${mascota?.nombre}`}
          style={{ width: "50%", maxHeight: "auto", borderRadius: "8px" }}
        />
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
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary">Adoptar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalMascota;
