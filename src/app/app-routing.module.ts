import { NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BeforeLoginService} from './services/before-login.service';
import {SignupComponent} from './components/admin-panel/user/signup/signup.component';
import {RequestResetComponent} from './components/admin-panel/user/password/request-reset/request-reset.component';
import {ResponseResetComponent} from './components/admin-panel/user/password/response-reset/response-reset.component';

const routes: Routes = [
    /*{
        path: 'login',
        component: LoginComponent,
        canActivate: [BeforeLoginService]
    },*/
    {
        path: 'signup',
        component: SignupComponent,
        canActivate: [BeforeLoginService]
    },
    {
        path: 'request-password-reset',
        component: RequestResetComponent,
        canActivate: [BeforeLoginService]
    },
    {
        path: 'response-password-reset',
        component: ResponseResetComponent,
        canActivate: [BeforeLoginService]

    },
    {path: 'login', loadChildren: './login/login.module#LoginModule'},
    {path: 'admin-panel', loadChildren: './admin-panel/admin-panel.module#AdminPanelModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
