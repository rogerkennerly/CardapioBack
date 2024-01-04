const { Router } = require("express");

const ProductsController = require("../controllers/ProductsController");

const productsRoutes = Router();

const productsController = new ProductsController();

productsRoutes.post("/", productsController.create);
productsRoutes.get("/:id", productsController.show);
productsRoutes.delete("/:id", productsController.delete);
productsRoutes.get("/", productsController.index);
productsRoutes.put("/:id", productsController.update);

module.exports = productsRoutes;
