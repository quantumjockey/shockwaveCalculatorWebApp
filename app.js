var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var sassMiddleware = require('node-sass-middleware');

// create app instance
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// (execute miscellaneous tasks)
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// for initializing node-sass for transpile
app.use(sassMiddleware({
  src: path.join(__dirname, 'public/stylesheets/sass'),
  dest: path.join(__dirname, 'public/stylesheets'),
  debug: true,
  indentedSyntax: false, // 'false' for reading SCSS sources, 'true' for reading SASS sources, doesn't seem to work for both
  outputStyle: 'compressed',
  prefix: '/stylesheets'
}));


//// REGISTER APPLICATION ROUTES  (BEGIN) ////

var router = express.Router();

// client application partials
router.get('/modules/:module/view', function (req, res) {
  var name = req.params.module;
  res.render('../app/modules/' + name + '/view');
});

// index route
router.get('/', function(req, res, next) {
  res.render('main');
});

app.use('/', router);

//// REGISTER APPLICATION ROUTES  (END) ////


// static assignment for public assets here below pre-compile tools to enable refresh upon changes
app.use(express.static(path.join(__dirname, 'public')));

// for statically serving Angular app folder content and supplementary components
app.use(express.static(path.join(__dirname, 'app')));
app.use('/bower_components',  express.static(path.join(__dirname, 'bower_components')));
app.use('/public/stylesheets/main.css',  express.static(path.join(__dirname, 'public/stylesheets/main.css')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

// export app configuration
module.exports = app;
