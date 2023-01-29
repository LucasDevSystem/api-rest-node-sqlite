const express = require("express");
const db = require("./database/db");
const router = require("./routes");
const app = express();

app.use(express.json());

const PORT = 3003;

app.use(router);
db.sync(() => console.log(`Banco de dados conectado:`));
// start listening port
app.listen(PORT, () => {
  console.log(`Servidor iniciado! Porta: ${PORT}`);
});
