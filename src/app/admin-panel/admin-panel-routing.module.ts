import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminPanelComponent} from './admin-panel.component';
import {AfterLoginService} from '../_services/after-login.service';

const routes: Routes = [
    {
        path: 'admin', component: AdminPanelComponent, canActivate: [AfterLoginService],
        children: [
            {path: 'account', loadChildren: './account/account.module#AccountModule'}
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule { }
