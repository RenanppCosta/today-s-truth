const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv")
const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());


app.listen(3000, () => console.log("Servidor Rodando na porta 3000!"));

