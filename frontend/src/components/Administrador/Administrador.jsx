import { Link } from "react-router-dom"

const Administrador = () => {
	return(
    <div>
      <Link to={"/gestion-administradores"}>Administradores</Link>
      <Link to={"/gestion-usuarios"}>Usuarios</Link>
      <Link to={"/gestion-mascotas"}>Mascotas</Link>
      <Link to={"/gestion-adopciones"}>Adopciones</Link>
      <Link to={"/gestion-registros"}>Registros</Link>
    </div>
  );
};

export default Administrador;
