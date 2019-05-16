const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restful_api');
var TaskSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
   }, ({}))
   mongoose.model('Task', TaskSchema);
var Task = mongoose.model('Task') 
mongoose.Promise = global.Promise;

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    Task.find({}, (err, tasks) => {
        let payload = {message: "Success", data: tasks};
        if(err){
            console.log(err);
            payload[errors] = err;
        };
        res.json(payload);
    })
})

app.listen(8000, function() {
    console.log("listening on port 8000");
})
