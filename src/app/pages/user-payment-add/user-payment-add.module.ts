import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserPaymentAddPageRoutingModule } from './user-payment-add-routing.module';

import { UserPaymentAddPage } from './user-payment-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserPaymentAddPageRoutingModule
  ],
  declarations: [UserPaymentAddPage]
})
export class UserPaymentAddPageModule {}
