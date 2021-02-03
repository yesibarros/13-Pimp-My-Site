const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();

// all environments
app.set("port", process.env.PORT || 3000);

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.get("/contacto", (req, res) => {
  res.sendFile(__dirname + "/public/contacto.html");
});

app.listen(
  app.get("port"),
  console.log(`El servidor esta escuchando en el puerto ${app.get("port")}`)
);
