import SearchMascota from "../components/Mascotas/SearchMascota";

const Mascotas = ({adoptante}) => {
  return (
    <>
      <section className="container">
        <h2 className="mt-4">Conoce a tu nuevo mejor amigo</h2>
        <SearchMascota usuario={adoptante}/>
      </section>
    </>
  );
};

export default Mascotas;
