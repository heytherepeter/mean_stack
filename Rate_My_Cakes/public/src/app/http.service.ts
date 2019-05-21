import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private _http: HttpClient) {
  }
  getCakes(){
    console.log('getting all cakes')
    return this._http.get('/cakes');
  }
  getCakeID(id){
    return this._http.get(`/cakes/${id}`);
  }
  putEditCakeID(data){
    return this._http.put(`/cakes/${data._id}`, data);
  }
  postNewCake(newCake){
    console.log('created cake');
    return this._http.post('/cakes', newCake);
  }
  deleteCakeID(id){
    return this._http.delete(`/cakes/${id}`);
  }
}



