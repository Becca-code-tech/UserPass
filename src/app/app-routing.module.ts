import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    // BekaFix4 აქ არ იყო საჭირო GUARD. გადავიტანე ადმინ მოდულის რაუტინგში.
    // path შევცვალე ცარიელზე. ანუ საიტზე შესვლისას defult page ეს იქნება
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
