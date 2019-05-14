const express = require('express');
const flash = require('express-flash');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require("mongoose");

// Creating DB Connection
mongoose.connect('mongodb://localhost/mongoose_dashboard');

var OwlSchema = new mongoose.Schema({
    name: String,
    age: Number
})
mongoose.model('Owl', OwlSchema);
var Owl = mongoose.model('Owl');

mongoose.Promise = global.Promise;
// End DB section

// Creating APP
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));
app.set('views', path.join(__dirname, './views'));
app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(flash());
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));
// End app creation

// Routing section
app.get('/', (req, res) => {
    res.render('index');
})
// End routing

// Start application
app.listen(8000, function() {
    console.log("listening on port 8000");
})

  
  
