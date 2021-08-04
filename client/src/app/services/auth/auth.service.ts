import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  createUser(email: string, password: string) {
    return of({});
  }

  login(email: string, password: string) {
    return of({});
  }

  logout() {
    return of({});
  }

  hasUser() {
    return of({});
  }
}
