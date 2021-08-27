import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    username: ['', [Validators.required]],
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    role: [null, [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {}

  register(event: Event) {
    event.preventDefault();
    console.log(this.form.value);
    if (this.form.valid) {
      const value = this.form.value;
      this.authService.createUser(value).subscribe({
        next: (response) => {
          swal
            .fire('Registro satisfactorio', 'Bien hecho', 'success')
            .then(() => this.router.navigate(['/main']));
        },
        error: (error) => {
          console.log(error)
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
