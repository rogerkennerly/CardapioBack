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

  async show(request, response) {
    const { id } = request.params;

    const product = await knex("products").where({ id }).first();
    const ingredients = await knex("ingredients")
      .where({ product_id: id })
      .orderBy("name");

    return response.json({
      ...product,
      ingredients,
    });
  }

  async delete(request, response) {
    const { id } = request.params;

    await knex("products").delete().where({ id });

    response.status(201).json("Produto deletado.");
  }

  async index(request, response) {
    const { name, ingredients } = request.query;

    let products;

    if (ingredients) {
      const filterIngredients = ingredients
        .split(",")
        .map((ingredient) => ingredient.trim());

      products = await knex("ingredients")
        .select(["products.*"])
        .whereLike("products.name", `%${name}%`)
        .whereIn("ingredients.name", filterIngredients)
        .innerJoin("products", "products.id", "ingredients.product_id");
    } else {
      products = await knex("products").whereLike("name", `%${name}%`);
    }

    const ingredientsList = await knex("ingredients");

    const ProductsWithIngredients = products.map((product) => {
      const productsIngredients = ingredientsList.filter(
        (ingredient) => ingredient.product_id === product.id
      );

      return {
        ...product,
        ingredients: productsIngredients,
      };
    });

    response.json(ProductsWithIngredients);
  }
}

module.exports = ProductsController;
