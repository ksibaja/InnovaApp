import { Component, OnInit } from '@angular/core';
import { FirebaseService, User } from 'src/app/services/firebase.service';
import { AuthService } from 'src/app/services/auth.service';
import { ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-payment-add',
  templateUrl: './user-payment-add.page.html',
  styleUrls: ['./user-payment-add.page.scss'],
})
export class UserPaymentAddPage implements OnInit {
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

  private data = {
    cardNumber: '',
    date: '',
  };

  constructor(
    private firebaseService: FirebaseService,
    private authService: AuthService,
    private toastCtrl: ToastController,
    private router: Router,
    public loadingController: LoadingController,
  ) {
    //this.authService.curentUser.subscribe(elem => {
    this.user = this.authService.curentUser;
    //});
  }

  ngOnInit() {
  }

  addPayment() {
    // console.log('Monto: ' + this.data.amount);
    // this.userToTransfer = this.userService.searchUser(this.data.carnet);

    if (this.user.CardNumber !== '') {
      console.log('Ya existe tarjeta de credito');
      this.presentToast('Ya tiene una tarjeta asignada', 'danger');
    } else {
      this.authService.curentUser.CardNumber = this.data.cardNumber;
      this.authService.curentUser.Date = this.data.date;
      this.firebaseService.updateCarNumber(this.user.Id, this.data.cardNumber, this.data.date);

      this.data.date = '';
      this.data.cardNumber = '';

      setTimeout(() => {
        this.loading('Agregando tarjeta...', 1000);
      }, 400);
      setTimeout(() => {
        this.presentToast('Tarjeta agregada correctamente.', 'success');
        this.router.navigateByUrl('/user-menu/user-payment');
      }, 1700);

      // this.router.navigateByUrl('/user-menu/user-payment');
    }
  }

  async loading(msg: string, time?: number) {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: msg,
      duration: time
    });
    await loading.present();
    setTimeout(() => {
    }, time + 500);

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }


  async presentToast(msg: string, col: string) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: 'bottom',
      color: col
    });
    toast.present();
  }

}
