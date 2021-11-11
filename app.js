var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var RabbitRouter = require('./routes/Rabbit');
var addmodsRouter = require('./routes/addmods');
var slectorRouter = require('./routes/selector');
var rabbit = require("./models/Rabbit");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Rabbit', RabbitRouter);
app.use('/addmods', addmodsRouter);
app.use('/selector', slectorRouter);



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

const connectionString = process.env.MONGO_CON

mongoose = require('mongoose');
mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true});

// We can seed the collection if needed on server start
async function recreateDB(){
  // Delete everything
  await rabbit.deleteMany();
 
 
  var results = [{"type":"European rabbit","colours":'brown',"lifespan":09},
                 {"type":"American rabbit","colours":'white',"lifespan":08},
                 {"type":"havana", "colours":'black',"lifespan":10}]
 
 for(i in results){
  let instance = new rabbit({types: results[i]["type"], colours: results[i]["colours"], lifespan:results[i]["lifespan"]});
   instance.save( function(err,doc) {
     if(err) return console.error(err);
     console.log("object added.")
     });
 }
 
 }
 
 let reseed = true;
 if (reseed) { recreateDB();}

module.exports = app;
