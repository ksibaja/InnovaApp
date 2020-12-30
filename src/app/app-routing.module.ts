import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'driver-menu',
    loadChildren: () => import('./pages/driver-menu/driver-menu.module').then( m => m.DriverMenuPageModule)
  },
  {
    path: 'user-menu',
    loadChildren: () => import('./pages/user-menu/user-menu.module').then( m => m.UserMenuPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
