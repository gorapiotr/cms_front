import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostsComponent} from './posts.component';
import {RouterModule} from '@angular/router';
import {PostPageService} from '../../../_services/page/post/post-page.service';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {PageLoaderModule} from '../page-loader/page-loader.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        PageLoaderModule,
        NgbPaginationModule
    ],
    providers: [
        PostPageService
    ],
    declarations: [PostsComponent],
    exports: [PostsComponent]
})
export class PostsModule {
}
