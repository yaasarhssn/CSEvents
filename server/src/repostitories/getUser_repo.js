const mysql_client=require('../db/mysql')

module.exports.getUserData=(req,res)=>{
    var row;
    mysql_client.query('SELECT * FROM user_details', (err, rows, fields) => {


        if (!err){
          row=rows;
        }
        else
        console.log(err);
        })

        return row;
}