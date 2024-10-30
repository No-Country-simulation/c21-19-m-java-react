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
      <article className="adopcion-card">
        <div className="row align-items-lg-center mt-5">
          <article className="col-12 col-lg-6">
            <Image src={mascota.imagen} alt="Imagén de mascota" fluid />
          </article>
          <article className="col-12 col-lg-6">
            <p>
              Hola {usuario.datos.nombre} tu solicitud para la adopción de{" "}
              {mascota.nombre} está en proceso de revisión. Pronto nos
              comunicaremos contigo.
            </p>
            <a className="btn btn-lg btn-success mb-5" href="/inicio">
              <b>Aceptar</b>
            </a>
          </article>
        </div>
      </article>
    </div>

    /*  <Card style={{ width: "20rem" }}>
      <Card.Img variant="top" src={mascota.imagen} />
      <Card.Body>
        <Card.Title>¡Felicidades!</Card.Title>
        <Card.Text>
          Hola {usuario.datos.nombre} tu solicitud para la adopción de
          {mascota.nombre} está en proceso de revisión. Pronto nos comunicaremos
          contigo.
        </Card.Text>
        <a className="btn btn-lg btn-success mb-5" href="/inicio">
          <b>Aceptar</b>
        </a>
      </Card.Body>
    </Card> */
  );
};

export default MascotasForm;
