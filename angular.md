# Angular

What is a front end framework?
-Lives on client side in the browser
-Moves processing to client side

## Install
global install
>npm install -g @angular/cli

Build NPM first
>ng new public

create HTTP service file
>ng g s http

add to node server.js
> app.use(express.static(__dirname + '/public/dist/public'));

run the angular server
> ng build --watch

## Register Service
`app.module.ts`
> import { HttpService } from './http.service'; //add to provider

> import { HttpClientModule } from '@angular/common/http'; // add to imports

## Dependency Injection
`http.service.ts`
```typescript
import { HttpClient } from '@angular/common/http';
export class HttpService {
    constructor(private _http: HttpClient){}
}
```
`app.component.ts`
```typescript
import { HttpService } from './http.service';
export class AppComponent {
   title = 'app';
   constructor(private _httpService: HttpService){}
 }
```
## Get data from DB
`http.service.ts`
```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private _http: HttpClient) { 
    this.getTasks();
  }
  getTasks(){
    let tempObservable = this._http.get('/tasks');
    tempObservable.subscribe(data => console.log("Got our tasks!", data));
  }
  getTaskID(id){
    let tempObservable = this._http.get(`/tasks${id}`);
    tempObservable.subscribe(data => console.log("Got our task!", data));
  }  
}
```

## Dom Manipulation

Variables from `app.component.ts` in `app.component.html`
><img [src]="varNameHere" />

>{{ variableNameHere }}
```typescript
import { Component, OnInit } from '@angular/core';
     
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
     
export class AppComponent implements OnInit {
  num: number;
  randNum: number;
  str: string;
  first_name: string;
     
  ngOnInit() {
    this.num = 7;
    this.randNum = Math.floor( (Math.random()  * 2 ) + 1);
    this.str = 'Hello Angular Developer!';
    this.first_name = 'Alpha';
  }
}   
```

```html
<h3>Value of num is: {{num}}</h3>
<h3>Value of randNum is: {{randNum}}</h3>
<h3>{{str}}</h3>
<input type="text" [value]="first_name" />
```
### For Loops and If Statements
```typescript
export class AppComponent implements OnInit {
  snacks: string[];
  loggedIn: boolean;
     
  ngOnInit() {
    this.snacks = ["vanilla latte with skim milk", "brushed suede", "cookie"];
    this.loggedIn = true;
  }
}   
```
```html
<p *ngIf="loggedIn">You are logged in!</p>
<p *ngFor="let snack of snacks">{{snack}}</p>
<p *ngIf="snacks.length < 3">You need more snacks.</p>
```


>$ ng build --watch ## run the angular server

### Dependency Injection
`http.service.ts`
```typescript
import { HttpClient } from '@angular/common/http';
export class HttpService {
    constructor(private _http: HttpClient){}
}
```

`app.component.ts` 
```typescript
import { HttpService } from './http.service';
export class AppComponent {
   title = 'app';
   constructor(private _httpService: HttpService){}
 }
```
### Fetching data
`http.service.ts`
```typescript
getTasks(){
    // our http response is an Observable, store it in a variable
    let tempObservable = this._http.get('/tasks');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    tempObservable.subscribe(data => console.log("Got our tasks!", data));
 }

export class HttpService {
    constructor(private _http: HttpClient){
        this.getTasks();
    }
}
```

## Dom manipulation

> <button (click)="onButtonClickParam(5)">Click me!</button>
```typescript
  onButtonClickParam(num: Number): void {
    console.log(`Click event is working with num param: ${num}`);
    // call the service's method to post the data, but make sure the data is bundled up in an object!
    let observable = this._httpService.postToServer({'pokenum': num});
    observable.subscribe(data => console.log("Got our data!", data));
}
```

## Forms
`app.module.ts`
```typescript
...
import { FormsModule } from '@angular/forms'; // <-- import FormsModule.
@NgModule({ 
	...
	imports: [
		BrowserModule,
		FormsModule, // <-- register FormsModule with our app.
	], 
	...
}) 
export class AppModule { }
```
`app.component.html`
```html
<form (submit)="onSubmit()">
    <!-- use the json pipe to see how newTask changes in real time -->
    <p> {{ newTask | json }} </p>
    <input type="text" name="newTask.title" [(ngModel)]="newTask.title" />
    <input type="text" name="newTask.description" [(ngModel)]="newTask.description" />
    <input type="submit" value="Create Task" />
</form>
```
`app.component.ts`
```typescript
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  newTask: any;
  constructor() { } 
     
  ngOnInit() {
    this.newTask = { title: "", description: "" }
  }
     
  onSubmit() {
    // Code to send off the form data (this.newTask) to the Service
    // ...
    // Reset this.newTask to a new, clean object.
    this.newTask = { title: "", description: "" }
  }
}
```
`http.service.ts`
```typescript
addTask(newtask){
    return this._http.post('/task', newtask)
}
```

## Multiple components 
`ng generate component component_name`
```html
<div class="root">  <!-- tip: use css to place a border around your different components to better visualize them -->
    <h1>Welcome to {{ title }}!</h1>
    <app-task></app-task>     <!-- use the selector of the task component to nest it within the root component -->
</div>
```