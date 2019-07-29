import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonIndexComponent } from './pokemon-index/pokemon-index.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ProductPageComponent,
    PokemonDetailComponent,
    PokemonIndexComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
