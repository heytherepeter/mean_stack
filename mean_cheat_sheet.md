# Mean cheat sheet

## Setup
```bash
npm init -y
npm install express --save
npm install body-parser --save
npm install mongoose --save
ng new public
touch server.js
```
`server.js`
```typescript
const express = require('express')
const app = express()

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('hello world'))

app.use(express.static(__dirname + '/public/dist/public'));
app.listen(8000)

```
`mongoose.js`
```typescript
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rate_my_cakes');
var CakeSchema = new mongoose.Schema({
    baker: { type: String, required: true },
    image: { type: String, required: true }
   }, {timestamps: true })
mongoose.model('Cake', CakeSchema);
mongoose.Promise = global.Promise;

module.exports = mongoose;
```

`/controller/object.js`
```typescript
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
```

 