const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const ProductsController = require("../controllers/ProductsController");

const ensureAuthenticated = require("../middleware/ensureAuthenticated");

const productsRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const productsController = new ProductsController();

productsRoutes.post(
  "/",
  ensureAuthenticated,
  upload.single("img"),
  productsController.create
);
productsRoutes.get("/:id", productsController.show);
productsRoutes.delete("/:id", ensureAuthenticated, productsController.delete);
productsRoutes.get("/", productsController.index);
productsRoutes.patch(
  "/:id",
  ensureAuthenticated,
  upload.single("img"),
  productsController.update
);

module.exports = productsRoutes;
