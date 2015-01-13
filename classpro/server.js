//dependent variable// //core modules
var express = require('express');
var hbs = require('hbs');
var path = require('path');
var bodyParser = require('body-parser');

//User model
var usersConntroller = require('./conntroller/user');
var app = express();

app.set('views', path.join(__dirname,'views'));
app.set('view engine','html');
app.engine('html',hbs.__express);
app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
    {
        extended: false
        
    }));
app.use(express.static('public'));

//Routes
app.get('/', function(request,response){
   // console.log(users.getUsers()+'this is it');
    response.render('index',{
        title: "Home",
        users: users.getUsers()});

});

app.get('/users/:id',
       function(request,response){
           var user = users.getUser(request.params.id);
           response.render('profile',{title:" user Profile",
               user:user
           });
           
       });

app.get('/home',function(request,response){
    response.render('index',users.getUsers);
});


app.get('/login', function(request,response){
    response.render('login',{title:"Login"});

});


//app.get('/signup', function(request,response){
//    response.sendfile('./views/signup.html');
//
//});
app.get('/signup', function(request,response){
    response.render('signup',{title:"SignUp"});

});
app.get('/about', function(request,response){
    response.render('about',{title:"About"});
});



app.post('/login',usersConntroller.postLogin);


app.listen(3000);

