var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "nitya_23",
  database: "mydb",
});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

module.exports = con;