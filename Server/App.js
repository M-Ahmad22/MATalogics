const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const requestPricingRoutes = require("./Routes/requestPricingRoutes");
const applicationRoutes = require("./Routes/applicationRoutes");
const bookingRoutes = require("./Routes/bookCallRoutes");
const getQuoteRoutes = require("./Routes/getQuoteRoutes");
const authRoutes = require("./Routes/authRoutes");

const app = express();

const allowedOrigins = [
  process.env.FRONTEND_URL,
  process.env.ADMIN_FRONTEND_URL,
  "https://www.matalogics.com",
  "https://matalogics-admin.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like Postman or server-to-server)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
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
app.use("/api/apply", applicationRoutes);
app.use("/api/book-call", bookingRoutes);
app.use("/api/get-quote", getQuoteRoutes);
app.use("/api/auth", authRoutes);

module.exports = app;
