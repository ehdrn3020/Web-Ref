//cmd : npm install jade --save
//set jade engine : app.set('view engine', 'jade');
//set jade dir    : app.set('views','./views');   @make directory in nodeJS code
//set jade rendering : res.reder('jade file name');


[index.js]
var express = require('express');
var app = express();
app.set('view engine', 'jade');
app.set('views','./views')

app.get('/', function (req, res){
  res.send('hello world!');
});
app.get('/template', function(req, res){
  res.render('temp',{time:Date(), _jade:'hello'});
});
app.listen(3000, function(){
  console.log("ex listening 3000 port!");
});


[temp.jade]
html
  head
    title= _jade
  body
    h1 hello & jade
    ul
      - for(var i=0; i<3; i++)
        li coding jade
    div= time
