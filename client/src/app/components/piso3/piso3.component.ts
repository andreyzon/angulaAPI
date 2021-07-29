import { Component, OnInit } from '@angular/core';
import {  Tar } from 'src/app/models/Game';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-piso3',
  templateUrl: './piso3.component.html',
  styleUrls: ['./piso3.component.css']
})
export class Piso3Component implements OnInit {

  equipo: any = [];
  nom_tarj: any = [];
  
 
  public valortarjeta: any = '';
  public Va_tar:Tar = {Tarjeta:''}


  constructor(private gamesService : GamesService) { }

  ngOnInit(): void {
    this.nom_tarj = this.gamesService.getTarjetas_piso3(); 
  }

onSelect(event:Event){  //Se captura el id de las tarjetas desde el HTML.
    this.valortarjeta= (<HTMLSelectElement>event.target).value;


if (this.valortarjeta==='Empacadora al vacío mojes'){
        this.gamesService.getdispositivo(18).subscribe(
          res => {
            this.equipo = res;
            
          },
          err => console.log(err)
          
        );}    

if (this.valortarjeta==='Batiroda mojes'){
        this.gamesService.getdispositivo(19).subscribe(
          res => {
            this.equipo = res;
            
          },
          err => console.log(err)
          
        );}

if (this.valortarjeta==='Molino mojes'){
        this.gamesService.getdispositivo(20).subscribe(
          res => {
            this.equipo = res;
            
          },
          err => console.log(err)
          
        );}

if (this.valortarjeta==='Molino empanadas'){
        this.gamesService.getdispositivo(21).subscribe(
          res => {
            this.equipo = res;
            
          },
          err => console.log(err)
          
        );}

if (this.valortarjeta==='Toma1 mezcladora empanadas'){
        this.gamesService.getdispositivo(22).subscribe(
          res => {
            this.equipo = res;
            
          },
          err => console.log(err)
          
        );}

if (this.valortarjeta==='Toma2 mezcladora empanadas'){
        this.gamesService.getdispositivo(23).subscribe(
          res => {
            this.equipo = res;
            
          },
          err => console.log(err)
          
        );}

if (this.valortarjeta==='Ultracongelador empanadas'){
        this.gamesService.getdispositivo(24).subscribe(
          res => {
            this.equipo = res;
            
          },
          err => console.log(err)
          
        );}

if (this.valortarjeta==='Maquiempanadas'){
        this.gamesService.getdispositivo(25).subscribe(
          res => {
            this.equipo = res;
            
          },
          err => console.log(err)
          
        );}

if (this.valortarjeta==='MUltracongelador cocina'){
        this.gamesService.getdispositivo(26).subscribe(
          res => {
            this.equipo = res;
            
          },
          err => console.log(err)
          
        );}

if (this.valortarjeta==='Olla1 cocina'){
        this.gamesService.getdispositivo(27).subscribe(
          res => {
            this.equipo = res;
            
          },
          err => console.log(err)
          
        );}

if (this.valortarjeta==='Olla2 cocina'){
        this.gamesService.getdispositivo(28).subscribe(
          res => {
            this.equipo = res;
            
          },
          err => console.log(err)
          
        );}

if (this.valortarjeta==='Batidora cocina'){
        this.gamesService.getdispositivo(29).subscribe(
          res => {
            this.equipo = res;
            
          },
          err => console.log(err)
          
        );}

if (this.valortarjeta==='Licuadora cocina'){
        this.gamesService.getdispositivo(30).subscribe(
          res => {
            this.equipo = res;
            
          },
          err => console.log(err)
          
        );}

if (this.valortarjeta==='Licuadora prealistamiento'){
        this.gamesService.getdispositivo(31).subscribe(
          res => {
            this.equipo = res;
            
          },
          err => console.log(err)
          
        );}

}

}
