import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../modules/overview/overview.module').then(m => m.OverviewModule)
  },
  {
    path: 'thanks',
    loadChildren: () => import('../modules/thanks/thanks.module').then(m => m.ThanksModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
