const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${server.address().port}`);
});
server.on("error", (error) => console.log(`Error: ${error.message}`));

app.get("/", (req, res) => {
  res.send(`<h1 style="color:blue;" >Welcome to express server!</h1>`);
});

let visitas = 0;
app.get("/visitas", (req, res) => {
  res.send(`La cantidad de visitas es: ${++visitas}`);
});

let fyh = new Date().toLocaleString();
app.get("/fyh", (req, res) => {
  res.send(`La fecha y hora actual es: ${fyh}`);
});
