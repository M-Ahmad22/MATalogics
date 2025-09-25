import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Toaster
      position="bottom-right"
      reverseOrder={false}
      toastOptions={{
        duration: 5000,
        style: {
          minWidth: "320px",
          maxWidth: "400px",
          padding: "26px 24px",
          borderRadius: "12px",
          boxShadow: "0 10px 20px rgba(0,0,0,0.12)",
          color: "#fff",
          background: "#1D2939",
          fontSize: "18px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          borderBottom: "6px solid",
          overflow: "hidden",
          position: "relative",
        },

        success: {
          duration: 5000,
          style: {
            borderBottomColor: "#4ade80",
            background: "#1D2939",
            color: "#fff",
          },
        },

        error: {
          duration: 5000,
          style: {
            borderBottomColor: "#ef4444",
            background: "#1D2939",
            color: "#fff",
          },
        },
      }}
    />
  </StrictMode>
);
