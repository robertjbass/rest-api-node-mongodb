const express = require("express");
const dotEnv = require("dotenv");
const cors = require("cors");

dotEnv.config();

const app = express();

// CORS allows for cross origin API calls
app.use(cors());

// Create Middleware
const myMiddleware = (req, res, next) => {
  console.log("Sample");
  next();
};

// Request Payload Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  res.send("Hello World");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});

// Global error handling middleware
// Errors will fall-back here if they're missed elsewhere
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send({
    status: 500,
    message: err.message,
    body: {}
  });
});
