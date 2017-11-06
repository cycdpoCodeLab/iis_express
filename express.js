const express = require('express');

let app = express();

// set api
app.get('/iis_express/api/app', (req, res) => {
  res.send('Hello World! [express sample]');
});


app.get('/iis_express/api/app2', (req, res) => {
  res.send('test for app2!');
});

app.listen(process.env.PORT);

