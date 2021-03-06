const mysql_client=require('../../db/mysql')


module.exports.getEventsUser = function(req, res) {
    console.log("inside get user");
    mysql_client.query('SELECT * FROM csevents.user_details', (err, rows, fields) => {
        if (!err)
        res.send(rows);
        else
        console.log(err);

    });
}

module.exports.getParticularUser=function (req,res){

    mysql_client.query('SELECT * FROM csevents.user_details WHERE ID = ?',[req.params.id], (err, rows, fields) => {
        if (!err)
        res.send(rows);
        else
        console.log(err);
        })
}

module.exports.deleteSpecificUser=function(req,res){
    console.log("inside delete");
    mysql_client.query('DELETE FROM csevents.user_details WHERE ID = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
        res.send('User Record deleted successfully.');
        else
        console.log(err);
        })
}


module.exports.updateSpecificUser=function(req,res){
    console.log("inside update");
    mysql_client.query('UPDATE csevents.user_details SET EMAIL=? WHERE ID = ?', [req.params.email,req.params.id], (err, rows, fields) => {
        if (!err)
        res.send('You Supdated the email successfully.');
        else
        console.log(err);
        })
}

module.exports.loginUser=function(req,res){
    console.log("inside loginnnnnn");
  var email= req.body.email;
  var password = req.body.password;
  console.log("email and password",email,password)

  mysql_client.query('SELECT * FROM csevents.csusers WHERE email = ?'[email], (err, rows, fields) => {
		console.log(rows)
	if (err){
		res.send(rows);
		console.log("Invalid user",err);
	}
  else
  console.log("valid user");
  })

 
}