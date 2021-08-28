import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { GameFormComponent } from './components/game-form/game-form.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
//Conexión con la REST API

import { GamesService } from './services/games/games.service';
import { GameEquipComponent } from './components/game-equip/game-equip.component';
import { Piso2Component } from './components/piso2/piso2.component';
import { TemperaturaComponent } from './components/temperatura/temperatura.component';
import { Piso3Component } from './components/piso3/piso3.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ListNodesComponent } from './components/list-nodes/list-nodes.component';
import { NodesRecordsComponent } from './components/nodes-records/nodes-records.component';
import { MyLineChartComponent } from './components/my-line-chart/my-line-chart.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { RegisterComponent } from './components/register/register.component';
import { NewNodeComponent } from './components/new-node/new-node.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavigationComponent,
    GameFormComponent,
    GameListComponent,
    GameEquipComponent,
    Piso2Component,
    TemperaturaComponent,
    LoginComponent,
    PageNotFoundComponent,
    Piso3Component,
    ListNodesComponent,
    NavigationComponent,
    NodesRecordsComponent,
    MyLineChartComponent,
    MainMenuComponent,
    NewNodeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ChartsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDialogModule,
    MatTableModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatStepperModule,
  ],
  providers: [GamesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
