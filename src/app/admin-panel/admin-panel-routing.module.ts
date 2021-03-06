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
        {path: 'components/carousel/:carousel_group_id',        loadChildren: './components/carousel/carousel/carousel.module#CarouselModule'},
        {path: 'components/carousel-group',                     loadChildren: './components/carousel/carousel-list/carousel-list.module#CarouselListModule' },
        // settings
        {path: 'settings',                                      loadChildren: './settings/settings.module#SettingsModule'},
        {path: 'assets/image-filter',                           loadChildren: './assets/image-edit/image-filter/image-filter.module#ImageFilterModule'},
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
