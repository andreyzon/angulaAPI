import { Component, OnInit } from '@angular/core';

import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-game-equip',
  templateUrl: './game-equip.component.html',
  styleUrls: ['./game-equip.component.css']
})
export class GameEquipComponent implements OnInit {

  games: any = [];

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
   
    
  }
}
