import React from "react";
import Header from "../components/Header";
import Card from "react-bootstrap/Card";

const Inicio = () => {
  return (
    <div className="container">
      <Header />
      <section className="row align-items-lg-center min-vh-100 mt-5">
        <h2 className="fw-bold text-center">Pasos para adoptar</h2>
        <article className="col-12 col-md-6 col-lg-4 d-flex">
          <Card
            className="mx-auto mb-3 d-flex flex-column"
            style={{ width: "15rem" }}
          >
            <Card.Img
              className="bg-third-color"
              variant="top"
              src="paso-1.png"
            />
            <Card.Body>
              <Card.Title>Paso 1</Card.Title>
              <Card.Text>
                En la sección Mascotas selecciona las mascota que deseas
                adoptar.
              </Card.Text>
            </Card.Body>
          </Card>
        </article>
        <article className="col-12 col-md-6 col-lg-4 d-flex">
          <Card
            className="mx-auto mb-3 d-flex flex-column"
            style={{ width: "15rem" }}
          >
            <Card.Img
              className="bg-third-color"
              variant="top"
              src="paso-2.png"
            />
            <Card.Body>
              <Card.Title>Paso 2</Card.Title>
              <Card.Text>
                A continuación se abrira un formulario, llénalo y envía la
                solicitud de adopción.
              </Card.Text>
            </Card.Body>
          </Card>
        </article>
        <article className="col-12 col-md-6 col-lg-4 d-flex">
          <Card
            className="mx-auto mb-3 d-flex flex-column"
            style={{ width: "15rem" }}
          >
            <Card.Img
              className="bg-third-color"
              variant="top"
              src="paso-3.png"
            />
            <Card.Body>
              <Card.Title>Paso 3</Card.Title>
              <Card.Text>
                Nos pondremos en contacto contigo, evaluaremos tu solicitud y si
                haces match con tu mascota continuarás el proceso.
              </Card.Text>
            </Card.Body>
          </Card>
        </article>
        <article className="col-12 col-md-6 col-lg-4 d-flex">
          <Card
            className="mx-auto mb-3 d-flex flex-column"
            style={{ width: "15rem" }}
          >
            <Card.Img
              className="bg-third-color"
              variant="top"
              src="paso-4.png"
            />
            <Card.Body>
              <Card.Title>Paso 4</Card.Title>
              <Card.Text>
                Una vez aprobada la adopción, recibirás asesoramiento para tu
                mascota en particular.
              </Card.Text>
            </Card.Body>
          </Card>
        </article>
        <article className="col-12 col-md-6 col-lg-4">
          <Card
            className="mx-auto mb-3 d-flex flex-column"
            style={{ width: "15rem" }}
          >
            <Card.Img
              className="bg-third-color"
              variant="top"
              src="paso-5.png"
            />
            <Card.Body>
              <Card.Title>Paso 5</Card.Title>
              <Card.Text>
                ¡Finalmente, podrás recoger a tu nuevo mejor amigo!.
              </Card.Text>
            </Card.Body>
          </Card>
        </article>
      </section>
      <section className="row align-items-lg-center min-vh-100 mt-5">
        <h2 className="fw-bold text-center">Historias de adopción</h2>
        <article className="col-12 col-md-6 col-lg-4 d-flex">
          <Card
            className="mx-auto mb-3 d-flex flex-column"
            style={{ width: "15rem" }}
          >
            <Card.Img
              className="bg-third-color"
              variant="top"
              src="user-1.jpg"
            />
            <Card.Body>
              <Card.Title>Lola</Card.Title>
              <Card.Text>
                Gracias a Colitas Felices mi perrita Mary y yo llevamos dos años
                de aventuras y alegria.
              </Card.Text>
            </Card.Body>
          </Card>
        </article>
        <article className="col-12 col-md-6 col-lg-4 d-flex">
          <Card
            className="mx-auto mb-3 d-flex flex-column"
            style={{ width: "15rem" }}
          >
            <Card.Img
              className="bg-third-color"
              variant="top"
              src="user-2.jpg"
            />
            <Card.Body>
              <Card.Title>Daniel</Card.Title>
              <Card.Text>
                Cuando traje a mi perro Bruno al hogar, tengo alguien quien me
                espere en casa, es un miembro mas de la familia.
              </Card.Text>
            </Card.Body>
          </Card>
        </article>
        <article className="col-12 col-md-6 col-lg-4 d-flex">
          <Card
            className="mx-auto mb-3 d-flex flex-column"
            style={{ width: "15rem" }}
          >
            <Card.Img
              className="bg-third-color"
              variant="top"
              src="user-3.jpg"
            />
            <Card.Body>
              <Card.Title>Luis</Card.Title>
              <Card.Text>
                Desde que adopté a mi gato Genaro siento una compañia
                inigualable en mi hogar, gracias Colitas Felices!!
              </Card.Text>
            </Card.Body>
          </Card>
        </article>
      </section>
    </div>
  );
};

export default Inicio;
