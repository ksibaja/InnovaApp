import { Injectable } from '@angular/core';
import { User } from '../services/firebase.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  curentUser: User;
  isLogged = false;

  constructor() { }

  validateUser(user: any) {
    if (user.Rol === '1') {
      this.isLogged = true;
      return '/driver-menu/driver';
    } else {
      return '/user-menu/user';
    }
  }

}
