const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    brand: String
  },
  {
    timestamps: true
  }
);

mongoose.exports = mongoose.model("Product", productSchema);
