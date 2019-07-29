import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../model/pokemon';

@Component({
  selector: 'app-pokemon-index',
  templateUrl: './pokemon-index.component.html',
  styleUrls: ['./pokemon-index.component.css']
})
export class PokemonIndexComponent implements OnInit {

  pokemons: Pokemon[];
  columnNames = ['ID', 'Name', 'Height'];  

  constructor(private _pokemonService: PokemonService) { }

  ngOnInit() {
    this._pokemonService.getPokemons().subscribe((pokemon: Pokemon[]) =>{})
  }

}
