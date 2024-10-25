import { useForm } from "react-hook-form";
import useAuthentication from "../hooks/useAuthentication";
import defaultRegister from "../utils/defaultRegister";
import { getDatos } from "../utils/apiHandler";
import { urlAdmin, urlUsuario } from "../utils/urls";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();

  const { loginUser } = useAuthentication();

  const validacion = async() => {
    const usuario = await getDatos(urlUsuario);
    const admin = await getDatos(urlAdmin);
    console.log("Usuario:", usuario);
    console.log("Admin:",admin)
  }

  validacion();

  const submit = (data) => {
    loginUser(data);
    reset(defaultRegister);
  };
  return (
    <div className="pt-5">
      <div className="container">
        <form onSubmit={handleSubmit(submit)}>
          <h2 className="mb-3">Iniciar Sesión</h2>
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
          <br />
          <p className="mt-3">
            ¿No estás registrado? <a href="/registro">Registrate</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
