import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

function AppNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <Navbar.Brand as={Link} to="/">
          FakeStore
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto">
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
