import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminPanelComponent} from './admin-panel.component';
import {AfterLoginService} from '../_services/after-login.service';

const routes: Routes = [
    {
        path: 'admin', component: AdminPanelComponent, canActivate: [AfterLoginService],
        children: [
            {path: 'account/account', loadChildren: './account/account/account.module#AccountModule'},
            {path: 'components/carousel', loadChildren: './components/carousel/carousel.module#CarouselModule'}
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule { }
