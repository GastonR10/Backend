const express = require("express");


const { getProducts, newProduct, updateProd } = require("../controllers/products");

const router = express.Router();

router.get("/", getProducts);

// router.get("/", async (req, res) => {
//     const tareas = await db.query("select * from usuario");
  
//     res.send({
//       tareas: tareas.rows,
//     });
//   });

router.post("/", newProduct);

router.put("/:id", updateProd);


module.exports = router;