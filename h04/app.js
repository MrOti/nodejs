var express = require('express');
var bodyP = require('body-parser');
var mymodule = require('./module');

var app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/view'));

var urleP = bodyP.urlencoded({extended: false});

app.get('/', function(req, res){
	res.render('home');
});

app.get('/register', function(req, res){
	res.render('reg', {req: req.query});
});

app.post('/register', urleP, function(req, res){
	if(mymodule.add({who: req.body.who, email: req.body.email, pw: req.body.pw})){
		res.render('reg_success');
	}else{
		res.render('reg_fail');
	}
	mymodule.show();
});

app.get('/login', function(req, res){
	res.render('login', {req: req.query});
});

app.post('/login', urleP, function(req, res){
	if(mymodule.checkLoginDB({email: req.body.email, pw: req.body.pw})){
		res.render('login_success');	
	}else{
		res.render('login_fail');
	}
});

app.get('/profile', function(req, res){
	res.render('profile', {req: req.query});
});

app.post('/profile', urleP, function(req, res){
	res.render('profile');
});

app.get('/help', function(req, res){
	res.render('help');
});

app.listen(3000, '127.0.0.1');

//FOR CMD

console.log('Server is listening to port: 3000');