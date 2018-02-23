const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
require('dotenv').config();

const config = require('./server/config/config');
const app = express();
const router = express.Router();

//app.set('port', (process.env.PORT || 5000));

require('./server/config/database')(mongoose, config);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': 'false'}));
app.use(router);


app.use(express.static(path.join(__dirname, 'dist')));


require('./server/routes/routes')(router);

// this is needed to route to anglular routes
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
