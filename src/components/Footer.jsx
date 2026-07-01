import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer
      style={{
        background: "#1a1a1a",
        color: "white",
        padding: "40px 20px",
        marginTop: "auto",
        textAlign: "center",
      }}
    >
      <Container>
        <h5
          style={{
            letterSpacing: "3px",
            textTransform: "uppercase",
            marginBottom: "8px",
          }}
        >
          C. Edit Shop
        </h5>
        <p style={{ opacity: 0.6, fontSize: "0.9rem", letterSpacing: "1px" }}>
          Try on the Greats
        </p>
        <p style={{ opacity: 0.4, fontSize: "0.8rem", marginTop: "20px" }}>
          © 2026 C. Edit Shop. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
