var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require(`method-override`);
var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//requireing our models for syncing
var db = require("./public/js");
app.use(methodOverride('_method'));

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// app.listen(PORT, function() {
//   console.log("App listening on PORT " + PORT);
// });
// new comment
db.sequelize.sync({force: true}).then(function(){
	app.listen(PORT, function(){
	console.log("listenning on http://localhost:" + PORT);
});
});