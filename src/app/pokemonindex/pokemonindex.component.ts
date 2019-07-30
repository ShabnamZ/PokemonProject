import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../model/pokemon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemonindex',
  templateUrl: './pokemonindex.component.html',
  styleUrls: ['./pokemonindex.component.css']
})
export class PokemonIndexComponent implements OnInit {
  

  pokemons: any = [];
  // columnNames = ['ID', 'Name', 'Height'];  

  constructor(private _pokemonService: PokemonService, private router: Router) { }

  ngOnInit() {
    this.getPokemon(); 
  }
  getPokemon() {
    this._pokemonService.getPokemons().subscribe((poke => {
      console.log(poke);
      this.pokemons = poke.results;
      console.log(this.pokemons);
    }));
    console.log(this.pokemons);
  }

  details(url: string) {
    this._pokemonService.detailId = url;
    this.router.navigate(['/detail']);
  }
}
