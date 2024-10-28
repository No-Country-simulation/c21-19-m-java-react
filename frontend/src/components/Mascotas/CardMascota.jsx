import React, { useEffect, useState } from "react";
import { urlMascota } from "../../utils/urls";
import { getDatos } from "../../utils/apiHandler";

const CardMascota = () => {
  const [mascotas, setMascotas] = useState([]);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const datos = await getDatos(urlMascota);
        setMascotas(datos);
        console.log(datos);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };
    obtenerDatos();
  }, []);

  return (
    <div className="container">
      <div className="row align-items-lg-center">
        {mascotas.map((mascota, index) => (
          <div key={index} className="col-12 col-sm-6 col-lg-3 d-flex">
            <article className="card-mascota mx-auto mb-3 d-flex flex-column">
              <header className="mascota-header">
                <img
                  className="mascota-img"
                  src="/perro-1.jpg"
                  alt="foto de animal"
                />
              </header>
              <div className="mascota-body">
                <h3 className="mascota-title">{mascota.nombre}</h3>
                <h5 className="mascota-raza">
                  <span>Raza: </span>
                  {mascota.raza}
                </h5>
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardMascota;
