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
  putEditTaskID(id){
    return this._http.put(`/tasks/${id}`, data);
  }
  postNewTask(newTask){
    console.log('created task');
    return this._http.post('/tasks', newTask);
  }
}



