import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <Card
      className="h-100 border-0"
      style={{
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "pointer",
        borderRadius: "0",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div
        style={{
          background: "#f8f8f8",
          padding: "20px",
          height: "220px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card.Img
          variant="top"
          src={product.image}
          style={{ maxHeight: "180px", objectFit: "contain" }}
        />
      </div>
      <Card.Body className="d-flex flex-column px-1 pt-3">
        <p
          style={{
            fontSize: "0.75rem",
            letterSpacing: "1px",
            textTransform: "uppercase",
            color: "#999",
            marginBottom: "4px",
          }}
        >
          {product.category}
        </p>
        <Card.Title style={{ fontSize: "0.9rem", fontWeight: "500" }}>
          {product.title.substring(0, 50)}...
        </Card.Title>
        <p
          style={{
            fontWeight: "bold",
            fontSize: "1rem",
            marginTop: "auto",
            marginBottom: "12px",
          }}
        >
          ${product.price}
        </p>
        <Button
          variant="dark"
          className="w-100"
          onClick={() => navigate(`/products/${product.id}`)}
          style={{
            borderRadius: "0",
            letterSpacing: "2px",
            textTransform: "uppercase",
            fontSize: "0.8rem",
          }}
        >
          View Details
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
