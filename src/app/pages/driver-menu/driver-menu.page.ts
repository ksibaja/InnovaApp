import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-driver-menu',
  templateUrl: './driver-menu.page.html',
  styleUrls: ['./driver-menu.page.scss'],
})
export class DriverMenuPage implements OnInit {
  public appPages = [
    {
      title: 'Perfil',
      url: '/driver-menu/driver-profile',
      icon: 'person'
    },
    {
      title: 'Ajustes',
      url: '/driver-menu/driver-settings',
      icon: 'settings'
    }
  ];

  selectedPath = '';
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
    private router: Router,
    private authService: AuthService
  ) {
    // this.authService.curentUser.subscribe(elem => {
    this.user = this.authService.curentUser;
    // console.log(this.user.Name);
    // });
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
  }

  logout() {
    this.authService.isLogged = false;
  }

  ngOnInit() {
  }

}
