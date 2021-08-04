import { Component, OnInit } from '@angular/core';
import {  Tar } from 'src/app/models/Game';
import { GamesService } from '../../services/games/games.service';

@Component({
  selector: 'app-piso2',
  templateUrl: './piso2.component.html',
  styleUrls: ['./piso2.component.css']
})
export class Piso2Component implements OnInit {
  
  equipo: any = [];
  nom_tarj: any = [];
  
 
  public valortarjeta: any = '';
  public Va_tar:Tar = {Tarjeta:''}


  constructor(private gamesService : GamesService) { }

  ngOnInit(): void {
    this.nom_tarj = this.gamesService.getTarjetas_piso2(); 
  }


  onSelect(event:Event){  //Se captura el id de las tarjetas desde el HTML.
    this.valortarjeta= (<HTMLSelectElement>event.target).value;
    
    
    if (this.valortarjeta==='Laminadora hojaldres'){
    this.gamesService.getdispositivo(7).subscribe(
      res => {
        this.equipo = res;
        
      },
      err => console.log(err)
      
    );
    
  
  //Mostrar la fecha actual en consola
          // (function(){
          //     var fecha = new Date();
          //     console.log(fecha);
          //   }())
      
  }
  
  if (this.valortarjeta==='Ultracongelador hojaldres'){
    this.gamesService.getdispositivo(8).subscribe(
      res => {
        this.equipo = res;
        
      },
      err => console.log(err)
      
    );}
  
  if (this.valortarjeta==='Mojadora hojaldres'){
      this.gamesService.getdispositivo(9).subscribe(
        res => {
          this.equipo = res;
          
        },
        err => console.log(err)
        
      );}  

  if (this.valortarjeta==='Toma1 propósito general repostería'){
        this.gamesService.getdispositivo(10).subscribe(
          res => {
            this.equipo = res;
            
          },
          err => console.log(err)
          
        );} 
   
  if (this.valortarjeta==='Toma2 propósito general repostería'){
        this.gamesService.getdispositivo(11).subscribe(
          res => {
            this.equipo = res;
            
          },
          err => console.log(err)
          
        );}       

  if (this.valortarjeta==='Batidora repostería'){
        this.gamesService.getdispositivo(12).subscribe(
          res => {
            this.equipo = res;
            
          },
          err => console.log(err)
          
        );} 

  if (this.valortarjeta==='Toma propósito general bodega de panadería'){
        this.gamesService.getdispositivo(13).subscribe(
          res => {
            this.equipo = res;
            
          },
          err => console.log(err)
          
        );}

  if (this.valortarjeta==='Horno doble procesos calientes'){
        this.gamesService.getdispositivo(14).subscribe(
          res => {
            this.equipo = res;
            
          },
          err => console.log(err)
          
        );}

  if (this.valortarjeta==='Horno Rational procesos calientes'){
        this.gamesService.getdispositivo(15).subscribe(
          res => {
            this.equipo = res;
            
          },
          err => console.log(err)
          
        );}

if (this.valortarjeta==='Horno Kadell procesos calientes'){
        this.gamesService.getdispositivo(16).subscribe(
          res => {
            this.equipo = res;
            
          },
          err => console.log(err)
          
        );}

if (this.valortarjeta==='Toma propósito general procesos calientes'){
        this.gamesService.getdispositivo(17).subscribe(
          res => {
            this.equipo = res;
            
          },
          err => console.log(err)
          
        );}


  }

}
 
