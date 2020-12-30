import { Component, OnInit } from '@angular/core';
import { FirebaseService, User } from 'src/app/services/firebase.service';
import { AuthService } from 'src/app/services/auth.service';
import { ToastController, LoadingController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { UserPaymentPopoverPage } from '../user-payment-popover/user-payment-popover.page';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-payment-config',
  templateUrl: './user-payment-config.page.html',
  styleUrls: ['./user-payment-config.page.scss'],
})
export class UserPaymentConfigPage implements OnInit {
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
    private popoverController: PopoverController,
    private userService: UserService,
    private router: Router,
    public loadingController: LoadingController,
  ) {
    // this.authService.curentUser.subscribe(elem => {
    this.user = this.authService.curentUser;
    // });
    this.data.cardNumber = this.user.CardNumber;
    this.data.date = this.user.Date;
  }
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: UserPaymentPopoverPage,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true,
    });
    return await popover.present();
  }

  clear() {
    this.userService.edit = false;
  }

  updateCard() {
    // console.log('Monto: ' + this.data.amount);
    // this.userToTransfer = this.userService.searchUser(this.data.carnet);
    if (this.data.cardNumber === '' || this.data.date === '') {
      this.presentToast('Espacios vacíos', 'danger');
    } else {
      this.authService.curentUser.CardNumber = this.data.cardNumber;
      this.authService.curentUser.Date = this.data.date;
      this.firebaseService.updateCarNumber(this.user.Id, this.data.cardNumber, this.data.date);

      // this.data.date = '';
      // this.data.cardNumber = '';
      setTimeout(() => {
        this.loading('Guardando cambios...', 1000);
      }, 400);
      setTimeout(() => {
        this.presentToast('Tarjeta actualizada correctamente.', 'success');
        this.router.navigateByUrl('/user-menu/user-payment');
      }, 1700);
      this.userService.edit = false;

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

  deleteCard() {
    this.firebaseService.deleteCard(this.user.Id);
    this.presentToast('Tarjeta eliminada correctamente.', 'success');
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

  ngOnInit() {
  }

}
