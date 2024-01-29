const con = require("./connection");
con.connect((err) => {
  if (err) throw err;
  const sql = "select * from customer where name='Nitya'";
  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
  });
  //Use of ?
  let add="Ahmedabad";
  const sql1="select * from customer where address = ?";
  con.query(sql1,[add],(err,result)=>{
    if(err) throw err;
    console.log("Use of ? = ",result);
    
  })
});
