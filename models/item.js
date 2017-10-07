var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var Item = sequelize.define("item", {
  name: {
    type: Sequelize.STRING
  },
  category: {
    type: Sequelize.STRING
  },
  expiration: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false
});

Item.sync();

module.exports = Item;
