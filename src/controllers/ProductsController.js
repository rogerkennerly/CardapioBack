const knex = require("../database/knex");

class ProductsController {
  async create(request, response) {
    const { name, description, price, category_id, image, ingredients } =
      request.body;

    const [product_id] = await knex("products").insert({
      name,
      description,
      price,
      category_id,
      image,
    });

    const ingredientsInsert = ingredients.map((ingredient) => {
      return {
        product_id,
        name: ingredient,
      };
    });

    await knex("ingredients").insert(ingredientsInsert);

    response.json();
  }
}

module.exports = ProductsController;
