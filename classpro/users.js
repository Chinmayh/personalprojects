
exports.getUsers = function(){
    return users;    
}

exports.getUser = function(id){
    for(var i=0;i<users.length;i++){
        if(users[i].id == id)
            return users[i];
    }
}

exports.compareAuth = function(username,password)
{
    for(i=0;i<users.length;i++)
    {
        if(users[i].username==username && users[i].password==password)
        {
            return users[i];
         //   return true;
        }
    }
    return false;
}