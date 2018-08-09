var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

var person = require('./routes/person');
var app = express();
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/mean-angular5', { promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));
//app.use(express.static(__dirname));
app.use('/persons', express.static(path.join(__dirname, 'dist')));
//app.use('/persons', express.static(path.join(__dirname, 'src/app/person/person.compo')));
app.use('/person', person);

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));

// since it gets used a lot....
//let distDir = path.join(__dirname,'dist/mean-angular5');

//app.get('*', (req,res)=> {
//  res.sendFile(path.join(distDir,'index.html'))
//});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
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
  res.render('error', { err_msg: err.message });
});

module.exports = app;
