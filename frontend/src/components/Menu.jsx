import { NavLink } from "react-router-dom";

export function Menu() {
  return (
    <nav className="menu">
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : null)}
        to="/"
      >
        Inicio
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : null)}
        to="/mascotas"
      >
        Mascotas
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : null)}
        to="/nosotros"
      >
        Nosotros
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : null)}
        to="/contacto"
      >
        Contacto
      </NavLink>
    </nav>
  );
}
