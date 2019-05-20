import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getPokemon();
  }
  getPokemon(){
    let poke = this._http.get('https://pokeapi.co/api/v2/pokemon/75/');
    poke.subscribe(pokedata => {
      console.log("Got our pokemon!", pokedata);
      let ability = this._http.get(pokedata.abilities[0].ability.url);
      ability.subscribe(data => console.log(`Theres ${data.pokemon.length} pokemon that share this ability`, data))
    });
}
}
