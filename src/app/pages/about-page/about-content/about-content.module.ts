import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutContentComponent} from './about-content.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [AboutContentComponent],
    exports: [AboutContentComponent]
})
export class AboutContentModule {
}
