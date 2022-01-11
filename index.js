var express = require("express");
var http = require("http");
var app = express();

var lessons = require("./lessons");
var users = require("./users");

app.get("/lessons", (request, response) => {
  return response.json(lessons);
});

app.get("/users", (request, response) => {
  return response.json(users);
});

app.use(function (request, response) {
  response.status(404).send("Page not found!");
});
//starts the server on port 3000
app.listen(3000);

console.log(`App is listening on port ${3000}`);
