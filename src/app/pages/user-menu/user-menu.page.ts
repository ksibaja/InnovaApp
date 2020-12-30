import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User, FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.page.html',
  styleUrls: ['./user-menu.page.scss'],
})
export class UserMenuPage implements OnInit {
  public appPages = [
    {
      title: 'Perfil',
      url: '/user-menu/user-profile',
      icon: 'person'
    },
    {
      title: 'Transferencia',
      url: '/user-menu/user-transfer',
      icon: 'swap-horizontal'
    },
    {
      title: 'Pago',
      url: '/user-menu/user-payment',
      icon: 'card'
    },
    {
      title: 'Ajustes',
      url: '/user-menu/user-settings',
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
    private authService: AuthService,
    private firebaseService: FirebaseService,
  ) {
    //this.authService.curentUser.subscribe(elem => {
    this.user = this.authService.curentUser;
    this.firebaseService.getUsers().valueChanges().subscribe(elem => {
      elem.forEach(element => {
        // console.log(element);
        if (element.Carnet === this.user.Carnet) {
          this.user = element;
          this.authService.curentUser = this.user;
        }
      });
    });

    console.log(this.user.Name);

    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
  }

  ngOnInit() {
  }

}
