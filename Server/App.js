const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const connectDB = require("./db");

const app = express();

// Middlewares
app.use(helmet());
app.use(express.json());
app.use(compression());
app.use(
  cors({
    origin: [process.env.FRONTEND_URL, process.env.ADMIN_FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// Connect DB once on cold start
connectDB().then(() => console.log("MongoDB connected"));

// Routes aligned with your frontend endpoints
app.use("/api/request-pricing", require("./Routes/requestPricingRoutes")); // http://.../api/request-pricing
app.use(
  "/api/applications/job-applications",
  require("./Routes/applicationRoutes")
); // http://.../api/applications/job-applications
app.use("/api/book-call", require("./Routes/bookCallRoutes")); // http://.../api/book-call
app.use("/api/get-quote", require("./Routes/getQuoteRoutes")); // http://.../api/get-quote

// Auth routes (if needed)
app.use("/api/auth", require("./Routes/authRoutes"));

// Static uploads
app.use("/uploads", express.static("uploads"));

// Root route
app.get("/", (req, res) => res.send("Backend API is running."));

module.exports = app;
