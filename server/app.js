// *** main dependencies *** //

require('dotenv').config();
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


// *** routes *** //
var routes = require('./routes/index');
var scheduleData = require('./grabData/scheduleData');
var hacker = require('./routes/hacker');

mongoose.Promise = global.Promise;


// *** express instance *** //
var app = express();

// *** mongoose *** //
// mongodb://<dbuser>:<dbpassword>@ds149030.mlab.com:49030/codernews
const dbconnection = process.env.NODE_ENV = 'production' ?
  `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ds149030.mlab.com:49030/codernews` :
  'mongodb://localhost/codernews'

mongoose.connect(dbconnection);


// *** static directory *** //
app.use(express.static(path.join(__dirname, '../client/build')))

// *** config middleware *** //
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/hacker', hacker);
app.use('/', routes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// *** error handlers *** //

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send("Error", err);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.render('error', {
//     message: err.message,
//     error: {}
//   });
// });

module.exports = app;
