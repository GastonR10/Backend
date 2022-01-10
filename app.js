const express = require("express");
const cors = require("cors");

const { Client } = require("pg");

const commentsRouter = require('./src/routes/comments');
const authRouter = require("./src/routes/auth");
const productsRouter = require("./src/routes/products");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(cors());

app.get("/test", async(req, res) => {
    const client = new Client();
    client.connect();
  
    client.query("SELECT $1::text as message", ["Hola Mundo!"], (err, res) => {
      if (err) {
        console.error(err.stack);
        response.send("Error: " + err.stack);
      } else {
        console.log(res.rows[0].message);
        response.send(res.rows[0].message);
      }
      client.end();
    });
});

app.use("/comments", commentsRouter);

app.use("/auth", authRouter);

app.use('/products', productsRouter);

app.listen(PORT, function() {
    console.log(`Corriendo en el puerto ${PORT}`);
});