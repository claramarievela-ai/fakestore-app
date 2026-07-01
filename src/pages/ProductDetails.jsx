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
          <Button
            variant="warning"
            className="me-2"
            onClick={() => navigate(`/edit-product/${id}`)}
          >
            Edit Product
          </Button>
          <Button
            variant="danger"
            className="me-2"
            onClick={() => setShowModal(true)}
          >
            Delete Product
          </Button>
          <Button variant="secondary" onClick={() => navigate("/products")}>
            Back to Products
          </Button>
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
