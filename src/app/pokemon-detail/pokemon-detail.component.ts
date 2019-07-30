
import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../model/pokemon';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  pokemon: Pokemon = {
    name: "",
    height:0,
    id:0

  };

 
  constructor(private _pokemonService: PokemonService) { }
 
  ngOnInit() {
    this.getPokeDetail();
  }

  getPokeDetail() {
this._pokemonService.getPokemon(this._pokemonService.detailId)
.subscribe(p => {
  let data: any = p;
  this.pokemon.name = data.name;
  this.pokemon.height = data.height;
  this.pokemon.id = data.id;
  console.log(this.pokemon.name);
})
  }

}
