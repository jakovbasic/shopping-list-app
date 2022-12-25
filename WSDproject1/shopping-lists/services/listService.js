import { executeQuery } from "../database/database.js";


const create = async (name) => {
  await executeQuery("INSERT INTO shopping_lists (name) VALUES ($1);", name);
};

const findAllActiveLists = async () => {
  const result = await executeQuery(
    "SELECT * FROM shopping_lists WHERE active = TRUE;",
  );
  return result.rows;
};

const findById = async (id) => {
  const result = await executeQuery("SELECT * FROM shopping_lists WHERE id = $1;", id);
  if (result.rows && result.rows.length > 0) {
    return result.rows[0];
  }

  return { id: 0, name: "Unknown" };
};

const deactivateList = async (id) => {
  await executeQuery("UPDATE shopping_lists SET active = FALSE WHERE id = $1;", id);
};

const listCount = async () => {
  const result = await executeQuery(
    "SELECT * FROM shopping_lists;",
  );
  return result.rows.length;
};

export { create, findAllActiveLists, findById, deactivateList, listCount};