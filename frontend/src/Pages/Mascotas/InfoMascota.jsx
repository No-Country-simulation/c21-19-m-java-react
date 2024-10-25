const InfoMascota = (props) => {
  return (
    <div className="grid-responsive">
      <article className="card-mascota ">
        <header className="mascota-header">
          <img
            className="mascota-img"
            src="/public/perro-1.jpg"
            alt="foto de animal"
          />
        </header>
        <div className="mascota-body">
          <h3 className="mascota-title">{props.nombre}</h3>
          <h5 className="mascota-raza">
            <span>Raza: </span>
            {props.raza}
          </h5>
        </div>
      </article>
    </div>
  );
};

export default InfoMascota;
