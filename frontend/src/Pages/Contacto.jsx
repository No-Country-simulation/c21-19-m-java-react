import React from "react";

const Contacto = () => {
  return (
    <>
      <main className="pt-5 bg-color">
        <div className="container mb-5">
          <section className="row">
            <article className="col-12 text-center">
              <h1>¿Interesado?</h1>
              <p className="fs-5">¡Contáctanos para mas información!</p>
            </article>
            <article className="col-12 col-lg-6 order-lg-1">
              <form
                action="https://formsubmit.co/marcelyepesqf@gmail.com"
                method="POST"
              >
                <div className="mb-3">
                  <label className="form-label" htmlFor="name">
                    Nombre:
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
                <div className="mb-3">
                  <label className="form-label" htmlFor="comments">
                    Comentarios:
                  </label>
                  <textarea
                    cols="5"
                    className="form-control"
                    id="comments"
                    name="comments"
                    placeholder="Déjanos tus comentarios"
                    required
                  ></textarea>
                </div>
                <div className="mb-3">
                  <input className="btn btn-lg btn-success" type="submit" />
                  <input
                    type="hidden"
                    name="_next"
                    value="http://localhost:5173/gracias"
                  />
                  <input
                    type="hidden"
                    name="_subject"
                    value="Comentario de Colitas Felices"
                  />
                </div>
              </form>
            </article>
            <article className="col-12 col-lg-6">
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d210227.0503453452!2d-58.69506851328119!3d-34.583985999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb51c78a87005%3A0x40b0d058ae47ad45!2sMascotas%20en%20Adopci%C3%B3n%20Argentina!5e0!3m2!1ses-419!2sco!4v1729449867182!5m2!1ses-419!2sco"
                  width="600"
                  height="450"
                  className="border-0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </article>
          </section>
        </div>
      </main>
    </>
  );
};

export default Contacto;
