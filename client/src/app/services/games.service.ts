import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Tar } from '../models/Game';
import { Observable } from 'rxjs';
import { stripSummaryForJitNameSuffix } from '@angular/compiler/src/aot/util';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  API_URI = environment.url;

  constructor(private http: HttpClient) {}

  getdispositivo(Tarjeta: number) {
    return this.http.get(this.API_URI + '/' + Tarjeta.toString());
  }

  //---CREACIÓN DE NOMBRE DE ATRJETAS---//

  private tarjetas_cuarto: Tar[] = [
    {
      Tarjeta: 'Cuarto frío fruver', //Nombre con el que aparecerá en el selector de equipo de la página
    },
    {
      Tarjeta: 'Cuarto frío cárnicos',
    },
    {
      Tarjeta: 'Cuarto frío lácteos',
    },
    {
      Tarjeta: 'Cuarto frío productos congelados',
    },
    {
      Tarjeta: 'Cuarto frío producto semiterminado 1',
    },
    {
      Tarjeta: 'Cuarto frío producto semiterminado 2',
    },
  ];

  getTarjetas_cuartos(): Tar[] {
    return this.tarjetas_cuarto;
  }

  //---EQUIPOS DE CONSUMO ENERGÉTICO PISO 2---//

  private tarjetas_piso2: Tar[] = [
    {
      Tarjeta: 'Laminadora hojaldres', //Nombre con el que aparecerá en el selector de equipo de la página
    },
    {
      Tarjeta: 'Ultracongenlador hojaldres',
    },
    {
      Tarjeta: 'Mojadora hojaldres',
    },
    {
      Tarjeta: 'Toma1 propósito general repostería',
    },
    {
      Tarjeta: 'Toma2 propósito general repostería',
    },
    {
      Tarjeta: 'Batidora repostería',
    },
    {
      Tarjeta: 'Toma propósito general bodega de panadería',
    },
    {
      Tarjeta: 'Horno doble procesos calientes',
    },
    {
      Tarjeta: 'Horno Rational procesos calientes',
    },
    {
      Tarjeta: 'Horno Kadell procesos calientes',
    },
    {
      Tarjeta: 'Toma propósito general procesos calientes',
    },
  ];

  getTarjetas_piso2(): Tar[] {
    return this.tarjetas_piso2;
  }

  //---EQUIPOS DE CONSUMO ENERGÉTICO PISO 3---//

  private tarjetas_piso3: Tar[] = [
    {
      Tarjeta: 'Empacadora al vacío mojes', //Nombre con el que aparecerá en el selector de equipo de la página
    },
    {
      Tarjeta: 'Batiroda mojes',
    },
    {
      Tarjeta: 'Molino mojes',
    },
    {
      Tarjeta: 'Molino empanadas',
    },
    {
      Tarjeta: 'Toma1 mezcladora empanadas',
    },
    {
      Tarjeta: 'Toma2 mezcladora empanadas',
    },
    {
      Tarjeta: 'Ultracongelador empanadas',
    },
    {
      Tarjeta: 'Maquiempanadas',
    },
    {
      Tarjeta: 'Ultracongelador cocina',
    },
    {
      Tarjeta: 'Olla1 cocina',
    },
    {
      Tarjeta: 'Olla2 cocina',
    },
    {
      Tarjeta: 'Batidora cocina',
    },
    {
      Tarjeta: 'Licuadora cocina',
    },
    {
      Tarjeta: 'Licuadora prealistamiento',
    },
  ];

  getTarjetas_piso3(): Tar[] {
    return this.tarjetas_piso3;
  }
}
