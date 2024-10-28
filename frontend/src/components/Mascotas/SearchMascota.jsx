import React, { useEffect, useState } from "react";
import { urlMascota } from "../../utils/urls";
import { getDatos } from "../../utils/apiHandler";

const SearchMascota = () => {
  const [mascotas, setMascotas] = useState([]);
  const [especie, setEspecie] = useState("Todos"); // Cambia a una cadena inicial
  const [mascotasFiltradas, setMascotasFiltradas] = useState([]);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const datos = await getDatos(urlMascota);
        setMascotas(datos);
        setMascotasFiltradas(datos); // Inicializa las mascotas filtradas con todos los datos
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };
    obtenerDatos();
  }, []);

  // Filtra las mascotas según la especie seleccionada
  const filters = mascotas.filter((dato) => {
    if (especie === "Todos") return true;
    return dato.especie === especie;
  });

  const handleChange = (e) => {
    e.preventDefault();
    setEspecie(e.target.value); // Actualiza especie con el valor seleccionado
  };

  return (
    <div className="my-4">
      <form className="mb-4">
        <span>Filtra las mascotas por especie: </span>
        <select onChange={handleChange}>
          <option value="Todos">Todos</option>
          <option value="Perro">Perros</option>
          <option value="Gato">Gatos</option>
        </select>
      </form>
      <div className="row align-items-lg-center">
        {filters.map((mascota, index) => (
          <div key={index} className="col-12 col-sm-6 col-lg-3 d-flex">
            <article className="card-mascota mx-auto mb-3 d-flex flex-column">
              <header className="mascota-header">
                <img
                  className="mascota-img"
                  src={mascota.imagen}
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

export default SearchMascota;
