import { Component, OnInit } from '@angular/core';
import {  Tar } from 'src/app/models/Game';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-temperatura',
  templateUrl: './temperatura.component.html',
  styleUrls: ['./temperatura.component.css']
})
export class TemperaturaComponent implements OnInit {

  cuarto: any = [];
  nom_tarj: any = [];
  
 
  public valortarjeta: any = '';
  public Va_tar:Tar = {Tarjeta:''}


  constructor(private gamesService : GamesService) { }

  ngOnInit(): void {
    this.nom_tarj = this.gamesService.getTarjetas_cuartos(); 
  }


  onSelect(event:Event){  //Se captura el id de las tarjetas desde el HTML.
    this.valortarjeta= (<HTMLSelectElement>event.target).value;
    
    
    if (this.valortarjeta==='Cuarto frío fruver'){
    this.gamesService.getdispositivo(1).subscribe(
      (res:any) => {
        console.log(new Date(res[0].Fecha).toLocaleString("es-CO", { timeZone: "America/Bogota" }))
        console.log(res)
        this.cuarto = res.map((item:any)=>({...item, Fecha:new Date(item.Fecha).toLocaleString("es-CO", { timeZone: "America/Bogota" })}));
        
      },
      err => console.log(err)
      
    );
    
  
  //Mostrar la fecha actual en consola
          // (function(){
          //     var fecha = new Date();
          //     console.log(fecha);
          //   }())
      
  }
  
  if (this.valortarjeta==='Cuarto frío cárnicos'){
    this.gamesService.getdispositivo(2).subscribe(
      res => {
        this.cuarto = res;
      },
      err => console.log(err)
    );
    
  }
  
  if (this.valortarjeta==='Cuarto frío lácteos'){
    this.gamesService.getdispositivo(3).subscribe(
      res => {
        this.cuarto = res;
      },
      err => console.log(err)
    );
    
  }

  if (this.valortarjeta==='Cuarto frío productos congelados'){
    this.gamesService.getdispositivo(4).subscribe(
      res => {
        this.cuarto = res;
      },
      err => console.log(err)
    );
    
  }

  if (this.valortarjeta==='Cuarto frío producto semiterminado 1'){
    this.gamesService.getdispositivo(5).subscribe(
      res => {
        this.cuarto = res;
      },
      err => console.log(err)
      );
    
  }

  if (this.valortarjeta==='Cuarto frío producto semiterminado 2'){
      this.gamesService.getdispositivo(6).subscribe(
      res => {
        this.cuarto = res;
      },
      err => console.log(err)
      );
  }




  }

}

