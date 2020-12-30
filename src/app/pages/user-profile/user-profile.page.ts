import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { User } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {
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
  details: any = {
    color: '',
    state: '',
    detail: ''
  };

  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {
    //this.authService.curentUser.subscribe(elem => {
      this.user = this.authService.curentUser;
      console.log(this.user.Name);

      this.details = this.userService.validate(this.user);
    //});

  }

  ngOnInit() {
  }

}
