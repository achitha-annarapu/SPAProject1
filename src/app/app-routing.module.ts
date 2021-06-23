import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './_helpers';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const homeModule = () => import('./home/home.module').then(x => x.HomeModule);

const routes: Routes = [
  { path: 'account', loadChildren: accountModule },
  { path: 'home', loadChildren: homeModule,canActivate:[AuthGuard] },
  { path: '**', redirectTo: '/home' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }