const mongoose = require('../mongoose.js');
const Task = mongoose.model('Task');

module.exports = {
    findAll: function(req, res) {
        Task.find({}, (err, tasks) => {
            let payload = {message: "This works", data: tasks};
            if(err){
                console.log(err);
                payload[errors] = err;
            };
            res.json(payload);
        })
    },
    findOne: function(req, res) {
        Task.findOne({_id: req.params.id}, (err, task) => {
            let payload = {message: "This works", data: task};
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
        let newTask = new Task({
            title: req.body.title,
            description: req.body.description
           });
        newTask.save( (err) => {
            if(err){
                // console.log(err);
                res.json(err);
            } else {
                res.json(newTask);
            }
        } );
    },
    update: function(req, res) {
        Task.update({_id: req.params.id}, req.body, (err, task) => {
            if(err){
                res.json(err);
            } else {
                res.json(task);
            }
        })
    },
    delete: function(req, res) {
        Task.deleteOne({_id: req.params.id}, (err) => {
            if(err){
                console.log(err);
                res.json(err);
            } else {
                res.json({message: 'deletion successful'});
            }
        })
    }
}