import { useState, useEffect } from "react";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import axios from "axios";
import ProductCard from "../components/ProductCard";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((_err) => {
        setError("Failed to load products. Please try again.");
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
        <p>Loading products...</p>
      </Container>
    );

  if (error)
    return (
      <Container className="mt-5">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );

  return (
    <Container className="mt-4">
      <h2 className="mb-4">All Products</h2>
      <Row>
        {products.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductList;
