import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserPaymentPage } from './user-payment.page';

const routes: Routes = [
  {
    path: '',
    component: UserPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserPaymentPageRoutingModule {}
