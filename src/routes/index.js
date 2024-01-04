const { Router } = require("express");

const usersRouter = require("./users.routes");
const productsRouter = require("./products.routes");
const ingredientsRouter = require("./ingredients.routes");
const categoryRouter = require("./category.routes");
const sessionsRouter = require("./sessions.routes");

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/sessions", sessionsRouter);
routes.use("/products", productsRouter);
routes.use("/ingredients", ingredientsRouter);
routes.use("/category", categoryRouter);

module.exports = routes;
