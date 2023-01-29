const express = require("express");
const itemController = require("./controllers/item");
const router = express.Router();

router.get("/items", itemController.listItems);
router.get("/items/:id", itemController.getItem);

router.delete("/items/:id", itemController.deleteItem);
router.patch("/items/:id", itemController.updateItem);
router.post("/items", itemController.createItem);

module.exports = router;
