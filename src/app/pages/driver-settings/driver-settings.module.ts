import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DriverSettingsPageRoutingModule } from './driver-settings-routing.module';

import { DriverSettingsPage } from './driver-settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DriverSettingsPageRoutingModule
  ],
  declarations: [DriverSettingsPage]
})
export class DriverSettingsPageModule {}
