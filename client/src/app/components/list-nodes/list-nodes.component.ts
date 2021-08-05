import { Component, OnInit } from '@angular/core';
import { NodesService } from '../../services/nodes/nodes.service';
import { NodeModel } from '../../models/Node.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-nodes',
  templateUrl: './list-nodes.component.html',
  styleUrls: ['./list-nodes.component.css'],
})
export class ListNodesComponent implements OnInit {
  constructor(private router: Router, private nodesService: NodesService) {}
  nodes: NodeModel[] = [];
  displayedColumns: string[] = [
    'id',
    'name',
    'description',
    'createdAt',
    'action',
  ];
  title: string = 'Titulo';
  ngOnInit(): void {
    console.log(this.router.url);
    const type = this.router.url.split('/')[1];
    this.title =
      type === 'electric' ? 'Equipos eléctricos' : 'Medición de temperatura';
    this.nodesService.listNodes(type).subscribe({
      error: () => {},
      next: (response: any) => {
        this.nodes = response.result.map((item: NodeModel) => ({
          ...item,
          createdAt: new Date(item.createdAt).toLocaleString('es-CO', {
            timeZone: 'America/Bogota',
          }),
          action: item.id,
        }));
      },
    });
  }
}
