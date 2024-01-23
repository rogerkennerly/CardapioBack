const knex = require("../database/knex");

const DiskStorage = require("../providers/DiskStorage");

const diskStorage = new DiskStorage();

class ProductsController {
  async create(request, response) {
    const { name, description, price, category_id, ingredients } = request.body;

    const [product_id] = await knex("products").insert({
      name,
      description,
      price,
      category_id,
    });

    console.log(request.body, request.file);

    if (request.file) {
      const img = request.file.filename;

      await diskStorage.saveFile(img);

      await knex("products").update({ image: img }).where({ id: product_id });
    }

    if (ingredients) {
      const ingredientsList = ingredients.split(",");
      const ingredientsInsert = ingredientsList.map((ingredient) => {
        return {
          product_id,
          name: ingredient,
        };
      });

      await knex("ingredients").insert(ingredientsInsert);
    }

    response.json("Produto cadastrado com sucesso.");
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

    const product = await knex("products").where({ id }).first();
    console.log(product);

    await knex("products").delete().where({ id });

    await diskStorage.deleteFile(product.image);

    response.status(201).json("Produto deletado.");
  }

  async index(request, response) {
    const { name, ingredients, category_id } = request.query;

    let products;

    if (category_id) {
      if (name) {
        products = await knex("ingredients")
          .select(["products.*"])
          .where("products.category_id", category_id)
          .andWhere(function () {
            this.andWhereLike("products.name", `%${name}%`).orWhereLike(
              "ingredients.name",
              `%${name}%`
            );
          })
          .innerJoin("products", "products.id", "ingredients.product_id")
          .groupBy("products.id");
      } else {
        products = await knex("products").where({ category_id });
      }
    } else if (ingredients) {
      const filterIngredients = ingredients
        .split(",")
        .map((ingredient) => ingredient.trim());

      products = await knex("ingredients")
        .select(["products.*"])
        .whereLike("products.name", `%${name}%`)
        .whereIn("ingredients.name", filterIngredients)
        .innerJoin("products", "products.id", "ingredients.product_id");
    } else if (name) {
      products = await knex("products").whereLike("name", `%${name}%`);
    } else {
      products = await knex("products");
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

  async update(request, response) {
    const { id } = request.params;

    const product = await knex("products").where({ id }).first();

    if (!product) {
      response.status(400).json("Produto não encontrado");
    } else {
      //se encontrou o produto verifica a imagem
      if (request.file) {
        const img = request.file.filename;

        if (product.image) {
          await diskStorage.deleteFile(product.image);
        }
        const image = await diskStorage.saveFile(img);
        await knex("products").update({ image }).where({ id });
      }

      const { name, description, price, category_id } = request.body;
      await knex("products")
        .update({
          name,
          description,
          price,
          category_id,
          updated_at: knex.fn.now(),
        })
        .where({ id });
      response.json("Produto atualizado com sucesso!");
    }
    response.status(400).json();
  }
}

module.exports = ProductsController;
