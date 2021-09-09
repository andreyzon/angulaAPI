import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecordModel } from 'src/app/models/Record.model';
import { NodesService } from 'src/app/services/nodes/nodes.service';

import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-nodes-records',
  templateUrl: './nodes-records.component.html',
  styleUrls: ['./nodes-records.component.css'],
})
export class NodesRecordsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private nodesService: NodesService
  ) { }
  node = {
    id: 0,
    name: 'Nombre',
    description: 'Descripción',
    createdAt: '',
    type: 'electric',
    updatedAt: '',
  };
  records: RecordModel[] = [];

  public lineChartData: ChartDataSets[] = [
    {
      data: [],
      label: 'Medida',
      yAxisID: 'y-axis-1',
    },
  ];

  public lineChartLabels: Label[] = [];

  public lineChartOptions: ChartOptions & { annotation: any } = {
    responsive: true,
    scales: {
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-1',
          position: 'left',
          gridLines: {
            color: 'rgba(255,255,255,0.8)',
          },
          ticks: {
            fontColor: '#333',
          },
        },
      ],
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno',
          },
        },
      ],
    },
  };

  public lineChartColors: Color[] = [
    {
      // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)',
    },
  ];

  public lineChartLegend = true;

  public lineChartType: ChartType = 'line';

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.node.id = Number(params.id);
    });

    this.nodesService.getNode(this.node.id).subscribe((records: any) => {
      this.node = records.result;
      console.log(this.node);
    });
    this.lineChartData[0].label =
      this.node.type === 'electric' ? 'Consumo en W' : 'Temperatura en C';
    let recordsAux: number[] = [];
    let dates: string[] = [];
    this.nodesService
      .listRecordsByNode(this.node.id)
      .subscribe((records: any) => {
        this.records = records.result.reverse().map((item: RecordModel) => {
          let record = Number(item.record);
          recordsAux.push(record);
          dates.push(
            new Date(item.createdAt).toLocaleString('es-CO', {
              timeZone: 'America/Bogota',
            })
          );
          return {
            ...item,
            record,
          };
        });
        this.lineChartData[0].data = recordsAux;
        this.lineChartLabels = dates;
      });
  }
}
