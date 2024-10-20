import React from "react";

const Header = () => {
  return (
    <section
      className="min-vh-100 bg-hero-image"
      style={{ "--bg-image": "url('hero.jpg')" }}
    >
      <article className="min-vh-100 bg-img-color d-flex align-items-center">
        <div className="container">
          <h2 className="text-white">Regala una mejor vida</h2>
          <p className="my-5 fs-5 text-white">
            Dale la oportunidad de una mejor vida a una mascota y llévate un
            poco de felicidad a casa.
          </p>
          <a className="btn btn-lg btn-success mb-5" href="/mascotas">
            <b>Quiero Adoptar!</b>
          </a>
        </div>
      </article>
    </section>
  );
};

export default Header;
