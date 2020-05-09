const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");

// TODO: POST API

router.post("/", productController.createProduct);

module.exports = router;
