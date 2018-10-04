import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutPageComponent} from './about-page.component';
import {RouterModule, Routes} from '@angular/router';
import {LoaderModule} from '../../shared/loader/loader.module';
import {RightSideBarModule} from '../components/right-side-bar/right-side-bar.module';
import {CategoryPostsModule} from '../components/category-posts/category-posts.module';
import {RecommendedPostsModule} from '../components/recommended-posts/recommended-posts.module';
import {FooterModule} from '../components/footer/footer.module';
import {BannerModule} from '../components/banner/banner.module';


const routes: Routes = [{
    path: '',
    component: AboutPageComponent
}];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        LoaderModule,
        BannerModule,
        RecommendedPostsModule,
        CategoryPostsModule,
        RightSideBarModule
    ],
    declarations: [AboutPageComponent],
    exports: [AboutPageComponent]
})
export class AboutPageModule {
}
