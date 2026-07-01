import { useState, useEffect } from "react";
import { Container, Row, Col, Spinner, Alert, Button } from "react-bootstrap";
import axios from "axios";
import ProductCard from "../components/ProductCard";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setFiltered(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load products. Please try again.");
        setLoading(false);
      });
  }, []);

  function handleFilter(category) {
    setActiveCategory(category);
    if (category === "all") {
      setFiltered(products);
    } else if (category === "clothing") {
      setFiltered(
        products.filter(
          (p) =>
            (p.category === "men's clothing" ||
              p.category === "women's clothing") &&
            p.id !== 1,
        ),
      );
    } else if (category === "jewelery") {
      setFiltered(products.filter((p) => p.category === "jewelery"));
    } else if (category === "electronics") {
      setFiltered(products.filter((p) => p.category === "electronics"));
    } else if (category === "accessories") {
      setFiltered(products.filter((p) => p.id === 1));
    }
  }

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
      <h2 className="mb-4">Shop the Edit</h2>

      {/* Category Filter Buttons */}
      <div className="mb-4 d-flex gap-2 flex-wrap">
        {["all", "clothing", "jewelery", "electronics", "accessories"].map(
          (category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "dark" : "outline-dark"}
              onClick={() => handleFilter(category)}
              style={{
                borderRadius: "0",
                letterSpacing: "1px",
                textTransform: "uppercase",
                fontSize: "0.85rem",
              }}
            >
              {category === "all"
                ? "All"
                : category === "clothing"
                  ? "Clothing"
                  : category === "jewelery"
                    ? "Jewelry"
                    : category === "electronics"
                      ? "Electronics"
                      : "Accessories"}
            </Button>
          ),
        )}
      </div>

      <Row>
        {filtered.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductList;
