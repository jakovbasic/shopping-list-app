import * as itemService from "../services/itemService.js";
import * as requestUtils from "../utils/requestUtils.js";

const createItem = async (request) => {
  const formData = await request.formData();
  const itemName = formData.get("name");
  const url = new URL(request.url);
  const urlParts = url.pathname.split("/");
  await itemService.createItem(urlParts[2],itemName);

  return requestUtils.redirectTo(`/lists/${urlParts[2]}`);
};

const collectItem = async (request) => {
    const url = new URL(request.url);
    const urlParts = url.pathname.split("/");
    await itemService.collectItem(urlParts[2], urlParts[4]);
  
    return requestUtils.redirectTo(`/lists/${urlParts[2]}`);
  };

export { createItem , collectItem };