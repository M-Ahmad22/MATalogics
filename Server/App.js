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

// Connect to DB once at startup
connectDB();

// Routes
app.use("/api/request-pricing", require("./Routes/requestPricingRoutes"));
app.use("/api/applications", require("./Routes/applicationRoutes"));
app.use("/api", require("./Routes/bookCallRoutes"));
app.use("/api", require("./Routes/getQuoteRoutes"));
app.use("/api/auth", require("./Routes/authRoutes"));
app.use("/uploads", express.static("uploads"));

// Root route
app.get("/", (req, res) => res.send("Backend API is running."));

module.exports = app;
