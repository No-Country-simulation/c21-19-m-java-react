import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuthentication from "../hooks/useAuthentication";
import defaultRegister from "../utils/defaultRegister";
import Modal from "../components/Modal";
import { useModal } from "../hooks/useModal";
import axios from "axios";

const Registro = () => {
  const [isOpen, openModal, closeModal] = useModal(false);

  /*  const { register, handleSubmit, reset } = useForm(); */
  const { handleSubmit } = useForm();

  /* const { createUser } = useAuthentication(); */

  /*  const submit = (data) => {
    createUser(data);
    reset(defaultRegister);
  }; */

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [dni, setDni] = useState(0);
  const [clave, setClave] = useState("");

  const postUsuarios = async (e) => {
    e.preventDefault();
    let url = "http://localhost:8080/colitasFelices/usuarios";
    await axios.post(url, {
      nombre,
      correo,
      dni,
      clave,
    });
  };

  return (
    <div className="pt-5">
      <div className="container">
        {/* <form onSubmit={(handleSubmit(submit), openModal)}> */}
        <form>
          <h2 className="mb-3">Completa tu información</h2>
          <div className="mb-3">
            <label className="form-label" htmlFor="nombre">
              Nombre Completo
            </label>
            <input
              /*   {...register("nombre")} */
              onChange={(e) => {
                setNombre(e.target.value);
              }}
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
              /*   {...register("dni")} */
              onChange={(e) => {
                setDni(e.target.value);
              }}
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
              /* {...register("correo")} */
              onChange={(e) => {
                setCorreo(e.target.value);
              }}
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
              /* {...register("clave")} */
              onChange={(e) => {
                setClave(e.target.value);
              }}
              className="form-control"
              type="password"
              id="clave"
            />
          </div>
          <input
            className="btn btn-lg btn-success"
            type="submit"
            onClick={postUsuarios}
          />
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
