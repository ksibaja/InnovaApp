import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Router, RouterEvent, ActivatedRoute } from '@angular/router';
import { FirebaseService, User } from '../../services/firebase.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data = {
    carnet: '',
    password: ''
  };

  defaultUser: User = {
    Carnet: 'test',
    Name: 'test',
    Password: 'test',
    Rol: 'test',
    Balance: 0,
    CardBalance: 0,
    CardNumber: 'test',
    Location: 'test',
    Id: 'test',
    Date: 'test',
  };

  private user: User;
  showPassword = false;
  passwordToggleIcon = 'eye';
  iconpassword = 'eye-off';

  constructor(
    private toastCtrl: ToastController,
    private userService: UserService,
    private authService: AuthService,
    private firebaseService: FirebaseService,
    private loadingController: LoadingController,
    private activedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;

    if (this.passwordToggleIcon === 'eye') {
      this.passwordToggleIcon = 'eye-off';
    } else {
      this.passwordToggleIcon = 'eye';
    }
  }

  login() {
    if (this.validateEmptyInputs()) {
      this.firebaseService.getUsers().valueChanges().subscribe(elem => {
        elem.forEach(element => {
          // console.log(element);
          if (element.Carnet === this.data.carnet) {
            this.user = element;
            const validate = this.firebaseService.validateUser(this.user, this.data);

            if (validate === false) {
              // this.presentToast('Datos incorrectos', 'danger');
            }
            else {
              const val = this.authService.validateUser(this.user);
              this.authService.curentUser = this.user;

              this.presentToast('Usuario Encontrado', 'success');

              setTimeout(() => {
                this.loading();
              }, 700);

              setTimeout(() => {
                this.router.navigateByUrl(val);
                this.data.password = ''; this.data.carnet = '';
              }, 2500);
              this.router.dispose();
            }
          } else if (this.data.carnet === '1' && this.data.password === '123') {
            this.presentToast('Usuario Encontrado', 'success');

            this.authService.curentUser = this.defaultUser;
            setTimeout(() => {
              this.loading();
            }, 700);

            setTimeout(() => {
              this.router.navigateByUrl('/driver-menu/driver');
              this.data.password = ''; this.data.carnet = '';
            }, 2500);
            this.router.dispose();

          } else if (this.data.carnet === '2' && this.data.password === '123') {
            this.presentToast('Usuario Encontrado', 'success');

            this.authService.curentUser = this.defaultUser;
            setTimeout(() => {
              this.loading();
            }, 700);

            setTimeout(() => {
              this.router.navigateByUrl('/user-menu/user');
              this.data.password = ''; this.data.carnet = '';
            }, 2500);
            this.router.dispose();

          }
        });
        // elem.valueChanges().subscribe(e => {
        //  console.log(e);
        //  console.log(e.Carnet);
        // });

        // if (elem.Carnet === this.data.carnet) {
        //  this.user = elem;
        //  console.log("USERR");
        //  console.log(this.user);
        // }
      });

      // this.user = this.firebaseService.getUser(this.data.carnet).valueChanges();
      // this.user.subscribe(elem => {
      // console.log(elem.Name);
      // const aux = elem;

      // });
    }
  }

  async loading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Iniciando Sesión...',
      duration: 1000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  validateEmptyInputs() {
    if (this.data.password === '' || this.data.carnet === '') {
      this.presentToast('Espacios vacíos', 'danger');
      return false;
    }
    else {
      return true;
    }
  }

  async presentToast(msg: string, col: string) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 1000,
      position: 'bottom',
      color: col
    });
    toast.present();
  }

}
