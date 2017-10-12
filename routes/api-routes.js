var Item = require("../models/item.js");

module.exports = function(app) {
  app.get("/api/all", function(req, res) {
    Item.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  app.get("/api/:name", function(req, res) {
    if (req.params.name) {
      Item.findAll({
        where: {
          name: req.params.name
        }
      }).then(function(results) {
        res.json(results);
      });
    }
  });

  // app.get("/api/category/:category", function(req, res) {
  //   if (req.params.category) {
  //     Item.findAll({
  //       where: {
  //         category: req.params.category
  //       }
  //     }).then(function(results) {
  //       res.json(results);
  //     });
  //   }
  // });
  // app.get("/api/quantity/:quantity", function(req, res) {
  //   if (req.params.quantity) {
  //     Item.findAll({
  //       where: {
  //         quantity: req.params.quantity
  //       }
  //     }).then(function(results) {
  //       res.json(results);
  //     });
  //   }
  // });

  // app.get("/api/expiration/:expiration", function(req, res) {
  //   if (req.params.expiration) {
  //     Item.findAll({
  //       where: {
  //         expiration: req.params.expiration
  //       }
  //     }).then(function(results) {
  //       res.json(results);
  //     });
  //   }
  // });

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
// };

  app.post("/api/items/reserved", function(req, res) {
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

  app.get("/api/items/reserved", function(req, res) {
    if (req.params.name) {
      Item.findAll({
        reserved: true,
      },{
        where: {
          id: req.body.id
        } 
      }).then(function(results) {
        res.json(results);
      });
    }
  });

};