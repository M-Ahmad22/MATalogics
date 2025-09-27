// const app = require("./App");
// const PORT = process.env.PORT;

// app.listen(PORT, () => {
//   console.log(`Backend Server is running on port ${PORT}`);
// });

// const serverless = require("serverless-http");
// module.exports = serverless(app);

const serverless = require("serverless-http");
const app = require("./App");

module.exports = serverless(app);
