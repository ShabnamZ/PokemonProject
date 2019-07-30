import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../model/pokemon';

const Api_Url = 'https://pokeapi.co/api/v2/';

@Injectable()
  export class PokemonService {
constructor(private _http: HttpClient) { }

  getPokemons(): any{
    return this._http.get(`${Api_Url}pokemon`);
  }

  getPokemon(id: string) {
    return this._http.get(`${Api_Url}pokemon/${id}`);
  }


}

  


  


