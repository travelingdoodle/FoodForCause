var express = require("express");
var bodyParser = require("body-parser");

// Dependencies needed for Passport.js GitHub OAuth
// var passport = require('passport');
// var util = require('util');
// var session = require('express-session');
// var methodOverride = require('method-override');
// var GitHubStrategy = require('passport-github2').Strategy;
// var partials = require('express-partials');

// var GITHUB_CLIENT_ID = "";
// var GITHUB_CLIENT_SECRET = "";

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
// new comment