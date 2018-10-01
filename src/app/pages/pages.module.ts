import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {PagesComponent} from './pages.component';
import {PagesRoutingModule} from './pages-routing.module';
import {LoaderModule} from '../shared/loader/loader.module';
import {IndexPageModule} from './index-page/index-page.module';
import {CategoryPostsModule} from './components/category-posts/category-posts.module';

@NgModule({
    imports: [
        RouterModule,
        PagesRoutingModule,
        LoaderModule,
        IndexPageModule
    ],
    declarations: [PagesComponent]
})
export class PagesModule {
}
