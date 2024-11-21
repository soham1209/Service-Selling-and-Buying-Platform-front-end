import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComanyRoutingModule } from './comany-routing.module';
import { ComanyComponent } from './comany.component';
import { ComanyDashboardComponent } from './pages/comany-dashboard/comany-dashboard.component';
import { CreateAdComponent } from './pages/create-ad/create-ad.component';
import { DemoNgZorroAntdModule } from '../DemoNgZorroAntdModule';
import { ReactiveFormsModule } from '@angular/forms';
import { AllAdsComponent } from './pages/all-ads/all-ads.component';

@NgModule({
  declarations: [
    ComanyComponent,
    ComanyDashboardComponent,
    CreateAdComponent,
    AllAdsComponent
  ],
  imports: [
    CommonModule,
    ComanyRoutingModule,
    DemoNgZorroAntdModule,
    ReactiveFormsModule,

  ]
})
export class ComanyModule { }
