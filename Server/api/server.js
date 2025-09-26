const serverless = require("serverless-http");
const app = require("../App");

module.exports = serverless(app);
