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
  
  constructor(private _httpService: HttpService){}
  onButtonGetTasks(): void {
    console.log('button pressed')
    this._httpService.getTasks().subscribe(data => this.tasks = data['data']);
}
onButtonShowTask(id): void {
  console.log('button pressed')
  this._httpService.getTaskID(id).subscribe(data => this.showTask = data['data']);
}
  ngOnInit(){
    // this.getTasksFromService();
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
