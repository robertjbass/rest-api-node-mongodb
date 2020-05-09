const productService = require("../service/productService");

module.exports.createProduct = async (req, res) => {
  let response = {};
  try {
    // Returns data to client
    const responseFromService = await productService.createProduct(req.body);
    response.status = 200;
    response.message = "Product Created Successfully";
    response.body = responseFromService;
  } catch (error) {
    console.log("Something went wrong: Controller: productController", error);
    response.status = 400;
    response.message = error.message;
    response.body = responseFromService;
  }
  // Send full response object
  return res.status(response.status).send(response);
};
