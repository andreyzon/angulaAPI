import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit() {}

  login(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      this.authService.login(value.email, value.password).subscribe({
        next: () => {
          this.router.navigate(['/login']);
        },
        error: () => {
          alert('Error');
        },
      });
    }
  }
}
