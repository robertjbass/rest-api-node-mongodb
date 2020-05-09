const mongoose = require("mongoose");

const productSchema = new mongoose.schema(
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
