// Require the Express Module
const express = require('express');
const flash = require('express-flash');
const session = require('express-session');

// require mongoose
const mongoose = require('mongoose');

// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/basic_mongoose');

var UserSchema = new mongoose.Schema({
  first_name:  { type: String, required: true, minlength: 6},
  last_name: { type: String, required: true, maxlength: 20 },
  age: { type: Number, min: 1, max: 150 },
  email: { type: String, required: true }
}, {timestamps: true });
mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
var User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'User'

// Use native promises (only necessary with mongoose versions <= 4)
mongoose.Promise = global.Promise;



// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

app.use(flash());


// Routes
// Root Request
app.get('/', function(req, res) {
  User.find({}, function(err, users) {
    if(err){res.render('index', {error: err});} 
    else {res.render('index', {users: users});}
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
  })
});
// Add User Request 

app.post('/users', function(req, res) {
    console.log("POST DATA", req.body);
    // create a new User with the name and age corresponding to those from req.bodym
    var user = new User({name: req.body.name, age: req.body.age});
    // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.copy
    user.save(function(err) {
      // if there is an error console.log that something went wrong!
      if(err) {
        console.log('something went wrong');
      } else { // else console.log that we did well and then redirect to the root route
        console.log('successfully added a user!');
        res.redirect('/users');
      }
  });
});
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
