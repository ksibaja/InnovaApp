import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserMenuPageRoutingModule } from './user-menu-routing.module';

import { UserMenuPage } from './user-menu.page';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserMenuPageRoutingModule,
    NgxQRCodeModule
  ],
  declarations: [UserMenuPage]
})
export class UserMenuPageModule {}
