const { Router } = require("express");

const IngredientsController = require("../controllers/IngredientsController");

const ingredientsRoutes = Router();

const ingredientsController = new IngredientsController();

ingredientsRoutes.get("/", ingredientsController.index);
ingredientsRoutes.get("/:id", ingredientsController.show);
ingredientsRoutes.get("/product_id/:product_id", ingredientsController.show);

module.exports = ingredientsRoutes;
