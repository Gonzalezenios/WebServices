const express = require("express");
const Container = require('./container.js')

const app = express();

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${server.address().port}`);
});
server.on("error", (error) => console.log(`Error: ${error.message}`));

app.get("/", (req, res) => {
  res.send(`<div style="width:100%;height:0;padding-bottom:100%;position:relative;"><iframe src="https://giphy.com/embed/2A75RyXVzzSI2bx4Gj" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p>/product</p><p><`);
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

app.get("/randomProduct", (req, res) => {
  res.send(`Estos son todos los productos disponibles: ${product}`);
});