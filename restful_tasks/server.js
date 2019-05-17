
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/dist/public'));

const Task = require('./contollers/tasks.js');
app.get('/tasks', (req, res) => {
    Task.findAll(req, res);
})
app.post('/tasks', (req, res) => {
    Task.create(req, res);
})
app.get('/tasks/:id', (req, res) => {
    Task.findOne(req, res);
})
app.put('/tasks/:id', (req, res) => {
    Task.update(req, res);
})
app.delete('/tasks/:id', (req, res) => {
    Task.delete(req, res);
})
var port = 8000;
app.listen(port, function() {
    console.log("listening on port: " + port);
})
