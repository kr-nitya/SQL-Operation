var mysql = require("mysql");
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "nitya_23",
  database: "mydb",
});
//Insert Single Value
// con.connect((err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Connection Sucessfull..");
//     var sql = "insert into customer (name,address) values ('Nitya','Ahmedabad')";
//     con.query(sql, (err, result) => {
//       if (err) throw err;
//       else console.log("1 row added");
//     });
//   }
// });
//Insert Multiple Values
con.connect((err)=>{
    if(err) throw err;
    const sql = "insert into customer (name,address) values ?";
    var values = [
        ['John', 'Highway 71'],
        ['Peter', 'Lowstreet 4'],
      ];
      con.query(sql,[values],(err,result)=>{
        if(err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
        console.log("ID : ",result.insertId);
        
      })
})