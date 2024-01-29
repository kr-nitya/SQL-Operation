var con = require("./connection");
con.connect(function (err) {
  if (err) throw err;
  console.log("Ascending Order");
  con.query("select * from customer order by name", (err, result) => {
    if (err) throw err;
    console.log(result);
  });
  console.log("Descending Order");
  con.query("select * from customer order by name desc", (err, result) => {
    if (err) throw err;
    console.log(result);
  });
});
