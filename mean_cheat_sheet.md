# Mean cheat sheet

## Node Setup
```bash
npm init -y
npm install express --save
npm install body-parser --save
npm install mongoose --save
touch server.js
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
`routes.js`
```typescript
const Cake = require('../controllers/cakes.js');

module.exports = function(app) {
    app.get('/cakes', (req, res) => {
        Cake.findAll(req, res);
    })
    app.post('/cakes', (req, res) => {
        Cake.create(req, res);
    })
    app.get('/cakes/:id', (req, res) => {
        Cake.findOne(req, res);
    })
    app.put('/cakes/:id', (req, res) => {
        Cake.update(req, res);
    })
    app.delete('/cakes/:id', (req, res) => {
        Cake.delete(req, res);
    })
}
```

 `server.js`
```typescript
const bodyParser = require('body-parser');
const express = require('express')

const app = express()

app.use(bodyParser.json());

require('./config/routes.js')(app)

app.use(express.static(__dirname + '/public/dist/public'));

app.listen(8000)

```
## Angular Setup
```bash
ng new public
ng g s http
```

`app.module.ts`
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
