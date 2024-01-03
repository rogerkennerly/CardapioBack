const { Router } = require("express");

const usersRouter = require("./users.routes");
const productsRouter = require("./products.routes");
const ingredientsRouter = require("./ingredients.routes");

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/products", productsRouter);
routes.use("/ingredients", ingredientsRouter);

module.exports = routes;
