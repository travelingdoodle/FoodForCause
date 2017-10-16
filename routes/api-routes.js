var Item = require("../models/item.js");

module.exports = function(app) {
  app.get("/api/all", function(req, res) {
    Item.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  app.get("/api/:item", function(req, res) {
    if (req.params.item) {
      Item.findAll({
        where: {
          name: req.params.item
        }
      }).then(function(results) {
        res.json(results);
      });
    }
  });

  app.post("/api/new", function(req, res) {
    console.log("Item:");
    console.log(req.body);
    Item.create({
      name: req.body.name,
      category: req.body.category,
      expiration: req.body.expiration,
    });
  });

  app.post("/api/delete", function(req, res) {
    console.log("Item:");
    console.log(req.body);
    Item.destroy({
      where: {
        id: req.body.id
      }
    });
  });
};
