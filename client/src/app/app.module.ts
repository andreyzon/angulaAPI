import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { GameFormComponent } from './components/game-form/game-form.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { FormsModule } from '@angular/forms';

//Conexión con la REST API

import { GamesService } from './services/games.service';
import { from } from 'rxjs';
import { GameEquipComponent } from './components/game-equip/game-equip.component';
import { Piso2Component } from './components/piso2/piso2.component';
import { TemperaturaComponent } from './components/temperatura/temperatura.component';
import { Piso3Component } from './components/piso3/piso3.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GameFormComponent,
    GameListComponent,
    GameEquipComponent,
    Piso2Component,
    TemperaturaComponent,
    Piso3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    GamesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
