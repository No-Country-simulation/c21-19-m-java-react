import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

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
      <article>
        <div className="row align-items-lg-center adoption-card">
          <article className="col-12 col-lg-6 ">
            <div className="adoption-header">
              <Image
                src={mascota.imagen}
                alt="Imagén de mascota"
                fluid
                className="adoption-img"
              />
            </div>
          </article>
          <article className="col-12 col-lg-6">
            <div className="adoption-body">
              <p>
                Hola {usuario.datos.nombre} tu solicitud para la adopción de{" "}
                {mascota.nombre} está en proceso de revisión. Pronto nos
                comunicaremos contigo.
              </p>
              <a
                className="btn btn-md btn-success mb-3 adoption-btn"
                href="/inicio"
              >
                <b>Aceptar</b>
              </a>
            </div>
          </article>
        </div>
      </article>
    </div>
  );
};

export default MascotasForm;
