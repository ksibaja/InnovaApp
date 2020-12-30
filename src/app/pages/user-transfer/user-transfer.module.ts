import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserTransferPageRoutingModule } from './user-transfer-routing.module';

import { UserTransferPage } from './user-transfer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserTransferPageRoutingModule
  ],
  declarations: [UserTransferPage]
})
export class UserTransferPageModule {}
