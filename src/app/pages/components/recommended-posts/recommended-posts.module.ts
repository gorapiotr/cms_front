import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RecommendedPostsComponent} from './recommended-posts.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [RecommendedPostsComponent],
    exports: [RecommendedPostsComponent]
})
export class RecommendedPostsModule {
}
