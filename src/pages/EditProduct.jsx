import { useState, useEffect } from "react";
import { Container, Form, Button, Alert, Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
  });
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        const { title, price, description, category } = response.data;
        setFormData({ title, price, description, category });
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load product.");
        setLoading(false);
      });
  }, [id]);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .put(`https://fakestoreapi.com/products/${id}`, formData)
      .then(() => setSuccess(true))
      .catch(() => setError("Failed to update product."));
  }

  if (loading)
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
      </Container>
    );

  return (
    <Container className="mt-5" style={{ maxWidth: "600px" }}>
      <h2 className="mb-4">Edit Product</h2>
      {success && (
        <Alert variant="success">Product updated successfully!</Alert>
      )}
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="warning" type="submit">
          Update Product
        </Button>
        <Button
          variant="secondary"
          className="ms-2"
          onClick={() => navigate(`/products/${id}`)}
        >
          Cancel
        </Button>
      </Form>
    </Container>
  );
}

export default EditProduct;
