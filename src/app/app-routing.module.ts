import { NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: 'login', loadChildren: './login/login.module#LoginModule'},
    {path: 'admin-panel', loadChildren: './admin-panel/admin-panel.module#AdminPanelModule'},
    {path: 'signup', loadChildren: './signup/signup.module#SignupModule'},
    {path: 'password', loadChildren: './password/password.module#PasswordModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
