const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");
const compression = require("compression");
const app = express();

app.use(helmet());

app.use(express.json());
app.use(compression());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use(limiter);

const requestPricingRoutes = require("../Routes/requestPricingRoutes");
const applicationRoutes = require("../Routes/applicationRoutes");
const bookingRoutes = require("../Routes/bookCallRoutes");
const getQuoteRoutes = require("../Routes/getQuoteRoutes");
const authRoutes = require("../Routes/authRoutes");

app.use(
  cors({
    origin: [process.env.FRONTEND_URL, process.env.ADMIN_FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
app.use(express.json());
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Mongo db connected"))
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  res.send("Backend API is running.");
});

app.use("/api/request-pricing", requestPricingRoutes);
app.use("/uploads", express.static("uploads"));
app.use("/api", applicationRoutes);
app.use("/api", bookingRoutes);
app.use("/api", getQuoteRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/auth", authRoutes);

module.exports = app;
