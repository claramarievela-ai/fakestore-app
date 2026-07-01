import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Banner */}
      <div
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100%",
          position: "relative",
          display: "flex",
          alignItems: "flex-end",
          padding: "60px",
          marginTop: "-1px",
        }}
      >
        {/* Dark overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.4)",
          }}
        />

        {/* Text content */}
        <div style={{ position: "relative", zIndex: 1, color: "white" }}>
          <p
            style={{
              fontSize: "1rem",
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "8px",
              opacity: 0.8,
            }}
          >
            C. Edit Shop
          </p>
          <h1
            style={{
              fontSize: "4rem",
              fontWeight: "bold",
              lineHeight: 1.1,
              marginBottom: "20px",
            }}
          >
            Try on the Greats
          </h1>
          <Button
            variant="outline-light"
            size="lg"
            onClick={() => navigate("/products")}
            style={{
              borderRadius: "0",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
