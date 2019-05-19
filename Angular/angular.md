# Angular

What is a front end framework?
-Lives on client side in the browser
-Moves processing to client side

## Install
Build NPM first
ng new public


>$ ng build --watch ## run the angular server

## service
### Creating
>$ ng g s http 

This creates `http.service.ts`
### Registering
`app.module.ts`
```typescript
import { HttpService } from './http.service';
@NgModule({
   ...
   providers: [HttpService],
   ...
})
```
Adding HttpClient
```typescript
import { HttpClientModule } from '@angular/common/http';
@NgModule({
   ...
   imports: [
      BrowserModule,
      HttpClientModule
   ],
   ...
})
```
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
