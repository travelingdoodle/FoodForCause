var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var Item = sequelize.define("item", {
  name: {
    type: Sequelize.STRING
  },
  category: {
    type: Sequelize.STRING
  },
  quantity: {
    type: Sequelize.STRING
  },
  expiration: {
    type: Sequelize.STRING
  },
  reserved: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
}, {
  timestamps: true
});

Item.sync();

module.exports = Item;