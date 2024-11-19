import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComanyComponent } from './comany.component';
import { ComanyDashboardComponent } from './pages/comany-dashboard/comany-dashboard.component';

const routes: Routes = [
  { path: '', component: ComanyComponent },
  { path: 'dashboard', component: ComanyDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComanyRoutingModule { }
