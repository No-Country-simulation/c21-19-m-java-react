import facebook from "../icons/facebook.svg";
import instagram from "../icons/instagram.svg";
import x from "../icons/x.svg";
import youtube from "../icons/youtube.svg";

export function Footer() {
  return (
    <section className="container text-center mt-5">
      <div className="footer bg-second-alpha-color p-3">
        <img
          className="footer-img"
          src="./icon.png"
          alt="icono colitas felices"
        />
        <nav className="d-flex justify-content-evenly">
          <a href="https://facebook.com" target="_blank">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="https://instagram.com" target="_blank">
            <img src={instagram} alt="instagram" />
          </a>
          <a href="https://x.com" target="_blank">
            <img src={x} alt="x" />
          </a>
          <a href="https://youtube.com" target="_blank">
            <img src={youtube} alt="youtube" />
          </a>
        </nav>
        <small>&copy; 2024 Colitas Felices. Hecho con fines educativos. </small>
      </div>
    </section>
  );
}
