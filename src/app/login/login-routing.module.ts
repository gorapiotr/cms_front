import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login.component';
import {BeforeLoginService} from '../_services/before-login/before-login.service';

const routes: Routes = [
    {
        path: '', component: LoginComponent, canActivate: [ BeforeLoginService ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
