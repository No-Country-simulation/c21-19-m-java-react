import Header from "../../components/Header";
import CardMascota from "./CardMascota";

const Mascotas = () => {
  return (
    <>
      <Header />
      <section className="container">
        <h2 className="mt-4">Conoce a tu nuevo mejor amigo</h2>
        <div className="filter m-4">
          <input type="text" placeholder="Busca una mascota..." />
          <button className="mx-4 btn btn-success">Buscar</button>
        </div>
        <CardMascota />
      </section>
    </>
  );
};

export default Mascotas;
