const Router = require("express");

const CategoryController = require("../controllers/CategoryController");

const categoryRoutes = new Router();

const categoryController = new CategoryController();

categoryRoutes.post("/", categoryController.create);
categoryRoutes.put("/", categoryController.update);
categoryRoutes.get("/:id", categoryController.show);
categoryRoutes.get("/", categoryController.index);
categoryRoutes.delete("/:id", categoryController.delete);

module.exports = categoryRoutes;
