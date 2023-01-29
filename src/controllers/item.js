const itemService = require("../services/item");

//   CREATE
async function createItem(req, res, next) {
  try {
    const result = await itemService.createItem({
      nome: req.body.nome,
      valor: req.body.valor,
    });
    res.send(result);
  } catch (error) {
    console.log("Erro no cadastro do item", JSON.stringify(err));
    return res.status(400).send(err);
  }
}
// READ
async function listItems(req, res, next) {
  try {
    const items = await itemService.listItems();
    res.send(items);
  } catch (err) {
    console.log("Erro na consulta", JSON.stringify(err));
    return res.send(err);
  }
}

async function getItem(req, res, next) {
  const item = await itemService.getItem(req.params.id);
  res.send(item);
}

// UPDATE
async function updateItem(req, res, next) {
  try {
    ret = await itemController.updateItem(req.params.id, req.body);
    res.send(ret);
  } catch (err) {
    next(err);
  }
}

// DELETE
async function deleteItem(req, res, next) {
  try {
    const result = await itemService.deleteItem(req.params.id);
    res.send(result);
  } catch (err) {
    next(err);
  }
}

module.exports = { createItem, getItem, listItems, updateItem, deleteItem };
