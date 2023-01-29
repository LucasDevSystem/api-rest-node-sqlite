const itemModel = require("../models/item");

//   CREATE
async function createItem(item = {}) {
  return itemModel.create(item);
}

// READ
async function listItems() {
  const items = await itemModel.findAll();
  return items;
}

async function getItem(id = "") {
  return itemModel.findOne({ where: { id } });
}

// UPDATE
async function updateItem(id = Number, item = {}) {
  return await itemModel.update(item, { where: { id } });
}

// DELETE
async function deleteItem(id = Number) {
  return itemModel.destroy({ where: { id } });
}

module.exports = { createItem, getItem, listItems, updateItem, deleteItem };
