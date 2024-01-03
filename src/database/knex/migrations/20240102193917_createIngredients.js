exports.up = (knex) =>
  knex.schema.createTable("ingredients", (table) => {
    table.increments("id");
    table.text("name");
    table
      .integer("product_id")
      .references("id")
      .inTable("products")
      .onDelete("CASCADE");
    table.text("image");
  });

exports.down = (knex) => knex.schema.dropTable("ingredients");
