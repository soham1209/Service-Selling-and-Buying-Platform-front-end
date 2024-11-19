import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComanyRoutingModule } from './comany-routing.module';
import { ComanyComponent } from './comany.component';
import { ComanyDashboardComponent } from './pages/comany-dashboard/comany-dashboard.component';


@NgModule({
  declarations: [
    ComanyComponent,
    ComanyDashboardComponent
  ],
  imports: [
    CommonModule,
    ComanyRoutingModule
  ]
})
export class ComanyModule { }
