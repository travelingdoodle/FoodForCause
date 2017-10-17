var Sequelize = require("sequelize");

//4-12 works locally
// var sequelize = new Sequelize("food_db", "root", "password", {
//   host: "localhost",
//   dialect: "mysql",
//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000
//   }
// });

// Added according to heroku deployment guide (14-30)
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

//bastardized trial version to make sequelize work on heroku 32 - 55

// This block is from the sequelize heroku guide
if (process.env.JAWSDB_URL) {
  // the application is executed on Heroku ... use the msql database
  sequelize = new Sequelize(process.env.JAWSDB_URL);
  } else {
  // the application is executed on the local machine ... use mysql
  sequelize = new Sequelize('food_db', 'root', "password", {
    host: "localhost",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  });
}
// export sequelize
module.exports = sequelize;

