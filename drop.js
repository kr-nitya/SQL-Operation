var con = require("./connection");
con.connect(function (err) {
  if (err) throw err;
  var sql = "create table users( name varchar(255), address varchar(255))";
    con.query(sql, (err, result) => {
      if (err) throw err;
      else console.log("Table Created");
    });
  var sql = "DROP TABLE IF EXISTS users";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
