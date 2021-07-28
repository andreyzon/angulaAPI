import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GameListComponent } from './components/game-list/game-list.component';
import { GameFormComponent } from './components/game-form/game-form.component';
import { GameEquipComponent } from './components/game-equip/game-equip.component';
import { Piso2Component } from './components/piso2/piso2.component';
import { Piso3Component } from './components/piso3/piso3.component';
import { TemperaturaComponent } from './components/temperatura/temperatura.component';



const routes: Routes = [
  //{
    //path: '',
    //redirectTo: 'games',
    //pathMatch: 'full'
  //},
  //{
    {
      path: 'equipos',
    component: GameListComponent
  
    },
  {
    path: 'adicionales',
    component: GameFormComponent
  },
  {
    path: 'eléctricos',
    component: GameEquipComponent
  },
  {
    path: 'eléc_piso2',
    component: Piso2Component
  },
  {
    path: 'eléc_piso3',
    component: Piso3Component
  },
  {
    path: 'cuartosfríos',
    component: TemperaturaComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
