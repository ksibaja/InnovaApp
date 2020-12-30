import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserPaymentConfigPage } from './user-payment-config.page';

const routes: Routes = [
  {
    path: '',
    component: UserPaymentConfigPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserPaymentConfigPageRoutingModule {}
