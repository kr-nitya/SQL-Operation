var con = require("./connection");
con.connect(function (err) {
  if (err) throw err;
  con.query("SELECT * FROM customer", function (err, result, fields) {
    if (err) throw err;
    //Print all data
    console.log(result);
    //Get Specific row
    console.log("Name : ", result[0].name);
    //Fields gives info about the table like name,address
    console.log("Fields");
    console.log(fields);
  });
});
