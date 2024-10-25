import { useEffect, useState } from "react";
import Header from "../components/Header";
import { getDatos } from "../utils/apiHandler";
import { urlMascota } from "../utils/urls";

const Mascotas = () => {

  const [mascotas, setMascotas] = useState([]);

  useEffect(() => {
    const obtenerDatos = async() => {
      try {        
        const datos = await getDatos(urlMascota);
        console.log(datos)
        setMascotas(datos);
      } catch (error) {
        console.error("Error al obtener los datos:", error)
      }
    }
    obtenerDatos();
  },[]);

  return (
    <>
      <Header />
      {
        mascotas.map((mascota, index) => (
          <div key={index}>
            Imagen:{mascota.imagen}
            Nombre:{mascota.nombre} 
            <div> Categoria
              Raza:{mascota.raza} 
              Especie:{mascota.especie} 
            </div>
            Descripcion:{mascota.descripcion}
            Medida: {mascota.medida}
          </div>
        ))
      }
    </>
  );
};

export default Mascotas;
