import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

function AppNavbar() {
  return (
    <Navbar style={{ background: "#1a1a1a" }} variant="dark" expand="md">
      <Container fluid className="px-4">
        <Navbar.Brand
          as={Link}
          to="/"
          style={{
            letterSpacing: "3px",
            textTransform: "uppercase",
            fontWeight: "bold",
          }}
        >
          C. Edit Shop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav
            className="ms-auto"
            style={{
              letterSpacing: "2px",
              textTransform: "uppercase",
              fontSize: "0.85rem",
            }}
          >
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/products">
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="/add-product">
              Add Product
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
