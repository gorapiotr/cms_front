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
        {path: 'components/menu',                               loadChildren: './components/menu/menu-component/menu-component.module#MenuComponentModule'},
            // settings
        {path: 'page-settings',                                 loadChildren: './settings/page-settings/page-settings.module#PageSettingsModule'},
        {path: 'admin-panel-settings',                          loadChildren: './settings/admin-panel-settings/admin-panel-settings.module#AdminPanelSettingsModule'},
        //assets
        {path: 'assets/image-filter',                           loadChildren: './assets/image-edit/image-filter/image-filter.module#ImageFilterModule'},
        //posts
        {path: 'post/post-list',                                loadChildren: './post/post-list/post-list.module#PostListModule'},
        {path: 'post/add',                                      loadChildren: './post/post-add/post-add.module#PostAddModule'},
        {path: 'post/:postId/edit',                             loadChildren: './post/post-edit/post-edit.module#PostEditModule'},
        {path: 'post/:postId/view',                             loadChildren: './post/post-view/post-view.module#PostViewModule'},
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule { }
