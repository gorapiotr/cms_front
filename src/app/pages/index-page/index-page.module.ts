import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IndexPageComponent} from './index-page.component';
import {BannerModule} from '../components/banner/banner.module';
import {RecommendedPostsModule} from '../components/recommended-posts/recommended-posts.module';
import {CategoryPostsModule} from '../components/category-posts/category-posts.module';
import {RightSideBarModule} from '../components/right-side-bar/right-side-bar.module';
import {FooterModule} from '../components/footer/footer.module';

@NgModule({
    imports: [
        CommonModule,
        BannerModule,
        RecommendedPostsModule,
        CategoryPostsModule,
        RightSideBarModule,
        FooterModule
    ],
    declarations: [IndexPageComponent],
    exports: [IndexPageComponent]
})
export class IndexPageModule {
}
