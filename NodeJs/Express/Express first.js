var express = require('express');
var app = express();

//static file directory 'public'
app.use(express.static('public'));

//Routing
app.get('/', function (req, res){
  res.send('hello world!');
});

//Listen
app.listen(3000, function(){
  console.log("ex listening 3000 port!");
});
