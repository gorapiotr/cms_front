import { NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', loadChildren: './pages/pages.module#PagesModule'},
    {path: 'login', loadChildren: './login/login.module#LoginModule'},
    {path: 'admin', loadChildren: './admin-panel/admin-panel.module#AdminPanelModule'},
    {path: 'signup', loadChildren: './signup/signup.module#SignupModule'},
    {path: 'reset', loadChildren: './password/password.module#PasswordModule'},
    {path: '404', loadChildren: './not-found/not-found.module#NotFoundModule'},
    {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
