const express = require("express");
const Container = require('./container.js')

const app = express();

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${server.address().port}`);
});
server.on("error", (error) => console.log(`Error: ${error.message}`));

app.get("/", (req, res) => {
  res.send(`<h1 style="color:blue;" >Welcome to express server!</h1>`);
});

let product = new Container('./products.txt');

    console.log(product)
    async function createProducts(products) {
        for (const prod of products) {
            await product.save(prod);
        }
    }
app.get("/product", (req, res) => {
  res.send(`Estos son todos los productos disponibles: ${product}`);
});
