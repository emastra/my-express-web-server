/*
Multiple ways to render html using express:
1- we pass some html into response.send
2- we also created a public directory with static files and serve these up to the browser (with static server middleware)
3- templating engine let you render html in a dynamic ways
*/


const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();


//
// Configurations
//

// set the default directory for partials
hbs.registerPartials(__dirname + '/views/partials');
// set hbs as the default view engine
app.set('view engine', 'hbs');

//
// Helpers
//

hbs.registerHelper('getCurrentYear', function() {
  return new Date().getFullYear();
});
hbs.registerHelper('capitalizeAll', function(text) {
  return text.toUpperCase();
});


//
// Middleware
//

// logs middleware
app.use(function(req, res, next) {
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}`;
  console.log(log);
  fs.appendFile('server.log', log + '\n', function(err) {
    if (err) console.log('Error appending new log to server.log file:', err);
  });
  next();
});

// // maintenance middleware - no next
// app.use(function(req, res, next) {
//   res.render('maintenance.hbs', {pageTitle: 'Under maintenance'});
// });

// register middleware to serve static file
app.use(express.static(__dirname + '/public'));


//
// The app
//

// passing html into response.send
app.get('/express', function(req, res) {
  res.send('<h1>Hello Express!</h1>');
});

// passing a object into response.send (it is parsed as json)
app.get('/bad', function(req, res) {
  res.send({
    errorMessage: 'unable to handle request'
  });
});


// using templating engine with response.render

app.get('/', function(req, res) {
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome to the homepage!'
  });
});

app.get('/about', function(req, res) {
  res.render('about.hbs', {
    pageTitle: 'About Page'
  });
});


app.listen(3000, function() {
  console.log('Server running on port 3000');
});
