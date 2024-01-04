const knex = require("../database/knex");

class CategoryController {
  async create(request, response) {
    const { name } = request.bodys;

    await knex("categories").insert({ name });
    response.status(201).json(`Categoria ${name} cadastrada.`);
  }

  async update(request, response) {
    const { id, name } = request.body;

    const category_id = await knex("categories").where({ id });

    if (category_id.length > 0) {
      await knex("categories")
        .update({ name: name, updated_at: knex.fn.now() })
        .where({ id });
      response.json("Categoria atualizada.");
    } else {
      response.status(400).json("Categoria não encontrada");
      console.log(category_id);
      console.log(category_id.length);
    }

    response.status(400).json();
  }

  async show(request, response) {
    const { id } = request.params;

    const category = await knex("categories").where({ id });

    response.json(category);
  }

  async index(request, response) {
    const categories = await knex("categories");

    response.json(categories);
  }

  async delete(request, response) {
    const { id } = request.params;

    await knex("categories").delete().where({ id });

    response.json("Categoria removida.");
  }
}

module.exports = CategoryController;
