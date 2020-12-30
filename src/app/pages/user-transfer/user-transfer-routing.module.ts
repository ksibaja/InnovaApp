import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserTransferPage } from './user-transfer.page';

const routes: Routes = [
  {
    path: '',
    component: UserTransferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserTransferPageRoutingModule {}
