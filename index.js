var express = require("express");
const cors = require("cors");

var http = require("http");
var app = express();

var lessons = require("./data/lessons.json");
var users = require("./data/users.json");

//CORS allows you to configure the web API's security. It has to do with allowing other domains to make requests against your web API.
app.use(cors());

app.get("/lessons", (req, res) => {
  res.json(lessons);
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.use(function (request, response) {
  response.status(404).send("Page not found!");
});
//starts the server on port 3000
app.listen(3000);

console.log(`App is listening on port ${3000}`);
