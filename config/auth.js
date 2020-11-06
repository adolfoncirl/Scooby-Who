const bcrypt = require("bcryptjs");

//Login function for the user
//Checking password1 that is taken from the user and then 
function login(password1, password2, req,cb){

    bcrypt.compare(password1, password2,function(err, result){
        if(result){
            req.session.loggedin = true;
            cb(req.session.loggedin);
        }else{
            console.log(err);
            req.session.loggedin = false;
            cb(err,req.session.loggedin);
        }
    });
}


module.exports = {login};