import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { PopoverController, LoadingController, ToastController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-user-payment-popover',
  templateUrl: './user-payment-popover.page.html',
  styleUrls: ['./user-payment-popover.page.scss'],
})
export class UserPaymentPopoverPage implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router,
    private popoverController: PopoverController,
    private firebaseService: FirebaseService,
    private authService: AuthService,
    public loadingController: LoadingController,
    private toastCtrl: ToastController,
  ) { }

  ngOnInit() {
  }

  edit() {
    this.userService.edit = true;
    this.popoverController.dismiss();
  }

  delete() {
    this.authService.curentUser.CardNumber = '';
    this.firebaseService.deleteCard(this.authService.curentUser.Id);
    this.userService.edit = false;
    this.popoverController.dismiss();
    setTimeout(() => {
      this.loading('Eliminando...', 1000);
    }, 400);
    setTimeout(() => {
      this.presentToast('Tarjeta eliminada correctamente.', 'success');
      this.router.navigateByUrl('/user-menu/user-payment');
    }, 1700);

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

}
