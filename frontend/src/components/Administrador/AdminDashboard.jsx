import Administrador from "./Administrador";
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <div className="admin-sidebar">
        <Administrador /> {/* Menú lateral izquierdo */}
      </div>
      <div className="admin-content">
        <Outlet /> {/* Área de contenido a la derecha */}
      </div>
    </div>
  );
};

export default AdminDashboard;
