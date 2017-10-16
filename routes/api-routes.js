var Item = require("../models/item.js");

module.exports = function(app) {
  app.get("/api/all", function(req, res) {
    Item.findAll({
      where: {
        reserved: false
      }
    }).then(function(results) {
      res.json(results);
    });
  });

  // app.get("/api/:name", function(req, res) {
  //   if (req.params.name) {
  //     Item.findAll({
  //       where: {
  //         name: req.params.name
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
      quantity: req.body.quantity,
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

  app.post("/api/reserved", function(req, res) {
    console.log("Item:");
    console.log(req.body);
    Item.update({
      reserved: true,
    },{
      where: {
        id: req.body.id
      }  
    });
  });

  app.get("/api/reserved", function(req, res) {
      Item.findAll({
        where: {
          reserved: true,
        }
      }).then(function(results) {
        res.json(results);
      });
  });

};