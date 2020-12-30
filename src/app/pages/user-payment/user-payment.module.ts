import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserPaymentPageRoutingModule } from './user-payment-routing.module';

import { UserPaymentPage } from './user-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserPaymentPageRoutingModule
  ],
  declarations: [UserPaymentPage]
})
export class UserPaymentPageModule {}
