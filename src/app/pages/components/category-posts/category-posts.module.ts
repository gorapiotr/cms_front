import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoryPostsComponent} from './category-posts.component';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [CategoryPostsComponent],
    exports: [CategoryPostsComponent]
})
export class CategoryPostsModule {
}
