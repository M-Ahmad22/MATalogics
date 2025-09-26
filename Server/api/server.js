const app = require("../App");
// const PORT = process.env.PORT;

// app.listen(PORT, () => {
//   console.log(`Backend Server is running on port ${PORT}`);
// });

// module.exports = app;

// module.exports = (req, res) => {
//   app(req, res);
// };

const serverless = require("serverless-http");
// const app = require("./App");

module.exports = serverless(app);
