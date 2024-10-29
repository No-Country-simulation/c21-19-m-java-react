import { useLocation } from "react-router-dom";

const MascotasForm = () => {
  const location = useLocation();
  const mascota = location.state?.mascota;

  return (
    <div className="container">
      <article className="col-12 col-lg-6 order-lg-1">
        <h3 className="mt-4">
          {mascota
            ? `${mascota.nombre} será tu próximo(a) mejor amigo(a)`
            : "Formulario de Adopción"}
        </h3>

        <form
          action="https://formsubmit.co/marcelyepesqf@gmail.com"
          method="POST"
        >
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Nombre:
            </label>
            <input
              className="form-control"
              id="name"
              name="name"
              placeholder="Escribe tu nombre"
              type="text"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Correo:
            </label>
            <input
              className="form-control"
              id="email"
              name="email"
              placeholder="Escribe tu correo"
              type="email"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="comments">
              Comentarios:
            </label>
            <textarea
              cols="5"
              className="form-control"
              id="comments"
              name="comments"
              placeholder="Déjanos tus comentarios"
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <input className="btn btn-lg btn-success" type="submit" />
            <input
              type="hidden"
              name="_next"
              value="http://localhost:5173/gracias"
            />
            <input
              type="hidden"
              name="_subject"
              value="Comentario de Colitas Felices"
            />
          </div>
        </form>
      </article>
    </div>
  );
};

export default MascotasForm;
