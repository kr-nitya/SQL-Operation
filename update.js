var con = require("./connection");
con.connect(function (err) {
  if (err) throw err;
  var sql = "UPDATE customer SET address = 'Ahmedabad Gujarat' WHERE address = 'Ahmedabad'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
});
