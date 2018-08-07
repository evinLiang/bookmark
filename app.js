var express = require('express');
var path = require('path');
var indexRouter = require('./routes/index');
var lessMiddleware = require('less-middleware');
var app = express();

app.use('/', indexRouter);
app.engine('html', require('express-art-template'));
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production'
});
app.use(lessMiddleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

var server = app.listen(3000)