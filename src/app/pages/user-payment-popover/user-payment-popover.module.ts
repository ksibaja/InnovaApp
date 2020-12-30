import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserPaymentPopoverPageRoutingModule } from './user-payment-popover-routing.module';

import { UserPaymentPopoverPage } from './user-payment-popover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserPaymentPopoverPageRoutingModule
  ],
  declarations: [UserPaymentPopoverPage]
})
export class UserPaymentPopoverPageModule {}
