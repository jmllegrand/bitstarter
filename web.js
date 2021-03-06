var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
  var buffer = fs.readFileSync('index.html');
  console.log(buffer);
  var text = buffer.toString('utf8');
  console.log(text);
  response.send(text);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
