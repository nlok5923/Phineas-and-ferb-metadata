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

app.use('/', metaDataRouter);
app.set('port', port);
app.listen(port, () => {
  console.log("listening to port", port);
});

module.exports = app;
