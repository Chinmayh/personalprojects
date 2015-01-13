var userModel=require('../models/Users');

exports.getUsers = function(){
    
    return userModel.users;
}


exports.getUser = function(id){
    for(var i=0;i<users.length;i++){
        if(userModel.users[i].id == id)
            return userModel.users[i];
    }
}

exports.compareAuth = function(username,password)
{
    for(i=0;i<users.length;i++)
    {
        if(userModel.users[i].username==username && userModel.users[i].password==password)
        {
            return userModel.users[i];
         //   return true;
        }
    }
    return false;
}


exports.postLogin=function(request, response){
   var result=users.compareAuth(request.body.email,request.body.password);
    if(result)
       {
       response.send("Login Successful. Hi "+result.name);
       
       
       
       }else{
         response.send("Failed");
       } 
}