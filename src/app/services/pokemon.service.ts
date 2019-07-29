<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth-service';
import { HttpHeaders } from'@angular/common/http';
import {Observable } from 'rxjs/Observable';

const Api_Url = 'https://pokeapi.co/docs/v2.html/#pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private _http: HttpClient, private _authService: AuthService) { }

  getPokemons(): Observable<Pokemon[]>{
    return this._http.get<Pokemon[]>(`${Api_Url}/Pokemon`, {headers: this.getHeaders() });
  }

  }
=======

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../model/pokemon';
import { Observable } from 'rxjs';

const Api_Url = 'hhtp://pokeapi.co/doc/v2.html/#pokemon';

@Injectable({
  providedIn: 'root'
})
  constructor(private _http: HttpClient) { }

  getPokemons(): Observable<Pokemon[]>{
    return this._http.get<Pokemon[]>(`${Api_Url}/Pokemon`);
  }

  getPokemon(id: string) {
    return this._http.get(`${Api_Url}/Pokemon/${id}`);
  }


}
>>>>>>> 40783fb3e069c1afe4f991ee3092455ba8b48534
  

  


