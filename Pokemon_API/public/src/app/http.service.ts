import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
  }
  getPokemon(){
    let poke = this._http.get('https://pokeapi.co/api/v2/pokemon/75/');
    poke.subscribe(pokedata => {
      console.log("Got our pokemon!", pokedata);
      let ability = this._http.get(pokedata.abilities[0].ability.url);
      ability.subscribe(data => console.log(`Theres ${data.pokemon.length} pokemon that share this ability`, data))
    });
}
postToServer(num){
      // use the .post() method of HttpClient
      // num must be an object
      // provide the url of your post route - make sure this is set up in your server!
      console.log(num);
      return this._http.post('/poke', num);
  }
}
