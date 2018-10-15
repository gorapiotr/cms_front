import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostsComponent} from './posts.component';
import {RouterModule} from '@angular/router';
import {PostPageService} from '../../../_services/page/post/post-page.service';
import {SimpleLoaderModule} from '../../../shared/simple-loader/simple-loader.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SimpleLoaderModule
    ],
    providers: [
        PostPageService
    ],
    declarations: [PostsComponent],
    exports: [PostsComponent]
})
export class PostsModule {
}
