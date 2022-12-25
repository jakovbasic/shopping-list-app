import { executeQuery } from "../database/database.js";

const createItem = async (list_id, item_name) => {
  await executeQuery(
    "INSERT INTO shopping_list_items (shopping_list_id, name) VALUES ($1, $2);",
    list_id,
    item_name,
  );
};

const findListItems = async (list_id) => {
  const result = await executeQuery(
    "SELECT * FROM shopping_list_items WHERE shopping_list_id = $1;",
    list_id,
  );

  if (result.rows && result.rows.length > 0) {
    return result.rows;
  }

  return false;
};

const collectItem = async (list_id, id) => {
  await executeQuery(
    "UPDATE shopping_list_items SET collected = TRUE WHERE id = $1 AND shopping_list_id = $2;",
    id,
    list_id,
  );
};

const itemCount = async () => {
  const result = await executeQuery(
    "SELECT * FROM shopping_list_items;",
  );
  return result.rows.length;
};

export { collectItem, createItem, findListItems, itemCount };
