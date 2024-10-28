import { Navigate } from "react-router-dom";

function ProtectedRoute({children}) {
  const autenticado = localStorage.getItem("autenticado") === "true";
  return autenticado ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
