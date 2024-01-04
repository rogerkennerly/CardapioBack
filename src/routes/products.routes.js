const { Router } = require("express");

const ProductsController = require("../controllers/ProductsController");

const ensureAuthenticated = require("../middleware/ensureAuthenticated");

const productsRoutes = Router();

const productsController = new ProductsController();

productsRoutes.post("/", ensureAuthenticated, productsController.create);
productsRoutes.get("/:id", productsController.show);
productsRoutes.delete("/:id", ensureAuthenticated, productsController.delete);
productsRoutes.get("/", productsController.index);
productsRoutes.put("/:id", ensureAuthenticated, productsController.update);

module.exports = productsRoutes;
