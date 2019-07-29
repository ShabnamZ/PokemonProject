import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../model/pokemon';
import { Observable } from 'rxjs';

const Api_Url = 'https://pokeapi.co/docs/v2.html/#pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private _http: HttpClient) { }

  getPokemons(): Observable<Pokemon[]>{
    return this._http.get<Pokemon[]>(`${Api_Url}/Pokemon`);
  }

  getPokemon(id: string) {
    return this._http.get(`${Api_Url}/Pokemon/${id}`);
  }


}
  

  

