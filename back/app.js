var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fs = require('fs');
var bodyParser = require('body-parser')
var methodOverride = require("method-override");
var rfs = require('rotating-file-stream');
const cors = require('cors')

var { sequelize } = require('./models');


var app = express();
sequelize.sync(); //{force:true}

// view engine setup
app.locals.pretty = true;
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// app.engine('html', require('pug').renderFile);
// app.set('view engine', 'html');

app.use(cors());
app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({extended: true }));
app.use(cookieParser(process.env.SECRET));
app.use(express.static(path.join(__dirname, 'public')));


/* Morgan 셋팅 */
const logDirectory = path.join(__dirname, 'log');
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
var accessLogStream = rfs('access.log', {
  interval: '1d',
  path: logDirectory
});
app.use(logger('combined', { stream: accessLogStream }));

/* Method-Override 셋팅 */
app.use(methodOverride('X-HTTP-Method'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('X-Method-Override'));
app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method
    delete req.body._method
    return method
  }
}));

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.text({ limit: '50mb' ,extended: true}));
app.use(bodyParser.raw({  limit: '50mb',extended: true }));
var indexRouter = require('./routes/index.js');
var authRouter = require('./routes/auth.js');
var musicRouter = require('./routes/music.js')
// console.log('Limit file size: '+limit);
app.use('/', indexRouter);
app.use('/auth', authRouter); //로그인,회원가입,로그아웃
app.use('/music',musicRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
