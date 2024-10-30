import { Link } from "react-router-dom"

const Administrador = () => {
	return(
    <div>
      <Link to={"/gestion-mascotas"}>Mascotas</Link>
      <Link to={"/gestion-usuarios"}>Usuarios</Link>
    </div>
  );
};

export default Administrador;
