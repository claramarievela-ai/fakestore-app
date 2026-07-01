import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={product.image}
        style={{ height: "200px", objectFit: "contain", padding: "1rem" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title style={{ fontSize: "0.9rem" }}>
          {product.title.substring(0, 50)}...
        </Card.Title>
        <Card.Text className="text-success fw-bold">${product.price}</Card.Text>
        <Button
          variant="primary"
          className="mt-auto"
          onClick={() => navigate(`/products/${product.id}`)}
        >
          View Details
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
