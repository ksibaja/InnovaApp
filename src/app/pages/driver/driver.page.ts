import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { UserService } from '../../services/user.service';
import { Router, RouterEvent } from '@angular/router';
import { User, FirebaseService } from '../../services/firebase.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.page.html',
  styleUrls: ['./driver.page.scss'],
})
export class DriverPage implements OnInit {

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

  scannedCode = null;
  ubication = false;

  constructor(
    private barcodeScanner: BarcodeScanner,
    private base64ToGallery: Base64ToGallery,
    private toastCtrl: ToastController,
    public loadingController: LoadingController,
    public alertController: AlertController,
    private userService: UserService,
    private router: Router,
    private firebaseService: FirebaseService,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
  }

  scanQR() {
    this.barcodeScanner.scan().then(
      barcodeData => {
        this.loading('Cargando...', 0, 1000);
        if (barcodeData.text !== '') {
          setTimeout(() => {  // qr cuando es vacío
            this.scannedCode = barcodeData.text;

            this.firebaseService.getUsers().valueChanges().subscribe(elem => {
              elem.forEach(element => {
                // console.log(element);
                if (element.Carnet === this.scannedCode) {
                  this.user = element;
                  this.details = this.userService.validate(this.user);
                  console.log('User: ', this.user);
                }
              });
            });

            // this.firebaseService.getUser(this.scannedCode).valueChanges().subscribe(elem => {
            //  this.user = elem;

            //  this.details = this.userService.validate(this.user);
            //  console.log('User: ', this.user);
            // });

          }, 1500);
        }
      }
    );

  }

  enable() {
    if (this.user.Balance <= -2000) {
      return false;
    }
    else {
      return true;
    }
  }

  logout() {
    this.authService.isLogged = false;
    this.router.navigateByUrl('/home');
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

  async loading(msg: string, code: number, time?: number) {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: msg,
      duration: time
    });
    await loading.present();
    setTimeout(() => {
      if (code === 1) {
        this.ubication = true;
      }
      else if (code === 2) {
        this.scannedCode = null;
      }
    }, time + 500);

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  async presentAlertConfirm() {
    if (!this.ubication) {
      this.presentToast('Defina el Punto de bajada, busque la ubicación...', 'danger');
    }
    else {
      const price = this.userService.definePrice(this.user.Location);

      const alert = await this.alertController.create({
        cssClass: 'my-custom',
        header: 'Confirmar Pago',
        message: 'Lugar: <strong>' + this.user.Location + '</strong><br>Monto: <strong>'
          + price + '</strong>',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            }
          }, {
            text: 'Cobrar',
            handler: () => {
              console.log(this.user.Id, this.user.Balance - price, price);
              this.firebaseService.updateBalance(this.user.Id, this.user.Balance - price);
              console.log('Confirm Okay');

              this.presentToast('Cobro realizado exitosamente...', 'success');
              setTimeout(() => {
                this.loading('Quitando datos...', 2, 1000);
              }, 500);
            }
          }
        ]
      });
      this.loading('cargando', 0, 500);
      setTimeout(() => {
        alert.present();
      }, 1000);
    }
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}
