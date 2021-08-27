import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  @Input() back: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
  logout() {
    this.authService.logout();
  }
}
