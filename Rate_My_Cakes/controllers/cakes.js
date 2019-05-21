const mongoose = require('../mongoose.js');
const Cake = mongoose.model('Cake');

module.exports = {
    findAll: function(req, res) {
        Cake.find({}, (err, cakes) => {
            let payload = {message: "This works", data: cakes};
            if(err){
                console.log(err);
                payload[errors] = err;
            };
            res.json(payload);
        })
    },
    findOne: function(req, res) {
        Cake.findOne({_id: req.params.id}, (err, cake) => {
            let payload = {message: "This works", data: cake};
            if(err){
                console.log(err);
                payload['errors'] = err;
                payload['message'] = "error";
            };
            res.json(payload);
        })
    },
    create: function(req, res) {
        console.log(req.body)
        let newCake = new Cake({
            title: req.body.title,
            description: req.body.description
           });
        newCake.save( (err) => {
            if(err){
                // console.log(err);
                res.json(err);
            } else {
                res.json(newCake);
            }
        } );
    },
    update: function(req, res) {
        Cake.update({_id: req.params.id}, req.body, (err, cake) => {
            if(err){
                res.json(err);
            } else {
                res.json(cake);
            }
        })
    },
    delete: function(req, res) {
        Cake.deleteOne({_id: req.params.id}, (err) => {
            if(err){
                console.log(err);
                res.json(err);
            } else {
                res.json({message: 'deletion successful'});
            }
        })
    }
}