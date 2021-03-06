const express = require("express");
const cors = require("cors");

const { Client } = require("pg");
if (process.env.ENV !== "production") {
  require("dotenv").config();
}
const { resolve } = require("path");
const { config } = require("dotenv");
config({ path: resolve(__dirname, "./.env") });

const commentsRouter = require('./src/routes/comments');
const authRouter = require("./src/routes/auth");
const productsRouter = require("./src/routes/products");

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(cors());

app.use("/comments", commentsRouter);

app.use("/auth", authRouter);

app.use('/products', productsRouter);

app.listen(PORT, function() {
    console.log(`Corriendo en el puerto ${PORT}`);
});