import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  city: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this._httpService.getWeather('Chicago').subscribe(arg => {
      console.log(arg)
      this.city = arg
    });
  }

}
