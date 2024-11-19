import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupClientComponent } from './basic/component/signup-client/signup-client.component';
import { SignupCompanyComponent } from './basic/component/signup-company/signup-company.component';
import { LoginComponent } from './basic/component/login/login.component';
import { SignupComponent } from './basic/component/signup/signup.component';

const routes: Routes = [
  { path: 'register_client', component: SignupClientComponent },
  { path: 'register_company', component: SignupCompanyComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignupComponent },
  { path: 'company', loadChildren: () => import('./comany/comany.module').then(m => m.ComanyModule) },
  { path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
