import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NodesService } from 'src/app/services/nodes/nodes.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-new-node',
  templateUrl: './new-node.component.html',
  styleUrls: ['./new-node.component.css'],
})
export class NewNodeComponent implements OnInit {
  form: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    type: [null, [Validators.required]],
  });
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private nodesService: NodesService
  ) {}

  ngOnInit(): void {}
  register(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      this.nodesService.createNode(value).subscribe({
        next: (response: any) => {
          swal
            .fire('Registro satisfactorio', 'Bien hecho', 'success')
            .then(() => this.router.navigate(['/main']));
        },
        error: (error) => {
          console.log(error);
          swal.fire(
            `Registro fallido ${error.status}`,
            'Verifica la información e intentalo de nuevo',
            'error'
          );
        },
      });
    }
  }
}
