var mysql = require("mysql");
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "nitya_23",
  database: "mydb",
});
con.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connection Sucessfull..");
    var sql = "create table customer( name varchar(255), address varchar(255))";
    con.query(sql, (err, result) => {
      if (err) throw err;
      else console.log("Table Created");
    });
  }
});
