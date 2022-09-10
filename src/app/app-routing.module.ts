import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuardGuard } from './admin-guard.guard';

const routes: Routes = [
  { 
    path: 'admin', 
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule)
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomeModule),
    canActivate: [AdminGuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
