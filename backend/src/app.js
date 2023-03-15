const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv")
const app = express();
const userRouter = require("./router/UserRouter");
const newsRouter = require("./router/NewsRouter");
const categoryRouter = require("./router/CategoryRouter");

dotenv.config();
app.use(cors());
app.use(express.json());

app.use("/user", userRouter);
app.use("/news", newsRouter);
app.use("/category", categoryRouter);


app.listen(3000, () => console.log("Servidor Rodando na porta 3000!"));

