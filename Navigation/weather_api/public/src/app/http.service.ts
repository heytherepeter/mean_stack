import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private _http: HttpClient) {
  }

  getWeather(city) {
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=1cddc5bf41869f0414cb3ed329c3a9a2`);
  }
}
