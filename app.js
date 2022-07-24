var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const port = process.env.PORT || 3001;

var metaDataRouter = require('./routes/metaData');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'https://phineas-and-ferb-nft-collection.vercel.app');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use('/', metaDataRouter);
app.set('port', port);
app.listen(port, () => {
  console.log("listening to port", port);
});

module.exports = app;
