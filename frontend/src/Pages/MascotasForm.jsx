import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const MascotasForm = ({ usuario }) => {
  const [adoptante, setAdoptante] = useState(null);

  useEffect(() => {
    setAdoptante(usuario);
  }, [usuario]);

  const location = useLocation();
  const mascota = location.state?.mascota;

  console.log(JSON.parse(localStorage.getItem("usuario")));

  return (
    <div className="container">
      <article className="col-12 col-lg-6 order-lg-1">
        <h3 className="mt-4">
          {mascota
            ? `${mascota.nombre} será tu próximo(a) mejor amigo(a)`
            : "Formulario de Adopción"}
        </h3>

        {/*   <form>
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Nombre: {adoptante && adoptante.datos.nombre}
            </label>
            <input
              className="form-control"
              id="name"
              name="name"
              placeholder="Escribe tu nombre"
              type="text"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Correo:
            </label>
            <input
              className="form-control"
              id="email"
              name="email"
              placeholder="Escribe tu correo"
              type="email"
              required
            />
          </div>
        </form> */}
      </article>
    </div>
  );
};

export default MascotasForm;
