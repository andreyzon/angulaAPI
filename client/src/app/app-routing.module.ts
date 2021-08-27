import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GameListComponent } from './components/game-list/game-list.component';
import { GameFormComponent } from './components/game-form/game-form.component';
import { GameEquipComponent } from './components/game-equip/game-equip.component';
import { Piso2Component } from './components/piso2/piso2.component';
import { Piso3Component } from './components/piso3/piso3.component';
import { TemperaturaComponent } from './components/temperatura/temperatura.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';

import { AdminGuard } from './guards/admin/admin.guard';
import { NoneGuard } from './guards/none/none.guard';
import { ListNodesComponent } from './components/list-nodes/list-nodes.component';
import { NodesRecordsComponent } from './components/nodes-records/nodes-records.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { RegisterComponent } from './components/register/register.component';
import { NewNodeComponent } from './components/new-node/new-node.component';

const routes: Routes = [
  {
    canActivate: [NoneGuard],
    path: '',
    component: LoginComponent,
  },
  {
    canActivate: [AdminGuard],
    path: 'main',
    component: MainMenuComponent,
  },
  {
    canActivate: [AdminGuard],
    path: 'temperature',
    component: ListNodesComponent,
  },
  {
    canActivate: [AdminGuard],
    path: 'electric',
    component: ListNodesComponent,
  },
  {
    canActivate: [AdminGuard],
    path: 'nodes/new',
    component: NewNodeComponent,
  },
  {
    canActivate: [AdminGuard],
    path: 'nodes/records/:id',
    component: NodesRecordsComponent,
  },
  {
    canActivate: [AdminGuard],
    path: 'users/new',
    component: RegisterComponent,
  },
  {
    canActivate: [AdminGuard],
    path: 'equipos',
    component: GameListComponent,
  },
  {
    path: 'adicionales',
    component: GameFormComponent,
  },
  {
    path: 'eléctricos',
    component: GameEquipComponent,
  },
  {
    path: 'eléc_piso2',
    component: Piso2Component,
  },
  {
    path: 'eléc_piso3',
    component: Piso3Component,
  },
  {
    path: 'cuartosfríos',
    component: TemperaturaComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
