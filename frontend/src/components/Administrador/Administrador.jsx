import { Link } from "react-router-dom";

const Administrador = () => {
  return (
    <div className="admin-nav">
      <Link className="admin-nav-item" to={"/admin/gestion-administradores"}>
        Administradores
      </Link>
      <Link className="admin-nav-item" to={"/admin/gestion-usuarios"}>
        Usuarios
      </Link>
      <Link className="admin-nav-item" to={"/admin/gestion-mascotas"}>
        Mascotas
      </Link>
      <Link className="admin-nav-item" to={"/admin/gestion-adopciones"}>
        Adopciones
      </Link>
      <Link className="admin-nav-item" to={"/admin/gestion-registros"}>
        Registro mascotas
      </Link>
    </div>
  );
};

export default Administrador;
