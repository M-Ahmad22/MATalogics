const mongoose = require("mongoose");
let isConnected;

const connectDB = async () => {
  if (isConnected) {
    console.log("Using existing DB connection");
    return;
  }
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  isConnected = mongoose.connection.readyState;
  console.log("MongoDB connected");
};

module.exports = connectDB;
