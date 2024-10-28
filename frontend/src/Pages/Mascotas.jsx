import Header from "../components/Header";
import CardMascota from "../components/Mascotas/CardMascota";
import SearchMascota from "../components/Mascotas/SearchMascota";

const Mascotas = () => {
  return (
    <>
      <section className="container">
        <h2 className="mt-4">Conoce a tu nuevo mejor amigo</h2>
        <SearchMascota />
        <CardMascota />
      </section>
    </>
  );
};

export default Mascotas;
