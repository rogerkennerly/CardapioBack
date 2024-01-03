const knex = require("../database/knex");

class IngredientsController {
  async show(request, response) {
    const { id } = request.params;

    const ingredients = await knex("ingredients").where({ id }).first();

    response.json(ingredients);
  }

  async index(request, response) {
    const ingredients = await knex("ingredients");

    response.json(ingredients);
  }
}

module.exports = IngredientsController;
