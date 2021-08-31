const express = require("express");
const app = express();

app.use(express.static(__dirname));

app.get("/index", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/photoGallery", (req, res) => {
  res.sendFile(__dirname + "/views/photoGallery.html");
});

app.get("/works", (req, res) => {
  res.sendFile(__dirname + "/views/works.html");
});

app.listen(8000, () => {
  console.log("server started running...");
});
