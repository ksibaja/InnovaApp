import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserMenuPage } from './user-menu.page';

const routes: Routes = [
  {
    path: '',
    component: UserMenuPage,
    children: [
      {
        path: 'user',
        loadChildren: () => import('../user/user.module').then( m => m.UserPageModule)
      },
      {
        path: 'user-settings',
        loadChildren: () => import('../user-settings/user-settings.module').then( m => m.UserSettingsPageModule)
      },
      {
        path: 'user-profile',
        loadChildren: () => import('../user-profile/user-profile.module').then( m => m.UserProfilePageModule)
      },
      {
        path: 'user-transfer',
        loadChildren: () => import('../user-transfer/user-transfer.module').then( m => m.UserTransferPageModule)
      },
      {
        path: 'user-payment',
        loadChildren: () => import('../user-payment/user-payment.module').then( m => m.UserPaymentPageModule)
      },
      {
        path: 'user-payment-config',
        loadChildren: () => import('../user-payment-config/user-payment-config.module').then( m => m.UserPaymentConfigPageModule)
      },
      {
        path: 'user-payment-add',
        loadChildren: () => import('../user-payment-add/user-payment-add.module').then( m => m.UserPaymentAddPageModule)
      },
      {
        path: 'user-payment-popover',
        loadChildren: () => import('../user-payment-popover/user-payment-popover.module').then( m => m.UserPaymentPopoverPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserMenuPageRoutingModule {}
