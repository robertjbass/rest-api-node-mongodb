const Product = require("../database/models/productModel");

// Creates a promise
module.exports.createProduct = async (serviceData) => {
  // Spreads values of serviceData into individual variables
  try {
    let product = new Product({ ...serviceData });
    // .save() method will instert the data into the model
    return await product.save();
  } catch (error) {
    console.log("Something went wrong: Service: createProduct", error);
    throw new Error(error);
  }
};
