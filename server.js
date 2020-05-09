const express = require("express");
const dotEnv = require("dotenv");
const cors = require("cors");
const dbConnection = require("./database/connection");

dotEnv.config();

const app = express();

// Database Connection
dbConnection();

// CORS allows for cross origin API calls
app.use(cors());

// Request payload middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add product to MongoDB with POST
// Request Hits Server → Server Forwards API requests to /routes/appendedRoute → Type of HTTP Method is defined in Route → Request Handed off to Controller → Controller Sends Data to Service (productService) and Response to the Client (Insomnia at the moment) → productService inserts data into database (Using Model as a reference) → Result of  Database Read/Write sent back to Controller to respond to client accordingly
app.use("/api/v1/product", require("./routes/productRoutes"));

// Routing
app.get("/", (req, res, next) => {
  res.send("Hello World");
});

const PORT = process.env.PORT || 3000;

// Listen for activity
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
