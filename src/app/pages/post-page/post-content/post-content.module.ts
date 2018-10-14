import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostContentComponent} from './post-content.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [PostContentComponent],
    exports: [PostContentComponent]
})
export class PostContentModule {
}
