const express = require("express");
const dotEnv = require("dotenv");

dotEnv.config();

const app = express();

app.get("/", (req, res, next) => {
  res.send("Hello World");
});

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});
