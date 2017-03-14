var path = require('path');

var express = require('express');
var server = express();

var inMemoryDrawHistory = [];

server.listen(1337, function () {
  console.log('The server is listening on port 1337!');
});

server.use(express.static(path.join(__dirname, 'browser')));

server.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

