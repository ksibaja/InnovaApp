import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { User, FirebaseService } from '../../services/firebase.service';
import { Observable } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-transfer',
  templateUrl: './user-transfer.page.html',
  styleUrls: ['./user-transfer.page.scss'],
})
export class UserTransferPage implements OnInit {
  private data = {
    carnet: '',
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
  userToTransfer: User = {
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
    private userService: UserService,
    private authService: AuthService,
    private firebaseService: FirebaseService,
    private toastCtrl: ToastController,
    private router: Router,
  ) {
    //this.authService.curentUser.subscribe(elem => {
    this.user = this.authService.curentUser;
    //});
  }

  ngOnInit() {
  }

  transfer() {
    console.log('Monto: ' + this.data.amount);
    // this.userToTransfer = this.userService.searchUser(this.data.carnet);
    // this.firebaseService.getUser(this.data.carnet).valueChanges().subscribe(elem => {
    // this.userToTransfer = elem;
    // })
    this.firebaseService.getUsers().valueChanges().subscribe(elem => {
      elem.forEach(element => {
        if (element.Carnet === this.data.carnet) {
          this.userToTransfer = element;

          if (this.userToTransfer === null || this.userToTransfer === undefined) {
            console.log('Usuario no existe');
            this.presentToast('Usuario incorrecto.', 'danger');
          } else {
            if (this.data.amount > 0 && this.user.Balance > 0) {
              if (this.userToTransfer.Carnet !== this.user.Carnet) {
                this.userToTransfer.Balance = this.userToTransfer.Balance + this.data.amount;
                this.firebaseService.updateBalance(this.userToTransfer.Id, this.userToTransfer.Balance);

                this.user.Balance = this.user.Balance - this.data.amount;
                this.firebaseService.updateBalance(this.user.Id, this.user.Balance);

                this.data.carnet = '';
                this.data.amount = null;
                setTimeout(() => {
                  this.presentToast('Monto transferido correctamente a ' + this.userToTransfer.Name, 'success');
                }, 200);
                setTimeout(() => {
                  this.router.navigateByUrl('/user-menu/user');
                }, 1500);
              } else {
                // this.presentToast('No se puede tranferir a usted mismo.', 'danger');
              }
            } else {
              this.presentToast('Insuficiente saldo.', 'danger');
            }
          }
        }
      });
    });

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
