import React from "react";
import Card from "react-bootstrap/Card";

const Nosotros = () => {
  return (
    <>
      <main>
        <div className="container">
          <section className="row align-items-lg-center mt-5 ">
            <article className="col-12 col-lg-6 ">
              <h2>Nuestro Proyecto</h2>
              <p className="fs-5">
                El proyecto Colitas Felices para adoptar mascotas comenzó cuando
                un grupo de amigos amantes de los animales se dio cuenta de
                cuántos perros y gatos necesitaban un hogar en su ciudad.
                Inspirados por la idea de facilitar la adopción, decidieron
                combinar sus habilidades en diseño y desarrollo web para crear
                una plataforma que conectara a las personas con refugios
                locales.
              </p>
            </article>
            <article className="col-12 col-lg-6">
              <p className="fs-5">
                Querían hacer algo más que una simple base de datos; deseaban
                contar las historias de las mascotas y mostrar imágenes relaes
                para que la gente sintiera una conexión especial. Así nació el
                sitio web, con el lema: "Regala una mejor vida".
              </p>
            </article>
          </section>
          <section className="row g-1 mt-5">
            <article className="col-12">
              <h2>Nuestro Equipo</h2>
            </article>
            <article className="col-12 col-md-6 col-lg-3">
              <Card className="mx-auto custom-card bg-dark text-white  ">
                <Card.Img
                  src="/lola.jpg"
                  alt="lola"
                  className="custom-card-img"
                />
                <Card.ImgOverlay className="bg-img-color text-white d-flex flex-column justify-content-end">
                  <Card.Title>Lola Navarro</Card.Title>
                  <Card.Text>QA Tester</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </article>
            <article className="col-12 col-md-6 col-lg-3">
              {" "}
              <Card className="mx-auto custom-card bg-dark text-white">
                <Card.Img
                  src="/daniel.jpg"
                  alt="daniel"
                  className="custom-card-img"
                />
                <Card.ImgOverlay className="bg-img-color text-white d-flex flex-column justify-content-end">
                  <Card.Title>Alejandro Romero</Card.Title>
                  <Card.Text>Desarrollador Full-Stack</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </article>
            <article className="col-12 col-md-6 col-lg-3">
              {" "}
              <Card className="mx-auto custom-card bg-dark text-white">
                <Card.Img
                  src="/marcel.jpg"
                  alt="marcel"
                  className="custom-card-img"
                />
                <Card.ImgOverlay className="bg-img-color text-white d-flex flex-column justify-content-end d-flex flex-column justify-content-end">
                  <Card.Title>Marcel Yepes</Card.Title>
                  <Card.Text>Desarrollador Frontend</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </article>
            <article className="col-12 col-md-6 col-lg-3">
              {" "}
              <Card className="mx-auto custom-card bg-dark text-white">
                <Card.Img
                  src="/tobias.jpg"
                  alt="tobias"
                  className="custom-card-img"
                />
                <Card.ImgOverlay className="bg-img-color text-white d-flex flex-column justify-content-end">
                  <Card.Title>Tobias Dubini</Card.Title>
                  <Card.Text>Desarrollador Backend</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </article>
          </section>
          <section className="row mt-5">
            <h2>Lo que dice la gente</h2>
          </section>
        </div>
      </main>
    </>
  );
};

export default Nosotros;