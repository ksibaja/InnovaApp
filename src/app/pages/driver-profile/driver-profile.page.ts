import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-driver-profile',
  templateUrl: './driver-profile.page.html',
  styleUrls: ['./driver-profile.page.scss'],
})
export class DriverProfilePage implements OnInit {
  user: User = {
    Carnet: '',
    Name: '',
    Password: '',
    Rol: '',
    Balance: 0,
    CardBalance: 0,
    CardNumber: '',
    Location: '',
    Id: '',
    Date: '',
  };

  constructor(
    private authService: AuthService,
  ) {
    //authService.curentUser.subscribe(elem => {
      this.user = this.authService.curentUser;
    //});
  }

  ngOnInit() {
  }

}
