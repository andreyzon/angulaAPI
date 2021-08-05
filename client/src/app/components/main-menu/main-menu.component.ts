import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],
})
export class MainMenuComponent implements OnInit {
  centered = false;
  disabled = false;
  unbounded = false;
  constructor(private authService: AuthService) {}
  role = '';
  ngOnInit(): void {
    console.log(this.authService.getRole());
    this.role = this.authService.getRole();
  }
}
