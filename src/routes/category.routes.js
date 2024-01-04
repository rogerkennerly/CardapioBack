const Router = require("express");

const CategoryController = require("../controllers/CategoryController");

const ensureAuthenticated = require("../middleware/ensureAuthenticated");

const categoryRoutes = new Router();

const categoryController = new CategoryController();

categoryRoutes.post("/", ensureAuthenticated, categoryController.create);
categoryRoutes.put("/", ensureAuthenticated, categoryController.update);
categoryRoutes.get("/:id", categoryController.show);
categoryRoutes.get("/", categoryController.index);
categoryRoutes.delete("/:id", ensureAuthenticated, categoryController.delete);

module.exports = categoryRoutes;
