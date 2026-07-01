import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  Spinner,
  Alert,
  Modal,
} from "react-bootstrap";
import axios from "axios";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load product.");
        setLoading(false);
      });
  }, [id]);

  function handleDelete() {
    axios
      .delete(`https://fakestoreapi.com/products/${id}`)
      .then(() => {
        setShowModal(false);
        navigate("/products");
      })
      .catch(() => setError("Failed to delete product."));
  }

  if (loading)
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
      </Container>
    );

  if (error)
    return (
      <Container className="mt-5">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );

  return (
    <Container className="mt-5">
      <Row>
        <Col md={4} className="text-center">
          <img
            src={product.image}
            alt={product.title}
            style={{ maxHeight: "300px", objectFit: "contain" }}
            className="img-fluid"
          />
        </Col>
        <Col md={8}>
          <h2>{product.title}</h2>
          <p className="text-muted">{product.category}</p>
          <h4 className="text-success">${product.price}</h4>
          <p>{product.description}</p>
          <div className="d-flex gap-2 flex-wrap mt-3">
            <Button
              onClick={() => setAddedToCart(true)}
              style={{
                background: addedToCart ? "#333" : "#1a1a1a",
                border: "none",
                borderRadius: "0",
                letterSpacing: "2px",
                textTransform: "uppercase",
                fontSize: "0.85rem",
                padding: "12px 24px",
              }}
            >
              {addedToCart ? "✓ Added to Cart" : "Add to Cart"}
            </Button>
            <Button
              onClick={() => navigate(`/edit-product/${id}`)}
              style={{
                background: "transparent",
                border: "2px solid #1a1a1a",
                color: "#1a1a1a",
                borderRadius: "0",
                letterSpacing: "2px",
                textTransform: "uppercase",
                fontSize: "0.85rem",
                padding: "12px 24px",
              }}
            >
              Edit
            </Button>
            <Button
              onClick={() => setShowModal(true)}
              style={{
                background: "transparent",
                border: "2px solid #dc3545",
                color: "#dc3545",
                borderRadius: "0",
                letterSpacing: "2px",
                textTransform: "uppercase",
                fontSize: "0.85rem",
                padding: "12px 24px",
              }}
            >
              Delete
            </Button>
            <Button
              onClick={() => navigate("/products")}
              style={{
                background: "transparent",
                border: "2px solid #999",
                color: "#999",
                borderRadius: "0",
                letterSpacing: "2px",
                textTransform: "uppercase",
                fontSize: "0.85rem",
                padding: "12px 24px",
              }}
            >
              Back
            </Button>
          </div>
        </Col>
      </Row>

      {/* Delete Confirmation Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete <strong>{product.title}</strong>?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default ProductDetails;
