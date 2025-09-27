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

// Connect to MongoDB once during cold start
connectDB().then(() => console.log("MongoDB connected"));

// ROUTES aligned with your frontend
app.use("/api/applications", require("./Routes/applicationRoutes")); // /job-applications inside route
app.use("/api/book-call", require("./Routes/bookCallRoutes")); // /book-call inside route
app.use("/api/get-quote", require("./Routes/getQuoteRoutes")); // /get-quote inside route
app.use("/api/request-pricing", require("./Routes/requestPricingRoutes")); // / request inside route

// Static uploads
// app.use("/uploads", express.static("uploads"));

// Root endpoint
app.get("/", (req, res) => res.send("Backend API is running."));
app.get("/favicon.ico", (req, res) => res.status(204).end());

module.exports = app;
