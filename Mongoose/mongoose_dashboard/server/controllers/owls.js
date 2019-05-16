const mongoose = require("../config/mongoose.js")
const Owl = mongoose.model('Owl');


module.exports = {
    index: function(req, res) {
    	Owl.find({}, (err, owls) => {
            if(err){
                console.log(err);
                res.render('index', {owls: owls, errors: err});
            } else {
                res.render('index', {owls: owls});
            }
        })
    },
    owlInfo: function(req, res) {
        console.log(req.params.id);
        Owl.findOne({_id: req.params.id}, (err, owl) => {
            if(err){
                console.log(err);
            }
            console.log(owl);
            res.render('owlInfo', {owl: owl, errors: err});
        })
    },
    owlEdit: function(req, res) {
        console.log(req.params.id);
        Owl.findOne({_id: req.params.id}, (err, owl) => {
            if(err){
                console.log(err);
            }
            console.log(owl);
            res.render('owlInfoEdit', {owl: owl, errors: err});
        })
    },
    update: function(req, res) {
        console.log(req.body);
        Owl.update({_id: req.params.id}, {name: req.body.formName, age: req.body.formAge}, (err, owl) => {
            if(err){
                console.log(err);
                res.render('owlInfoEdit', {owl: owl, errors: err});
            } 
            console.log(owl);
            res.redirect('/');
        })
    },

    create: function(req, res) {
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
    },
    destroy: function(req, res) {
    	// code...
    }
};