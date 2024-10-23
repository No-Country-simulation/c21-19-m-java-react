import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function BarraNav() {
  return (
    <Navbar
      expand="lg"
      className="bg-second-alpha-color container"
      sticky="top"
    >
      <Container>
        <Navbar.Brand className="img-brand" href="/">
          <img src="/icon.png" alt="colitas felices icono" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-link" href="/inicio">
              Inicio
            </Nav.Link>
            <Nav.Link className="nav-link" href="/mascotas">
              Mascotas
            </Nav.Link>
            <Nav.Link className="nav-link" href="/nosotros">
              Nosotros
            </Nav.Link>
            <Nav.Link className="nav-link" href="/contacto">
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BarraNav;
