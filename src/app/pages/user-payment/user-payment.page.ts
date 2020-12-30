import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User, FirebaseService } from 'src/app/services/firebase.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-user-payment',
  templateUrl: './user-payment.page.html',
  styleUrls: ['./user-payment.page.scss'],
})
export class UserPaymentPage implements OnInit {
  data = {
    amount: null
  };

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
    private firebaseService: FirebaseService,
    private toastCtrl: ToastController,
  ) {
    // this.authService.curentUser.subscribe(elem => {
    // this.user = this.authService.curentUser;
    // });
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
  }

  ngOnInit() {
  }

  addBalance() {
    if (this.user.CardBalance !== 0 && this.data.amount <= this.user.CardBalance) {
      this.user.Balance = this.user.Balance + this.data.amount;
      this.user.CardBalance = this.user.CardBalance - this.data.amount;

      this.firebaseService.updateBalance(this.user.Id, this.user.Balance);
      this.firebaseService.updateCardBalance(this.user.Id, this.user.CardBalance);

      this.data.amount = null;
      console.log(this.user);

      this.presentToast('Monto acreditado correctamente.', 'success');
    } else {
      console.log('SALDO INSUFICIENTE');
      this.presentToast('Fondos insuficientes en la tarjeta.', 'danger');
    }
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
