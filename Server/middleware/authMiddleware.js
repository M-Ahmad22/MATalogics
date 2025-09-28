const jwt = require("jsonwebtoken");
const User = require("../Models/User");

// Middleware to verify JWT and optional roles
const authMiddleware =
  (roles = []) =>
  async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader)
      return res.status(401).json({ message: "No token provided" });

    const token = authHeader.split(" ")[1]; // Bearer <token>

    try {
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET || "yourSecretKey"
      );
      const user = await User.findById(decoded.id);
      if (!user) return res.status(401).json({ message: "Invalid token" });

      // Check roles if roles array is passed
      if (roles.length && !roles.includes(user.role)) {
        return res.status(403).json({ message: "Forbidden" });
      }

      req.user = user;
      next();
    } catch (err) {
      res.status(401).json({ message: "Invalid token" });
    }
  };

module.exports = authMiddleware;
