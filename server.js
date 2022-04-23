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
  res.send(`<div style="width:100%;height:0;padding-bottom:100%;position:relative;"><iframe src="https://giphy.com/embed/2A75RyXVzzSI2bx4Gj" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p>/product</p><p>/randomProduct</p>`);
});

app.get("/product", (req, res) => {
  contVisitas++;
  const data = fs.readFile()
  res.send(`Estos son todos los productos disponibles: ${product}`);
});

app.get("/randomProduct", (req, res) => {
  res.send(`Estos son todos los productos disponibles: ${product}`);
});