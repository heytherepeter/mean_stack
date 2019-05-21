import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Restful Task API';
  tasks = [];
  showTask;
  newTask;
  editTask;

  constructor(private _httpService: HttpService){}
  onButtonGetTasks(): void {
    console.log('button pressed')
    this._httpService.getTasks().subscribe(data => this.tasks = data['data']);
  }
  onButtonShowTask(id): void {
    this._httpService.getTaskID(id).subscribe(data => this.showTask = data['data']);
  }
  onButtonEditTask(id): void {
    console.log('button pressed')
    this._httpService.getTaskID(id, editTask).subscribe(data => {
      console.log(data)
      editTask
    });
  }
  onSubmitFormNewTask() {
    this._httpService.postNewTask(this.newTask).subscribe(data => console.log('created: ', data));
    this.newTask = { title: "", description: "" }
  }
  ngOnInit(){
    this.newTask = { title: "", description: "" }
    this.editTask = { title: "", description: "" }
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
