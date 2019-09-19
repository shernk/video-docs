var express = require("express");
var app = express();

// set port
var port = process.env.PORT || 4000;

app.use(express.static(__dirname + "/video-dev-docs"));

// routes
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log("app running");
});
