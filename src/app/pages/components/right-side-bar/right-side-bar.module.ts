import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RightSideBarComponent} from './right-side-bar.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [RightSideBarComponent],
    exports: [RightSideBarComponent]
})
export class RightSideBarModule {
}
