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
    <Container className="mt-5" style={{ maxWidth: "600px" }}>
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
        <Button variant="success" type="submit">
          Add Product
        </Button>
        <Button
          variant="secondary"
          className="ms-2"
          onClick={() => navigate("/products")}
        >
          Cancel
        </Button>
      </Form>
    </Container>
  );
}

export default AddProduct;
