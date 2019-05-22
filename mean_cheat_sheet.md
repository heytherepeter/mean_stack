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
`http.service.ts`
```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private _http: HttpClient) {
  }
  getTasks(){
    console.log('getting all tasks')
    return this._http.get('/tasks');
  }
  getTaskID(id){
    return this._http.get(`/tasks/${id}`);
  }
  putEditTaskID(data){
    return this._http.put(`/tasks/${data._id}`, data);
  }
  postNewTask(newTask){
    console.log('created task');
    return this._http.post('/tasks', newTask);
  }
  deleteTaskID(id){
    return this._http.delete(`/tasks/${id}`);
  }
}
```
`app.component.ts`
```typescript
import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    title = 'Restful Task API';

    constructor(private _httpService: HttpService){}
    ngOnInit(){
        
    }
  onButtonGetTasks(): void {
    console.log('button pressed')
    this._httpService.getTasks().subscribe(data => this.tasks = data['data']);
  }
  onButtonShowTask(id): void {
    this._httpService.getTaskID(id).subscribe(data => this.showTask = data['data']);
  }
  onButtonDeleteTask(id): void {
    console.log('delete button pressed')
    this._httpService.deleteTaskID(id).subscribe(data => {
      console.log('task deleted', data)
    });
  }
  onButtonEditTask(id): void {
    console.log('button pressed')
    this._httpService.getTaskID(id).subscribe(data => {
      console.log(data)
      this.editTask = data['data'];
    });
  }
  onSubmitEditTask(): void {
    console.log('Submitting edit task form')
    this._httpService.putEditTaskID(this.editTask).subscribe(data => {
      console.log(data)
      this.editTask = null;
    });
  }
  onSubmitFormNewTask() {
    this._httpService.postNewTask(this.newTask).subscribe(data => console.log('created: ', data));
    this.newTask = { title: "", description: "" }
  }
  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got our tasks!", data);
      this.tasks = data['data'];
      console.log(this.tasks);
  });

  }
}
```
>ng generate component component_name
`component_name.component.ts`
```typescript
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css']
})
export class ShowTaskComponent implements OnInit {
  @Input() task: any;
  constructor() { }

  ngOnInit() {
  }

}
```
## Forms
```html
<form (submit)="onSubmitFormNewTask()">
  <!-- use the json pipe to see how newTask changes in real time -->
  <p> {{ newTask | json }} </p>
  <input type="text" name="newTask.title" [(ngModel)]="newTask.title" />
  <input type="text" name="newTask.description" [(ngModel)]="newTask.description" />
  <input type="submit" value="Create Task" />
</form>
```
