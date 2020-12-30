import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DriverMenuPageRoutingModule } from './driver-menu-routing.module';

import { DriverMenuPage } from './driver-menu.page';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DriverMenuPageRoutingModule,
    NgxQRCodeModule
  ],
  declarations: [DriverMenuPage]
})
export class DriverMenuPageModule {}
