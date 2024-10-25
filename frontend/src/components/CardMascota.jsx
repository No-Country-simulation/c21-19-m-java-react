import React from "react";

const CardMascota = ({ animals }) => {
  return (
    <article className="card-animal">
      <header className="card-header">
        <img
          className="card-img"
          src="/public/perro-1.jpg"
          alt="foto de animal"
        />
      </header>
      <div className="card-body">
        <h3 className="card-title">{animals.nombre}</h3>
        <p className="card-description"></p>
        <button>Ver</button>
      </div>
    </article>
  );
};

export default CardMascota;
