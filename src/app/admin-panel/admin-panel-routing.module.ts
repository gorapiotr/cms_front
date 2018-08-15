import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminPanelComponent} from './admin-panel.component';
import {AfterLoginService} from '../_services/after-login.service';
import {AccountModule} from './team/account/account.module';

const routes: Routes = [
    {
        path: '', component: AdminPanelComponent, canActivate: [AfterLoginService],
        children: [
        // team
        {path: 'team/account',                                  loadChildren: './team/account/account.module#AccountModule'},
        // components
        {path: 'components/carousel/:carousel_group_id',        loadChildren: './components/carousel/carousel/carousel.module#CarouselModule'},
        {path: 'components/carousel-group',                     loadChildren: './components/carousel/carousel-list/carousel-list.module#CarouselListModule' },
        // settings
        {path: 'settings',                                      loadChildren: './settings/settings.module#SettingsModule'}
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule { }
