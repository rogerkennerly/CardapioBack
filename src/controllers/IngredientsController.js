const knex = require("../database/knex");

class IngredientsController {
  async show(request, response) {
    const { id, product_id } = request.params;

    let ingredients;

    if (product_id) {
      ingredients = await knex("ingredients").where({ product_id });
    } else {
      ingredients = await knex("ingredients").where({ id }).first();
    }

    response.json(ingredients);
  }

  async index(request, response) {
    const ingredients = await knex("ingredients");

    response.json(ingredients);
  }
}

module.exports = IngredientsController;
