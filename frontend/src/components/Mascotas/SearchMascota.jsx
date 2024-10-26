import React, { useRef } from "react";

const SearchMascota = () => {
  /* const inputMascota = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputMascota.current.value);
  }; */

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="my-4">
      <form /* onSubmit={handleSubmit} */>
        {/*  <input
          ref={inputMascota}
          type="text"
          placeholder="Busca una mascota..."
        />
        <button className="mx-4 btn btn-success">Buscar</button> */}
        <span>Filtra las mascotas por categoría: </span>
        <select onChange={handleChange}>
          <option value="Categoria">Todos</option>
          <option value="Perros">Perros</option>
          <option value="Gatos">Gatos</option>
        </select>
      </form>
    </div>
  );
};

export default SearchMascota;
