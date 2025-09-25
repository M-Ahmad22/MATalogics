import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#ffffff", // background-color same as bg-background
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          textAlign: "center",
          maxWidth: "28rem",
          margin: "0 auto",
          padding: "0 1rem",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div
            style={{
              fontSize: "6rem",
              fontWeight: "700",
              fontFamily: "'Outfit', sans-serif",
              background: "linear-gradient(to right, #0045E6, #4299e1)", // same as gradient-text
              WebkitBackgroundClip: "text",
              color: "transparent",
              marginBottom: "1rem",
            }}
          >
            404
          </div>

          <h1
            style={{
              fontSize: "1.875rem",
              fontWeight: "700",
              fontFamily: "'Outfit', sans-serif",
              color: "#1E1D28", // foreground color
              marginBottom: "1rem",
            }}
          >
            Page Not Found
          </h1>

          <p
            style={{
              fontSize: "1.125rem",
              color: "#6B7280", // muted-foreground gray
              marginBottom: "2rem",
            }}
          >
            The page you're looking for doesn't exist or has been moved.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              justifyContent: "center",
            }}
          >
            <Link
              to="/"
              style={{
                background: "linear-gradient(to right, #0045E6, #4299e1)",
                color: "#ffffff",
                padding: "0.75rem 1.5rem",
                borderRadius: "0.5rem",
                fontWeight: "500",
                fontFamily: "'Montserrat', sans-serif",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                gap: "0.5rem",
                transition: "box-shadow 0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 0 20px rgba(66,153,225,0.3)")
              }
              onMouseOut={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              <Home style={{ width: "1.25rem", height: "1.25rem" }} />
              <span>Back to Home</span>
            </Link>

            <button
              onClick={() => window.history.back()}
              style={{
                border: "2px solid #0045E6",
                color: "#0045E6",
                padding: "0.75rem 1.5rem",
                borderRadius: "0.5rem",
                fontWeight: "500",
                fontFamily: "'Montserrat', sans-serif",
                background: "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                cursor: "pointer",
                transition: "background 0.3s ease, color 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "#0045E6";
                e.currentTarget.style.color = "#ffffff";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#0045E6";
              }}
            >
              <ArrowLeft style={{ width: "1.25rem", height: "1.25rem" }} />
              <span>Go Back</span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
