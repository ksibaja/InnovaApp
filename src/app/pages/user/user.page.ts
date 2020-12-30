import { Component, OnInit } from '@angular/core';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { Router, RouterEvent } from '@angular/router';
import { User, FirebaseService } from '../../services/firebase.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
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

  // private userd: Observable<User[]>;

  constructor(
    private base64ToGallery: Base64ToGallery,
    private toastCtrl: ToastController,
    private authService: AuthService,
    private router: Router,
    private firebaseService: FirebaseService
  ) {
    //this.authService.curentUser.subscribe(elem => {
      this.user = this.authService.curentUser;
    //});
  }

  ngOnInit() {
  }

  logout() {
    this.router.navigateByUrl('/home');
  }

  downloadQR() {
    const canvas = document.querySelector('canvas') as HTMLCanvasElement;
    const imageData = canvas.toDataURL('image/png').toString();

    const img = document.createElement('img');
    img.src = imageData;

    console.log('data: ', imageData);

    const data = imageData.split(',')[1];

    this.base64ToGallery.base64ToGallery(data,
      {  prefix: '_img', mediaScanner: true, })
      .then(async res => {
        const toast = await this.toastCtrl.create({
          header: 'QR descagado exitosamente'
        });
        toast.present();
      }, err => console.log('err: ', err)
      );
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}
