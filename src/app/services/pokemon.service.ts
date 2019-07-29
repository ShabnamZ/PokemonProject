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
  

  
}
