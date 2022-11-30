import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import ShoppingCart from "../components/Navigation/ShoppingCart";
import HeroButton from "../components/Hero/HeroButton";

export default function Navigation() {
  return (
    <>
      {["md"].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand}>
          <Container fluid>
            <Navbar.Brand href="#">
              <h1>
                <span className="navbar-o">O</span>SIRIS
              </h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <h1 className="offcanvas-title">
                    <span className="navbar-o">O</span>SIRIS
                  </h1>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link id="navbar__link" href="#action1">
                    Home
                  </Nav.Link>
                  <Nav.Link id="navbar__link" href="#action2">
                    About
                  </Nav.Link>
                  <Nav.Link id="navbar__link" href="#action3">
                    Pricing
                  </Nav.Link>
                  <Nav.Link id="navbar__link" href="#action4">
                    <ShoppingCart />
                  </Nav.Link>
                  <Nav.Link>
                    <HeroButton className="navbar__login" buttonText="Login" />
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
