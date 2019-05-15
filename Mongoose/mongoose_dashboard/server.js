const express = require('express');
const flash = require('express-flash');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require("mongoose");

// Creating DB Connection
mongoose.connect('mongodb://localhost/mongoose_dashboard');

var OwlSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'name required'], minlength: 2},
    age: { type: Number, required: [true, 'age required'], min: 1, max: 150 }
}, {timestamps: true });
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
    Owl.find({}, (err, owls) => {
        if(err){
            console.log(err);
            res.render('index', {owls: owls, errors: err});
        } else {
            res.render('index', {owls: owls});
        }
    })
})
app.get('/owls/:id', (req, res) => {
    console.log(req.params.id);
    Owl.findOne({_id: req.params.id}, (err, owl) => {
        if(err){
            console.log(err);
        }
        console.log(owl);
        res.render('owlInfo', {owl: owl, errors: err});
    })
})

app.get('/owls/:id/edit', (req, res) => {
    console.log(req.params.id);
    Owl.findOne({_id: req.params.id}, (err, owl) => {
        if(err){
            console.log(err);
        }
        console.log(owl);
        res.render('owlInfoEdit', {owl: owl, errors: err});
    })
})

app.post('/owls/:id/update', (req, res) => {
    console.log(req.body);
    var thisOwl = Owl.findOne({_id: req.params.id});
    thisOwl.update
    Owl.findOne({_id: req.params.id}, (err, owl) => {
        if(err){
            console.log(err);
        }
        console.log(owl);
        res.render('owlInfoEdit', {owl: owl, errors: err});
    })
})

app.get('/owls/new', (req, res) => {
    res.render('newOwl');
})

app.post('/owls/create', (req, res) => {
    console.log(req.body);
    var owl = new Owl({name: req.body.formName, age: req.body.formAge});
    owl.save(function(err){
        if(err){
            console.log(err);
            for(var key in err.errors){
                req.flash('registration', err.errors[key].message);
            };
            res.redirect('/owls/new');
        }
        else {
            res.redirect('/');
        }
    })
})
// End routing

// Start application
app.listen(8000, function() {
    console.log("listening on port 8000");
})

  
  
