import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserPaymentPopoverPage } from './user-payment-popover.page';

const routes: Routes = [
  {
    path: '',
    component: UserPaymentPopoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserPaymentPopoverPageRoutingModule {}
