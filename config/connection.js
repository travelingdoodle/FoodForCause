var Sequelize = require("sequelize");

var sequelize = new Sequelize("food_db", "root", "password", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Added according to heroku deployment guide
var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'food_db'

  });
};
connection.connect();
module.exports = connection;

// export sequelize
module.exports = sequelize;

