var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

// use port 3000 unless there exists a preconfigured port
var port = process.env.port || 3000;

app.listen(port, () => console.log(`Proxy listening at ${port}!`));