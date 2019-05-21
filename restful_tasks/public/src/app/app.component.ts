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
  ngOnInit(){
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
