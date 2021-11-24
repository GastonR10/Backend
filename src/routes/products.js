const express = require("express");

const { getProducts, newProduct, updateProd } = require("../controllers/products");

const router = express.Router();

router.get("/", getProducts);

router.post("/", newProduct);

router.put("/:id", updateProd);


module.exports = router;