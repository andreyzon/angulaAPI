import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { NodeModel } from 'src/app/models/Node.model';

@Injectable({
  providedIn: 'root',
})
export class NodesService {
  constructor(private http: HttpClient) {}
  nodes: NodeModel[] = [];

  listNodes(type: string) {
    const nodes = this.nodes.filter((item) => type === item.type);
    if (nodes.length) {
      return of({ result: nodes });
    }
    const token = sessionStorage.getItem('token');
    return this.http
      .get(`${environment.url}/nodes?type=${type}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .pipe(
        tap((response: any) => {
          this.nodes = response.result;
          return this.nodes;
        })
      );
  }

  getNode(id: number) {
    if (this.nodes.length) {
      return of({ result: this.nodes.find((item) => item.id === id) });
    }
    const token = sessionStorage.getItem('token');
    return this.http
      .get(`${environment.url}/nodes/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .pipe(
        tap((response: any) => {
          return response.result;
        })
      );
  }

  listRecordsByNode(id: number) {
    const token = sessionStorage.getItem('token');
    return this.http.get(`${environment.url}/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  createNode(node: NodeModel) {
    const token = sessionStorage.getItem('token');
    return this.http.post(
      `${environment.url}/nodes`,
      {
        name: node.name,
        description: node.description,
        type: node.type,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  }
}
