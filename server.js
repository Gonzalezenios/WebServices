const express = require('express');
const fs = require('fs');
const { get } = require('http');

const app = express();

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${server.address().port}`);
});
server.on("error", (error) => console.log(`Error: ${error.message}`));

app.get("/", (req, res) => {
  res.send(`<div style="width:100%;height:0;padding-bottom:100%;position:relative;"><iframe src="https://giphy.com/embed/2A75RyXVzzSI2bx4Gj" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p>/products</p><p>/randomProduct</p>`);
});

let countVisits = 0;

app.get("/products", (req, res) => {
  countVisits++;
  const data = fs.readFileSync(`./products.txt`, 'utf-8');
  const arrayProducts = JSON.parse(data);
  res.json({
    product: arrayProducts,
    size: arrayProducts.length
  });
});

app.get("/randomProduct", (req, res) => {
  countVisits++;
  const data = fs.readFileSync(`./products.txt`, 'utf-8');
  const arrayProducts = JSON.parse(data);
  let randomNumber = Math.floor(Math.random() * arrayProducts.length);
  let product = arrayProducts[randomNumber];
  res.json({ product: product });
});