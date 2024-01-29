var con = require("./connection");
con.connect(function (err) {
  if (err) throw err;
  var sql = "DELETE FROM customer WHERE name='John'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
});
