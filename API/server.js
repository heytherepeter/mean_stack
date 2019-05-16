
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const Task = require('./contollers/tasks.js');
app.get('/', (req, res) => {
    Task.findAll(req, res);
})
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

app.listen(8000, function() {
    console.log("listening on port 8000");
})
