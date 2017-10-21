// var Sequelize = require("sequelize");

// 3-13 works locally
// However, i don't think that we need this anymore. so commented out for now.
// var sequelize = new Sequelize("food_db", "root", "password", {
//   host: "localhost",
//   dialect: "mysql",
//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000
//   }
// });

// Added according to heroku deployment guide (14-31)
// var mysql = require('mysql');
// var connection;

// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//   connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'password',
//     database: 'food_db'

//   });
// };
// connection.connect();
// module.exports = connection;


// copied from index.js to maintain current file structure
'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
//var basename  = path.basename(module.filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/config.json')[env];
var db        = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}
//db.sequelize= sequelize;
db.Sequelize = Sequelize;
module.exports= sequelize;
module.exports = db;
