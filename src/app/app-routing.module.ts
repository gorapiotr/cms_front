import { NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {BeforeLoginService} from './services/before-login.service';
import {AfterLoginService} from './services/after-login.service';
import {LoginComponent} from './components/admin-panel/user/login/login.component';
import {SignupComponent} from './components/admin-panel/user/signup/signup.component';
import {ProfileComponent} from './components/shared/panel/profile/profile.component';
import {RequestResetComponent} from './components/admin-panel/user/password/request-reset/request-reset.component';
import {ResponseResetComponent} from './components/admin-panel/user/password/response-reset/response-reset.component';
import {PanelComponent} from './components/shared/panel/panel.component';

const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [BeforeLoginService]
    },
    {
        path: 'signup',
        component: SignupComponent,
        canActivate: [BeforeLoginService]
    },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AfterLoginService]
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
    {
        path: 'panel',
        component: PanelComponent,
        canActivate: [AfterLoginService]

    },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
