let express = require('express');

let app = express();

app.get('/myapp', (req, res)=> {
  res.send('Hello World! [express sample]');
});

app.listen(process.env.PORT);