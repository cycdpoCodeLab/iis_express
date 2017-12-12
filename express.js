const
  express = require('express')
;

let
  app = express()
  , wxJssdk = require('./wxJssdk')
  , port = process.env.PORT
;

// dev mode
if (process.env.NODE_ENV === 'development') {
  port = 3000;
  app.use('/static', express.static('static'));
}

// set api
app.get('/iis_express/api/app', (req, res) => {
  res.send('Hello World! [express sample]');
});


// wxJssdk
app.get('/iis_express/api/wxJssdk', (req, res) => {
  let
    _getUrl = req => req.protocol + '://' + req.headers.host + req.originalUrl.split('#')[0]
  ;

  wxJssdk({
    appid: 'wxcc6445076f2002c3',
    secret: 'd4624c36b6795d1d99dcf0547af5443d',
    url: _getUrl(req)
  })
    .then((access_token) => {
      res.send(access_token);
    }, (err) => {
      res.send(err);
    });
});

app.listen(port, () => {
  console.log('App is listening at port ' + port + '!');
});

