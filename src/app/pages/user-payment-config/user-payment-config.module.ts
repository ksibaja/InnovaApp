import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserPaymentConfigPageRoutingModule } from './user-payment-config-routing.module';

import { UserPaymentConfigPage } from './user-payment-config.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserPaymentConfigPageRoutingModule
  ],
  declarations: [UserPaymentConfigPage]
})
export class UserPaymentConfigPageModule {}
