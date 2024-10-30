import facebook from "../icons/facebook.svg";
import instagram from "../icons/instagram.svg";
import x from "../icons/x.svg";
import youtube from "../icons/youtube.svg";

export function Footer() {
  return (
    <section className="text-center mt-5">
      <div className="footer bg-second-alpha-color p-3">
        <img
          className="footer-img"
          src="./icon.png"
          alt="icono colitas felices"
        />
        <nav className="d-flex justify-content-center mt-3">
          <a className="mx-3" href="https://facebook.com" target="_blank">
            <img className="social-icon" src={facebook} alt="facebook" />
          </a>
          <a className="mx-3" href="https://instagram.com" target="_blank">
            <img className="social-icon" src={instagram} alt="instagram" />
          </a>
          <a className="mx-3" href="https://x.com" target="_blank">
            <img className="social-icon" src={x} alt="x" />
          </a>
          <a className="mx-3" href="https://youtube.com" target="_blank">
            <img className="social-icon" src={youtube} alt="youtube" />
          </a>
        </nav>
        <small className="mt-3">
          &copy; 2024 Colitas Felices. Hecho con fines educativos.{" "}
        </small>
      </div>
    </section>
  );
}
