import React from "react";
import { useForm } from "react-hook-form";
import useAuthentication from "../hooks/useAuthentication";
import defaultRegister from "../utils/defaultRegister";

const Registro = () => {
  const { register, handleSubmit, reset } = useForm();

  const { createUser } = useAuthentication();

  const submit = (data) => {
    createUser(data);
    reset(defaultRegister);
  };

  return (
    <div className="pt-5">
      <div className="container">
        <form onSubmit={handleSubmit(submit)}>
          <h2 className="mb-3">Completa tu información</h2>
          <div className="mb-3">
            <label className="form-label" htmlFor="nombre">
              Nombre Completo
            </label>
            <input
              {...register("nombre")}
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
              {...register("dni")}
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
              {...register("correo")}
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
              {...register("clave")}
              className="form-control"
              type="password"
              id="clave"
            />
          </div>
          <input className="btn btn-lg btn-success" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Registro;
