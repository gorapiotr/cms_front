import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IndexPageComponent} from './index-page.component';
import {BannerModule} from '../components/banner/banner.module';
import {RecommendedPostsModule} from '../components/recommended-posts/recommended-posts.module';
import {CategoryPostsModule} from '../components/category-posts/category-posts.module';
import {RightSideBarModule} from '../components/right-side-bar/right-side-bar.module';
import {FooterModule} from '../components/footer/footer.module';
import {UsersComponent} from '../../admin-panel/team/users/users.component';
import {RouterModule, Routes} from '@angular/router';
import {AfterLoginService} from '../../_services/after-login/after-login.service';
import {LoaderModule} from '../../shared/loader/loader.module';
import {PostsModule} from '../components/posts/posts.module';

const routes: Routes = [{
    path: '',
    component: IndexPageComponent
}];

@NgModule({
    imports: [
        CommonModule,
        CategoryPostsModule,
        RouterModule.forChild(routes),
        LoaderModule,
        BannerModule,
        RecommendedPostsModule,
        PostsModule,
        RightSideBarModule,
        FooterModule
    ],
    declarations: [IndexPageComponent],
    exports: [IndexPageComponent]
})
export class IndexPageModule {
}
