import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserPaymentAddPage } from './user-payment-add.page';

const routes: Routes = [
  {
    path: '',
    component: UserPaymentAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserPaymentAddPageRoutingModule {}
