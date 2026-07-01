import { useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

function Home() {
  const navigate = useNavigate();

  return (
    <Container className="text-center mt-5">
      <h1>Welcome to FakeStore 🛍️</h1>
      <p className="lead mt-3">
        Browse our collection of products, add new ones, or manage existing
        items.
      </p>
      <Button
        variant="primary"
        size="lg"
        className="mt-3"
        onClick={() => navigate("/products")}
      >
        Browse Products
      </Button>
    </Container>
  );
}

export default Home;
