import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const MascotasForm = ({ adoptante }) => {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    setUsuario(adoptante);
  }, [adoptante]);

  const location = useLocation();
  const mascota = location.state?.mascota;

  const nombre = usuario?.datos?.nombre || 'usuario';

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
                {`Hola ${nombre} tu solicitud para la adopción de ${mascota.nombre} 
                está en proceso de revisión. Pronto nos comunicaremos contigo.`}
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
