import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {PokemonIndexComponent} from './pokemonindex/pokemonindex.component';


const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'home', component: HomeComponent},
  {path: 'product', component:PokemonIndexComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
