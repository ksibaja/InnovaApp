import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DriverMenuPage } from './driver-menu.page';

const routes: Routes = [
  {
    path: '',
    component: DriverMenuPage,
    children: [
      {
        path: 'driver',
        loadChildren: () => import('../driver/driver.module').then( m => m.DriverPageModule)
      },
      {
        path: 'driver-profile',
        loadChildren: () => import('../driver-profile/driver-profile.module').then( m => m.DriverProfilePageModule)
      },
      {
        path: 'driver-settings',
        loadChildren: () => import('../driver-settings/driver-settings.module').then( m => m.DriverSettingsPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DriverMenuPageRoutingModule {}
