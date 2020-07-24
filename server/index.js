require('newrelic');
const express = require('express');
const app = express();
const path = require('path');


// const port = 3000;


app.use (express.static(__dirname + '/../public'));
//same thing (can use either of the two)
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/index.html'));
// });
app.get('/loaderio-301b0523e389fbd6ffe3227f47c7bd6e', (req, res) => {
  var tok = 'loaderio-301b0523e389fbd6ffe3227f47c7bd6e';
  //var loader = path.join(__dirname, loc);
  res.status(200).send(tok);
});



// use port 3000 unless there exists a preconfigured port
var port = process.env.port || 4000;

app.listen(port, () => console.log(`Proxy listening at ${port}!`));

