import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminPanelComponent} from './admin-panel.component';
import {AfterLoginService} from '../_services/after-login.service';

const routes: Routes = [
    {
        path: '', component: AdminPanelComponent, canActivate: [AfterLoginService],
        children: [
        {path: 'account/account',                               loadChildren: './account/account/account.module#AccountModule'},
        {path: 'components/carousel/:carousel_group_id',        loadChildren: './components/carousel/carousel/carousel.module#CarouselModule'},
        {path: 'components/carousel-group',                     loadChildren: './components/carousel/carousel-list/carousel-list.module#CarouselListModule' }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule { }
