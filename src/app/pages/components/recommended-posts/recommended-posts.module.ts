import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RecommendedPostsComponent} from './recommended-posts.component';
import {PostPageService} from '../../../_services/page/post/post-page.service';
import {PageLoaderModule} from '../page-loader/page-loader.module';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        PageLoaderModule,
        RouterModule
    ],
    providers: [
      PostPageService
    ],
    declarations: [RecommendedPostsComponent],
    exports: [RecommendedPostsComponent]
})
export class RecommendedPostsModule {
}
