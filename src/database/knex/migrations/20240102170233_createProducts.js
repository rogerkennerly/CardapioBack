exports.up = (knex) =>
  knex.schema.createTable("products", (table) => {
    table.increments("id");
    table.text("name");
    table.text("description");
    table.float("price");
    table.integer("category_id");
    table.text("image");

    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
  });

exports.down = (knex) => knex.schema.dropTable("products");
