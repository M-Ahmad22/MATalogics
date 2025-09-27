const serverless = require("serverless-http");
const app = require("../App");

console.log("Serverless handler initialized");

module.exports = serverless(app);
