import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PasswordComponent} from './password.component';
import {BeforeLoginService} from '../_services/before-login.service';

const routes: Routes = [
    {
        path: 'reset', component: PasswordComponent,
        children: [
            {path: 'request-reset-password', loadChildren: './request-reset/request-reset.module#RequestResetModule'},
            {path: 'response-reset-password', loadChildren: './response-reset/response-reset.module#ResponseResetModule'}
        ], canActivate: [ BeforeLoginService ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PasswordRoutingModule { }
