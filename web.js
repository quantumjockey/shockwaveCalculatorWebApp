// Referenced from: http://www.sitepoint.com/deploying-yeomanangular-app-heroku/ as accessed 10/19/2015

var gzippo = require('gzippo');
var express = require('express');
var app = express();

app.use(express.logger('dev'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.listen(process.env.PORT || 5000);
