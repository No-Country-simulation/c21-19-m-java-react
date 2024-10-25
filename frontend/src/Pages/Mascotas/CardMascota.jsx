import React, { useState } from "react";

const initialDb = [
  {
    id: 1,
    nombre: "Max",
    descripcion: "Perro muy enérgico y amigable",
    raza: "Golden Retriever",
    edad: "3 años",
    tamano: "Grande",
    categoria: "Perro",
  },
  {
    id: 2,
    nombre: "Luna",
    descripcion: "Gata tranquila y cariñosa",
    raza: "Siamesa",
    edad: "2 años",
    tamano: "Mediano",
    categoria: "Gato",
  },
  {
    id: 3,
    nombre: "Rocky",
    descripcion: "Perro protector y leal",
    raza: "Pastor Alemán",
    edad: "5 años",
    tamano: "Grande",
    categoria: "Perro",
  },
  {
    id: 4,
    nombre: "Mia",
    descripcion: "Gata juguetona y curiosa",
    raza: "Persa",
    edad: "1 año",
    tamano: "Pequeño",
    categoria: "Gato",
  },
  {
    id: 5,
    nombre: "Charlie",
    descripcion: "Perro obediente y muy inteligente",
    raza: "Border Collie",
    edad: "4 años",
    tamano: "Mediano",
    categoria: "Perro",
  },
  {
    id: 6,
    nombre: "Simba",
    descripcion: "Gato independiente y explorador",
    raza: "Maine Coon",
    edad: "6 años",
    tamano: "Grande",
    categoria: "Gato",
  },
  {
    id: 7,
    nombre: "Bella",
    descripcion: "Perra cariñosa y tranquila",
    raza: "Labrador",
    edad: "2 años",
    tamano: "Grande",
    categoria: "Perro",
  },
  {
    id: 8,
    nombre: "Toby",
    descripcion: "Perro juguetón y curioso",
    raza: "Beagle",
    edad: "3 años",
    tamano: "Mediano",
    categoria: "Perro",
  },
  {
    id: 9,
    nombre: "Nina",
    descripcion: "Gata tímida pero muy cariñosa",
    raza: "Ragdoll",
    edad: "2 años",
    tamano: "Mediano",
    categoria: "Gato",
  },
  {
    id: 10,
    nombre: "Rex",
    descripcion: "Perro muy activo y leal",
    raza: "Dóberman",
    edad: "5 años",
    tamano: "Grande",
    categoria: "Perro",
  },
];

const CardMascota = () => {
  const [animals, setAninmals] = useState(initialDb);

  return (
    <div className="row">
      {animals.map((animal) => {
        return (
          <div>
            <h1>Hola mundo</h1>
          </div>
        );
      })}
    </div>
  );
};

export default CardMascota;

/* const CardMascota = () => {
  
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

export default CardMascota;*/
