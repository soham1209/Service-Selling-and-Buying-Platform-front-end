import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComanyComponent } from './comany.component';
import { ComanyDashboardComponent } from './pages/comany-dashboard/comany-dashboard.component';
import { CreateAdComponent } from './pages/create-ad/create-ad.component';
import { AllAdsComponent } from './pages/all-ads/all-ads.component';

const routes: Routes = [
  { path: '', component: ComanyComponent },
  { path: 'dashboard', component: ComanyDashboardComponent },
  { path: 'ad', component: CreateAdComponent },
  { path: 'ads', component: AllAdsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComanyRoutingModule { }
