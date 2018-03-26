var express = require('express');
var app = express();

//app.use(express.static('img2'));
app.use(express.static('img'));

app.get('/', function (req, res){
  res.send('hello world!');
});

app.get('/dynamic', function(req, res){
  var time = Date();
  var output =
  `<html>
    <head>
      <meta charset = "utf-8">
      <title></title>
    </head>
    <body>
      ${time}
      <script>
      document.write(1+1);
      </script>
    </body>
  </html>`;
  res.send(output)
});
app.listen(3000, function(){
  console.log("ex listening 3000 port!");
});
