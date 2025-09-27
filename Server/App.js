const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const connectDB = require("./db");

const app = express();

// ===== MIDDLEWARE LOGGING =====
console.log("Initializing middlewares...");

app.use((req, res, next) => {
  console.log(`[Request] ${req.method} ${req.url}`);
  next();
});

app.use(helmet());
console.log("Helmet applied");

app.use(express.json());
console.log("JSON parser applied");

app.use(compression());
console.log("Compression applied");

app.use(
  cors({
    origin: [process.env.FRONTEND_URL, process.env.ADMIN_FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
console.log("CORS applied");

// ===== DATABASE CONNECTION =====
console.log("Connecting to MongoDB...");
connectDB()
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection failed:", err));

// ===== ROUTES =====
try {
  console.log("Setting up routes...");

  app.use("/api/applications", require("./Routes/applicationRoutes"));
  console.log("/api/applications route loaded");

  app.use("/api/book-call", require("./Routes/bookCallRoutes"));
  console.log("/api/book-call route loaded");

  app.use("/api/get-quote", require("./Routes/getQuoteRoutes"));
  console.log("/api/get-quote route loaded");

  app.use("/api/request-pricing", require("./Routes/requestPricingRoutes"));
  console.log("/api/request-pricing route loaded");
} catch (err) {
  console.error("Error while loading routes:", err);
}

// ===== ROOT =====
app.get("/", (req, res) => {
  console.log("Root endpoint hit");
  res.send("Backend API is running.");
});

// Prevent crashes on favicon
app.get("/favicon.ico", (req, res) => {
  console.log("Favicon requested");
  res.status(204).end();
});

module.exports = app;
