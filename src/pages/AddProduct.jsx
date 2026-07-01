import { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddProduct() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("https://fakestoreapi.com/products", formData)
      .then(() => {
        setSuccess(true);
        setFormData({ title: "", price: "", description: "", category: "" });
      })
      .catch(() => setError("Failed to add product. Please try again."));
  }

  return (
    <Container className="mt-5 mb-5" style={{ maxWidth: "600px" }}>
      <h2 className="mb-4">Add New Product</h2>
      {success && <Alert variant="success">Product added successfully!</Alert>}
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
        <div className="d-flex gap-2 mt-3">
          <Button
            type="submit"
            style={{
              background: "#1a1a1a",
              border: "none",
              borderRadius: "0",
              letterSpacing: "2px",
              textTransform: "uppercase",
              fontSize: "0.85rem",
              padding: "12px 24px",
            }}
          >
            Add Product
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
            Cancel
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default AddProduct;
