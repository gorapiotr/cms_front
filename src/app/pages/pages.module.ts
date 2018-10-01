import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {PagesComponent} from './pages.component';
import {PagesRoutingModule} from './pages-routing.module';
import {LoaderModule} from '../shared/loader/loader.module';
import {CategoryPostsModule} from './components/category-posts/category-posts.module';
import {RightSideBarModule} from './components/right-side-bar/right-side-bar.module';
import {RecommendedPostsModule} from './components/recommended-posts/recommended-posts.module';
import {FooterModule} from './components/footer/footer.module';
import {BannerModule} from './components/banner/banner.module';

@NgModule({
    imports: [
        RouterModule,
        PagesRoutingModule
    ],
    declarations: [PagesComponent]
})
export class PagesModule {
}
