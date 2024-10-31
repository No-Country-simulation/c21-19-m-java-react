import Header from "../components/Header";
import Card from "react-bootstrap/Card";

const Inicio = () => {
  return (
    <>
      <Header />
      <div className="container">
        <section className="row align-items-lg-center mt-5">
          <h2 className="fw-bold text-center">Pasos para adoptar</h2>
          <article className="col-12 col-md-6 col-lg-3 d-flex">
            <Card
              className=" mx-auto  mb-3 d-flex flex-column"
              style={{ width: "15rem" }}
            >
              <Card.Img
                className="bg-third-color "
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
          <article className="col-12 col-md-6 col-lg-3 d-flex">
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
                  A continuación se abrira una ventana, oprime el boton Adoptar, felicidades tu solicitud de adopción esta en curso.
                </Card.Text>
              </Card.Body>
            </Card>
          </article>
          <article className="col-12 col-md-6 col-lg-3 d-flex">
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
                  Evaluaremos tu solicitud y nos pondremos en contacto contigo.
                </Card.Text>
              </Card.Body>
            </Card>
          </article>
          <article className="col-12 col-md-6 col-lg-3 d-flex">
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
                  Si se aprueba la adopción, podrás venir por tu próximo mejor
                  amigo!.
                </Card.Text>
              </Card.Body>
            </Card>
          </article>
        </section>
        <section className="row align-items-lg-center mt-5">
          <h2 className="fw-bold text-center">Historias de adopción</h2>
          <article className="col-12 col-md-6 col-lg-4 d-flex">
            <Card
              className=" mx-auto mb-3 d-flex flex-column"
              style={{ width: "15rem" }}
            >
              <Card.Img
                className="bg-third-color "
                variant="top"
                src="user-1.jpg"
              />
              <Card.Body>
                <Card.Title>Lola</Card.Title>
                <Card.Text>
                  Gracias a Colitas Felices mi perrita Mary y yo llevamos dos
                  años de aventuras y alegria.
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
                  Con Bruno en el hogar, tengo alguien quien me espere en casa,
                  es un miembro mas de la familia.
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
    </>
  );
};

export default Inicio;
