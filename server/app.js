const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
require('dotenv').config()
const cors = require('cors')

const app = express();

const mongoose = require('mongoose');
const pass = process.env.PASSWORD
const dbUrl = `mongodb://just-to-do-it:${pass}@just-to-do-it-shard-00-00-grhoo.mongodb.net:27017,just-to-do-it-shard-00-01-grhoo.mongodb.net:27017,just-to-do-it-shard-00-02-grhoo.mongodb.net:27017/test?ssl=true&replicaSet=just-to-do-it-shard-0&authSource=admin`
mongoose.connect(dbUrl, (err => {
  if(err) {
    console.log('failed to connect to database');
  } else {
    console.log('successfully connected to database');
  }
}));

const articles = require('./routes/article');
const user = require('./routes/user');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/blog', articles);
app.use('/user', user );

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
