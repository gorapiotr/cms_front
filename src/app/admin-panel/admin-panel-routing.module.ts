import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminPanelComponent} from './admin-panel.component';
import {AfterLoginService} from '../_services/after-login/after-login.service';

const routes: Routes = [
    {
        path: '', component: AdminPanelComponent, canActivate: [AfterLoginService],
        children: [
        // team
        {path: 'team/account',                                  loadChildren: './team/account/account.module#AccountModule'},
        {path: 'team/users',                                    loadChildren: './team/users/users.module#UsersModule'},
        // components
        // settings
        {path: 'settings',                                      loadChildren: './settings/settings.module#SettingsModule'},
        {path: 'assets/image-filter',                           loadChildren: './assets/image-edit/image-filter/image-filter.module#ImageFilterModule'},
        {path: 'slider',                                      loadChildren: './slider/slider.module#SliderModule'},
            //posts
        {path: 'post/post-list',                                loadChildren: './post/post-list/post-list.module#PostListModule'},
        {path: 'post/:postId/edit',                             loadChildren: './post/post-edit/post-edit.module#PostEditModule'},
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule { }
