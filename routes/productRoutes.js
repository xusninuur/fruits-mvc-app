const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

// GET all products
router.get("/products", getAllProducts);

// GET single product
router.get("/products/:id", getProduct);

// CREATE product
router.post("/products", createProduct);

// UPDATE product
router.put("/products/:id", updateProduct);

// DELETE product
router.delete("/products/:id", deleteProduct);

module.exports = router;