var express = require("express");
var http = require("http");
var app = express();

app.get("/lessons", (request, response) => {
  response.send([
    { topic: "math", location: "London", price: 100 },
    { topic: "math", location: "Liverpool", price: 80 },
    { topic: "math", location: "Oxford", price: 90 },
    { topic: "math", location: "Bristol", price: 120 },
  ]);
});

app.get("/users", (request, response) => {
  response.send([{ email: "user@email.com", password: "mypassword" }]);
});

app.use(function (request, response) {
  response.status(404).send("Page not found!");
});
//starts the server on port 3000
app.listen(3000);

console.log(`App is listening on port ${3000}`);
