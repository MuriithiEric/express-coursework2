var express = require("express");
const cors = require("cors");

var http = require("http");
var app = express();
const port = 3000;

//var lessons = require("./data/lessons.json");
//var users = require("./data/users.json");

//CORS allows you to configure the web API's security. It has to do with allowing other domains to make requests against your web API.
app.use(cors());

const courses = [
  { topic: "math", location: "London", price: 100 },
  { topic: "math", location: "Liverpool", price: 80 },
  { topic: "math", location: "Oxford", price: 90 },
  { topic: "math", location: "Bristol", price: 120 },
];

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(JSON.stringify(courses));
  })
  .listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });

app.get("/lessons", (req, res) => {
  res.send([
    { topic: "math", location: "London", price: 100 },
    { topic: "math", location: "Liverpool", price: 80 },
    { topic: "math", location: "Oxford", price: 90 },
    { topic: "math", location: "Bristol", price: 120 },
  ]);
});

app.get("/users", (req, res) => {
  res.send([
    {
      email: "user@email.com",
      password: "mypassword",
    },
  ]);
});

//starts the server on port 3000
//app.listen(3000);

//console.log(`App is listening on port ${3000}`);
