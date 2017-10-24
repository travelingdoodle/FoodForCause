var path = require("path");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/search", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/search.html"));
  });

  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/add.html"));
  });

  app.get("/available", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/available.html"));
  });

  app.get("/reserved", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/reserved.html"));
  });

};
